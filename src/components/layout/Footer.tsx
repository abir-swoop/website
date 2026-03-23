import { useInView } from '../../hooks/useInView';
import type { Locale } from '../../config/contentConfig';
import { localeRoute } from '../../utils/localeRoutes';

interface Props {
  locale?: Locale;
}

export default function Footer({ locale = 'NG' }: Props) {
  const [ref, inView] = useInView(0.1);

  const base = localeRoute(locale).replace(/\/$/, ''); // strip trailing slash from '/'
  const privacyHref = `${base}/privacy`;
  const termsHref   = `${base}/terms`;

  const links = {
    company: [
      { label: 'Become a merchant', href: '#movement' },
      { label: 'Become a rider', href: '#movement' }
    ],
    helpCenter: [
      { label: 'FAQ', href: '#faqs' },
      { label: 'Contact Us', href: '#contact-us' }
    ],
    legal: [
      { label: 'Privacy Policy', href: privacyHref },
      { label: 'Terms & Conditions', href: termsHref }
    ],
    download: [
      { label: 'iOS', href: '#' },
      { label: 'Android', href: '#' }
    ],
  };

  // For NG, exclude the download section
  const sections = locale === 'NG'
    ? [
        { heading: 'Company', items: links.company },
        { heading: 'Help Center', items: links.helpCenter },
        { heading: 'Legal', items: links.legal },
      ]
    : [
        { heading: 'Company', items: links.company },
        { heading: 'Help Center', items: links.helpCenter },
        { heading: 'Legal', items: links.legal },
        { heading: 'Download', items: links.download },
      ];

  return (
    <footer ref={ref as React.RefObject<HTMLElement>} className="bg-brand-dark w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 pt-20 pb-16 flex flex-col gap-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

          {/* Brand */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-2">
              <img src="/assets/swoop-icon-nav.svg" alt="" className="h-12 w-16" draggable={false} />
              <img src="/assets/swoop-wordmark-nav.svg" alt="Swoop" className="h-8 w-28 ml-[-4px] mt-4" draggable={false} />
            </div>
            <p className="text-white/80 text-base">Africa's Super App</p>
          </div>

          {/* Nav columns */}
          <div className={`grid ${locale === 'NG' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4'} gap-10`}>
            {sections.map(({ heading, items }, i) => (
              <div
                key={heading}
                className={`flex flex-col gap-4 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${100 + i * 80}ms` }}
              >
                <p className="text-white font-semibold text-lg">{heading}</p>
                <ul className="flex flex-col gap-2.5">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="text-white/80 text-base hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`w-full h-px bg-white/30 transition-all duration-700 ease-out delay-[500ms] ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />

        {/* Bottom */}
        <p className={`text-white/80 text-base transition-all duration-700 ease-out delay-[600ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          ©Swoop 2026. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
