"use client";

import { useState } from "react";
import { officeDirectionsUrl } from "./mayaData";

const navigationLinks = [
  { label: "About Maya", href: "#about" },
  { label: "How I can help", href: "#services" },
  { label: "My approach", href: "#approach" },
  { label: "The office", href: "#office" },
  { label: "FAQs", href: "#faq" },
];

export default function MayaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#34483B] px-4 py-2 text-center text-[11px] tracking-[0.08em] text-[#F8F5ED] sm:text-xs">
        FICTIONAL THERAPIST PROFILE · DESIGN DEMONSTRATION ONLY
      </div>

      <header className="relative z-20 border-b border-[#E5E1D7] bg-[#F8F5ED]">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-5 py-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#home" aria-label="Dr. Maya Reynolds home" className="shrink-0 leading-tight">
            <span className="block font-serif text-xl tracking-[-0.03em] sm:text-2xl">Dr. Maya Reynolds</span>
            <span className="mt-1.5 block text-[9px] uppercase tracking-[0.2em] text-[#687466] sm:text-[10px]">
              PsyD · Licensed Clinical Psychologist
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-6 text-[13px] text-[#59665A] lg:flex" aria-label="Main navigation">
            {navigationLinks.map((link) => (
              <a key={link.href} className="transition hover:text-[#874631]" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="col-start-2 flex shrink-0 items-center gap-3 lg:col-start-3 lg:justify-self-end">
            <div className="group relative lg:hidden">
              <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="maya-mobile-navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-full border border-[#D9DDD1] text-[#34483B] transition hover:bg-[#E2E8DC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A65F48]"
              >
                <span className={`block h-0.5 w-4.5 rounded-full bg-current transition duration-200 ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-4.5 rounded-full bg-current transition duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-4.5 rounded-full bg-current transition duration-200 ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
              </button>
              {isMenuOpen && (
                <nav
                  id="maya-mobile-navigation"
                  aria-label="Mobile navigation"
                  className="absolute right-0 top-[calc(100%+0.85rem)] z-50 w-64 overflow-hidden rounded-2xl border border-[#E5E1D7] bg-[#F8F5ED] p-2 shadow-[0_20px_50px_-25px_rgba(52,72,59,0.35)]"
                >
                  {navigationLinks.map((link) => (
                    <a
                      key={link.href}
                      className="block rounded-xl px-4 py-3 text-sm text-[#34483B] transition hover:bg-[#E2E8DC]"
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
            <a
              href={officeDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-[#A65F48] bg-[#A65F48] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#874631] hover:bg-[#874631] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34483B] sm:px-5 sm:text-sm"
            >
              Directions to Santa Monica office <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
