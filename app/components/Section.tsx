import type { ReactNode } from "react";

export function Section({
  num,
  eyebrow,
  id,
  children,
  bg,
}: {
  num: string;
  eyebrow: string;
  id: string;
  children: ReactNode;
  bg?: string;
}) {
  return (
    <section id={id} className={`${bg ?? ""} py-[72px] md:py-[88px]`}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="flex items-baseline gap-6 mb-10">
          <div className="sec-num shrink-0">§ {num}</div>
          <div className="eyebrow">{eyebrow}</div>
        </div>
        {children}
      </div>
    </section>
  );
}
