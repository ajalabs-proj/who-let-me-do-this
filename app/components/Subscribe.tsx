"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    CustomSubstackWidget?: {
      substackUrl: string;
      placeholder: string;
      buttonText: string;
      theme: string;
      colors: {
        primary: string;
        input: string;
        email: string;
        text: string;
      };
    };
  }
}

export function Subscribe() {
  useEffect(() => {
    // Configure the SubstackAPI widget BEFORE its script runs.
    window.CustomSubstackWidget = {
      substackUrl: "thenouriefiles.substack.com",
      placeholder: "you@company.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#2D6A5A", // accent (button bg)
        input: "transparent", // input bg
        email: "#0E1B2C", // input text
        text: "#FBFBF8", // button text
      },
    };

    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
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
          <div className="md:col-span-7 md:pl-10 md:border-l border-rule">
            <div id="custom-substack-embed" />
          </div>
        </div>
      </div>
    </section>
  );
}
