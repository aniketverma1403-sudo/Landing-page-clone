import React from "react";

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-[#F4F1EC] py-16 lg:pt-32 lg:pb-24 overflow-hidden box-border" id="about">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 m-0 p-0">
        
        {/* Left Column (Text area) */}
        <div className="w-full lg:flex-1 px-6 lg:pl-[8%] lg:pr-6 flex flex-col justify-center max-w-[900px] lg:pt-4">
          <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.2] text-[#2C2A29] mb-8 lg:mb-12">
            You’re holding onto hope that life can be <br className="hidden md:block" />
            better than it is right now.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="flex flex-col">
              <p className="text-[11px] uppercase tracking-[2px] text-[#716E68] mb-4 font-medium">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p className="text-[#62605B] text-[15px] leading-[1.7]">
                Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
              </p>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:justify-end">
              <p className="text-[#62605B] text-[15px] leading-[1.7]">
                First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Image touching right edge on desktop, full width on mobile) */}
        <div className="order-2 w-full lg:w-[35%] shrink-0 p-4 sm:p-5 lg:p-0 m-0">
          <img
            src="/images/Ocean.jpg"
            alt="Calm ocean waves meeting sandy beach"
            className="block w-full h-[320px] sm:h-[420px] lg:h-[580px] object-cover rounded-none"
          />
        </div>

        <div className="order-3 w-full px-6 pb-2 text-[#62605B] text-[15px] leading-[1.7] lg:hidden">
          <p>
            First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
          </p>
        </div>
      </div>
    </section>
  );
}