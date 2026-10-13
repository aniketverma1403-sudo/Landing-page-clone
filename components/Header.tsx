"use client";

import React, { useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  {
    label: "OUR TEAM",
    href: "#team",
    submenu: [
      { label: "Jennifer Anderson LMFT", href: "#jennifer-anderson" },
      { label: "Candice Balestrieri MFT", href: "#candice-balestrieri" },
      { label: "Heather Williamson Bogart AMFT", href: "#heather-williamson-bogart" },
      { label: "Samantha Johnson", href: "#samantha-johnson" },
      { label: "Otman Bodily AMFT", href: "#otman-bodily" },
      { label: "Rosa Gomez AMFT", href: "#rosa-gomez" },
      { label: "Chad Flores AMFT", href: "#chad-flores" },
      { label: "Simran Sidhu AMFT", href: "#simran-sidhu" },
      { label: "Jessica Jorregui MA AMFT", href: "#jessica-jorregui" },
    ],
  },
  {
    label: "SPECIALTIES",
    href: "#specialties",
    submenu: [
      { label: "Dissociation", href: "#dissociation" },
      { label: "Trauma", href: "#trauma" },
      { label: "Special Needs", href: "#special-needs" },
      { label: "Parenting", href: "#parenting" },
      { label: "Couples", href: "#couples" },
      { label: "Children & Teens", href: "#children-and-teens" },
      { label: "Anxiety", href: "#anxiety" },
      { label: "Depression", href: "#depression" },
      { label: "Adoption", href: "#adoption" },
    ],
  },
  {
    label: "METHODS",
    href: "#methods",
    submenu: [
      { label: "EMDR", href: "#emdr" },
      { label: "Brainspotting", href: "#brainspotting" },
      { label: "Somatic Therapy", href: "#somatic-therapy" },
      { label: "Parts Work Therapy", href: "#parts-work-therapy" },
    ],
  },
  { label: "FAQS", href: "#faqs" },
];

export default function Header(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu((current) => (current === label ? null : label));
  };

  return (
    <>
      <header className="relative z-50 box-border flex min-h-[96px] w-full items-center justify-between gap-4 bg-[#F4F1EC] px-6 py-4 md:min-h-[108px] lg:min-h-[120px] lg:px-[5.8%] lg:py-4">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="inline-flex shrink-0 flex-col gap-1"
          aria-label="Conejo Valley Family Counseling home"
        >
          <span className="font-serif text-[28px] font-normal leading-none tracking-tight text-[#2C2A29] sm:text-[32px] md:text-[34px] lg:text-[42px]">
            Conejo Valley
          </span>
          <span className="mt-1 whitespace-nowrap pl-[3px] text-[9px] leading-relaxed tracking-[4px] text-[#75aeb3] sm:text-[10px] md:text-[10.5px] lg:text-[12px] lg:tracking-[5px]">
            FAMILY COUNSELING
          </span>
        </a>

        {/* Desktop Navigation with hover and keyboard-accessible dropdowns */}
        <nav
          className="hidden items-center justify-end gap-3 pt-0 md:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className="inline-flex items-center gap-1 whitespace-nowrap py-3 text-[12px] font-normal tracking-wide text-[#2C2A29] transition-colors duration-200 hover:text-[#75aeb3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75aeb3] xl:text-[13px]"
                aria-haspopup={link.submenu ? "true" : undefined}
              >
                {link.label}
                {link.submenu && (
                  <span aria-hidden="true" className="text-[10px]">▾</span>
                )}
              </a>

              {link.submenu && (
                <div className="invisible absolute left-0 top-full z-[80] min-w-[245px] translate-y-2 rounded-sm border border-[#e2ddd5] bg-[#F4F1EC] py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="max-h-[70vh] overflow-y-auto">
                    {link.submenu.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block whitespace-nowrap px-5 py-2.5 text-[12px] leading-relaxed text-[#2C2A29] underline-offset-4 transition-all duration-150 hover:underline focus-visible:underline focus-visible:outline-none"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <a
            href="#contact"
            className="inline-flex h-[40px] min-w-[110px] items-center justify-center rounded-full border border-[#2C2A29] bg-transparent px-6 text-[10px] tracking-[2px] text-[#2C2A29] transition-colors duration-200 hover:bg-black hover:text-[#FFFFFF] focus-visible:bg-black focus-visible:text-[#FFFFFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:text-[10.5px] xl:min-w-[135px] xl:text-[12px]"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="relative z-[70] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[6px] focus:outline-none md:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-[#2C2A29] transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#2C2A29] transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#2C2A29] transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Navigation: tap a section to expand its submenu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] flex flex-col bg-[#F4F1EC] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 px-6 pb-5 pt-8 sm:px-12">
          <div>
            <p className="font-serif text-[30px] leading-none tracking-tight text-[#2C2A29]">
              Conejo Valley
            </p>
            <p className="mt-2 pl-[2px] text-[9px] tracking-[4px] text-[#75aeb3]">
              FAMILY COUNSELING
            </p>
          </div>

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#2C2A29] transition-colors hover:bg-[#e9e4dc] focus:outline-none"
          >
            <span aria-hidden="true" className="text-[36px] font-light leading-none">
              ×
            </span>
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col gap-2 overflow-y-auto px-8 py-4 sm:px-12"
        >
          {navLinks.map((link, index) => (
            <div key={link.label} className="border-b border-[#e2ddd5] py-2">
              {link.submenu ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(link.label)}
                    aria-expanded={expandedMobileMenu === link.label}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left font-serif text-[30px] font-normal leading-tight tracking-tight text-[#2C2A29] transition-colors hover:text-[#75aeb3] sm:text-[36px]"
                  >
                    {link.label}
                    <span aria-hidden="true" className="font-sans text-xl">
                      {expandedMobileMenu === link.label ? "−" : "+"}
                    </span>
                  </button>
                  {expandedMobileMenu === link.label && (
                    <ul className="space-y-1 pb-3 pl-3 pt-1">
                      {link.submenu.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            tabIndex={isMobileMenuOpen ? 0 : -1}
                            onClick={closeMobileMenu}
                            className="block py-2 text-[14px] leading-relaxed text-[#62605B] transition-colors hover:text-[#2C2A29]"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={closeMobileMenu}
                  className="block w-fit py-2 font-serif text-[30px] font-normal leading-tight tracking-tight text-[#2C2A29] transition-colors duration-200 hover:text-[#75aeb3] sm:text-[36px]"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="shrink-0 border-t border-[#e2ddd5] px-8 pb-8 pt-6 sm:px-12 sm:pb-10">
          <a
            href="#contact"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={closeMobileMenu}
            className="flex h-[60px] w-full items-center justify-center rounded-full border border-[#2C2A29] bg-transparent px-10 text-[13px] font-medium tracking-[3px] text-[#2C2A29] transition-colors duration-200 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}