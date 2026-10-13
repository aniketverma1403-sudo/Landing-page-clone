import { SectionTitle } from "./MayaPrimitives";

export default function AboutMaya() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionTitle eyebrow="About Dr. Maya Reynolds, PsyD" title="Support for adults who feel overwhelmed, stuck, or on edge." />
          <div className="mt-8 hidden h-px w-24 bg-[#B96F55] lg:block" />
        </div>
        <div className="space-y-5 text-base leading-8 text-[#59665A] sm:text-lg sm:leading-9">
          <p>I’m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist based in Santa Monica, California. I offer therapy for adults experiencing anxiety, stress, panic, burnout, and the lingering effects of past experiences.</p>
          <p>Many of the people I work with are high-achieving, thoughtful, and self-aware. On the outside they may seem functional; internally, they may feel exhausted, caught in overthinking, tense in their bodies, or emotionally on edge.</p>
          <p>My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving space for reflection and depth. My goal is to support insight, resilience, and a stronger relationship with yourself over time—not only symptom relief.</p>
          <a href="#approach" className="group inline-flex items-center border-b border-[#B96F55] pb-1 text-sm font-semibold text-[#34483B]">Explore my therapy approaches <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span></a>
        </div>
      </div>
    </section>
  );
}
