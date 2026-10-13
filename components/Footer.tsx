
import React from "react";

export default function Footer(): React.JSX.Element {
  const teamMembers = [
    "Jennifer Anderson",
    "Heather Williams-Baumgart",
    "Autumn Bodily",
    "Candace Bletscher",
    "Samantha Johnson",
    "Rosa Gomez",
    "Chad Flores",
    "Simran Sidhu",
    "Jessica Jauregui",
  ];

  return (
    <footer
      className="box-border w-full bg-white pt-16 sm:pt-20 md:pt-25"
      id="footer"
    >
      <div className="mx-auto grid w-full max-w-350 grid-cols-1 items-start gap-10 px-6 sm:px-8 md:grid-cols-[minmax(0,1.28fr)_minmax(0,0.64fr)_minmax(0,0.96fr)_minmax(0,1.12fr)] md:gap-3 md:px-[4%] lg:gap-10 lg:px-[6%]">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-5 md:mb-6">
            <h2 className="m-0 font-serif text-[38px] font-light leading-[1.3] tracking-[-0.5px] text-[#2c2a29] sm:text-[42px] lg:text-[46px] lg:leading-normal">
              Conejo Valley
            </h2>

            <span className="mt-2 block font-serif text-[16px] font-semibold uppercase tracking-[4px] text-[#6a635b] sm:text-[18px] sm:tracking-[5px] md:mt-3 md:text-[20px] md:tracking-[5.5px]">
              FAMILY COUNSELING
            </span>
          </div>

          <p className="m-0 text-[13.5px] leading-[1.9] text-[#62605b]">
            We want to make getting started simple. You&apos;re welcome to come
            into our office in Newbury Park or schedule virtual appointments
            from anywhere in CA—whatever works best for you.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="m-0 mb-5 text-[10.5px] font-semibold uppercase tracking-[1.5px] text-[#7D756D] md:mb-5">
            NAVIGATE
          </h3>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            <li>
              <a
                href="#home"
                className="text-[13.5px] text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[13.5px] text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="text-[13.5px] text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[13.5px] text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="order-3 flex flex-col md:order-4">
          <h3 className="m-0 mb-5 text-[10.5px] font-semibold uppercase tracking-[1.5px] text-[#7D756D] md:mb-5">
            CONTACT
          </h3>

          <div className="flex flex-col gap-4">
            <p className="m-0 text-[13.5px] leading-[1.8] text-[#62605b]">
              925 Broadbeck Dr
              <br />
              Suites 200 and 225
              <br />
              Newbury Park, CA 91320
              <br />
              <a
                href="mailto:info@conejovalleycounseling.com"
                className="wrap-break-word text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
              >
                info@conejovalleycounseling.com
              </a>
              <br />
              <a
                href="tel:8052423120"
                className="text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
              >
                805.242.3120
              </a>
            </p>

            <p className="m-0 text-[12.5px] leading-[1.8] text-[#8c857b]">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
              &amp; Simi Valley
            </p>
          </div>
        </div>

        <div className="order-4 flex flex-col md:order-3">
          <h3 className="m-0 mb-5 text-[10.5px] font-semibold uppercase tracking-[1.5px] text-[#7D756D] md:mb-5">
            OUR TEAM
          </h3>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {teamMembers.map((member) => (
              <li key={member}>
                <a
                  href="#team"
                  className="text-[13.5px] text-[#62605b] no-underline transition-colors duration-200 hover:text-[#30302e]"
                >
                  {member}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-[#83b9bc] px-6 py-6 sm:px-8 md:mt-20 md:px-[4%] md:py-6 lg:px-[6%]">
        <div className="mx-auto flex w-full max-w-350 flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="m-0 text-[11px] leading-[1.9] tracking-[0.3px] text-white sm:text-[11.5px] md:tracking-[0.5px]">
            <a href="#terms" className="hover:underline">
              Terms
            </a>
            {" | "}
            <a href="#privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            {" | "}
            <a href="#disclaimer" className="hover:underline">
              Disclaimer
            </a>
            {" | "}
            <span className="md:hidden">Website by</span>
            <span className="hidden md:inline">
              Website by Walker Strategy Co.
            </span>
          </p>

          <p className="m-0 text-[11px] tracking-[0.3px] text-white sm:text-[11.5px] md:hidden">
            Walker Strategy Company
          </p>
        </div>
      </div>
    </footer>
  );
}
