import type { StripContent } from '../../config/contentConfig';

// Figma assets
const thumoIcon    = '/assets/thumo-logo.png';
const swoopWordmark = '/assets/swoop-logo.png';
const flagNg       = '/assets/flag-ng.svg';

interface Props {
  strip: StripContent;
}

/**
 * Non-sticky top bar shown above the navbar.
 *
 * - "rebrand" variant (SZ): "THUMO is now Swoop"  — node 136:314
 * - "launch"  variant (NG): launch announcement   — node 82:438
 */
export default function AnnouncementStrip({ strip }: Props) {
  return (
    <div className="w-full bg-[#1f138f] py-[10px] px-5">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center">
        {strip.variant === 'rebrand' ? (
          /* SZ — "THUMO is now Swoop" */
          <div className="flex items-center gap-2">
            {/* Thumo logo mark */}
            <img
              src={thumoIcon}
              alt="Thumo"
              className="h-[22px] w-auto object-contain"
            />
            <span className="font-semibold text-[16px] text-white leading-none">
              is now
            </span>
            {/* Swoop wordmark */}
            <img
              src={swoopWordmark}
              alt="Swoop"
              className="h-[16px] w-auto object-contain"
            />
          </div>
        ) : (
          /* NG — launch announcement */
          <div className="flex items-center gap-2">
            <img
              src={flagNg}
              alt="Nigeria flag"
              className="size-4 object-contain"
            />
            <span className="font-semibold text-[16px] text-white leading-none whitespace-nowrap">
              {strip.launchText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
