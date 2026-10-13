import { SectionTitle } from "./MayaPrimitives";

const approaches = [
  { title: "Cognitive Behavioral Therapy", short: "CBT", description: "Explore connections between thoughts, feelings, and actions, and consider useful ways to respond to everyday challenges." },
  { title: "Eye Movement Desensitization and Reprocessing", short: "EMDR", description: "A structured approach that may be used when working through distressing experiences, guided by your needs and readiness." },
  { title: "Mindfulness-based practices", short: "MINDFULNESS", description: "Build awareness of the present moment with curiosity and less judgment." },
  { title: "Body-oriented techniques", short: "BODY", description: "Notice physical experiences and explore grounding approaches as part of therapy." },
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
