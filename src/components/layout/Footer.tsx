const links = {
  company:    [{ label: 'About', href: '#' }, { label: 'Become a merchant', href: '#' }, { label: 'Become a rider', href: '#' }],
  helpCenter: [{ label: 'FAQ', href: '#faqs' }, { label: 'Contact Us', href: '#' }],
  legal:      [{ label: 'Privacy Policy', href: '#' }, { label: 'Terms & Conditions', href: '#' }],
  download:   [{ label: 'iOS', href: '#' }, { label: 'Android', href: '#' }],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 pt-20 pb-16 flex flex-col gap-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src="/assets/swoop-icon-nav.svg" alt="" className="h-12 w-16" draggable={false} />
              <img src="/assets/swoop-wordmark-nav.svg" alt="Swoop" className="h-8 w-28 ml-[-4px] mt-4" draggable={false} />
            </div>
            <p className="text-white/80 text-base">Africa's Super App</p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { heading: 'Company',     items: links.company    },
              { heading: 'Help Center', items: links.helpCenter },
              { heading: 'Legal',       items: links.legal      },
              { heading: 'Download',    items: links.download   },
            ].map(({ heading, items }) => (
              <div key={heading} className="flex flex-col gap-4">
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
        <div className="w-full h-px bg-white/30" />

        {/* Bottom */}
        <p className="text-white/80 text-base">©Swoop 2026. All Rights Reserved.</p>

      </div>
    </footer>
  );
}
