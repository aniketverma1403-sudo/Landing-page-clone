import React from "react";

export default function QuoteBanner(): React.JSX.Element {
  return (
    <section 
      className="relative w-full max-w-full min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-end box-border md:min-h-[68vh] lg:min-h-[75vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(244, 241, 236, 0.4), rgba(244, 241, 236, 0.4)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')`
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/25 px-[6%] text-center md:px-[7%] lg:items-end lg:justify-start lg:px-[8%] lg:pb-13 lg:text-left">
        <div className="max-w-200 md:max-w-225 lg:max-w-237.5">
          <p className="m-0 font-serif text-[clamp(22px,2.2vw,32px)] font-normal leading-[1.35] tracking-[-0.3px] text-white md:text-[clamp(26px,2vw,36px)]">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <span className="inline font-serif italic font-normal text-[1.12em] text-[#f4f0eb] tracking-[-0.3px]">
              Nothing will be too heavy for us to carry together.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}