import { Section } from "./Section";
import { Arrow } from "./Arrow";

/* ---------- BRANDS ---------- */
export function Brands() {
  return (
    <Section num="04" eyebrow="For brands" id="brands">
      <h2 className="font-head h-section max-w-[22ch]">
        For hair-care brands ready to extend their ingredient story onto the
        scalp
      </h2>

      <div className="mt-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8 space-y-6">
          <p>
            Shampoos, serums, braid gels, and braid sprays deliver ingredients
            to the scalp for seconds to minutes. Then they rinse, evaporate,
            or wear off. Braiding hair sits against the scalp for weeks. It is
            the longest-contact surface in the entire protective-style
            routine, and until now, no one has used it as a delivery system.
          </p>
          <p className="font-head italic text-[28px] md:text-[34px] leading-tight text-ink py-4 border-t border-b border-ink/80 inline-block pr-6 pl-0">
            We are Matrixyl. You get to be the brand on the package.
          </p>
          <p>
            Nourie is a platform technology, not a competing brand. We sit
            upstream of the consumer brands wearers already trust. You own
            the identity, the community, and the storytelling. We supply the
            fiber system that makes a new product line possible.
          </p>
          <p>
            The model: take the active ingredients you have already built
            equity around, in your shampoos, conditioners, serums, gels, and
            sprays, and we embed them onto the surface of our fiber. Your
            ingredient story becomes a new SKU in your lineup. A braiding
            hair that delivers your formulation, continuously, for the full
            duration of the install. Your brand on the front. Nourie in the
            ingredients. Same trust, longer contact window, new revenue line.
          </p>
        </div>

        <aside className="md:col-span-4 md:pl-8 md:border-l border-rule">
          <div className="eyebrow mb-4">Who this is for</div>
          <p className="text-[15px] text-ink/85">
            Hair-care brands with an established wet-care lineup, shampoos,
            conditioners, serums, braid gels, braid sprays, and a community
            that already trusts the formulations inside them. We extend that
            ingredient story from a few minutes of rinse-off contact into
            weeks of continuous wear.
          </p>
          <div className="mt-6 font-mono text-[11px] text-mute tracking-[0.08em] space-y-1">
            <div>MODEL · INGREDIENT PARTNERSHIP</div>
            <div>OUTPUT · YOUR SKU, OUR FIBER SYSTEM INSIDE</div>
            <div>PRESS · NOURIE FEATURED IN 19 PUBLICATIONS</div>
            <div>STATUS · TAKING PARTNERSHIP CONVERSATIONS</div>
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
