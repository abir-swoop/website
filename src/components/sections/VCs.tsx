import React from 'react';
import { useInView } from '../../hooks/useInView';

const vcLogos = [
  { src: '/assets/vc-long-journey.png', alt: 'Long Journey', width: 182 },
  { src: '/assets/vc-variant.png', alt: 'Variant', width: 153 },
  { src: '/assets/vc-versionone.png', alt: 'VersionOne', width: 160 },
  { src: '/assets/vc-dune.png', alt: 'Dune', width: 68 },
  { src: '/assets/vc-soma-capital.png', alt: 'Soma Capital', width: 270 },
];

export default function VCs() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#f3f2ff] w-full py-20 px-6 pb-28"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">

        <h2
          className={`text-[#07003b] font-semibold text-3xl tracking-tight text-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Backed by
        </h2>

        <div
          className={`flex flex-wrap justify-center items-center gap-2 transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {vcLogos.map((logo, i) => (
            <div
              key={logo.alt}
              className="opacity-70 p-3"
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 object-contain"
                style={{ width: logo.width }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
