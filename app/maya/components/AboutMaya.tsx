import { SectionTitle } from "./MayaPrimitives";

export default function AboutMaya() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionTitle eyebrow="A little about Maya" title="You don’t have to have it all figured out." />
          <div className="mt-8 hidden h-px w-24 bg-[#B96F55] lg:block" />
        </div>
        <div className="space-y-5 text-base leading-8 text-[#59665A] sm:text-lg sm:leading-9">
          <p>I’m Dr. Maya Reynolds. I work with adults who may appear to be managing everything on the outside while feeling overwhelmed, tense, or disconnected on the inside.</p>
          <p>Therapy with me is warm and collaborative. We can make sense of patterns that no longer serve you, explore what has been difficult, and create space for new ways of responding—without expecting you to change everything at once.</p>
          <p>You bring your experiences, questions, and hopes. We’ll work together to understand what matters to you and find an approach that respects your needs and boundaries.</p>
          <a href="#approach" className="group inline-flex items-center border-b border-[#B96F55] pb-1 text-sm font-semibold text-[#34483B]">Learn about how I work <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span></a>
        </div>
      </div>
    </section>
  );
}
