
import React from "react";

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="home"
      className="relative left-1/2 flex w-screen max-w-[100vw] -translate-x-1/2 flex-col overflow-hidden bg-[#F4F1EC] lg:flex-row lg:items-stretch"
    >
      {/* Left: Larger Family Image */}
      <div className="order-2 flex w-full items-end gap-2 pb-10 pl-0 pr-0 sm:gap-3 sm:pb-12 lg:order-1 lg:w-[35%] lg:shrink-0 lg:gap-0 lg:p-0">
        <div className="w-[76%] shrink-0 sm:w-[76%] lg:w-full">
          <img
            src="/images/beach2.jpg"
            alt="Family spending time together at the beach"
            fetchPriority="high"
            className="block h-[320px] w-full object-cover object-[center_45%] sm:h-[400px] lg:h-[570px]"
          />
        </div>

        {/* Mobile Ocean Image: Same Row, Narrower */}
        <div className="w-[24%] min-w-0 shrink-0 lg:hidden">
          <img
            src="/images/Ocean.jpg"
            alt=""
            aria-hidden="true"
            className="block h-[240px] w-full object-cover object-[55%_center] opacity-50 sm:h-[300px]"
          />
        </div>
      </div>

      {/* Center: Main Text Content */}
      <div className="relative z-10 order-1 flex min-w-0 flex-1 flex-col px-6 py-10 sm:px-10 lg:order-2 lg:min-h-[570px] lg:pb-0 lg:pl-14 lg:pr-8 lg:pt-0 xl:pl-20 xl:pr-12">
        <p className="mb-8 max-w-[440px] text-[10px] font-medium uppercase leading-[1.8] tracking-[2px] text-[#716E68] sm:text-xs lg:mb-0">
          ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
        </p>

        <div className="flex flex-col lg:flex-1 lg:justify-end lg:pb-5">
          <h1 className="mb-6 font-serif text-[34px] font-normal leading-[1.15] tracking-[-1px] text-[#2C2A29] sm:text-[42px] lg:text-[40px] xl:text-[48px]">
            Rebuild your foundation on
            <br className="hidden md:block" /> solid ground and finally begin
            <br className="hidden md:block" /> to{" "}
            <span
              className="inline-block -rotate-[5deg] text-[1.2em] italic leading-[0.8] tracking-[-2px] text-[#83B9BC]"
              style={{ fontFamily: "'PrintedMoments', 'Cormorant Garamond', serif" }}
            >
              thrive
            </span>
            .
          </h1>

          <p className="mb-5 max-w-[560px] text-[14px] leading-[1.8] text-[#62615E] sm:text-[15px] lg:mb-5">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>
        </div>

        <div className="mt-0 pb-2 lg:pb-0">
          <a
            href="#contact"
            className="inline-block border-b-2 border-[#30302E] pb-[4px] text-[11px] font-semibold uppercase tracking-[2px] text-[#30302E] transition-colors duration-200 hover:border-[#83B9BC] hover:text-[#83B9BC]"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>

      {/* Desktop Right: Narrow Ocean Image */}
      <div className="order-3 hidden shrink-0 items-end justify-end lg:flex lg:w-[10%] lg:pb-0">
        <img
          src="/images/Ocean.jpg"
          alt=""
          aria-hidden="true"
          className="block h-[420px] w-full object-cover object-[55%_center] opacity-50"
        />
      </div>
    </section>
  );
}