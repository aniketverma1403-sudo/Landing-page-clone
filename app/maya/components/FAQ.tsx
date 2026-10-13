import { SectionTitle } from "./MayaPrimitives";

const faqs = [
  { question: "Who does Dr. Maya Reynolds work with?", answer: "Dr. Reynolds works with adults, including high-achieving, thoughtful, self-aware people who may feel exhausted, stuck in overthinking, or emotionally on edge." },
  { question: "What concerns are a focus of therapy?", answer: "Her work often focuses on anxiety, panic, trauma, and burnout. She also supports adults dealing with stress, perfectionism, high internal pressure, and the lingering effects of past experiences." },
  { question: "What therapy approaches are included?", answer: "Dr. Reynolds integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they are experiencing." },
  { question: "How is trauma work approached?", answer: "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in daily life—not just during sessions." },
  { question: "Are sessions available in person and by telehealth?", answer: "Yes. Sessions are available in person at the Santa Monica office and through secure telehealth for clients located in California." },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle eyebrow="Adult therapy FAQs" title="About therapy with Dr. Maya Reynolds." description="Learn who the practice is designed to support, which approaches are included, and how sessions are offered." />
        <div className="divide-y divide-[#D9DDD1] border-y border-[#D9DDD1]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left font-medium text-[#34483B] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A65F48]">
                <span>{faq.question}</span>
                <span className="shrink-0 font-serif text-2xl font-normal text-[#A65F48] transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-2xl pb-2 pt-4 text-sm leading-7 text-[#59665A]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
