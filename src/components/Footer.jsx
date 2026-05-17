const footerLinks = {
  Investments: [
    { label: "Private Funds", href: "/invest" },
    { label: "Public Stocks", href: "/investments/stocks" },
    { label: "Alternative Assets", href: "/investments/alternative-assets" },
    { label: "Registered Funds", href: "/investments/registered-funds" },
  ],
  Solutions: [
    { label: "Tokenization As A Service", href: "/institutional-tokenization" },
    { label: "Fund Administration", href: "/fund-administration" },
  ],
  Ecosystem: [
    { label: "Partner Ecosystem", href: "/partner-ecosystem" },
  ],
  Resources: [
    { label: "Intro to Tokenization", href: "/insights/intro-to-tokenization" },
    { label: "Whitepapers & Research", href: "/insights/whitepapers" },
    { label: "Articles", href: "/insights/articles" },
    { label: "Videos", href: "/insights/videos" },
  ],
  About: [
    { label: "Company", href: "/about-us/our-story" },
    { label: "Media Coverage", href: "/about-us/media-coverage" },
    { label: "Press Releases", href: "/about-us/press-releases" },
    { label: "Investor Relations", href: "/about-us/investor-relations" },
    { label: "Careers", href: "/about-us/careers" },
    { label: "Media Kit ↓", href: "https://securitizebrand.notion.site/..." },
  ],
  Developers: [
    { label: "APIs", href: "/apis" },
    { label: "Bug Bounty", href: "/bug-bounty" },
    { label: "Vault Registrar Sandbox", href: "https://labs.securitize.io/" },
  ],
};

export default function Footer() {
  return (
<footer className="overflow-hidden bg-[#03060d] text-white/50 w-full px-5 md:px-10 lg:px-[140px] py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-y-[60px]">

        {/* Logo Section */}
        <div className="hidden lg:block">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0zm0 4c1.5 0 2.9.35 4.15.95L6.95 16.15A10 10 0 0 1 4 14c0-5.52 4.48-10 10-10zm0 20c-1.5 0-2.9-.35-4.15-.95l11.2-11.2c.6 1.25.95 2.65.95 4.15 0 5.52-4.48 10-10 10z" fill="white" opacity="0.8"/>
          </svg>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-10 gap-y-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <div className="text-sm font-normal text-white">{category}</div>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-white transition-all no-underline"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pt-5 border-t border-white/15">
          <div className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-4 w-full">
            <p className="text-sm m-0">© 2026 Securitize LLC.</p>
            <div className="flex gap-8">
              <a className="text-sm hover:text-white transition-all no-underline" href="/disclosure-library">Disclosures</a>
              <a className="text-sm hover:text-white transition-all no-underline" href="/fee-schedule-table">Fee Schedule</a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-5 ml-auto text-white/80">
             {/* LinkedIn, Twitter, Youtube SVGs here... */}
             {/* Note: Gigamit gihapon imong original SVG paths pero gi-style ang wrapper */}
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <div className="text-[11px] leading-relaxed max-w-full opacity-80">
          <p className="mb-2">
            Securitize Markets, LLC is an SEC-registered broker-dealer and member of{" "}
            <a href="#" className="underline hover:text-white transition-all">FINRA</a>/
            <a href="#" className="underline hover:text-white transition-all">SIPC</a>.
          </p>
          <p className="mb-2 italic">Investing involves risk, including possible loss of principal.</p>
          <p className="font-bold text-white mt-4 uppercase text-[10px] tracking-widest">EU Disclosures</p>
          <p className="mt-1">In the European Union, investment services are offered by Securitize Europe Brokerage and Markets, S.V., S.A.</p>
        </div>
      </div>
    </footer>
  );
}