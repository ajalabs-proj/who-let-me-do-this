import { Section } from "./Section";

const rows: [string, string, string, string][] = [
  [
    "Base material",
    "Polyvinyl chloride or modacrylic polymer",
    "Raw cellulosic plant fiber",
    "Bio-derived polymer, selected for biocompatibility",
  ],
  ["Designed for skin contact", "No", "No", "Yes"],
  [
    "Active ingredient delivery",
    "None",
    "None",
    "Controlled responsive release",
  ],
  [
    "Scalp barrier support",
    "Degrades barrier over time",
    "Neutral to mildly irritating",
    "Actively supports barrier integrity",
  ],
  [
    "ACV soak required",
    "Common practice (partial surface strip only)",
    "Sometimes recommended",
    "Not required",
  ],
  [
    "Clinical testing",
    "Typically none. Recent category entrants may conduct a basic hRIPT only — a short-duration patch test that does not measure wear-over-time chemistry or scalp biology.",
    "Typically none.",
    "Pre-trial hRIPT (58 participants, zero adverse events) plus Phase 1 efficacy trial measuring scalp biology under wear conditions: transepidermal water loss (TEWL), inflammatory biomarkers, and self-reported comfort, against a PVC comparator.",
  ],
  [
    "Tensile and knot performance",
    "Adequate",
    "Often poor (brittle, breaks at knots)",
    "Engineered to approximate human hair",
  ],
  [
    "Regulatory status",
    "No GRAS listing for dermal contact",
    "Varies",
    "FDA GRAS-listed materials",
  ],
];

export function HowItWorks() {
  return (
    <Section num="02" eyebrow="The system" id="how" bg="bg-bone">
      <h2 className="font-head h-section max-w-[22ch]">
        System, not coating
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-10">
        <div className="space-y-5">
          <div className="eyebrow">Integrated</div>
          <p>
            Nourie is not fiber plus a topical layer. It is a single integrated
            system: a biopolymer-based fiber core paired with a proprietary
            functional coating that delivers active ingredients through
            controlled, responsive release.
          </p>
        </div>
        <div className="space-y-5">
          <div className="eyebrow">Responsive</div>
          <p>
            The system responds to real-world wear conditions. When the scalp
            environment shifts (heat, pH, friction, dryness), the coating
            adapts. It releases humectants, barrier-supporting compounds, and
            microbiome-aligned actives in response to need, not on a fixed
            schedule.
          </p>
        </div>
        <div className="space-y-5">
          <div className="eyebrow">Engineered</div>
          <p>
            The fiber core approximates the physical properties of human hair
            (diameter, tensile strength, knotability, washability) while
            embedding biological function that human hair and commodity
            synthetics cannot provide.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <div className="eyebrow mb-4">Comparative properties</div>
        <div className="table-wrap">
          <table className="spec">
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">PVC / Modacrylic (industry standard)</th>
                <th scope="col">Plant-based fiber (banana, etc.)</th>
                <th scope="col" className="nourie">Nourie™</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td className="nourie">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
