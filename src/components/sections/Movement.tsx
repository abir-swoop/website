/**
 * Movement / Join Swoop section — Figma node 82:366
 *
 * Two cards: "Partner as a Merchant" + "Become a rider"
 * CTA variant:
 *   - 'app-stores' (SZ): App Store + Play Store buttons per card
 *   - 'contact'   (NG): single "Contact Us" button per card
 */

import type { JoinContent } from '../../config/contentConfig';
import { useInView } from '../../hooks/useInView';
import { CheckIcon } from 'lucide-react';

const appleIcon = '/assets/apple-icon-hero.svg';
const googlePlayIcon = '/assets/google-play-icon.svg';

interface Props {
  join: JoinContent;
}

function AppStoreButtons({ appStoreUrl, playStoreUrl }: { appStoreUrl?: string; playStoreUrl?: string }) {
  return (
    <div className="flex flex-wrap gap-3 w-fit">
      <a
        href={appStoreUrl ?? '#'}
        className="flex items-center gap-2 border border-[#d0cce8] rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors"
      >
        <img src={appleIcon} alt="" className="w-4 h-4 object-contain" />
        <span className="font-semibold text-[15px] text-[#0b0062] tracking-[-0.03em] whitespace-nowrap">
          Get it on iPhone
        </span>
      </a>
      <a
        href={playStoreUrl ?? '#'}
        className="flex items-center gap-2 border border-[#d0cce8] rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors"
      >
        <img src={googlePlayIcon} alt="" className="w-4 h-4 object-contain" />
        <span className="font-semibold text-[15px] text-[#0b0062] tracking-[-0.03em] whitespace-nowrap">
          Get it on Android
        </span>
      </a>
    </div>
  );
}

function ContactButton({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="self-start inline-flex items-center gap-2 border border-[#d0cce8] rounded-xl px-6 py-2.5 bg-[#E7E0EC] hover:bg-gray-50 transition-colors font-semibold text-[15px] text-[#0b0062] tracking-[-0.03em]"
    >
      {label}
    </a>
  );
}

export default function Movement({ join }: Props) {
  const { merchant, rider, ctaVariant, appStoreUrl, playStoreUrl } = join;
  const [ref, inView] = useInView();

  return (
    <section id="movement" ref={ref as React.RefObject<HTMLDivElement>} className="w-full bg-brand-primary py-20 px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Heading */}
        {/* <div className={`text-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2
            className="font-extrabold text-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {headline}
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            {subheadline}
          </p>
        </div> */}

        {/* Card 1 — Merchant (image left, text right) */}
        <div className={`rounded-2xl overflow-hidden bg-white flex flex-col md:flex-row transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Illustration */}
          <div className="md:w-[40%] bg-[#e8e4ff] flex items-end justify-center shrink-0 overflow-hidden" style={{ minHeight: 300 }}>
            <video
              src="/assets/store-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center gap-6 px-10 py-10 md:py-12">
            <div>
              <h3 className="font-extrabold text-[#07003b] text-2xl md:text-3xl tracking-[-0.03em]">
                {merchant.title}
              </h3>
              <p className="mt-1 text-[#4a4a6a] text-base sm:text-lg md:text-xl leading-snug">{merchant.subtitle}</p>
            </div>

            {ctaVariant === 'app-stores' ? (
              <AppStoreButtons appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
            ) : (
              <ContactButton label="Apply as a Vendor" url="https://forms.gle/44zja88B3C7LFYDGA" />
            )}

            {/* Divider */}
            <hr className="border-[#e0ddf5] w-12" />

            {/* Bullets */}
            <ul className="grid grid-cols-2 gap-3">
              {merchant.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[#07003b] font-medium text-base">
                  <CheckIcon className="w-6 h-6 shrink-0 bg-brand-primary text-white rounded-full p-1" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2 — Rider (text left, image right) */}
        <div className={`rounded-2xl overflow-hidden bg-white flex flex-col-reverse md:flex-row transition-all duration-700 ease-out delay-[400ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Content */}
          <div className="flex flex-col w-full justify-center gap-6 px-10 md:px-20 py-10 md:py-12">
            <div>
              <h3 className="font-extrabold text-[#07003b] text-2xl md:text-3xl tracking-[-0.03em]">
                {rider.title}
              </h3>
              <p className="mt-1 text-[#4a4a6a] text-base sm:text-lg md:text-xl leading-snug">{rider.subtitle}</p>
            </div>

            {ctaVariant === 'app-stores' ? (
              <AppStoreButtons appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
            ) : (
              <ContactButton label="Apply as a Rider" url="https://forms.gle/44zja88B3C7LFYDGA" />
            )}

            {/* Divider */}
            <hr className="border-[#e0ddf5] w-12" />

            {/* Bullets */}
            <ul className="grid grid-cols-2 gap-3">
              {rider.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[#07003b] font-medium text-base">
                  <CheckIcon className="w-6 h-6 shrink-0 bg-brand-primary text-white rounded-full p-1" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {/* Illustration */}
          <div className="md:w-[40%] bg-[#e8e4ff] relative shrink-0 overflow-hidden" style={{ minHeight: 300 }}>
            <video
              src="/assets/rider-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
