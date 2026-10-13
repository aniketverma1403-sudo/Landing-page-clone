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
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        
        {/* Left Column: Heading */}
        <div className="lg:w-[35%] shrink-0">
          <h2 className="font-serif text-[48px] font-normal leading-[1.15] text-[#2C2A29]">
            Our areas of <br />
            <span className="font-serif italic text-[#83B9BC] font-normal text-[54px]">
              expertise
            </span>
          </h2>
        </div>

        {/* Right Column: Two-Column List with Divider Lines */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {/* Column 1 */}
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

          {/* Column 2 */}
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