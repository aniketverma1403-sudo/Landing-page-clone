import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#874631]">{children}</p>;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`font-serif text-3xl leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[3.25rem] ${light ? "text-[#F8F5ED]" : "text-[#34483B]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${light ? "text-[#E3E8DD]" : "text-[#59665A]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Arrow() {
  return <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span>;
}
