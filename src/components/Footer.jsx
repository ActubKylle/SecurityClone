import { Link } from "react-router-dom";

const footerLinks = {
  Investments: [
    { label: "Private Funds", href: "/invest" },
    { label: "Public Stocks", href: "/investments/stocks" },
    { label: "Alternative Assets", href: "/investments/alternative-assets" },
    { label: "Registered Funds", href: "/investments/registered-funds" },
  ],
  Solutions: [
    { label: "Tokenization As A Service", href: "/solutions/institutional-tokenization" },
    { label: "Fund Administration", href: "/solutions/fund-administration" },
    { label: "Digital Asset Reporting", href: "/solutions/digital-asset-reporting" },
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
    { label: "APIs", href: "/insights/apis" },
    { label: "Bug Bounty", href: "/insights/bug-bounty" },
    { label: "Vault Registrar Sandbox", href: "https://labs.securitize.io/" },
  ],
};

function FooterLink({ href, children }) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm no-underline transition-all hover:text-white"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="text-sm no-underline transition-all hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#03060d] px-5 py-20 text-white/50 md:px-10 lg:px-[140px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-y-[60px]">
        <div className="hidden lg:block">
          <Link to="/" className="inline-flex items-center">
            <img
              src="/assets/footer-logo.svg"
              alt="Securitize"
              className="h-[28px] w-auto"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3 xl:grid-cols-6">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <div className="text-sm font-normal text-white">{category}</div>

              {links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-5 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full flex-col-reverse gap-4 lg:flex-row lg:gap-20">
            <p className="m-0 text-sm">© 2026 Securitize LLC.</p>

            <div className="flex gap-8">
              <Link className="text-sm no-underline transition-all hover:text-white" to="/disclosure-library">
                Disclosures
              </Link>
              <Link className="text-sm no-underline transition-all hover:text-white" to="/fee-schedule-table">
                Fee Schedule
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-full text-[11px] leading-relaxed opacity-80">
          <p className="mb-2">
            Securitize Markets, LLC is an SEC-registered broker-dealer and member of{" "}
            <a href="#" className="underline transition-all hover:text-white">
              FINRA
            </a>
            /
            <a href="#" className="underline transition-all hover:text-white">
              SIPC
            </a>
            .
          </p>

          <p className="mb-2 italic">
            Investing involves risk, including possible loss of principal.
          </p>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white">
            EU Disclosures
          </p>

          <p className="mt-1">
            In the European Union, investment services are offered by Securitize
            Europe Brokerage and Markets, S.V., S.A.
          </p>
        </div>
      </div>
    </footer>
  );
}