import React from "react";

export default function ScheduleAppointment(): React.JSX.Element {
  return (
    <section
      id="schedule"
      className="relative w-full max-w-[100vw] overflow-hidden bg-[#F4F1EC] py-12 sm:py-16 lg:py-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
        {/* 1. Smaller Image: Left Aligned on Mobile */}
        <div className="relative order-1 w-[65%] self-start sm:w-[55%] lg:w-[20%] lg:shrink-0">
          <img
            src="/images/blurhand.jpg"
            alt="Person playing with shells on the beach"
            className="block h-[220px] w-full object-cover opacity-50 sm:h-[280px] lg:h-[380px]"
          />
        </div>

        {/* 2. Appointment Text and Button */}
        <div className="relative order-2 flex w-full flex-col px-5 sm:px-8 md:px-12 lg:w-[50%] lg:shrink-0 lg:basis-[50%] lg:px-[4%]">
          <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#716E68] sm:text-[11px]">
            SCHEDULE AN APPOINTMENT
          </p>

          <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.2] text-[#2C2A29] sm:text-[38px] md:text-[42px] lg:text-[44px]">
            Find a therapist who is the right fit for{" "}
            <span
              className="text-[1.12em] font-normal italic text-[#83B9BC]"
              style={{ fontFamily: "'PrintedMoments', 'Cormorant Garamond', serif" }}
            >
              you.
            </span>
          </h2>

          <div className="mb-6 flex flex-col gap-4 font-sans text-[14px] leading-[1.8] text-[#62605B] sm:text-[15px]">
            <p>
              Coming to therapy is a courageous decision, and connecting with
              the right kind of therapist makes all the difference. We
              understand that your journey is personal, and we&apos;re here to
              support you with care and understanding every step of the way.
            </p>

            <p>
              Each member of our team brings dedicated expertise and a
              commitment to support you in your struggles. We want you to feel
              prioritized, understood, and empowered.
            </p>

            <p>Click the button below to schedule an appointment.</p>
          </div>

          {/* Book Now Button */}
          <div>
            <a
              href="#booking"
              className="inline-flex h-[46px] w-fit items-center justify-center rounded-full border border-[#2C2A29] px-8 font-sans text-[10px] font-medium tracking-[2px] text-[#2C2A29] no-underline transition-colors duration-300 hover:bg-[#2C2A29] hover:text-white sm:text-[11px]"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* 3. Bigger Hands Image: Immediately Below Book Now on Mobile */}
        <div className="relative order-3 ml-auto w-[82%] self-end sm:w-[75%] lg:w-[30%] lg:shrink-0 lg:basis-[30%]">
          <img
            src="/images/holdhands.jpg"
            alt="Person pointing at shells on sand with child"
            className="block h-[300px] w-full object-cover sm:h-[380px] md:h-[420px] lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
