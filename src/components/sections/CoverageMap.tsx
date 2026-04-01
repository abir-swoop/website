/**
 * CoverageMap section — Figma node 351:2578
 *
 * Lagos map with frosted-glass copy overlay and Yaba pin.
 * NG-only section.
 */

import React from 'react';
import { useInView } from '../../hooks/useInView';

export interface CoverageMapContent {
  headlinePre: string;
  headlineAccent: string;
  headlineLine2: string;
  body: string;
  pinLabel: string;
}

interface Props {
  content: CoverageMapContent;
}

const areaLabels = [
  { label: 'Ikeja',  top: '16.6%', left: '50%',   translateX: true  },
  { label: 'Agege',  top: '9.7%',  left: 'calc(50% - 209.5px)', translateX: false },
  { label: 'Ikotun', top: '72.4%', left: 'calc(50% - 197.5px)', translateX: false },
  { label: 'Magodo', top: '12%',   left: 'calc(50% + 219px)',   translateX: false },
  { label: 'Lekki',  top: '85%',   left: 'calc(50% + 223px)',   translateX: false },
];

export default function CoverageMap({ content }: Props) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full bg-white py-12 md:py-20 px-5"
    >
      <div className="max-w-[1280px] mx-auto">
        <div
          className={`relative overflow-hidden rounded-[32px] md:rounded-[48px] h-[400px] md:h-[641px] bg-[rgba(0,0,0,0.1)] transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Map background */}
          <img
            src="/assets/map-lagos.svg"
            alt="Map of Lagos"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Area labels */}
          {areaLabels.map(({ label, top, left, translateX }) => (
            <div
              key={label}
              className="absolute bg-[#f7f6ff] px-3 py-1 rounded-[12px]"
              style={{
                top,
                left,
                transform: translateX ? 'translateX(-50%)' : undefined,
              }}
            >
              <span className="font-bold text-[rgba(7,0,59,0.7)] text-[16px] md:text-[18px] tracking-[-0.04em] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}

          {/* Yaba pin */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ top: '235px', left: 'calc(50% + 246px)', transform: 'translateX(-50%)' }}
          >
            <div className="bg-[#0b0062] border-[3px] border-brand-primary px-4 py-2 rounded-[12px]">
              <span className="font-extrabold text-white text-[20px] md:text-[24px] tracking-[-0.04em] whitespace-nowrap">
                {content.pinLabel}
              </span>
            </div>
            <img src="/assets/map-pin-swoop.png" alt="" className="w-7 h-10" />
          </div>

          {/* Frosted-glass copy card */}
          <div
            className={`absolute left-[5%] md:left-[60px] top-[50%] -translate-y-1/2 md:top-[147px] md:translate-y-0 w-[85%] md:w-[710px] backdrop-blur-sm bg-white/80 rounded-[20px] p-6 md:p-10 shadow-[0_0_8px_rgba(0,0,0,0.1)] flex flex-col gap-4 transition-all duration-700 ease-out delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h2
              className="font-extrabold text-[#07003b] tracking-[-0.06em] leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {content.headlinePre}{' '}
              <span className="text-brand-primary">{content.headlineAccent}</span>
              <br />
              {content.headlineLine2}
            </h2>
            <p className="text-[#595672] text-[18px] md:text-[24px] leading-normal">
              {content.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
