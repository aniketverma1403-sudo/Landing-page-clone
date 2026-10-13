import { SectionTitle } from "./MayaPrimitives";

const approaches = [
  { title: "Cognitive-behavioral therapy", short: "CBT", description: "An evidence-based method integrated into a warm, collaborative approach shaped around the person and their experience." },
  { title: "EMDR", short: "EMDR", description: "An evidence-based method that may be integrated into trauma work, paced with attention to safety and stabilization." },
  { title: "Mindfulness-based practices", short: "MINDFULNESS", description: "Part of an integrated approach to understanding both the emotional and physiological sides of what you are experiencing." },
  { title: "Body-oriented techniques", short: "BODY", description: "Included among the methods used to help clients understand the emotional and physiological sides of their experiences." },
];

export default function Approach() {
  return (
    <section id="approach" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionTitle eyebrow="Therapy approach" title="Practical tools with room for depth." description="Dr. Maya Reynolds integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they are experiencing." />
          <div className="mt-8 rounded-2xl bg-[#E2E8DC] p-6 sm:p-7">
            <p className="font-serif text-xl leading-relaxed text-[#34483B]">Warm, collaborative, grounded sessions—structured for support, with room for reflection and depth.</p>
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
