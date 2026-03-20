import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { COUNTRIES, type Locale } from '../../config/contentConfig';

// Figma assets
const swoopWordmark = '/assets/swoop-wordmark-nav.svg';
const swoopIcon = '/assets/swoop-icon-nav.svg';
const appleIcon = '/assets/apple-icon.svg';
const googleIcon = '/assets/google-play-icon.svg';
const flagNg = '/assets/flag-ng.svg';
const flagSz = '/assets/flag-sz.png';

const FLAG_MAP: Record<Locale, string> = { NG: flagNg, SZ: flagSz };

const NAV_LINKS = [
  { label: 'Home', to: '' }, // resolved per locale in component
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Join Us', href: '#join' },
];

interface Props {
  locale: Locale;
}

/**
 * Sticky navbar — Figma node 16:2306.
 * Background: #4d36ff  |  Font: DM Sans SemiBold 16 px  |  Text: white
 */
export default function Navbar({ locale }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function handleCountrySelect(code: Locale) {
    setOpen(false);
    const country = COUNTRIES.find(c => c.code === code)!;
    navigate(country.route);
  }

  const homeRoute = locale === 'NG' ? '/' : '/sz';

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#4d36ff]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-10 py-4 gap-6">

        {/* ── Left: Logo + Country selector ── */}
        <div className="flex items-center gap-6 flex-1 min-w-0">

          {/* Logo */}
          <a href={homeRoute} className="flex items-center shrink-0">
            <div className="relative h-8 w-10">
              <img
                src={swoopIcon}
                alt=""
                className="absolute inset-0 h-full w-auto object-contain"
              />
            </div>
            <img
              src={swoopWordmark}
              alt="Swoop"
              className="h-[26px] w-[96px] mt-3 ml-[0.5px] object-contain"
            />
          </a>

          {/* Country selector dropdown */}
          <div className="relative shrink-0" ref={dropRef}>
            <button
              onClick={() => setOpen(v => !v)}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg pl-2.5 pr-2 py-1.5"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <img
                src={FLAG_MAP[locale]}
                alt={locale}
                className="size-4 rounded-sm object-cover"
              />
              <span className="font-semibold text-[16px] text-white tracking-[-0.04em] leading-none">
                {locale}
              </span>
              <ChevronDown
                size={12}
                strokeWidth={2.5}
                className={`text-white transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {open && (
              <ul
                role="listbox"
                className="absolute left-0 top-full mt-1.5 w-36 rounded-xl bg-white shadow-lg overflow-hidden z-50"
              >
                {COUNTRIES.map(c => (
                  <li key={c.code}>
                    <button
                      role="option"
                      aria-selected={c.code === locale}
                      onClick={() => handleCountrySelect(c.code)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-sm font-medium transition-colors
                        ${c.code === locale
                          ? 'bg-[#4d36ff]/10 text-[#4d36ff]'
                          : 'text-[#05002F] hover:bg-gray-50'}`}
                    >
                      <img
                        src={FLAG_MAP[c.code]}
                        alt={c.name}
                        className="size-4 rounded-sm object-cover"
                      />
                      <span>{c.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ── Centre: Nav links ── */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <NavLink
            to={homeRoute}
            end
            className={({ isActive }) =>
              `font-medium text-[16px] leading-none transition-opacity
               ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
            }
          >
            Home
          </NavLink>
          {['Services', 'Contact Us', 'Join Us'].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(' ', '-')}`}
              className="font-medium text-[16px] text-white/80 hover:text-white leading-none transition-opacity whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Right: Download CTA ── */}
        <div className="flex-1 flex justify-end">
          <a
            href="#download"
            className="flex items-center gap-1.5 bg-[#0b0062] hover:bg-[#0d0078] transition-colors rounded-xl px-3 py-4 shrink-0"
          >
            <img src={appleIcon} alt="Apple" className="size-4 object-contain" />
            <img src={googleIcon} alt="Google Play" className="size-4 object-contain" />
            <span className="font-semibold text-[18px] text-white tracking-[-0.04em] leading-none whitespace-nowrap">
              Download the App
            </span>
          </a>
        </div>

      </div>
    </nav>
  );
}
