export default function MayaFooter() {
  return (
    <footer className="border-t border-[#E5E1D7] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg text-[#34483B]">Dr. Maya Reynolds, PsyD</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-[#687466]">Licensed Clinical Psychologist · Fictional Profile</p>
        </div>
        <address className="text-xs leading-6 not-italic text-[#687466]">123th Street 45 W<br />Santa Monica, CA 90401</address>
      </div>
      <nav aria-label="Legal information" className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-x-5 gap-y-2 text-xs text-[#59665A]">
        <a className="underline underline-offset-4 hover:text-[#34483B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A65F48]" href="#privacy">Privacy information</a>
        <a className="underline underline-offset-4 hover:text-[#34483B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A65F48]" href="#terms">Terms of use</a>
        <a className="underline underline-offset-4 hover:text-[#34483B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A65F48]" href="#disclaimer">Health disclaimer</a>
      </nav>
      <div className="mx-auto mt-8 grid max-w-7xl gap-6 border-t border-[#E5E1D7] pt-6 text-xs leading-6 text-[#59665A] md:grid-cols-3">
        <section id="privacy" aria-labelledby="privacy-heading" className="scroll-mt-6">
          <h2 id="privacy-heading" className="font-semibold text-[#34483B]">Privacy information</h2>
          <p className="mt-2">This page does not collect information through an intake form. If you contact the practice through another channel, review its privacy notice and avoid sending sensitive health information through ordinary email.</p>
        </section>
        <section id="terms" aria-labelledby="terms-heading" className="scroll-mt-6">
          <h2 id="terms-heading" className="font-semibold text-[#34483B]">Terms of use</h2>
          <p className="mt-2">Website content is general information. Visiting this page does not establish a therapist-client relationship. Ask the practice for its official terms, fees, cancellation policy, and service details before scheduling.</p>
        </section>
        <section id="disclaimer" aria-labelledby="disclaimer-heading" className="scroll-mt-6">
          <h2 id="disclaimer-heading" className="font-semibold text-[#34483B]">Health disclaimer</h2>
          <p className="mt-2">This website is not medical advice or a substitute for professional evaluation, diagnosis, or treatment, and it is not an emergency service. If you may be in immediate danger, call 911; in the U.S. or Canada, call or text 988 for crisis support.</p>
        </section>
      </div>
    </footer>
  );
}
