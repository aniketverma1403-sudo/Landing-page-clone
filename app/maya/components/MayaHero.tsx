import Image from "next/image";

export default function MayaHero() {
  return (
    <>
      <section id="home" className="relative bg-[#F8F5ED]">
        <div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full bg-[#E2E8DC] sm:h-120 sm:w-120" />
        <div className="pointer-events-none absolute -bottom-16 left-[35%] h-40 w-40 rounded-full border border-[#D7B5A3]/70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.88fr] lg:gap-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9DDD1] bg-white/65 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#59665A] sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-[#A65F48]" />
              A thoughtful space for adults
            </div>
            <h1 className="max-w-2xl font-serif text-[2.8rem] leading-[1.04] tracking-[-0.045em] text-[#34483B] sm:text-6xl lg:text-[4.65rem]">
              You can be doing well on the outside{" "}
              <span className="mt-1 block font-normal italic text-[#A65F48]">and still need support.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#59665A] sm:text-lg sm:leading-9">
              Therapy for anxiety, the weight of perfectionism, and experiences that are hard to put into words. We’ll make room to understand what’s happening—and find a way forward that feels right for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#A65F48] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#874631] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B]">
                Find the office <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span>
              </a>
              <a href="#approach" className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium text-[#34483B] transition hover:bg-white/70">
                Get to know my approach <span aria-hidden="true" className="ml-2">↓</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#E5E1D7] pt-5 text-xs leading-5 text-[#687466] sm:text-sm">
              <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="text-[#A65F48]">✳</span> Collaborative, personal care</span>
              <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="text-[#A65F48]">✳</span> In person in Santa Monica</span>
              <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="text-[#A65F48]">✳</span> Secure telehealth across California</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-124 lg:ml-auto">
            <div className="absolute -left-5 top-[15%] z-10 hidden h-24 w-24 rounded-full border border-[#B96F55]/70 sm:block" />
            <div className="absolute -bottom-5 -right-4 h-[45%] w-[45%] rounded-t-full rounded-b-2xl bg-[#D8DFD0]" />
            <div className="relative aspect-4/5 overflow-hidden rounded-t-[48%] rounded-b-[1.25rem] bg-[#E2E8DC] shadow-[0_30px_70px_-42px_rgba(52,72,59,0.45)]">
              <Image src="/images/maya.png" alt="Portrait of Dr. Maya Reynolds" fill priority sizes="(max-width: 1023px) 90vw, 42vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-7 left-3 max-w-64 rounded-2xl border border-[#E5E1D7] bg-[#F8F5ED] p-4 shadow-[0_15px_40px_-30px_rgba(52,72,59,0.5)] sm:-left-8 sm:p-5">
              <p className="font-serif text-lg leading-snug text-[#34483B]">A place to slow down and be heard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E1D7] bg-[#E2E8DC] px-5 py-6 sm:px-8" aria-label="Therapy principles">
        <div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-3 sm:gap-8 sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-2xl text-[#A65F48]">01</span><span className="text-sm text-[#34483B]">You set the pace</span></div>
          <div className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-2xl text-[#A65F48]">02</span><span className="text-sm text-[#34483B]">We work collaboratively</span></div>
          <div className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-2xl text-[#A65F48]">03</span><span className="text-sm text-[#34483B]">Your experience matters</span></div>
        </div>
      </section>
    </>
  );
}
