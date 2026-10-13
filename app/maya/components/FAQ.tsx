const faqs = [
  { question: "What happens in the first session?", answer: "The first conversation is an opportunity to talk about what has brought you to therapy, ask questions, and consider what you would like support with. You do not need to arrive with everything figured out." },
  { question: "Do you offer in-person and online sessions?", answer: "Ask the practice about current in-person or telehealth availability and any client-location requirements." },
  { question: "What if I am nervous about starting therapy?", answer: "Feeling unsure is understandable. You can begin with a conversation, ask about the process, and decide whether it feels like a good fit. There is no expectation to share more than you are ready to share." },
  { question: "What therapy approaches do you use?", answer: "Approaches depend on the clinician and your goals. Ask the practice which services and methods are currently offered and whether they may fit your needs." },
];

import { SectionTitle } from "./MayaPrimitives";

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle eyebrow="Questions are welcome" title="A little clarity before you begin." description="It’s completely okay to have questions before reaching out. Here are a few things people often want to know." />
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
