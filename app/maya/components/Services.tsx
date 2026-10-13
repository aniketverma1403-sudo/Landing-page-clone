import { SectionTitle } from "./MayaPrimitives";

const services = [
  { number: "01", title: "Anxiety & panic", description: "Understand the patterns behind anxious thoughts, constant worry, and the feeling that you always need to be prepared for what might go wrong.", detail: "Find steadier ground" },
  { number: "02", title: "Trauma-informed therapy", description: "Explore difficult experiences at a pace that respects your boundaries, with safety, trust, and your sense of control at the center.", detail: "Move at your own pace" },
  { number: "03", title: "Burnout & perfectionism", description: "Make room for the parts of you that are tired of striving, overthinking, and feeling responsible for holding everything together.", detail: "Make space for yourself" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F0EDE4] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow="What brings you here" title="Support for the things you carry." description="You don’t need to know exactly what kind of therapy you need. Start with what has been feeling hard." />
          <p className="max-w-sm text-sm leading-7 text-[#687466] lg:pb-1">A thoughtful, individual approach—not a one-size-fits-all answer.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group flex min-h-80 flex-col rounded-t-[7rem] rounded-b-2xl border border-[#E1DDD2] bg-[#F8F5ED] px-6 pb-7 pt-10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-36px_rgba(52,72,59,0.5)] sm:px-8">
              <span className="font-serif text-3xl text-[#B96F55]">{service.number}</span>
              <h3 className="mt-6 font-serif text-2xl leading-snug text-[#34483B]">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#59665A]">{service.description}</p>
              <a href="#contact" className="group mt-7 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#34483B]">{service.detail} <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
