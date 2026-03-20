import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import type { PageContent } from '../../config/contentConfig';

type Props = Pick<PageContent, 'downloadHeadline' | 'downloadSubheadline' | 'downloadCtaVariant' | 'appStoreUrl' | 'playStoreUrl'> & { mockupImage: string };

export default function Download({ downloadHeadline, downloadSubheadline, downloadCtaVariant, appStoreUrl, playStoreUrl, mockupImage }: Props) {
  const [ref, inView] = useInView();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-brand-dark w-full px-6 md:px-16 py-4">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative bottom-[80px] max-w-[1280px] mx-auto rounded-[32px] overflow-hidden bg-brand-primary min-h-[420px] flex items-center"
      >
        {/* Texture overlay */}
        <img
          src="/assets/download-bg-texture.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-overlay"
        />

        {/* Left — text + CTA */}
        <div className="relative z-10 flex flex-col gap-7 px-10 md:px-16 py-14 max-w-[560px]">
          <h2
            className={`text-white font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {downloadHeadline}
          </h2>
          <p
            className={`text-white/80 text-lg leading-relaxed transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {downloadSubheadline}
          </p>

          {downloadCtaVariant === 'app-stores' ? (
            <div className={`flex flex-wrap gap-3 transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href={appStoreUrl ?? '#'}
                className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
              >
                <img src="/assets/apple-icon-hero.svg" alt="" className="w-4 h-4 object-contain" />
                <span className="font-semibold text-[17px] text-[#0b0062] tracking-[-0.03em] whitespace-nowrap">Get it on iPhone</span>
              </a>
              <a
                href={playStoreUrl ?? '#'}
                className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
              >
                <img src="/assets/google-play-icon-hero.svg" alt="" className="w-4 h-4 object-contain" />
                <span className="font-semibold text-[17px] text-[#0b0062] tracking-[-0.03em] whitespace-nowrap">Get it on Android</span>
              </a>
            </div>
          ) : (
            <div className={`transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {submitted ? (
                <p className="text-white font-semibold text-lg">You're on the list! We'll be in touch.</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (name && phone && userType) setSubmitted(true); }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-wrap gap-3">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#4e4c84] bg-white/90 backdrop-blur-sm w-[143px] shrink-0"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 - Your Phone Number"
                      className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#4e4c84] bg-white/90 backdrop-blur-sm w-[244px] shrink-0"
                    />
                    <select
                      required
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none bg-white/90 backdrop-blur-sm w-[143px] shrink-0 appearance-none"
                    >
                      <option value="" disabled>User type</option>
                      <option value="customer">Customer</option>
                      <option value="merchant">Merchant</option>
                      <option value="rider">Rider</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0b0062] text-white font-semibold text-lg rounded-xl px-3 py-4 hover:bg-[#0d0080] transition-colors tracking-[-0.04em] w-full"
                  >
                    Join the waitlist
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Right — phone mockup */}
        <div
          className={`absolute right-0 bottom-[-80px] h-full flex items-end pointer-events-none transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <img
            src={mockupImage}
            alt="Swoop app on phone"
            className="h-[110%] w-auto object-contain object-bottom"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
