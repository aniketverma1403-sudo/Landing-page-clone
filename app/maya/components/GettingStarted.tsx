import { SectionTitle } from "./MayaPrimitives";

const steps = [
  ["01", "Start with support", "Sessions are structured enough to feel supportive, while leaving space for reflection and depth."],
  ["02", "Move carefully", "Trauma work is paced with an emphasis on safety, stabilization, and feeling more regulated in daily life."],
  ["03", "Build sustainable change", "Therapy can combine practical tools with deeper work to support insight, resilience, and a stronger relationship with yourself."],
];

export default function GettingStarted() {
  return (
    <section className="bg-[#34483B] px-5 py-20 text-[#F8F5ED] sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle eyebrow="What therapy can feel like" title="Supportive, collaborative, and carefully paced." description="The work makes room for both practical tools and reflection, with your experience and involvement at the center." light />
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
