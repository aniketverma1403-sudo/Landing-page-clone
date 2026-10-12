import React from "react";

export default function WhoWeHelp(): React.JSX.Element {
  return (
    <section className="w-full bg-[#F4F1EC] py-24 px-[6%] box-border" id="services">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col">
        
        {/* Section Heading with Left-Aligned Script Accent */}
        <h2 className="font-serif text-[42px] font-normal text-[#2C2A29] mb-16 tracking-tight">
          Who we <span className="font-serif italic text-[#83B9BC] font-normal text-[52px]">help</span>
        </h2>

        {/* Layout wrapper creating empty space on the left and shifting cards right */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Empty spacer column on the left */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Cards container shifted right spanning 11 columns */}
          <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Card 1: Adults */}
            <div className="flex flex-col max-w-[360px]">
              <div className="w-full aspect-square mb-6 overflow-hidden">
                <img
                  src="/images/adults.jpg"
                  alt="Two adults sitting together looking at the ocean"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
              <h3 className="font-serif text-[26px] font-normal text-[#2C2A29] mb-3">
                Adults
              </h3>
              <p className="text-[#62605B] text-[14px] leading-[1.8]">
                Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
              </p>
            </div>

            {/* Card 2: Couples */}
            <div className="flex flex-col max-w-[360px]">
              <div className="w-full aspect-square mb-6 overflow-hidden">
                <img
                  src="/images/couples.jpg"
                  alt="Couple embracing happily"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
              <h3 className="font-serif text-[26px] font-normal text-[#2C2A29] mb-3">
                Couples
              </h3>
              <p className="text-[#62605B] text-[14px] leading-[1.8]">
                Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
              </p>
            </div>

            {/* Card 3: Children & Teens */}
            <div className="flex flex-col max-w-[360px]">
              <div className="w-full aspect-square mb-6 overflow-hidden">
                <img
                  src="/images/children.jpg"
                  alt="Children playing cheerfully on the beach"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
              <h3 className="font-serif text-[26px] font-normal text-[#2C2A29] mb-3">
                Children &amp; Teens
              </h3>
              <p className="text-[#62605B] text-[14px] leading-[1.8]">
                Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}