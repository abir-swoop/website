/**
 * HowToOrder section — Figma nodes 207:159 (desktop) / 227:292 (mobile) / 248:226 (zigzag)
 *
 * Shows 3 ordered steps with app screenshot cards.
 * Dark bg (#05002f) with zigzag SVG borders top + bottom.
 */

import { useInView } from '../../hooks/useInView';

export interface HowToOrderStep {
  number: string;
  title: string;
  description: string;
  /** path to an app screenshot image */
  screenImage: string;
}

export interface HowToOrderContent {
  headline: string;
  steps: HowToOrderStep[];
}

interface Props {
  content: HowToOrderContent;
  locale?: 'NG' | 'SZ';
}

/** Zigzag SVG border — points up or down */
function ZigzagBorder({ flip = false, bgColor = '' }: { flip?: boolean, bgColor?: string }) {
  return (
    <div
      className={`w-full hidden md:block overflow-hidden leading-none ${bgColor}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: '48px' }}
      >
        {/* Zigzag made of triangles pointing up, fill matches section bg */}
        <polygon points="0,48 90,0 180,48 270,0 360,48 450,0 540,48 630,0 720,48 810,0 900,48 990,0 1080,48 1170,0 1260,48 1350,0 1440,48" fill="#05002f" />
      </svg>
    </div>
  );
}

export default function HowToOrder({ content, locale = 'NG' }: Props) {
  const [ref, inView] = useInView();

  return (
    <>
      {/* Top zigzag (cuts into section above) */}
      <ZigzagBorder />

      <section
        ref={ref as React.RefObject<HTMLDivElement>}
        className="w-full bg-[#05002f] py-12 md:py-20"
        id="how-to-order"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-12 md:gap-16">

          {/* Headline */}
          <h2
            className={`font-extrabold text-white text-center leading-none transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            {content.headline}
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {content.steps.map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: inView ? `${(i + 1) * 150}ms` : '0ms' }}
                >
                  {/* Text block — on desktop, swap order for even steps */}
                  <div
                    className={`flex flex-col gap-6 w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    {/* Number badge */}
                    <div className="bg-white/10 rounded-2xl md:rounded-[32px] w-16 h-16 md:w-[120px] md:h-[120px] flex items-center justify-center shrink-0">
                      <span
                        className="font-extrabold text-[#cce7fe] leading-none"
                        style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Copy */}
                    <div className="flex flex-col gap-1">
                      <h3
                        className="font-medium text-white leading-snug"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 2.5rem)' }}
                      >
                        {step.title.split('\n').map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h3>
                      {/* <p className="text-[#c9c6de] text-base md:text-xl leading-relaxed mt-1">
                        {step.description}
                      </p> */}
                    </div>
                  </div>

                  {/* Screenshot card */}
                  <div
                    className={`bg-white/10 rounded-[32px] md:rounded-[40px] overflow-hidden w-full md:w-1/2 aspect-square flex items-center justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <img
                      src={step.screenImage}
                      alt={`Step ${step.number}: ${step.title}`}
                      className="w-full h-full object-contain translate-y-[80px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom zigzag (cuts into section below) */}
      <ZigzagBorder flip bgColor={locale === 'SZ' ? 'bg-[#f3f2ff]' : 'bg-white'} />
    </>
  );
}
