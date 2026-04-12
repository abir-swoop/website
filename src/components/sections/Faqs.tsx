import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import type { FaqSection } from '../../config/contentConfig';

interface FaqsProps {
  faqs: FaqSection[];
}

export default function Faqs({ faqs }: FaqsProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [ref, inView] = useInView();

  return (
    <section
      id="faqs"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-white w-full py-24 md:py-36 px-6"
    >
      <div className="max-w-[880px] mx-auto flex flex-col gap-16">

        {/* Heading */}
        <h2
          className={`text-[#07003b] font-extrabold text-[clamp(3rem,6vw,4.5rem)] tracking-tight text-center leading-none transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          FAQs
        </h2>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {faqs.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`flex flex-col gap-4 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + sectionIndex * 120}ms` }}
            >
              <h3 className="text-[#07003b] font-extrabold text-[clamp(1.2rem,2vw,1.6rem)] tracking-tight">
                {section.title}
              </h3>

              <div className="flex flex-col gap-3">
                {section.items.map((faq, itemIndex) => {
                  const id = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openId === id;

                  return (
                    <div
                      key={faq.question}
                      className="border border-[#e2e2e2] rounded-3xl overflow-hidden bg-white"
                    >
                      <button
                        className="w-full flex items-center justify-between px-8 py-8 text-left"
                        onClick={() => setOpenId(isOpen ? null : id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${id}`}
                      >
                        <span className="text-[#07003b] font-semibold text-lg leading-snug pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`w-6 h-6 shrink-0 text-[#07003b] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Animated answer */}
                      <div
                        id={`faq-${id}`}
                        className="overflow-hidden transition-all duration-300 ease-out"
                        style={{ maxHeight: isOpen ? '500px' : '0px' }}
                      >
                        <p className="text-[#595672] text-base leading-relaxed px-8 pb-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
