import React from "react";

export default function WhoWeHelp(): React.JSX.Element {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 px-[6%] box-border" id="services">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col">
        
        <h2 className="font-serif text-[34px] font-normal text-[#2C2A29] mb-12 tracking-tight md:text-[38px] lg:text-[42px] lg:mb-16">
          Who we <span className="italic text-[#83B9BC] font-normal text-[44px] md:text-[48px] lg:text-[52px]" style={{ fontFamily: "'PrintedMoments', 'Cormorant Garamond', serif" }}>help</span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="hidden md:block md:col-span-1" />

          <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            
            <div className="flex flex-col max-w-[360px]">
              <div className="w-full aspect-square mb-6 overflow-hidden">
                <img
                  src="/images/adults.jpg"
                  alt="Two adults sitting together looking at the ocean"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
              <h3 className="mb-3 font-serif text-[24px] font-normal text-[#2C2A29] md:text-[25px] lg:text-[26px]">
                Adults
              </h3>
              <p className="text-[13px] leading-[1.8] text-[#62605B] md:text-[14px]">
                Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
              </p>
            </div>

            <div className="flex flex-col max-w-[360px]">
              <div className="w-full aspect-square mb-6 overflow-hidden">
                <img
                  src="/images/couples.jpg"
                  alt="Couple embracing happily"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
              <h3 className="mb-3 font-serif text-[24px] font-normal text-[#2C2A29] md:text-[25px] lg:text-[26px]">
                Couples
              </h3>
              <p className="text-[13px] leading-[1.8] text-[#62605B] md:text-[14px]">
                Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
              </p>
            </div>

            <div className="flex flex-col max-w-[360px]">
              <div className="w-full aspect-square mb-6 overflow-hidden">
                <img
                  src="/images/children.jpg"
                  alt="Children playing cheerfully on the beach"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
              <h3 className="mb-3 font-serif text-[24px] font-normal text-[#2C2A29] md:text-[25px] lg:text-[26px]">
                Children &amp; Teens
              </h3>
              <p className="text-[13px] leading-[1.8] text-[#62605B] md:text-[14px]">
                Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}