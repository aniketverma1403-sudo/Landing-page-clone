import Image from "next/image";

const services = [
  { number: "01", title: "Anxiety & panic", description: "Understand the patterns behind anxious thoughts, constant worry, and the feeling that you always need to be prepared for what might go wrong.", detail: "Find steadier ground" },
  { number: "02", title: "Trauma-informed therapy", description: "Explore difficult experiences at a pace that respects your boundaries, with safety, trust, and your sense of control at the center.", detail: "Move at your own pace" },
  { number: "03", title: "Burnout & perfectionism", description: "Make room for the parts of you that are tired of striving, overthinking, and feeling responsible for holding everything together.", detail: "Make space for yourself" },
];

const approaches = [
  { title: "Cognitive Behavioral Therapy", short: "CBT", description: "Recognize thought and behavior patterns, then practise new ways of responding to everyday challenges." },
  { title: "EMDR & trauma-informed care", short: "EMDR", description: "Work carefully with difficult experiences while prioritizing emotional safety, stability, and readiness." },
  { title: "Mindfulness-based practices", short: "PRESENCE", description: "Develop a kinder awareness of what is happening now, without needing to judge or immediately fix it." },
  { title: "Body-oriented techniques", short: "BODY", description: "Notice how stress can show up physically and explore grounding skills that feel manageable for you." },
];

const faqs = [
  { question: "What happens in the first session?", answer: "The first conversation is an opportunity to talk about what has brought you to therapy, ask questions, and consider what you would like support with. You do not need to arrive with everything figured out." },
  { question: "Do you offer in-person and online sessions?", answer: "In-person sessions are available at the Santa Monica office. Secure telehealth sessions are also available to clients located in California." },
  { question: "What if I am nervous about starting therapy?", answer: "Feeling unsure is understandable. You can begin with a conversation, ask about the process, and decide whether it feels like a good fit. There is no expectation to share more than you are ready to share." },
  { question: "What therapy approaches do you use?", answer: "Depending on your needs and goals, our work may draw on CBT, EMDR, mindfulness-based practices, and body-oriented techniques. We can talk together about what may be helpful for you." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65F48]">{children}</p>;
}

function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={"font-serif text-3xl leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[3.25rem] " + (light ? "text-[#F8F5ED]" : "text-[#34483B]")}>{title}</h2>
      {description && <p className={"mt-5 max-w-xl text-base leading-8 sm:text-lg " + (light ? "text-[#E3E8DD]" : "text-[#59665A]")}>{description}</p>}
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span>;
}

