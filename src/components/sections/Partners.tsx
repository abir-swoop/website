/**
 * Partners section — Figma node 16:941
 *
 * Horizontally scrolling marquee of partner logos (right → left, infinite).
 */

import { useInView } from '../../hooks/useInView';

const logos: { src: string; alt: string; height: number }[] = [
  { src: '/assets/partner-kfc.png', alt: 'KFC', height: 96 },
  { src: '/assets/partner-pizza-inn.png', alt: 'Pizza Inn', height: 96 },
  { src: '/assets/partner-panarottis.png', alt: 'Panarottis Pizza & Pasta', height: 108 },
  { src: '/assets/partner-picknpay-liquor.png', alt: 'Pick n Pay Liquor', height: 52 },
  { src: '/assets/galito.svg', alt: "Galito's", height: 96 },
  { src: '/assets/partner-chicken-inn.png', alt: 'Chicken Inn', height: 96 },
];

export default function Partners({ locale }: { locale: 'NG' | 'SZ' }) {
  const [ref, inView] = useInView();
  // Duplicate logos for seamless infinite loop
  const track = [...logos, ...logos];

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="w-full bg-[#f3f2ff] py-20 overflow-hidden">
      {/* Heading */}
      <h2
        className={`font-extrabold text-[#07003b] tracking-[-0.02em] text-center mb-4 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
      >
        Restaurants on Swoop
      </h2>

      <p className="text-[#595672] text-[20px] md:text-[24px] leading-snug text-center mb-16">
        From local favourites to popular spots across {locale === 'NG' ? 'Yaba' : 'Ezulwini'}, discover and order from restaurants near you
      </p>

      {/* Marquee container — fade edges */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partners-track {
          animation: marquee 28s linear infinite;
        }
      `}</style>

      <div
        className={`relative transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="partners-track flex gap-16 w-max">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-10 shrink-0"
              style={{ height: 120 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logo.height, width: 'auto', objectFit: 'contain' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-[#595672] text-[20px] md:text-[24px] leading-snug text-center mt-12">
        More restaurants joining each week...
      </p>
    </section>
  );
}
