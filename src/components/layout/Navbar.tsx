import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { COUNTRIES, type Locale } from '../../config/contentConfig';
import { localeRoute, homeRoute } from '../../utils/localeRoutes';

// Figma assets
const swoopWordmark = '/assets/swoop-wordmark-nav.svg';
const swoopIcon = '/assets/swoop-icon-nav.svg';
const appleIcon = '/assets/apple-icon.svg';
const googleIcon = '/assets/google-play-icon.svg';
const flagNg = '/assets/flag-ng.svg';
const flagSz = '/assets/flag-sz.png';

const FLAG_MAP: Record<Locale, string> = { NG: flagNg, SZ: flagSz };


interface Props {
  locale: Locale;
}

/**
 * Sticky navbar — Figma node 16:2306.
 * Background: #4d36ff  |  Font: DM Sans SemiBold 16 px  |  Text: white
 */
export default function Navbar({ locale }: Props) {
  const navigate = useNavigate();
  useLocation(); // re-render on route change
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const [navTop, setNavTop] = useState(56);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    function onScroll() {
      const top = Math.max(8, 56 - window.scrollY);
      setNavTop(top);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleCountrySelect(code: Locale) {
    setOpen(false);
    navigate(localeRoute(code));
  }

  const home = homeRoute(locale);

  const handleNavClick = (sectionId: string, offset: number = 0) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(home);
    // Scroll to section after navigation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed z-50 w-full px-4 sm:px-6 pointer-events-none" style={{ top: navTop }}>
      <div className="max-w-[1280px] mx-auto pointer-events-auto">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3 sm:gap-6 rounded-2xl bg-[#4d36ff]/75 backdrop-blur-md shadow-lg border border-white/10">

        {/* ── Left: Logo + Country selector ── */}
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">

          {/* Logo */}
          <a href={home} className="flex items-center shrink-0">
            <div className="relative h-7 sm:h-8 w-9 sm:w-10">
              <img
                src={swoopIcon}
                alt=""
                className="absolute inset-0 h-full w-auto object-contain"
              />
            </div>
            <img
              src={swoopWordmark}
              alt="Swoop"
              className="h-[22px] sm:h-[26px] w-[80px] sm:w-[96px] mt-3 ml-[0.5px] object-contain"
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
              <span className="font-semibold text-[14px] sm:text-[16px] text-white tracking-[-0.04em] leading-none">
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

        {/* ── Centre: Nav links (desktop) ── */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a
            href={home}
            className="font-medium text-[16px] text-white/80 hover:text-white leading-none transition-opacity whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#movement"
            onClick={handleNavClick('movement', 100)}
            className="font-medium text-[16px] text-white/80 hover:text-white leading-none transition-opacity whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#movement"
            onClick={handleNavClick('movement', 100)}
            className="font-medium text-[16px] text-white/80 hover:text-white leading-none transition-opacity whitespace-nowrap"
          >
            For Vendors
          </a>
          <a
            href="#movement"
            onClick={handleNavClick('movement', 100)}
            className="font-medium text-[16px] text-white/80 hover:text-white leading-none transition-opacity whitespace-nowrap"
          >
            For Riders
          </a>
          <a
            href="#faqs"
            onClick={handleNavClick('faqs', 100)}
            className="font-medium text-[16px] text-white/80 hover:text-white leading-none transition-opacity whitespace-nowrap"
          >
            FAQs
          </a>
        </div>

        {/* ── Right: CTA (desktop) + Hamburger (mobile) ── */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleNavClick('contact-us', 100)}
              className="flex items-center gap-1.5 bg-[#0b0062] hover:bg-[#0d0078] transition-colors rounded-xl px-3 py-3 sm:py-4 shrink-0"
            >
              <span className="font-semibold text-[16px] sm:text-[18px] text-white tracking-[-0.04em] leading-none whitespace-nowrap">
                Download
              </span>
              <img src={appleIcon} alt="Apple" className="size-4 object-contain" />
              <img src={googleIcon} alt="Google Play" className="size-4 object-contain" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#4d36ff]/80 backdrop-blur-md border-t border-white/10 px-4 pb-4 rounded-b-2xl">
          <div className="flex flex-col gap-1">
            <a
              href={home}
              className="font-medium text-[16px] text-white/80 hover:text-white py-3 transition-opacity"
            >
              Home
            </a>
            <a
              href="#movement"
              onClick={handleNavClick('movement', 100)}
              className="font-medium text-[16px] text-white/80 hover:text-white py-3 transition-opacity"
            >
              About
            </a>
            <a
              href="#movement"
              onClick={handleNavClick('movement', 100)}
              className="font-medium text-[16px] text-white/80 hover:text-white py-3 transition-opacity"
            >
              For Vendors
            </a>
            <a
              href="#movement"
              onClick={handleNavClick('movement', 100)}
              className="font-medium text-[16px] text-white/80 hover:text-white py-3 transition-opacity"
            >
              For Riders
            </a>
            <a
              href="#faqs"
              onClick={handleNavClick('faqs', 100)}
              className="font-medium text-[16px] text-white/80 hover:text-white py-3 transition-opacity"
            >
              FAQs
            </a>
          </div>
          <div className="mt-3">
            <button
              onClick={handleNavClick('download', 100)}
              className="w-full flex items-center justify-center gap-1.5 bg-[#0b0062] hover:bg-[#0d0078] transition-colors rounded-xl px-3 py-3"
            >
              <img src={appleIcon} alt="Apple" className="size-4 object-contain" />
              <img src={googleIcon} alt="Google Play" className="size-4 object-contain" />
              <span className="font-semibold text-[16px] text-white tracking-[-0.04em] leading-none">
                Download
              </span>
            </button>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
