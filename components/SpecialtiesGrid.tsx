import React from "react";

export default function SpecialtiesGrid(): React.JSX.Element {
  const specialties = [
    {
      title: "Trauma",
      description:
        "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
      link: "#trauma",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
      link: "#emdr",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
      link: "#dissociation",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
      link: "#special-needs",
    },
  ];

  return (
    <section className="bg-white py-[120px] px-[6%] w-full box-border" id="specialties">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[35%_65%] gap-[60px] items-start">
        
        {/* Left Column: Sticky Heading */}
        <div className="sticky top-[120px]">
          <h2 className="font-serif text-[44px] font-normal leading-[1.15] text-[#2C2A29]">
            Our <span className="font-serif italic text-[#83B9BC] font-normal text-[52px]">specialities</span> <br />
            include...
          </h2>
        </div>

        {/* Right Column: 2-Column Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {specialties.map((item, index) => (
            <div key={index} className="flex flex-col justify-between h-full p-[40px] box-border">
              <h3 className="m-0 mb-[16px] font-serif text-[28px] font-normal tracking-[-0.5px] text-[#2C2A29]">
                {item.title}
              </h3>
              <p className="m-0 mb-[24px] text-[#62605B] text-[13.5px] leading-[1.9]">
                {item.description}
              </p>
              <a 
                href={item.link} 
                className="text-[10.5px] font-semibold tracking-[1.5px] uppercase text-[#2C2A29] no-underline border-b border-[#2C2A29] pb-[2px] w-fit transition-opacity duration-200 hover:opacity-70"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}