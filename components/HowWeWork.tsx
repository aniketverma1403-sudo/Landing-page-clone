import React from "react";
import Image from "next/image";

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-[#F4F1EC] py-16 lg:py-20 overflow-hidden box-border" id="about">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 m-0 p-0">
        
        {/* Left Column Content Area (Heading & Text Blocks) */}
        <div className="flex-1 px-6 sm:px-10 lg:pl-[8%] lg:pr-6 flex flex-col justify-start max-w-[960px]">
          
          {/* Eyebrow Label */}
          <p className="text-[10px] uppercase tracking-[2px] font-semibold text-[#716E68] mb-4">
            HOW WE WORK
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.15] text-[#2C2A29] mb-8 lg:mb-10">
            We’re here to make a difference.
          </h2>

          {/* Mobile Image Placement (Appears right after the heading on mobile devices with equal whitespace around all four sides) */}
          <div className="block lg:hidden w-full px-4 sm:px-8 my-6">
            <div className="relative w-full h-[320px] sm:h-[400px]">
              <Image
                src="/images/Ocean.jpeg"
                alt="Mother and daughter dancing on the beach"
                fill
                sizes="100vw"
                className="object-cover rounded-none"
              />
            </div>
          </div>

          {/* Two-Column Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-2 lg:mt-0">
            <div className="flex flex-col">
              <p className="text-[11px] uppercase tracking-[1.5px] text-[#2C2A29] mb-4 font-semibold leading-[1.6]">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>
              <p className="text-[#62605B] text-[14px] leading-[1.8]">
                Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to do the work, we&apos;re ready to help.
              </p>
            </div>

            <div className="flex flex-col justify-start">
              <p className="text-[#62605B] text-[14px] leading-[1.8]">
                Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
              </p>
            </div>
          </div>

          {/* Learn More About Us Link with Bottom Underline at the End */}
          <div className="mt-10 lg:mt-12">
            <a
              href="#about-more"
              className="inline-block text-[11px] font-semibold uppercase tracking-[1.5px] text-[#2C2A29] border-b border-[#2C2A29] pb-[4px] transition-colors duration-200 hover:border-[#83B9BC] hover:text-[#83B9BC]"
            >
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>

        {/* Right Column (Desktop Image touching the extreme right edge with flat corners) */}
        {/* Mobile Image Placement */}
          <div className="block lg:hidden w-full px-4 sm:px-8 my-6">
            <div className="relative w-full h-[320px] sm:h-[400px]">
              <Image
                src="/images/holdhands.jpg"
                alt="Mother and daughter dancing on the beach"
                fill
                sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 64px), 100vw"
                className="object-cover rounded-none"
              />
            </div>
          </div>

      </div>
    </section>
  );
}