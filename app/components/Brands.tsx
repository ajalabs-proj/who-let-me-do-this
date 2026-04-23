import { Section } from "./Section";
import { Arrow } from "./Arrow";

export function Brands() {
  return (
    <Section num="04" eyebrow="For brands" id="brands">
      <h2 className="font-head h-section max-w-[22ch]">
        For brands building the next generation of protective styling
      </h2>

      <div className="mt-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8 space-y-6">
          <p>
            Nourie is a platform technology, not a competing brand. We sit
            upstream of consumer brands. We supply the fiber system. You own
            the consumer relationship, the storytelling, and the distribution.
          </p>
          <p className="font-head italic text-[28px] md:text-[34px] leading-tight text-ink py-4 border-t border-b border-ink/80 inline-block pr-6 pl-0">
            Think Lycra, not Lululemon. Gore-Tex, not Patagonia.
          </p>
          <p>
            What the partnership includes: proprietary fiber technology,
            clinical and claims frameworks, custom formulations aligned to
            your brand positioning, and manufacturing infrastructure.
          </p>
          <p>
            The strongest version of this model: active ingredients that your
            brand already delivers in gels, shampoos, or conditioners can be
            brought onto the surface of a braiding fiber. Your existing
            ingredient story becomes a new delivery mechanism and a new
            revenue-bearing product line.
          </p>
        </div>

        <aside className="md:col-span-4 md:pl-8 md:border-l border-rule">
          <div className="eyebrow mb-4">Cross-substrate validation</div>
          <p className="text-[15px] text-ink/85">
            The Nourie coating system has been tested across multiple fiber
            substrates, including commodity synthetics. This validates the
            platform&rsquo;s ability to function independent of its own fiber
            core and broadens the set of partners it can work with.
          </p>
          <div className="mt-6 font-mono text-[11px] text-mute tracking-[0.08em] space-y-1">
            <div>SCOPE · COATING ON THIRD-PARTY FIBER</div>
            <div>STUDY · MOISTURIZATION EFFICACY</div>
            <div>STATUS · IN PROGRESS</div>
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <a href="#contact" className="link-q inline-flex items-center gap-2">
          Discuss a partnership <Arrow />
        </a>
      </div>
    </Section>
  );
}
