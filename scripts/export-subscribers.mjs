// Pulls the current newsletter list from the Resend audience and writes a
// Substack-ready CSV to the Desktop, then reveals it in Finder.
//
// Run with:  npm run sync-subscribers
// (reads RESEND_API_KEY and RESEND_AUDIENCE_ID from .env)

import { writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { execFile } from "node:child_process";

const API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const SUBSTACK_URL = "https://thenouriefiles.substack.com";
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
console.log("Now upload it in Substack:");
console.log("  1. Open Substack → Dashboard icon → Subscribers");
console.log("  2. All subscribers → Add subscribers → Add subscribers by upload");
console.log("  3. Drop in the file Finder just revealed");
console.log("  4. Map email→email, first_name→name; tick opt-in; pick Free; confirm\n");

// Reveal the CSV in Finder and open Substack so the upload is one drag away.
execFile("open", ["-R", OUT_PATH]);
execFile("open", [SUBSTACK_URL]);
