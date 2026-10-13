import type { Metadata } from "next";
import AboutMaya from "./components/AboutMaya";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import GettingStarted from "./components/GettingStarted";
import MayaFooter from "./components/MayaFooter";
import MayaHeader from "./components/MayaHeader";
import MayaHero from "./components/MayaHero";
import Office from "./components/Office";
import Services from "./components/Services";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapy (Fictional)",
  description:
    "Fictional profile: Dr. Maya Reynolds, PsyD, offers adult anxiety, trauma, and burnout therapy in Santa Monica, CA, plus secure California telehealth.",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapy (Fictional)",
    description:
      "Fictional therapist profile for adult anxiety, trauma, stress, and burnout therapy in Santa Monica, California, with secure telehealth for California clients.",
    type: "website",
  },
};

export default function MayaReynoldsPage() {
  return (
    <main className="maya-page min-h-screen overflow-hidden bg-[#F8F5ED] text-[#34483B]">
      <MayaHeader />
      <MayaHero />
      <AboutMaya />
      <Services />
      <Approach />
      <GettingStarted />
      <Office />
      <FAQ />
      <Contact />
      <MayaFooter />
    </main>
  );
}
