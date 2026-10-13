import { officeDirectionsUrl } from "./mayaData";
import { Eyebrow } from "./MayaPrimitives";

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-t-[9rem] rounded-b-2xl bg-[#E2E8DC] px-6 pb-12 pt-28 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full border border-[#C6D0BE]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-[#C6D0BE]" />
        <div className="relative mx-auto max-w-2xl">
          <Eyebrow>Therapy in Santa Monica, California</Eyebrow>
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#34483B] sm:text-5xl">In-person therapy and secure California telehealth.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#59665A]">Dr. Maya Reynolds offers in-person therapy at her Santa Monica office and secure telehealth sessions for clients located in California. This fictional therapist profile does not provide real booking or contact information.</p>
          <a href={officeDirectionsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center rounded-full bg-[#A65F48] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#874631] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B]">
            View Santa Monica office directions <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <p id="contact-details" className="mt-5 text-xs leading-6 text-[#59665A]">123th Street 45 W · Santa Monica, CA 90401</p>
        </div>
      </div>
    </section>
  );
}
