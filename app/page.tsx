import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AudienceNav } from "./components/AudienceNav";
import { Problem } from "./components/Problem";
import { HowItWorks } from "./components/HowItWorks";
import { Evidence } from "./components/Evidence";
import { Brands } from "./components/Brands";
import { Wearers } from "./components/Wearers";
import { Investors } from "./components/Investors";
import { Contact } from "./components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AudienceNav />
        <Problem />
        <HowItWorks />
        <Evidence />
        <Brands />
        <Wearers />
        <Investors />
        <Contact />
      </main>
    </>
  );
}
