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
  title: "Dr. Maya Reynolds | Therapy in Santa Monica, CA",
  description:
    "Learn about therapy with Dr. Maya Reynolds in Santa Monica, California, including support for anxiety, trauma, burnout, and perfectionism.",
  openGraph: {
    title: "Dr. Maya Reynolds | Therapy in Santa Monica, CA",
    description:
      "Explore therapy services, approach, office details, and frequently asked questions for Dr. Maya Reynolds in Santa Monica, California.",
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
