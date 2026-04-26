import { Section } from "./Section";

const rows: [string, string, string, string][] = [
  [
    "Base material",
    "Bio-derived polymer, selected for biocompatibility",
    "Polyvinyl chloride or modacrylic polymer",
    "Processed cellulosic plant fiber",
  ],
  [
    "Manufacturing oversight",
    "Made in the USA. Team on site. Key steps in FDA GMP-registered facilities.",
    "Imported.",
    "Imported.",
  ],
  [
    "Designed for skin contact",
    "Yes. Originally developed for prolonged scalp contact.",
    "No. Originally developed for plumbing and industrial textiles.",
    "No. Originally developed for rope and woven textiles.",
  ],
  [
    "Active ingredient delivery",
    "Controlled responsive release",
    "None",
    "None",
  ],
  [
    "Scalp barrier support",
    "Actively supports barrier integrity",
    "Degrades barrier over time",
    "Neutral to mildly irritating",
  ],
  [
    "ACV soak required",
    "Not required",
    "Common practice (partial surface strip only)",
    "Sometimes recommended",
  ],
  [
    "Clinical testing",
    "Pre-trial hRIPT (58 participants, zero adverse events) plus Phase 1 efficacy trial measuring scalp biology under wear conditions: transepidermal water loss (TEWL), inflammatory biomarkers, and self-reported comfort, against a PVC comparator.",
    "Typically none. Recent category entrants may conduct a basic hRIPT only — a short-duration patch test that does not measure wear-over-time chemistry or scalp biology.",
    "Typically none.",
  ],
  [
    "Tensile and knot performance",
    "Engineered to approximate human hair",
    "Adequate",
    "Often poor (brittle, breaks at knots)",
  ],
  [
    "Regulatory status",
    "FDA GRAS-listed materials",
    "No GRAS listing for dermal contact",
    "Varies",
  ],
];

export function HowItWorks() {
  return (
    <Section num="02" eyebrow="The system" id="how" bg="bg-bone">
      <h2 className="font-head h-section max-w-[22ch]">
        Built to deliver, not to leach
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-10">
        <div className="space-y-5">
          <div className="eyebrow">Integrated</div>
          <p>
            The braiding hair on the market today is a contradiction. Wearers
            reach for it to protect their hair and care for their scalp. The
            material itself does the opposite. It irritates. It leaches. It is
            engineered for cost, not for the body. Nourie™ is engineered for the
            body. Every strand is built to do two things at once: behave like
            hair, and deliver active ingredients to the scalp underneath it.
            The nourishment is not coated onto the fiber. It is part of how
            the fiber was designed.
          </p>
        </div>
        <div className="space-y-5">
          <div className="eyebrow">Responsive</div>
          <p>
            Nourie™ responds to real-world wear conditions. When the scalp
            environment shifts, whether heat, pH, friction, or dryness, the
            fiber&rsquo;s surface adapts. It releases humectants,
            barrier-supporting compounds, and microbiome-aligned actives in
            response to need, not on a fixed schedule.
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
                <th scope="col" className="nourie">Nourie™</th>
                <th scope="col">PVC / Modacrylic (industry standard)</th>
                <th scope="col">Plant-based fiber (banana, etc.)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td className="nourie">{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
