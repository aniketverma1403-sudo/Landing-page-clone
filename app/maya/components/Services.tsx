import { SectionTitle } from "./MayaPrimitives";

const services = [
  { number: "01", title: "Anxiety, panic & stress", description: "For adults living with constant worry, overthinking, body tension, sleep difficulties, or the feeling that something may go wrong. Therapy can help you understand what you are experiencing and find a way forward.", detail: "Explore the approach" },
  { number: "02", title: "Trauma & past experiences", description: "Support for the effects of single-incident trauma and longer-standing experiences connected with childhood, relationships, or chronic stress. Trauma work is paced carefully, with safety and stabilization in focus.", detail: "Learn about trauma care" },
  { number: "03", title: "Burnout & perfectionism", description: "For entrepreneurs, creatives, and professionals carrying high internal pressure or feeling disconnected after years of pushing through stress. Therapy offers room to slow down and consider more sustainable ways of living and working.", detail: "Explore therapy options" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F0EDE4] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow="Adult therapy in Santa Monica" title="Support for anxiety, trauma & burnout." description="Therapy for adults who feel overwhelmed by anxiety, stress, panic, past experiences, professional burnout, or perfectionism." />
          <p className="max-w-sm text-sm leading-7 text-[#687466] lg:pb-1">Available in person in Santa Monica and through secure telehealth for California clients.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group flex min-h-80 flex-col rounded-t-[7rem] rounded-b-2xl border border-[#E1DDD2] bg-[#F8F5ED] px-6 pb-7 pt-10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-36px_rgba(52,72,59,0.5)] sm:px-8">
              <span className="font-serif text-3xl text-[#B96F55]">{service.number}</span>
              <h3 className="mt-6 font-serif text-2xl leading-snug text-[#34483B]">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#59665A]">{service.description}</p>
              <a href="#approach" className="group mt-7 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#34483B]">{service.detail} <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
