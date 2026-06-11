"use client";

import { useEffect } from "react";

const SUPASCRIBE_LOADER =
  "https://js.supascribe.com/v1/loader/sCDq2h2OOVhc7CPryRt1XD2QXra2.js";
const SUPASCRIBE_EMBED_ID = "347273884143";

export function Subscribe() {
  useEffect(() => {
    // Load Supascribe's loader after the embed div is in the DOM. The script
    // scans for [data-supascribe-embed-id] elements and mounts the widget.
    const script = document.createElement("script");
    script.src = SUPASCRIBE_LOADER;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section
      id="subscribe"
      className="pt-[100px] pb-[60px] border-t border-rule"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="sec-num mb-6">§ 07</div>
            <h2 className="font-head h-section">The Nourie Files</h2>
            <p className="mt-6 text-ink/80 max-w-[40ch]">
              Field notes from our R&amp;D, brand pilots, and the science of
              restoring fragile hair. One considered dispatch when there&rsquo;s
              something worth sending.
            </p>
          </div>
          <div className="md:col-span-7 md:pl-10 md:border-l border-rule flex items-center justify-center md:justify-start">
            <div
              className="w-full max-w-[440px]"
              data-supascribe-embed-id={SUPASCRIBE_EMBED_ID}
              data-supascribe-subscribe=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
