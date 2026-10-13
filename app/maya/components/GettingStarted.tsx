import { SectionTitle } from "./MayaPrimitives";

const steps = [
  ["01", "Find the office", "Use the address and directions link below to locate the listed Santa Monica office."],
  ["02", "Ask about availability", "Contact the practice directly to ask about current services and scheduling."],
  ["03", "Explore the fit", "Discuss your needs, questions, and whether the available support feels right for you."],
];

export default function GettingStarted() {
  return (
    <section className="bg-[#34483B] px-5 py-20 text-[#F8F5ED] sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle eyebrow="Beginning therapy" title="A first step can be small." description="Starting therapy can bring up questions. We can take things one conversation at a time." light />
        <div className="grid gap-7 sm:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <div key={number} className="border-t border-white/25 pt-5">
              <span className="font-serif text-3xl text-[#D8A18B]">{number}</span>
              <h3 className="mt-5 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#E2E8DC]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
