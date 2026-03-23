import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import type { HeroContent } from '../../config/contentConfig';

const appleIcon = '/assets/apple-icon-hero.svg';
const googleIcon = '/assets/google-play-icon-hero.svg';

interface Props {
  hero: HeroContent;
  locale?: 'NG' | 'SZ';
}

/**
 * Hero section — Figma node 16:172
 *
 * Layout:
 *   [purple bg] headline + subtext + 2 download CTAs   (centred)
 *   [white bg]  App Showcase placeholder               (phone mockup added later)
 */
export default function Hero({ hero, locale = 'NG' }: Props) {
  const heroImage = locale === 'SZ' ? '/assets/bg-sz.png' : '/assets/Lagos-Hero.png';
  const [loaded, setLoaded] = useState(false);
  const [mockupRef, mockupInView] = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Hero: screen-height purple section ── */}
      <section id="home" className="w-full min-h-[600px] bg-[#4d36ff] relative overflow-visible" style={{ height: '100svh' }} ref={mockupRef as React.RefObject<HTMLElement>}>
        {/* Background illustration — clipped to section */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className={`absolute bottom-0 left-0 w-full h-full pointer-events-none select-none object-cover object-bottom transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />
        </div>

        {/* Text + CTAs — upper portion */}
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-4 md:gap-8 text-center pt-[70px] md:pt-[100px] px-5">

          {/* Headline */}
          <h1
            className={`font-extrabold text-white leading-[1.05] w-full max-w-[862px] transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
          </h1>

          {/* Subheadline */}
          <p className={`text-white/80 text-[16px] md:text-[20px] leading-relaxed max-w-[734px] transition-all duration-700 ease-out delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {hero.subPre}
            <strong className="font-bold text-white">{hero.subBold}</strong>
            {hero.subPost}
          </p>

          {/* CTAs */}
          {hero.ctaVariant === 'waitlist' ? (
            <a
              href={hero.waitlistUrl ?? '#'}
              className={`bg-white rounded-xl px-8 py-3 hover:bg-white/90 transition-all duration-700 ease-out delay-[400ms] ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
            >
              <span className="font-semibold text-[18px] text-[#0b0062] tracking-[-0.04em] whitespace-nowrap">
                Join the waitlist
              </span>
            </a>
          ) : (
            <div className={`flex flex-wrap gap-3 items-center justify-center transition-all duration-700 ease-out delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={hero.appStoreUrl}
                className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 w-[200px] justify-center hover:bg-white/90 transition-colors"
              >
                <img src={appleIcon} alt="" className="size-4 object-contain" />
                <span className="font-semibold text-[18px] text-[#0b0062] tracking-[-0.04em] whitespace-nowrap">
                  Get it on iPhone
                </span>
              </a>
              <a
                href={hero.playStoreUrl}
                className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 w-[200px] justify-center hover:bg-white/90 transition-colors"
              >
                <img src={googleIcon} alt="" className="size-4 object-contain" />
                <span className="font-semibold text-[18px] text-[#0b0062] tracking-[-0.04em] whitespace-nowrap">
                  Get it on Android
                </span>
              </a>
            </div>
          )}

          {/* Mockup — flows just below CTA, overflows section bottom into next section */}
          <div id="app-showcase" className={`w-[220px] sm:w-[280px] md:w-[420px] mt-2 md:mt-4 transition-all duration-1000 ease-out delay-[600ms] ${mockupInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <img
              src={hero.mockupImage}
              alt="Swoop app mockup"
              className="w-full object-contain select-none"
              draggable={false}
            />
          </div>

        </div>
      </section>
    </>
  );
}
