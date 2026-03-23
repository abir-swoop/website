import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import type { PageContent } from '../../config/contentConfig';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzbYHsmXQD71ACvZLjjd4vsBPzR96LtjSpWDQxdxNiDDo37Y3aqroolc1LWdHDLvcqr/exec';

function submitToSheet(data: { name: string; phone: string; userType: string }): Promise<void> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    iframe.name = 'waitlist-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = SHEET_URL;
    form.target = 'waitlist-iframe';

    for (const [key, value] of Object.entries(data)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();

    // Clean up after submission
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      resolve();
    }, 2000);
  });
}

type Props = Pick<PageContent, 'downloadHeadline' | 'downloadSubheadline' | 'downloadCtaVariant' | 'appStoreUrl' | 'playStoreUrl'> & { mockupImage: string };

export default function Download({ downloadHeadline, downloadSubheadline, downloadCtaVariant, appStoreUrl, playStoreUrl, mockupImage }: Props) {
  const [ref, inView] = useInView();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  return (
    <section id="contact-us" className="bg-brand-dark w-full px-4 sm:px-6 md:px-16 py-4">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative bottom-[80px] max-w-[1280px] mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden bg-brand-primary min-h-[auto] sm:min-h-[420px] flex-col md:flex-row items-center"
      >
        {/* Texture overlay */}
        <img
          src="/assets/download-bg-texture.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none mix-blend-overlay"
        />

        {/* Left — text + CTA */}
        <div className="relative z-10 flex flex-col gap-5 sm:gap-7 px-5 sm:px-10 md:px-16 py-8 sm:py-14 w-full md:max-w-[700px]">
          <h2
            className={`text-white font-extrabold text-[clamp(1.5rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {downloadHeadline}
          </h2>
          <p
            className={`text-white/80 text-base sm:text-lg leading-relaxed transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {downloadSubheadline}
          </p>

          {downloadCtaVariant === 'app-stores' ? (
            <div className={`flex flex-col sm:flex-row flex-wrap gap-3 transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href={appStoreUrl ?? '#'}
                className="flex items-center justify-center gap-2 bg-white rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
              >
                <img src="/assets/apple-icon-hero.svg" alt="" className="w-4 h-4 object-contain" />
                <span className="font-semibold text-[15px] sm:text-[17px] text-[#0b0062] tracking-[-0.03em] whitespace-nowrap">Get it on iPhone</span>
              </a>
              <a
                href={playStoreUrl ?? '#'}
                className="flex items-center justify-center gap-2 bg-white rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
              >
                <img src="/assets/google-play-icon-hero.svg" alt="" className="w-4 h-4 object-contain" />
                <span className="font-semibold text-[15px] sm:text-[17px] text-[#0b0062] tracking-[-0.03em] whitespace-nowrap">Get it on Android</span>
              </a>
            </div>
          ) : (
            <div className={`transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {submitted ? (
                <p className="text-white font-semibold text-lg">You're on the list! We'll be in touch.</p>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!name || !phone || !userType) return;
                    setSubmitting(true);
                    setError('');
                    try {
                      await submitToSheet({ name, phone: `+234${phone}`, userType });
                      setSubmitted(true);
                    } catch {
                      setError('Something went wrong. Please try again.');
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  {/* Row 1: Name */}
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3 sm:py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#4e4c84] bg-white/90 backdrop-blur-sm w-full"
                  />
                  {/* Row 2: Phone + User type */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-xl flex-1 min-w-0">
                      <span className="pl-4 text-[#4e4c84] font-medium text-base select-none whitespace-nowrap">+234</span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setPhone(digits);
                        }}
                        maxLength={10}
                        pattern="\d{10}"
                        placeholder="8012345678"
                        className="w-full rounded-xl px-2 py-3 sm:py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#4e4c84] bg-transparent min-w-0"
                      />
                    </div>
                    <div className="relative flex-1 min-w-0">
                      <select
                        required
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="w-full rounded-xl px-4 py-3 sm:py-3.5 text-[#4e4c84] font-medium text-base outline-none bg-white/90 backdrop-blur-sm appearance-none pr-9"
                      >
                        <option value="" disabled>I am a...</option>
                        <option value="user">User</option>
                        <option value="merchant">Merchant</option>
                        <option value="rider">Rider</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#4e4c84]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {error && <p className="text-red-300 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#0b0062] text-white font-semibold text-base sm:text-lg rounded-xl px-3 py-3.5 sm:py-4 hover:bg-[#0d0080] transition-colors tracking-[-0.04em] w-full disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Join the waitlist'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Right — phone mockup (hidden on mobile) */}
        <div
          className={`hidden md:flex absolute right-0 bottom-[-80px] h-full items-end pointer-events-none transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <img
            src={mockupImage}
            alt="Swoop app on phone"
            className="h-[110%] w-auto object-contain object-bottom"
            draggable={false}
          />
        </div>
        <div
          className={`md:hidden right-0 bottom-[-80px] h-full items-end pointer-events-none transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
