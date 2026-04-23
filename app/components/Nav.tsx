"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navwrap fixed top-0 left-0 right-0 z-50 ${scrolled ? "scrolled" : ""}`}>
      <nav className="mx-auto max-w-[1240px] px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="font-head text-[22px] leading-none">
          Nourie<span className="align-super text-[11px] ml-[2px]">™</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-[14px]">
          <a href="#brands" className="hover:text-accent transition-colors">For Brands</a>
          <a href="#wearers" className="hover:text-accent transition-colors">For Wearers</a>
          <a href="#investors" className="hover:text-accent transition-colors">For Investors</a>
          <span className="text-rule" aria-hidden>|</span>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <a href="#contact" className="md:hidden text-[14px]">Contact</a>
      </nav>
    </div>
  );
}
