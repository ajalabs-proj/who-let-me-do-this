import { Section } from "./Section";

export function Evidence() {
  return (
    <Section num="03" eyebrow="Evidence" id="evidence">
      <h2 className="font-head h-section max-w-[24ch]">
        We are not just talking about scalp health. We are testing for it.
      </h2>
      <p className="mt-8 max-w-[62ch] text-[17px] text-ink/85">
        The synthetic braiding hair industry has operated for decades without
        meaningful clinical evidence. Nourie is the first fiber system in this
        category put through structured human trials for both safety and
        efficacy on the scalp. Two trials, back to back, designed to answer two
        separate questions.
      </p>

      <div className="mt-10 md:mt-12 border-l-2 border-accent pl-6 md:pl-8 py-4 max-w-[68ch]">
        <div className="eyebrow mb-3">A note on &ldquo;clinically tested&rdquo;</div>
        <p className="text-[16px] text-ink/90">
          &ldquo;Clinically tested&rdquo; is becoming a checkbox in this
          category. In practice, it most often means a single short-duration
          hRIPT: a patch test that establishes whether a material provokes an
          immediate skin reaction under occlusion. That is a floor, not a
          ceiling. It does not measure what happens to the polymer surface over
          weeks of wear, it does not quantify chemical migration as
          plasticizers and coatings break down under heat and sweat, and it
          does not measure scalp biology at all.
        </p>
        <p className="text-[16px] text-ink/90 mt-4">
          Nourie is tested at both levels. A pre-trial hRIPT to establish
          dermal safety, and a Phase 1 efficacy trial that instruments scalp
          biology under wear: transepidermal water loss as a barrier endpoint,
          inflammatory biomarkers as an immune endpoint, and self-reported
          comfort as the paired subjective signal. Different questions,
          different methods, all answered on the record.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 border-t border-ink/80">
        <div className="py-10 md:py-12 md:pr-12 md:border-r border-rule border-b md:border-b-0">
          <div className="flex items-baseline justify-between mb-6">
            <div className="sec-num">Trial 01</div>
            <div className="font-mono text-[11px] text-mute tracking-[0.08em]">
              IRB-APPROVED
            </div>
          </div>
          <div className="eyebrow mb-2">Pre-trial hRIPT</div>
          <h3 className="font-head text-[28px] md:text-[34px] leading-[1.1] max-w-[22ch]">
            Does prolonged contact with Nourie irritate the skin?
          </h3>
          <p className="mt-6 text-[16px] text-ink/85">
            A Human Repeat Insult Patch Test is the standard clinical method
            for establishing whether a material is safe for prolonged dermal
            contact. Participants wore patches of Nourie fiber under occlusion
            across multiple induction and challenge cycles.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-rule">
            <div>
              <div className="font-head text-[36px] md:text-[44px] leading-none">58</div>
              <div className="eyebrow mt-2">Participants</div>
            </div>
            <div>
              <div className="font-head text-[36px] md:text-[44px] leading-none text-accent">0</div>
              <div className="eyebrow mt-2">Adverse events</div>
            </div>
            <div>
              <div className="font-head text-[36px] md:text-[44px] leading-none">IRB</div>
              <div className="eyebrow mt-2">Oversight</div>
            </div>
          </div>
          <p className="mt-6 text-[14px] text-ink/70">
            Result: Nourie cleared the dermal safety threshold that PVC-based
            fiber has never been formally required to pass.
          </p>
        </div>

        <div className="py-10 md:py-12 md:px-12 md:border-r border-rule border-b md:border-b-0">
          <div className="flex items-baseline justify-between mb-6">
            <div className="sec-num">Trial 02</div>
            <div className="font-mono text-[11px] text-mute tracking-[0.08em]">
              PHASE 1
            </div>
          </div>
          <div className="eyebrow mb-2">Phase 1 efficacy trial</div>
          <h3 className="font-head text-[28px] md:text-[34px] leading-[1.1] max-w-[22ch]">
            Does Nourie actually support scalp health during wear?
          </h3>
          <p className="mt-6 text-[16px] text-ink/85">
            Safety is the floor. Efficacy is the question. A Phase 1 trial
            measures whether the fiber produces a measurable scalp health
            impact under real wear conditions, using instrumented biology
            endpoints rather than self-report alone.
          </p>
          <div className="mt-8 pt-6 border-t border-rule space-y-3">
            <div className="flex items-baseline gap-4">
              <div className="eyebrow w-[120px] shrink-0">Barrier</div>
              <div className="font-head text-[22px] md:text-[26px] leading-tight">
                Transepidermal water loss
              </div>
            </div>
            <div className="flex items-baseline gap-4">
              <div className="eyebrow w-[120px] shrink-0">Immune</div>
              <div className="font-head text-[22px] md:text-[26px] leading-tight">
                Inflammatory biomarkers
              </div>
            </div>
            <div className="flex items-baseline gap-4">
              <div className="eyebrow w-[120px] shrink-0">Subjective</div>
              <div className="font-head text-[22px] md:text-[26px] leading-tight">
                Self-reported comfort
              </div>
            </div>
            <div className="flex items-baseline gap-4">
              <div className="eyebrow w-[120px] shrink-0">Comparator</div>
              <div className="font-head text-[22px] md:text-[26px] leading-tight text-accent">
                PVC-based fiber
              </div>
            </div>
          </div>
          <p className="mt-6 text-[14px] text-ink/70">
            Preliminary result: statistically significant correlation between
            comfort and TEWL on Nourie, with no corresponding correlation on
            the PVC comparator. Inflammatory biomarker data complements the
            barrier and subjective signals.
          </p>
        </div>

        {/* Trial 3 — placeholder */}
        <div className="py-10 md:py-12 md:pl-12 md:border-l border-rule">
          <div className="flex items-baseline justify-between mb-6">
            <div className="sec-num">Trial 03</div>
            <div className="font-mono text-[11px] text-mute tracking-[0.08em]">
              ON THE HORIZON
            </div>
          </div>
          <div className="eyebrow mb-2">Phase 2 efficacy trial</div>
          <h3 className="font-head text-[28px] md:text-[34px] leading-[1.1] max-w-[22ch]">
            IRB-approved Phase 2 efficacy trial in development.
          </h3>
          <p className="mt-6 text-[16px] text-ink/85">
            Details when ready.
          </p>
        </div>
      </div>

      <p className="mt-16 max-w-[62ch] text-[17px] text-ink pt-8 border-t border-rule">
        Two trials. One for safety. One for scalp health impact. This is the
        evidence base behind every claim on this page, and the reason we can
        speak to brands, consumers, and investors in the same technical
        language.
      </p>
    </Section>
  );
}
