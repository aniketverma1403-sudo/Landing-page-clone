import { SectionTitle } from "./MayaPrimitives";

const approaches = [
  { title: "A collaborative conversation", short: "TOGETHER", description: "Share what matters to you and help shape the focus of your therapy." },
  { title: "A pace that feels manageable", short: "YOUR PACE", description: "Take time to decide what you want to discuss and when you feel ready to discuss it." },
  { title: "Noticing patterns", short: "REFLECTION", description: "Explore thoughts, feelings, and experiences with curiosity rather than self-judgment." },
  { title: "Finding next steps", short: "PRACTICE", description: "Consider practical ways to respond to challenges in daily life, based on what feels useful to you." },
];

export default function Approach() {
  return (
    <section id="approach" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionTitle eyebrow="My approach" title="Evidence-informed. Human first." description="There is no single formula for feeling better. Our work is shaped around your needs, goals, and sense of readiness." />
          <div className="mt-8 rounded-2xl bg-[#E2E8DC] p-6 sm:p-7">
            <p className="font-serif text-xl leading-relaxed text-[#34483B]">Bring curiosity to what’s happening, without judging yourself for it.</p>
          </div>
        </div>
        <div className="divide-y divide-[#E5E1D7] border-y border-[#E5E1D7]">
          {approaches.map((approach) => (
            <article key={approach.short} className="grid gap-3 py-6 sm:grid-cols-[6rem_1fr] sm:gap-6 sm:py-7">
              <span className="pt-1 text-[10px] font-semibold tracking-[0.18em] text-[#874631]">{approach.short}</span>
              <div>
                <h3 className="font-serif text-xl text-[#34483B] sm:text-2xl">{approach.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#59665A]">{approach.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
