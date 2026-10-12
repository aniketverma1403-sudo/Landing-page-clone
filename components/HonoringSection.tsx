import React from "react";

export default function HonoringSection(): React.JSX.Element {
  return (
    <section className="w-full bg-[#F4F1EC] py-12 lg:py-20 box-border overflow-hidden" id="honoring">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-20 m-0 p-0">
        
        {/* Left Column: Image container (Appears at the top on mobile, left side on desktop) */}
        <div className="w-full lg:w-[52%] shrink-0 m-0 p-0 order-1 lg:order-1">
          <img
            src="/images/projectpic.jpg"
            alt="Family walking together on the beach at sunset"
            className="block w-full h-[340px] sm:h-[420px] lg:h-full lg:min-h-[520px] object-cover"
          />
        </div>

        {/* Right Column: Heading text (Appears below image on mobile, right side aligned to bottom on desktop) */}
        <div className="w-full lg:flex-1 flex flex-col justify-center lg:justify-end px-6 sm:px-10 lg:px-0 lg:pr-[6%] lg:pb-[20px] order-2 lg:order-2">
          <h2 className="m-0 font-serif text-[28px] sm:text-[34px] font-normal leading-[1.25] text-[#2C2A29]">
            Honoring where you’ve been{" "}
            <span className="font-serif italic text-[36px] sm:text-[45px] text-[#83b9bc] font-normal inline-block align-middle mx-[4px]">
              &amp;
            </span>{" "}
            helping shape where you’re <br className="hidden sm:block" />headed.
          </h2>
        </div>

      </div>
    </section>
  );
}