import type { Locale } from '../config/contentConfig';

/**
 * Returns true when the page is being served from a .sz TLD
 * (e.g. swoop.com.sz).  Falls back to false on localhost/other hosts.
 */
export const isSzDomain =
  typeof window !== 'undefined' && window.location.hostname.endsWith('.sz');

/**
 * Resolve the in-app path for a given locale, accounting for the domain.
 *
 * | Domain        | NG route | SZ route |
 * |---------------|----------|----------|
 * | *.ng / other  |   /      |   /sz    |
 * | *.sz          |   /ng    |   /      |
 */
export function localeRoute(locale: Locale): string {
  if (isSzDomain) {
    return locale === 'SZ' ? '/' : '/ng';
  }
  return locale === 'NG' ? '/' : '/sz';
}

/**
 * The home route for the current locale on the current domain.
 */
export function homeRoute(locale: Locale): string {
  return localeRoute(locale);
}
