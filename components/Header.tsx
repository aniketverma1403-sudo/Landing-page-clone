
"use client";

import React, { useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "OUR TEAM", href: "#team" },
  { label: "SPECIALTIES", href: "#specialties" },
  { label: "METHODS", href: "#methods" },
  { label: "FAQS", href: "#faqs" },
];

export default function Header(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="relative z-50 flex min-h-[110px] w-full items-center justify-between gap-4 bg-[#F4F1EC] px-6 py-5 box-border lg:min-h-[150px] lg:px-[5.8%] lg:py-7">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="inline-flex shrink-0 flex-col gap-1"
          aria-label="Conejo Valley Family Counseling home"
        >
          <span className="font-serif text-[32px] font-normal leading-none tracking-tight text-[#2C2A29] sm:text-[36px] lg:text-[42px]">
            Conejo Valley
          </span>
          <span className="mt-1 whitespace-nowrap pl-[3px] text-[10px] leading-relaxed tracking-[4px] text-[#75aeb3] sm:text-[11px] lg:text-[12px] lg:tracking-[5px]">
            FAMILY COUNSELING
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center justify-end gap-6 pt-2 lg:flex xl:gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[12px] font-normal tracking-wide text-[#2C2A29] transition-colors duration-200 hover:text-teal-600 xl:text-[13px]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex h-[44px] min-w-[120px] items-center justify-center rounded-full border border-[#2C2A29] px-7 text-[11px] tracking-[2px] text-[#2C2A29] transition-all duration-200 hover:bg-[#2C2A29] hover:text-white xl:min-w-[135px] xl:text-[12px]"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="relative z-[70] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[6px] focus:outline-none lg:hidden"
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

      {/* Full-Screen Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] flex flex-col bg-[#F4F1EC] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Mobile Brand and Cross Button */}
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

        {/* Large Menu Links */}
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col justify-center gap-5 overflow-y-auto px-8 py-6 sm:gap-6 sm:px-12"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={closeMobileMenu}
              className="w-fit font-serif text-[38px] font-normal leading-tight tracking-tight text-[#2C2A29] transition-colors duration-200 hover:text-[#75aeb3] sm:text-[48px]"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* More Oval Contact Button at Bottom */}
        <div className="shrink-0 border-t border-[#e2ddd5] px-8 pb-8 pt-6 sm:px-12 sm:pb-10">
          <a
            href="#contact"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={closeMobileMenu}
            className="flex h-[60px] w-full items-center justify-center rounded-full border border-[#2C2A29] px-10 text-[13px] font-medium tracking-[3px] text-[#2C2A29] transition-all duration-200 hover:bg-[#2C2A29] hover:text-white"
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
