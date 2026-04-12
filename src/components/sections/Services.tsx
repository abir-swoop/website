/**
 * Services section — Figma node 16:280
 */

import { useInView } from '../../hooks/useInView';
import type { ServicesContent } from '../../config/contentConfig';

const foodBg = '/assets/Background.png';
const foodIllustration = '/assets/Food-Delivery.png';
const groceryIllustration = '/assets/grocery.png';
const pharmacyIllustration = '/assets/pharmacy.png';

interface Props {
  content: ServicesContent;
}

export default function Services({ content }: Props) {
  const [ref, inView] = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="w-full bg-white pt-12 md:pt-20 pb-0 md:pb-20 px-5 mb-8" id="services">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:mt-12">

        {/* ── Section header ── */}
        <div className="flex flex-col gap-8 items-center text-center max-w-[700px] mx-auto">
          <div>
            <h2
              className={`font-extrabold text-[#07003b] tracking-[-0.02em] leading-[1] transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              {content.headline} <span className="text-brand-primary">{content.headline2}</span>
            </h2>
            <p className={`text-[#595672] text-[18px] md:text-[20px] leading-normal transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {content.subheadline}
            </p>
          </div>

          {/* ── Features row ── */}
          {/* <div className={`flex flex-col md:flex-row gap-4 w-full transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {content.features.map((feature, idx) => {
              const colors = ['#0da239', '#f3aa43', '#e3483f'];
              const rotations = [-7.55, 1.66, -3.99];
              return (
                <div key={idx} style={{ transform: `rotate(${rotations[idx]}deg)` }} className="flex items-center justify-center md:justify-start gap-2 px-4 py-3 bg-[#f3f2ff] rounded-[12px] w-fit mx-auto md:mx-0">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0`} style={{ backgroundColor: colors[idx], transform: `rotate(${-rotations[idx]}deg)` }} />
                  <p className="font-semibold text-[#07003b] text-[16px] md:text-[18px] tracking-[-0.02em] whitespace-nowrap">
                    {feature}
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>

        {/* ── Row 1: Food Delivery ── */}
        <div className={`relative bg-[#0DA239] rounded-[24px] sm:rounded-[32px] overflow-hidden h-[200px] sm:h-[320px] md:h-[425px] transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background maze pattern — overlay blend keeps the purple hue */}
          <img
            src={foodBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-overlay opacity-100"
          />

          {/* Text — top-left, above pattern */}
          <div className="absolute left-5 sm:left-10 md:left-[60px] top-6 sm:top-12 md:top-[72px] flex flex-col gap-1 text-white max-w-[65%] sm:max-w-[55%] md:max-w-[50%] z-10">
            <h3 className="font-extrabold text-[28px] sm:text-[36px] md:text-[48px] tracking-[-0.02em] leading-none">
              {content.foodDeliveryTitle}
            </h3>
            <p className="text-[14px] sm:text-[17px] md:text-[20px] leading-snug mt-2">
              {content.foodDeliveryDescription}
            </p>
          </div>

          {/* Food illustration — bottom-right, slightly overflowing */}
          <img
            src={foodIllustration}
            alt=""
            aria-hidden="true"
            className="absolute right-[-80px] sm:right-[-120px] md:right-[-150px] -bottom-[100px] sm:-bottom-[180px] md:-bottom-[220px] h-[220px] sm:h-[350px] md:h-[500px] w-auto object-contain pointer-events-none z-10"
          />
        </div>

        {/* ── "Coming Soon" heading ── */}
        {/* <h3
          className={`font-extrabold text-[#07003b] tracking-[-0.02em] leading-none text-center transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
        >
          Coming Soon..
        </h3> */}

        {/* ── Row 2: Groceries + Pharmacy ── */}
        <div className={`grid grid-cols-2 gap-4 sm:gap-5 transition-all duration-700 ease-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Groceries */}
          <div className="relative bg-[#1e2538] rounded-[16px] sm:rounded-[24px] overflow-hidden h-[150px] sm:h-[240px] md:h-[280px]">
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
              <h3 className="font-extrabold text-white text-[20px] sm:text-[28px] md:text-[36px] tracking-[-0.02em] leading-none">
                {content.groceriesTitle}
              </h3>
            </div>
            <img
              src={groceryIllustration}
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-auto object-contain pointer-events-none"
            />
            <div className="absolute bottom-3 md:bottom-auto md:top-3 right-3 px-4 p-2 rounded-xl bg-black/50">
              <p className="text-white text-[16px] font-semibold">Coming Soon..</p>
            </div>
          </div>

          {/* Pharmacy */}
          <div className="relative bg-[#1e2538] rounded-[16px] sm:rounded-[24px] overflow-hidden h-[150px] sm:h-[240px] md:h-[280px]">
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
              <h3 className="font-extrabold text-white text-[20px] sm:text-[28px] md:text-[36px] tracking-[-0.02em] leading-none">
                {content.pharmacyTitle}
              </h3>
            </div>
            <img
              src={pharmacyIllustration}
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-auto object-contain pointer-events-none"
            />
          </div>
          <div className="absolute bottom-3 md:bottom-auto md:top-3 right-3 px-4 p-2 rounded-xl bg-black/50">
            <p className="text-white text-[16px] font-semibold">Coming Soon..</p>
          </div>
        </div>
      </div>
    </section>
  );
}
