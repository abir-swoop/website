import { useInView } from '../../hooks/useInView';

export default function Cta() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-brand-dark w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Left — wordmark + headline */}
        <div
          className={`flex flex-col gap-10 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <img
            src="/assets/swoop-icon-nav.svg"
            alt="Swoop"
            className="h-12 w-16"
            draggable={false}
          />
          <h2 className="text-white font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight max-w-[520px]">
            Food delivery is<br />just the start ...
          </h2>
        </div>

        {/* Right — icons image */}
        <div
          className={`transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <img
            src="/assets/icons.png"
            alt="Food, groceries, payments and rides icons"
            className="w-auto h-48 md:h-64 object-contain"
            draggable={false}
          />
        </div>

      </div>
    </section>
  );
}
