import React from "react";

export default function HonoringSection(): React.JSX.Element {
  return (
    <section className="w-full bg-[#F4F1EC] py-12 md:py-20 box-border overflow-hidden" id="honoring">
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-20 m-0 p-0">
        
        <div className="w-full md:w-[52%] shrink-0 m-0 p-0 order-1 md:order-1">
          <img
            src="/images/projectpic.jpg"
            alt="Family walking together on the beach at sunset"
            className="block w-full h-[340px] sm:h-[420px] md:h-full md:min-h-[520px] object-cover"
          />
        </div>

        <div className="w-full md:flex-1 flex flex-col justify-center md:justify-end px-6 sm:px-10 md:px-0 md:pr-[6%] md:pb-[20px] order-2 md:order-2">
          <h2 className="m-0 font-serif text-[26px] sm:text-[30px] md:text-[32px] font-normal leading-[1.25] text-[#2C2A29] md:text-[34px]">
            Honoring where you’ve been{" "}
            <span
              className="italic text-[32px] sm:text-[38px] md:text-[40px] text-[#83b9bc] font-normal inline-block align-middle mx-[4px]"
              style={{ fontFamily: "'PrintedMoments', 'Cormorant Garamond', serif" }}
            >
              &amp;
            </span>{" "}
            helping shape where you’re <br className="hidden sm:block" />headed.
          </h2>
        </div>

      </div>
    </section>
  );
}