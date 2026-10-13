import Image from "next/image";
import { officeDirectionsUrl } from "./mayaData";
import { Arrow, SectionTitle } from "./MayaPrimitives";

const officePhotos = [
  { src: "/images/office1.jpeg", alt: "Welcoming seating area in the therapy office", caption: "A comfortable place to settle in" },
  { src: "/images/office2.jpeg", alt: "Quiet, light-filled counseling room", caption: "Room to pause and reflect" },
  { src: "/images/office4.jpg", alt: "Natural details in the therapy office", caption: "Thoughtful, calming details" },
];

export default function Office() {
  return (
    <section id="office" className="bg-[#F8F5ED] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <SectionTitle eyebrow="A space to exhale" title="A quieter place to begin." description="The therapy space should feel human, calm, and welcoming. A place where you can slow down, settle in, and show up as you are." />
          <div className="border-l-2 border-[#B96F55] py-1 pl-6 sm:pl-8">
            <p className="max-w-xl font-serif text-xl leading-relaxed text-[#34483B] sm:text-2xl">You don’t need the perfect words. Start wherever you are.</p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {officePhotos.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#E2E8DC]">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              </div>
              <figcaption className="px-5 py-4 text-sm text-[#59665A]">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-[#D9DDD1] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-[#34483B]">Office address</p>
            <address className="mt-1 not-italic text-sm leading-6 text-[#687466]">123th Street 45 W<br />Santa Monica, CA 90401</address>
            <p className="mt-1 text-sm leading-6 text-[#687466]">Ask the practice about appointment options and availability.</p>
          </div>
          <a href={officeDirectionsUrl} target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center rounded-full bg-[#A65F48] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#874631] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B]">
            View directions <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
