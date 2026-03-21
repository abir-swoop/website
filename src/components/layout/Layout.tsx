import type { ReactNode } from 'react';
import AnnouncementStrip from './AnnouncementStrip';
import Navbar from './Navbar';
import Footer from './Footer';
import type { PageContent } from '../../config/contentConfig';

interface Props {
  content: PageContent;
  children: ReactNode;
}

/**
 * Shared page shell:
 *   [non-sticky] AnnouncementStrip  ← locale-specific top bar
 *   [sticky]     Navbar             ← country selector + download CTA
 *                <page content>
 *                Footer
 */
export default function Layout({ content, children }: Props) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Non-sticky strip */}
      <AnnouncementStrip strip={content.strip} />

      {/* Sticky navbar */}
      <Navbar locale={content.locale} />

      {/* Page body */}
      <main className="flex-1">
        {children}
      </main>

      <Footer locale={content.locale} />
    </div>
  );
}
