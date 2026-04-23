import { Section } from "./Section";

const qa: { q: string; a: string[] }[] = [
  {
    q: "Why does braiding hair itch?",
    a: [
      "Most braiding hair is made from a plastic called PVC. Plastic was never meant to sit against your skin for weeks. Under heat and sweat, tiny chemicals from the plastic come off onto your scalp. Your scalp reacts. That is the itch.",
      "It is not sensitive skin. It is the material.",
    ],
  },
  {
    q: "Does soaking hair in apple cider vinegar actually help?",
    a: [
      "A little, and only at first. ACV rinses off some of the chemical residue on the surface. Day one feels better.",
      "But the hair is still made of plastic. By week two, the same stuff is coming off onto your scalp again. A rinse does not change the material.",
    ],
  },
  {
    q: "Wait, my hair is made of plastic?",
    a: [
      "Yes. Most synthetic braiding hair is modacrylic fiber, which is in the PVC family. Kanekalon is one common brand name. It was originally made for things like industrial textiles, not for hair that sits on your scalp for weeks.",
      "Nobody told us. That is part of the problem we are fixing.",
    ],
  },
  {
    q: "Isn’t everyone saying their hair is “clinically tested” now?",
    a: [
      "The phrase is getting used a lot, and it does not always mean much. Usually it means one quick skin patch test. That is the bare minimum. It does not tell you what happens after two weeks of wear. It does not tell you what the material is doing to your scalp underneath.",
      "We ran two trials. One to check that Nourie is safe against skin. One to actually measure what happens on your scalp while you wear it: moisture, inflammation, comfort. Not just a patch. Real wear.",
    ],
  },
  {
    q: "So how is Nourie different?",
    a: [
      "Nourie is not plastic. It is a new fiber made from plant-based materials, designed from the start to sit on your scalp.",
      "Instead of leaking chemicals into your scalp, it does the opposite: it releases good things back (moisture and ingredients that protect your scalp) when your scalp needs them.",
      "In our trials, people who wore Nourie felt more comfortable, and their scalps actually measured healthier than people wearing regular PVC hair.",
    ],
  },
  {
    q: "What about banana hair and other plant-based options?",
    a: [
      "They skip the plastic, which is good. But raw plant fibers tend to be brittle. They snap at the knots, frizz in humidity, and do not hold up to washing.",
      "Nourie is built to do both: be safe for your scalp and actually behave like hair you can braid, wash, and live in for weeks.",
    ],
  },
];

export function Wearers() {
  return (
    <Section num="05" eyebrow="For wearers" id="wearers" bg="bg-bone">
      <h2 className="font-head h-section max-w-[20ch]">
        What&rsquo;s actually on your scalp.
      </h2>
      <p className="mt-6 max-w-[58ch] text-[18px] text-ink/80">
        Plain answers to the questions people usually have to dig for. No
        jargon. No lab-speak.
      </p>

      <div className="mt-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-12 divide-y divide-rule">
          {qa.map((item, i) => (
            <div
              key={i}
              className="py-10 first:pt-0 grid md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-1 sec-num">Q.0{i + 1}</div>
              <h3 className="md:col-span-5 font-head text-[26px] md:text-[32px] leading-[1.15]">
                {item.q}
              </h3>
              <div className="md:col-span-6 space-y-4 text-[17px] text-ink/85">
                {item.a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
