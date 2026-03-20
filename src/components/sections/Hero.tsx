import type { HeroContent } from '../../config/contentConfig';

const appleIcon = '/assets/apple-icon-hero.svg';
const googleIcon = '/assets/google-play-icon-hero.svg';

interface Props {
  hero: HeroContent;
}

/**
 * Hero section — Figma node 16:172
 *
 * Layout:
 *   [purple bg] headline + subtext + 2 download CTAs   (centred)
 *   [white bg]  App Showcase placeholder               (phone mockup added later)
 */
export default function Hero({ hero }: Props) {
  return (
    <>
      {/* ── Top: text + CTAs ── */}
      <section className="w-full bg-[#4d36ff] relative overflow-hidden " style={{ minHeight: '600px' }}>
        {/* Illustration pinned to bottom, full width, behind nothing — it IS the bg decoration */}
        <img
          src="/assets/Lagos-Hero.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
        />

        {/* Content sits above the illustration via z-10 */}
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-8 text-center pt-[100px] pb-[240px] px-5">

          {/* Headline */}
          <h1
            className="font-extrabold text-white leading-[1.05] w-full max-w-[862px]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-[20px] leading-relaxed max-w-[734px]">
            {hero.subPre}
            <strong className="font-bold text-white">{hero.subBold}</strong>
            {hero.subPost}
          </p>

          {/* Download CTAs */}
          <div className="flex flex-wrap gap-3 items-center justify-center">
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

        </div>
      </section>

      {/* ── Bottom: App Showcase ── */}
      <section className="w-full bg-white" id="app-showcase">
        <div className="max-w-[400px] mb-[450px] mx-auto flex items-center justify-center py-16 px-6">
          <img
            src={hero.mockupImage}
            alt="Swoop app mockup"
            className="w-full absolute bottom-[-600px] max-w-sm object-contain select-none"
            draggable={false}
          />
        </div>
      </section>
    </>
  );
}
