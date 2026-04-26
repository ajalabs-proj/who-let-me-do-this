import { Section } from "./Section";

export function Problem() {
  return (
    <Section num="01" eyebrow="Shared context" id="problem">
      <h2 className="font-head h-section max-w-[20ch]">The material problem</h2>
      <div className="mt-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8 space-y-6 text-[17px]">
          <p>
            Synthetic braiding hair sits against the scalp for weeks at a time.
            Most of it is made from PVC-based modacrylic fiber, a material never
            designed for prolonged dermal contact. Under real-world wear
            conditions (heat, sweat, friction, UV exposure), PVC surfaces
            release plasticizers and chloride compounds that degrade the scalp
            barrier over time.
          </p>
          <p>
            The industry response has been to normalize the irritation.
            Consumers are told to soak hair in apple cider vinegar before
            installation. ACV (acetic acid, roughly pH 2.5 to 3.5) partially
            strips alkaline surface coatings and plasticizer residue, which
            reduces immediate irritation on contact. But it does not change the
            base polymer. The fiber is still PVC. The contact chemistry over
            weeks of wear is unchanged. A rinse is not a redesign.
          </p>
          <p>
            In February 2025 and again in February 2026, Consumer Reports tested
            synthetic braiding hair products and found 39 of 40 synthetic
            samples positive for harmful substances. Human braiding hair was the
            single most contaminated product category tested.
          </p>
          <p className="pt-2 border-t border-rule text-ink">
            Nourie™ starts from a different premise: the contact window that has
            been transferring contaminants can instead deliver chosen
            ingredients.
          </p>
        </div>
        <aside className="md:col-span-4 md:pl-8 md:border-l border-rule">
          <div className="eyebrow mb-4">Referenced</div>
          <ul className="space-y-4 text-[14px] text-ink/80">
            <li>
              <div className="font-mono text-[11px] text-mute tracking-[0.08em]">
                CR · FEB 2025 &amp; FEB 2026
              </div>
              <div className="mt-1">
                Consumer Reports synthetic braiding hair testing, 39/40 positive
                for harmful substances.
              </div>
            </li>
            <li>
              <div className="font-mono text-[11px] text-mute tracking-[0.08em]">
                PH 2.5 – 3.5
              </div>
              <div className="mt-1">
                Apple cider vinegar pretreatment, commonly recommended surface
                strip.
              </div>
            </li>
            <li>
              <div className="font-mono text-[11px] text-mute tracking-[0.08em]">
                MATERIAL CLASS
              </div>
              <div className="mt-1">
                PVC-based modacrylic fiber, including common industry variants.
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </Section>
  );
}
