import { Section } from "./Section";

type Item = { label: string; body: string };
const clinical: Item[] = [
  {
    label: "TRIAL 01",
    body: "Pre-trial hRIPT. IRB-approved. 58 participants. Zero adverse events.",
  },
  {
    label: "TRIAL 02",
    body: "Phase 1 efficacy trial for scalp health impact. Statistically significant correlation between comfort and TEWL biology on Nourie, with no corresponding correlation on the PVC comparator.",
  },
];
const ip: Item[] = [
  { label: "PATENT", body: "U.S. patent pending." },
  { label: "MARK", body: "Nourie™." },
];
const traction: Item[] = [
  {
    label: "PARTNERSHIP",
    body: "Active commercial partnership with a major fiber manufacturer. Details under NDA.",
  },
  {
    label: "DISTRIBUTION",
    body: "Wholesale through Ultra Standard Distributors.",
  },
  { label: "PIPELINE", body: "Brand partnership pipeline in development." },
];

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="text-[15px] space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4">
          <span className="font-mono text-[11px] text-mute w-[90px] shrink-0 pt-[4px] tracking-[0.08em]">
            {it.label}
          </span>
          <span>{it.body}</span>
        </li>
      ))}
    </ul>
  );
}

export function Investors() {
  return (
    <Section num="06" eyebrow="For investors" id="investors">
      <h2 className="font-head h-section">Platform, not brand</h2>

      <div className="mt-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 space-y-6">
          <p>
            Aja Labs is a functional fiber laboratory and B2B manufacturing
            platform. We design, manufacture, and clinically test Nourie, a
            fiber system for protective styling. Our commercial model supplies
            fiber technology to brands and professionals rather than competing
            with them at the consumer level.
          </p>
          <p className="pt-8 border-t border-rule text-ink/70 text-[14px] max-w-[50ch]">
            For diligence materials or to discuss the company, contact us
            below.
          </p>
        </div>

        <div className="md:col-span-5 space-y-8">
          <div>
            <div className="eyebrow mb-3">Clinical validation</div>
            <ItemList items={clinical} />
          </div>
          <div>
            <div className="eyebrow mb-3">IP</div>
            <ItemList items={ip} />
          </div>
          <div>
            <div className="eyebrow mb-3">Commercial traction</div>
            <ItemList items={traction} />
          </div>
        </div>
      </div>
    </Section>
  );
}
