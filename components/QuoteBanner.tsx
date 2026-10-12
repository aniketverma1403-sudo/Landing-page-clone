import React from "react";

export default function QuoteBanner(): React.JSX.Element {
  return (
    <section 
      className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] max-w-[100vw] min-h-[75vh] bg-cover bg-center bg-no-repeat flex items-end box-border"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(244, 241, 236, 0.4), rgba(244, 241, 236, 0.4)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black/25 flex items-end px-[8%] pb-[52px]">
        <div className="max-w-[950px]">
          <p className="m-0 font-serif text-[clamp(22px,2.5vw,36px)] font-normal leading-[1.35] text-white tracking-[-0.3px]">
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