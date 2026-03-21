/**
 * Services section — Figma node 16:280
 */

import { useInView } from '../../hooks/useInView';

const foodBg          = '/assets/Background.png';
const foodIllustration = '/assets/Food-Delivery.png';
const groceryIllustration = '/assets/grocery.png';
const pharmacyIllustration = '/assets/pharmacy.png';

interface Props {
  foodCities: string;
}

export default function Services({ foodCities }: Props) {
  const [ref, inView] = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="w-full bg-white py-20 px-5" id="services">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 mt-12">

        {/* ── Section header ── */}
        <div className="flex flex-col gap-3 items-center text-center max-w-[632px] mx-auto">
          <h2
            className={`font-extrabold text-[#07003b] tracking-[-0.02em] leading-[1] transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            Everything you need, on-demand
          </h2>
          <p className={`text-[#595672] text-[20px] leading-normal transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            From meals to essentials, Swoop brings your city to your doorstep.
          </p>
        </div>

        {/* ── Row 1: Food Delivery ── */}
        <div className={`relative bg-[#a136ff] rounded-[32px] overflow-hidden h-[420px] md:h-[525px] transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background maze pattern — overlay blend keeps the purple hue */}
          <img
            src={foodBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-overlay opacity-100"
          />

          {/* Text — top-left, above pattern */}
          <div className="absolute left-[60px] top-[72px] flex flex-col gap-1 text-white max-w-[50%] z-10">
            <h3 className="font-extrabold text-[48px] tracking-[-0.02em] leading-none">
              Food Delivery
            </h3>
            <p className="text-[20px] leading-snug mt-2">
              {`The largest restaurant chains and local restaurants across `}
              <strong className="font-bold">{foodCities}</strong>
              {`. Delivered straight to your door.`}
            </p>
          </div>

          {/* Food illustration — bottom-right, slightly overflowing */}
          <img
            src={foodIllustration}
            alt=""
            aria-hidden="true"
            className="absolute right-[-150px] -bottom-[220px] h-[300px] md:h-[500px] w-auto object-contain pointer-events-none z-10"
          />
        </div>

        {/* ── "Coming Soon" heading ── */}
        <h3
          className={`font-extrabold text-[#07003b] tracking-[-0.02em] leading-none text-center transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
        >
          Coming Soon..
        </h3>

        {/* ── Row 2: Groceries + Pharmacy ── */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-700 ease-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Groceries */}
          <div className="relative bg-[#2a3143] rounded-[32px] overflow-hidden h-[250px]">
            <div className="absolute left-[48px] top-[53px] z-10">
              <h3 className="font-extrabold text-white text-[48px] tracking-[-0.02em] leading-none">
                Groceries
              </h3>
            </div>
            <img
              src={groceryIllustration}
              alt=""
              aria-hidden="true"
              className="absolute right-0 bottom-0 h-full w-auto object-contain pointer-events-none"
            />
          </div>

          {/* Pharmacy */}
          <div className="relative bg-[#2a3143] rounded-[32px] overflow-hidden h-[250px]">
            <div className="absolute left-[48px] top-[53px] z-10">
              <h3 className="font-extrabold text-white text-[48px] tracking-[-0.02em] leading-none">
                Pharmacy
              </h3>
            </div>
            <img
              src={pharmacyIllustration}
              alt=""
              aria-hidden="true"
              className="absolute right-0 bottom-0 h-full w-auto object-contain pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
