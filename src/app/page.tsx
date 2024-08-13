"use client";

import Contact from "@/components/sections/Contact/Contact";
import Feature from "@/components/sections/Feature/Feature";
import FeaturesTab from "@/components/sections/Feature/FeatureTab";
import FunFact from "@/components/sections/Feature/FunFact";
import Works from "@/components/sections/Feature/Works";
import { HeroThree } from "@/components/sections/Hero/HeroThree";
import { Footer } from "@/components/shared/footer/Footer";
import { Navbar } from "@/components/shared/navbar/Navbar";

export default function Home() {
  return (
    <main className="mx-auto w-full overflow-hidden">
      <Navbar />
      <HeroThree />
      <Works />
      {/* <FeaturesTab /> */}
      <Feature />
      <FunFact />
      <Contact />
      <Footer />
    </main>
  );
}
