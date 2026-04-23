"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";

const items = [
  { id: "brands", num: "01", label: "I build hair care products" },
  { id: "wearers", num: "02", label: "I wear braids and protective styles" },
  { id: "investors", num: "03", label: "I evaluate companies" },
];

export function AudienceNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur: string | null = null;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.offsetTop <= y) cur = it.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-14 z-40 bg-base border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-4 flex flex-col md:flex-row md:items-center gap-3">
        <div className="eyebrow md:mr-4 shrink-0">Wayfinding</div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`pill ${isActive ? "active" : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="num">{it.num}</span>
                <span>{it.label}</span>
                <Arrow />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