function OfficeSection() {
  const photos = [
    { src: "/images/office1.jpeg", alt: "Welcoming seating area in the therapy office", caption: "A comfortable place to settle in" },
    { src: "/images/office2.jpeg", alt: "Quiet, light-filled counseling room", caption: "Room to pause and reflect" },
    { src: "/images/office4.jpg", alt: "Natural details in the therapy office", caption: "Thoughtful, calming details" },
  ];

  return (
    <section id="office" className="bg-[#F8F5ED] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <SectionTitle eyebrow="A space to exhale" title="A quieter place to begin." description="The therapy space should feel human, calm, and welcoming. A place where you can slow down, settle in, and show up as you are." />
          <div className="border-l-2 border-[#B96F55] py-1 pl-6 sm:pl-8">
            <p className="max-w-xl font-serif text-xl leading-relaxed text-[#34483B] sm:text-2xl">“You don’t need the perfect words. We can start wherever you are.”</p>
            <p className="mt-4 text-sm text-[#687466]">Dr. Maya Reynolds</p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#E2E8DC]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              </div>
              <figcaption className="px-5 py-4 text-sm text-[#59665A]">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-[#D9DDD1] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-[#34483B]">Santa Monica, California</p>
            <p className="mt-1 text-sm leading-6 text-[#687466]">In-person appointments and secure telehealth for clients in California.</p>
          </div>
          <a href="#contact" className="group inline-flex w-fit items-center rounded-full bg-[#A65F48] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#874631] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B]">Ask about getting started <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

export default function MayaReynoldsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5ED] text-[#34483B]">
      <div className="bg-[#34483B] px-4 py-2 text-center text-[11px] tracking-[0.08em] text-[#F8F5ED] sm:text-xs">IN-PERSON THERAPY IN SANTA MONICA · TELEHEALTH ACROSS CALIFORNIA</div>

      <header className="relative z-20 border-b border-[#E5E1D7] bg-[#F8F5ED]">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-5 py-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
          <a href="/maya" aria-label="Dr. Maya Reynolds home" className="shrink-0 leading-tight">
            <span className="block font-serif text-xl tracking-[-0.03em] sm:text-2xl">Dr. Maya Reynolds</span>
            <span className="mt-1.5 block text-[9px] uppercase tracking-[0.2em] text-[#687466] sm:text-[10px]">Clinical Psychology</span>
          </a>
          <nav className="hidden items-center justify-center gap-6 text-[13px] text-[#59665A] lg:flex" aria-label="Main navigation">
            <a className="transition hover:text-[#A65F48]" href="#about">About Maya</a>
            <a className="transition hover:text-[#A65F48]" href="#services">How I can help</a>
            <a className="transition hover:text-[#A65F48]" href="#approach">My approach</a>
            <a className="transition hover:text-[#A65F48]" href="#office">The office</a>
            <a className="transition hover:text-[#A65F48]" href="#faq">FAQs</a>
          </nav>
          <div className="col-start-2 flex shrink-0 items-center gap-3 lg:col-start-3 lg:justify-self-end">
            <details className="group relative lg:hidden">
              <summary aria-label="Open navigation menu" className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-[5px] rounded-full border border-[#D9DDD1] text-[#34483B] transition hover:bg-[#E2E8DC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A65F48] [&::-webkit-details-marker]:hidden">
                <span className="block h-[2px] w-[18px] rounded-full bg-current transition duration-200 group-open:translate-y-[7px] group-open:rotate-45"></span>
                <span className="block h-[2px] w-[18px] rounded-full bg-current transition duration-200 group-open:opacity-0"></span>
                <span className="block h-[2px] w-[18px] rounded-full bg-current transition duration-200 group-open:-translate-y-[7px] group-open:-rotate-45"></span>
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+0.85rem)] z-50 w-64 overflow-hidden rounded-2xl border border-[#E5E1D7] bg-[#F8F5ED] p-2 shadow-[0_20px_50px_-25px_rgba(52,72,59,0.35)]">
                <a className="block rounded-xl px-4 py-3 text-sm text-[#34483B] transition hover:bg-[#E2E8DC]" href="#about">About Maya</a>
                <a className="block rounded-xl px-4 py-3 text-sm text-[#34483B] transition hover:bg-[#E2E8DC]" href="#services">How I can help</a>
                <a className="block rounded-xl px-4 py-3 text-sm text-[#34483B] transition hover:bg-[#E2E8DC]" href="#approach">My approach</a>
                <a className="block rounded-xl px-4 py-3 text-sm text-[#34483B] transition hover:bg-[#E2E8DC]" href="#office">The office</a>
                <a className="block rounded-xl px-4 py-3 text-sm text-[#34483B] transition hover:bg-[#E2E8DC]" href="#faq">FAQs</a>
              </nav>
            </details>
            <a href="#contact" className="shrink-0 rounded-full border border-[#A65F48] bg-[#A65F48] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#874631] hover:bg-[#874631] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B] sm:px-5 sm:text-sm">Get in touch <span aria-hidden="true" className="ml-1">↗</span></a>
          </div>
        </div>
      </header>

      <section className="relative bg-[#F8F5ED]">
        <div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full bg-[#E2E8DC] sm:h-[30rem] sm:w-[30rem]" />
        <div className="pointer-events-none absolute -bottom-16 left-[35%] h-40 w-40 rounded-full border border-[#D7B5A3]/70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.88fr] lg:gap-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9DDD1] bg-white/65 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#59665A] sm:text-[11px]"><span className="h-2 w-2 rounded-full bg-[#A65F48]" />A thoughtful space for adults</div>
            <h1 className="max-w-[42rem] font-serif text-[2.8rem] leading-[1.04] tracking-[-0.045em] text-[#34483B] sm:text-6xl lg:text-[4.65rem]">You can be doing well on the outside <span className="mt-1 block font-normal italic text-[#A65F48]">and still need support.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#59665A] sm:text-lg sm:leading-9">Therapy for anxiety, the weight of perfectionism, and experiences that are hard to put into words. We’ll make room to understand what’s happening—and find a way forward that feels right for you.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#A65F48] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#874631] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B]">Take the first step <Arrow /></a>
              <a href="#approach" className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium text-[#34483B] transition hover:bg-white/70">Get to know my approach <span aria-hidden="true" className="ml-2">↓</span></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#E5E1D7] pt-5 text-xs leading-5 text-[#687466] sm:text-sm">
              <span className="inline-flex items-center gap-2"><span className="text-[#A65F48]">✳</span> Collaborative, personal care</span>
              <span className="inline-flex items-center gap-2"><span className="text-[#A65F48]">✳</span> In-person and telehealth</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
            <div className="absolute -left-5 top-[15%] z-10 hidden h-24 w-24 rounded-full border border-[#B96F55]/70 sm:block" />
            <div className="absolute -bottom-5 -right-4 h-[45%] w-[45%] rounded-t-full rounded-b-2xl bg-[#D8DFD0]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[1.25rem] bg-[#E2E8DC] shadow-[0_30px_70px_-42px_rgba(52,72,59,0.45)]">
              <Image src="/images/Maya.png" alt="Portrait of Dr. Maya Reynolds" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-7 left-3 max-w-[16rem] rounded-2xl border border-[#E5E1D7] bg-[#F8F5ED] p-4 shadow-[0_15px_40px_-30px_rgba(52,72,59,0.5)] sm:left-[-2rem] sm:p-5">
              <p className="font-serif text-lg leading-snug text-[#34483B]">A place to slow down and be heard.</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#687466]">Dr. Maya Reynolds</p>
            </div>
            <p className="mt-11 text-center text-[10px] leading-5 text-[#7B8476]">Use the practice’s approved therapist portrait before publishing.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E1D7] bg-[#E2E8DC] px-5 py-6 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-3 sm:gap-8 sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-2xl text-[#A65F48]">01</span><span className="text-sm text-[#34483B]">You set the pace</span></div>
          <div className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-2xl text-[#A65F48]">02</span><span className="text-sm text-[#34483B]">We work collaboratively</span></div>
          <div className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-2xl text-[#A65F48]">03</span><span className="text-sm text-[#34483B]">Your experience matters</span></div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><SectionTitle eyebrow="A little about Maya" title="You don’t have to have it all figured out." /><div className="mt-8 hidden h-px w-24 bg-[#B96F55] lg:block" /></div>
          <div className="space-y-5 text-base leading-8 text-[#59665A] sm:text-lg sm:leading-9">
            <p>I’m Dr. Maya Reynolds. I work with adults who may appear to be managing everything on the outside while feeling overwhelmed, tense, or disconnected on the inside.</p>
            <p>Therapy with me is warm and collaborative. We can make sense of patterns that no longer serve you, explore what has been difficult, and create space for new ways of responding—without expecting you to change everything at once.</p>
            <p>You bring your experiences, questions, and hopes. We’ll work together to understand what matters to you and find an approach that respects your needs and boundaries.</p>
            <a href="#approach" className="group inline-flex items-center border-b border-[#B96F55] pb-1 text-sm font-semibold text-[#34483B]">Learn about how I work <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F0EDE4] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="What brings you here" title="Support for the things you carry." description="You don’t need to know exactly what kind of therapy you need. Start with what has been feeling hard." />
            <p className="max-w-sm text-sm leading-7 text-[#687466] lg:pb-1">A thoughtful, individual approach—not a one-size-fits-all answer.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group flex min-h-[20rem] flex-col rounded-t-[7rem] rounded-b-2xl border border-[#E1DDD2] bg-[#F8F5ED] px-6 pb-7 pt-10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-36px_rgba(52,72,59,0.5)] sm:px-8">
                <span className="font-serif text-3xl text-[#B96F55]">{service.number}</span>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-[#34483B]">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#59665A]">{service.description}</p>
                <a href="#contact" className="group mt-7 inline-flex items-center text-xs font-semibold uppercase tracking-[0.1em] text-[#34483B]">{service.detail} <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionTitle eyebrow="My approach" title="Evidence-informed. Human first." description="There is no single formula for feeling better. Our work is shaped around your needs, goals, and sense of readiness." />
            <div className="mt-8 rounded-2xl bg-[#E2E8DC] p-6 sm:p-7"><p className="font-serif text-xl leading-relaxed text-[#34483B]">“We can be curious about what’s happening, without judging you for it.”</p></div>
          </div>
          <div className="divide-y divide-[#E5E1D7] border-y border-[#E5E1D7]">
            {approaches.map((approach) => (
              <article key={approach.short} className="grid gap-3 py-6 sm:grid-cols-[6rem_1fr] sm:gap-6 sm:py-7">
                <span className="pt-1 text-[10px] font-semibold tracking-[0.18em] text-[#A65F48]">{approach.short}</span>
                <div><h3 className="font-serif text-xl text-[#34483B] sm:text-2xl">{approach.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-[#59665A]">{approach.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#34483B] px-5 py-20 text-[#F8F5ED] sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionTitle eyebrow="Beginning therapy" title="A first step can be small." description="Starting therapy can bring up questions. We can take things one conversation at a time." light />
          <div className="grid gap-7 sm:grid-cols-3">
            {[
              ["01", "Reach out", "Send a note to ask questions or find out more about working together."],
              ["02", "Have a conversation", "Talk about what you’re looking for and what support might look like."],
              ["03", "Decide together", "Explore whether the approach and the fit feel right for you."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-white/25 pt-5"><span className="font-serif text-3xl text-[#D8A18B]">{number}</span><h3 className="mt-5 font-serif text-xl text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-[#E2E8DC]">{description}</p></div>
            ))}
          </div>
        </div>
      </section>

      <OfficeSection />

      <section id="faq" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionTitle eyebrow="Questions are welcome" title="A little clarity before you begin." description="It’s completely okay to have questions before reaching out. Here are a few things people often want to know." />
          <div className="divide-y divide-[#D9DDD1] border-y border-[#D9DDD1]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left font-medium text-[#34483B] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A65F48]"><span>{faq.question}</span><span className="shrink-0 font-serif text-2xl font-normal text-[#A65F48] transition group-open:rotate-45" aria-hidden="true">+</span></summary>
                <p className="max-w-2xl pb-2 pt-4 text-sm leading-7 text-[#59665A]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-t-[9rem] rounded-b-2xl bg-[#E2E8DC] px-6 pb-12 pt-28 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full border border-[#C6D0BE]" /><div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-[#C6D0BE]" />
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow>Whenever you feel ready</Eyebrow>
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#34483B] sm:text-5xl">You don’t have to work it all out alone.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#59665A]">If something here resonates with you, the next step can simply be a conversation. Reach out to ask a question or explore whether working together may be a good fit.</p>
            <a href="mailto:?subject=Therapy%20inquiry%20for%20Dr.%20Maya%20Reynolds&body=Hello%20Dr.%20Reynolds%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20starting%20therapy." className="mt-8 inline-flex items-center rounded-full bg-[#A65F48] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#874631] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B]">Contact Dr. Maya <span aria-hidden="true" className="ml-2">↗</span></a>
            <p id="contact-details" className="mt-5 text-xs leading-6 text-[#687466]">Santa Monica, California · In-person and telehealth sessions</p>
            <p className="mt-3 text-[10px] leading-5 text-[#7B8476]">Add the practice’s verified email or scheduling link before publishing this button.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E1D7] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-serif text-lg text-[#34483B]">Dr. Maya Reynolds</p><p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-[#687466]">Clinical Psychology</p></div>
          <p className="text-xs leading-6 text-[#687466]">Santa Monica, California · Psychology & Therapy</p>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-[10px] leading-5 text-[#7B8476]">Confirm credentials, practice details, contact information, and all imagery before publication.</p>
      </footer>
    </main>
  );
}