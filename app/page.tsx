
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import HowWeWork from "@/components/HowWeWork";
import HonoringSection from "@/components/HonoringSection";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import ScheduleAppointment from "@/components/ScheduleAppointment";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <WhoWeHelp />
      <QuoteBanner />
      <AreasOfExpertise />
      <HowWeWork />
      <HonoringSection />
      <SpecialtiesGrid />
      <ScheduleAppointment /> 
      <Footer />  
    </main>
  );
}
