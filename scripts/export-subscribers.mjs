// Pulls the current newsletter list from the Resend audience and writes a
// Substack-ready CSV to the Desktop, then reveals it in Finder.
//
// Run with:  npm run sync-subscribers
// (reads RESEND_API_KEY and RESEND_AUDIENCE_ID from .env)

import { writeFileSync, unlinkSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { createInterface } from "node:readline";

const API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const SUBSTACK_SUBSCRIBERS_URL =
  "https://thenouriefiles.substack.com/publish/subscribers";
const OUT_PATH = join(homedir(), "Desktop", "nourie-subscribers.csv");

function fail(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

if (!API_KEY) fail("RESEND_API_KEY is missing from .env");
if (!AUDIENCE_ID) fail("RESEND_AUDIENCE_ID is missing from .env");

function csvField(value) {
  const s = String(value ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const res = await fetch(
  `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
  { headers: { Authorization: `Bearer ${API_KEY}` } },
);

if (!res.ok) {
  fail(`Resend API error (HTTP ${res.status}). Check your key and audience ID.`);
}

const body = await res.json();
const contacts = (body.data ?? []).filter(
  (c) => c.email && c.unsubscribed !== true,
);

if (contacts.length === 0) {
  console.log("\nNo subscribers in the audience yet — nothing to export.\n");
  process.exit(0);
}

const rows = [
  "email,first_name",
  ...contacts.map((c) => `${csvField(c.email)},${csvField(c.first_name)}`),
];
writeFileSync(OUT_PATH, rows.join("\n") + "\n");

console.log(`\n✓ Wrote ${contacts.length} subscriber(s) to:\n  ${OUT_PATH}\n`);
console.log("Substack is opening on the Subscribers page. To finish:");
console.log("  1. Click Add subscribers → Add subscribers by upload");
console.log("  2. Drop in the file Finder just revealed");
console.log("  3. Map email→email, first_name→name; tick opt-in; pick Free; confirm\n");

// Reveal the CSV in Finder and open Substack's Subscribers page directly,
// so the upload is one drag away with no dashboard navigation.
execFile("open", ["-R", OUT_PATH]);
execFile("open", [SUBSTACK_SUBSCRIBERS_URL]);

// After the upload, delete the CSV so it never lingers on the Desktop.
// The script can't see the browser drag, so we wait for a keypress. When run
// non-interactively (no terminal), skip the wait and leave the file.
if (process.stdin.isTTY) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  await new Promise((resolve) =>
    rl.question(
      "Dragged it into Substack? Press Enter to delete the CSV from your Desktop… ",
      resolve,
    ),
  );
  rl.close();
  try {
    unlinkSync(OUT_PATH);
    console.log("\n✓ Deleted the CSV — your Desktop is clean.\n");
  } catch {
    console.log("\n(The CSV was already gone.)\n");
  }
} else {
  console.log("(Tip: run by double-clicking the Desktop shortcut to be prompted to auto-delete the file after upload.)");
}
