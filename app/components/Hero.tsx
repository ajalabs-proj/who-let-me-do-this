export function Hero() {
  return (
    <section id="top" className="pt-[140px] md:pt-[180px] pb-[100px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="eyebrow mb-8">Nourie™ · Aja Labs · Technology</div>
        <h1 className="font-head h-display max-w-[18ch]">
          Functional fiber technology for prolonged scalp contact.
        </h1>
        <p className="mt-8 h-sub text-ink/80 max-w-[62ch]">
          Nourie<span className="align-super text-[0.6em]">™</span> is a fiber
          system that replaces commodity synthetics with bio-derived polymers
          engineered to support scalp health during weeks of continuous wear.
          Designed and clinically tested by Aja Labs.
        </p>
        <div className="mt-10 font-mono text-[12px] tracking-[0.08em] text-ink/90 flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
          <span>PRE-TRIAL hRIPT · 58 PARTICIPANTS · ZERO ADVERSE EVENTS</span>
          <span className="hidden md:inline mx-4 text-mute" aria-hidden>|</span>
          <span>PHASE 1 EFFICACY TRIAL · SCALP HEALTH IMPACT</span>
          <span className="hidden md:inline mx-4 text-mute" aria-hidden>|</span>
          <span>BIO-DERIVED POLYMER CORE</span>
        </div>
      </div>
    </section>
  );
}
