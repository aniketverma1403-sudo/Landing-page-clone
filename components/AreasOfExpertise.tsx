import React from "react";

export default function AreasOfExpertise(): React.JSX.Element {
  const leftColumnExpertises = [
    "DISSOCIATION",
    "TRAUMA",
    "FAMILY CONFLICT",
    "SPECIAL NEEDS PARENTING",
    "DEPRESSION",
    "MARRIAGE",
  ];

  const rightColumnExpertises = [
    "ANXIETY",
    "RELATIONSHIPS",
    "CHILDREN",
    "TEENS",
    "INTIMACY & CONNECTION",
    "...AND MORE.",
  ];

  return (
    <section className="w-full bg-white py-24 px-[5.8%] box-border" id="expertise">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="md:w-[35%] shrink-0">
          <h2 className="font-serif text-[38px] font-normal leading-[1.15] text-[#2C2A29] md:text-[42px] lg:text-[48px]">
            Our areas of <br />
            <span className="italic text-[#83B9BC] font-normal text-[46px] md:text-[50px] lg:text-[54px]" style={{ fontFamily: "'PrintedMoments', 'Cormorant Garamond', serif" }}>
              expertise
            </span>
          </h2>
        </div>

        <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          <ul className="flex flex-col">
            {leftColumnExpertises.map((item, index) => (
              <li
                key={index}
                className="py-5 border-b border-[#E2DDD5] text-xs font-medium tracking-[1.5px] text-[#2C2A29]"
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col">
            {rightColumnExpertises.map((item, index) => (
              <li
                key={index}
                className="py-5 border-b border-[#E2DDD5] text-xs font-medium tracking-[1.5px] text-[#2C2A29]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}