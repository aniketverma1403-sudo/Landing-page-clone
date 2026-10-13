import React from "react";
import Image from "next/image";

export default function AboutSection(): React.JSX.Element {
  return (
    <section
      id="how-we-work"
      className="relative left-1/2 right-1/2 box-border w-screen max-w-[100vw] -ml-[50vw] -mr-[50vw] overflow-hidden bg-[#F4F1EC] py-16 lg:py-24"
    >
      <div className="m-0 flex w-full flex-col items-stretch justify-between gap-8 p-0 lg:flex-row lg:gap-0">
        {/* Left column: heading, copy, and link */}
        <div className="order-1 flex w-full flex-1 flex-col justify-center px-6 sm:px-10 lg:pl-[8%] lg:pr-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-[#716E68]">
            HOW WE WORK
          </p>

          <h2 className="mb-8 font-serif text-[34px] font-normal leading-[1.15] text-[#2C2A29] sm:text-[40px] lg:mb-12 lg:text-[48px]">
            We’re here to make a difference.
          </h2>

          {/* One image for mobile only */}
          <div className="my-2 block w-full px-2 sm:px-4 lg:hidden">
            <div className="relative h-[320px] w-full sm:h-[400px]">
              <Image
                src="/images/workImage.jpg"
                alt="Mother and daughter enjoying time together on the beach"
                fill
                sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 1024px) calc(100vw - 112px), 1px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Two-column text grid matching the reference */}
          <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            <div className="flex flex-col">
              <p className="mb-4 text-[11px] font-semibold uppercase leading-[1.6] tracking-[1.5px] text-[#2C2A29]">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#62605B]">
                Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to do the work, we&apos;re ready to help.
              </p>
            </div>

            <div className="flex flex-col justify-start">
              <p className="text-[14px] leading-[1.8] text-[#62605B]">
                Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-12">
            <a
              href="#about-more"
              className="inline-block border-b border-[#2C2A29] pb-[4px] text-[11px] font-semibold uppercase tracking-[1.5px] text-[#2C2A29] transition-colors duration-200 hover:border-[#83B9BC] hover:text-[#83B9BC]"
            >
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>

        {/* Desktop right-side image */}
        <div className="order-2 relative hidden min-h-[580px] w-full shrink-0 self-stretch lg:block lg:w-[32%] xl:w-[35%]">
          <Image
            src="/images/workImage.jpg"
            alt="Mother and daughter enjoying time together on the beach"
            fill
            sizes="(min-width: 1024px) 35vw, 1px"
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}