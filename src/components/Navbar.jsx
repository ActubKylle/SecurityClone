import { useState, useEffect } from "react";
import { Link,NavLink, useLocation } from "react-router-dom";
/* ─────────────────────────────────────────────────────────────
   FONT INJECTION
   Geist       = Securitize's UI sans-serif (nav labels, buttons)
   Cormorant   = closest free match to PP Editorial New (headlines)
   Add this once in your root layout / index.html instead if preferred.
───────────────────────────────────────────────────────────── */
const FontInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Geist:wght@300;400;500&display=swap');

    body, html {
      font-family: 'Geist', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}</style>
);

const navItems = [
  {
    label: "Investments",
    dropdown: [
      { title: "Onchain Features",      link: "/onchain-features" },
      { title: "Private Funds",         link: "/invest" },
      { title: "Public Stocks",         link: "/investments/stocks" },
      { title: "Alternative Assets",    link: "/investments/alternative-assets" },
      { title: "Registered Funds",      link: "/investments/registered-funds" },
    ],
  },
  {
    label: "Solutions",
    wide: true,
    dropdown: [
      {
        title: "Tokenization As A Service",
        desc: "Tokenize your investment products on our regulation-focused platform.",
        link: "/solutions/institutional-tokenization",
      },
      {
        title: "Fund Administration",
        desc: "Manage your entire fund on a single integrated platform.",
        link: "/solutions/fund-administration",
      },
      {
        title: "Digital Asset Reporting",
        desc: "Institutional-grade reporting for digital assets.",
        link: "/solutions/digital-asset-reporting",
      },
    ],
  },
  { label: "Ecosystem", link: "/partner-ecosystem" },
  {
    label: "Resources",
    dropdown: [
      { section: "Insights" },
      { title: "Intro to Tokenization",    link: "/insights/intro-to-tokenization" },
      { title: "Whitepapers & Research",   link: "/insights/whitepapers" },
      { title: "Articles",                 link: "/insights/articles" },
      { title: "Videos",                   link: "/insights/videos" },
      { section: "Developers" },
      { title: "APIs",                     link: "/insights/apis" },
      { title: "Bug Bounty",               link: "/insights/bug-bounty" },
      {
        title: "Vault Registrar Sandbox",
        link: "https://labs.securitize.io/",
        external: true,
      },
    ],
  },
  {
    label: "About",
    dropdown: [
      { title: "Company",            link: "/about-us/our-story" },
      { title: "Media Coverage",     link: "/about-us/media-coverage" },
      { title: "Press Releases",     link: "/about-us/press-releases" },
      { title: "Investor Relations", link: "/about-us/investor-relations" },
      { title: "Careers",            link: "/about-us/careers" },
    ],
  },
];

function Navbar({ variant = "dark" }) {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenu, setMobileMenu]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isLight = variant === "light";
  const isSolid = scrolled || isLight;

  const location = useLocation();

const isItemActive = (item) => {
  if (item.link) return location.pathname === item.link;

  if (item.dropdown) {
    return item.dropdown.some((link) => link.link === location.pathname);
  }

  return false;
};


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const logoSrc = isSolid ? "/assets/logo-dark.svg" : "/assets/logo.svg";
  const navText = isSolid ? "text-black" : "text-white";

  return (
    <>
      <FontInjector />

      <nav
        className={`fixed left-0 top-0 z-[9999] flex h-[72px] w-full min-w-[300px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:h-[96px] lg:px-9 ${
          isSolid
            ? "border-b border-black/10 bg-[#f3f7fc]/95 text-black backdrop-blur-md"
            : "bg-transparent text-white"
        }`}
        style={{ fontFamily: "'Geist', sans-serif" }}
      >
        <Link to="/" className="relative z-50 flex items-center">
          <img
            src={logoSrc}
            alt="Securitize"
            className="h-[20px] w-auto max-w-[145px] sm:h-[24px] sm:max-w-[180px] lg:h-[29px]"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className={`hidden h-full items-center gap-x-[24px] xl:gap-x-[30px] lg:flex ${navText}`}>
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative flex h-full items-center"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
             {item.dropdown ? (
  <>
    <button
      className={`relative flex items-center gap-1 text-sm transition-opacity hover:opacity-100 ${
        isItemActive(item) ? "opacity-100" : "opacity-70"
      }`}
      style={{ fontFamily: "'Geist', sans-serif" }}
    >
      {item.label}
      <ChevronIcon open={activeDropdown === item.label} />

      {isItemActive(item) && (
        <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-current" />
      )}
    </button>

    <Dropdown item={item} open={activeDropdown === item.label} />
  </>
) : (
  <NavLink
    to={item.link}
    className={({ isActive }) =>
      `relative text-sm transition-opacity hover:opacity-100 ${
        isActive ? "opacity-100" : "opacity-70"
      }`
    }
    style={{ fontFamily: "'Geist', sans-serif" }}
  >
    {item.label}

    {location.pathname === item.link && (
      <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-current" />
    )}
  </NavLink>
)}
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/registration/name"
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all xl:px-6 ${
                isSolid
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              }`}
              style={{ fontFamily: "'Geist', sans-serif" }}
            >
              Sign Up
            </a>
            <a
              href="/login"
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                isSolid
                  ? "border-black/20 text-black hover:bg-black/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              style={{ fontFamily: "'Geist', sans-serif" }}
            >
              Log In
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenu((prev) => !prev)}
            className={`relative z-[100001] mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition lg:hidden ${
              isSolid || mobileMenu
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileMenu} onClose={() => setMobileMenu(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   DROPDOWN
───────────────────────────────────────────────────────────── */
function Dropdown({ item, open }) {
  const isResources = item.label === "Resources";
  const isAbout     = item.label === "About";

  const sharedTransition = `absolute top-[75px] bg-white text-black shadow-2xl transition-all duration-200 ${
    open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
  }`;

  const fontStyle = { fontFamily: "'Geist', sans-serif" };

  if (isResources) {
    return (
      <div className={`${sharedTransition} left-1/2 w-[292px] -translate-x-1/2 p-5`} style={fontStyle}>
        <ul className="flex flex-col gap-2">
          {item.dropdown.map((link, index) => {
            if (link.section) {
              return (
                <li
                  key={link.section}
                  className={`-mx-5 border-b border-black/10 px-5 pb-2 pt-2 text-[12px] font-medium uppercase tracking-wide text-black/50 ${
                    index === 0 ? "pt-0" : "mt-2"
                  }`}
                >
                  {link.section}
                </li>
              );
            }
            const content = (
              <p className="flex items-center gap-2 text-[16px] font-medium leading-[1.35] text-black">
                {link.title}<ArrowIcon />
              </p>
            );
            return (
              <li key={link.title}>
                {link.external ? (
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className="block py-[3px]">
                    {content}
                  </a>
                ) : (
                  <Link to={link.link} className="block py-[3px]">{content}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (isAbout) {
    return (
      <div className={`${sharedTransition} left-1/2 w-[240px] -translate-x-1/2 border border-black/10 p-5`} style={fontStyle}>
        <ul className="flex flex-col gap-2">
          {item.dropdown.map((link) => (
            <li key={link.title}>
              <Link to={link.link} className="group block py-[3px]">
                <p className="flex items-center gap-2 text-[16px] font-medium leading-[1.35] text-black">
                  {link.title}<ArrowIcon />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`${sharedTransition} border border-black/10 ${
        item.wide
          ? "left-1/2 w-[420px] -translate-x-1/2 rounded-xl p-5"
          : "left-0 w-[240px] overflow-hidden rounded-xl"
      }`}
      style={fontStyle}
    >
      {item.dropdown.map((link, index) => (
        <Link
          key={link.title}
          to={link.link}
          className={`group block px-5 py-4 transition hover:bg-black/[0.03] ${
            item.wide && index !== item.dropdown.length - 1 ? "border-b border-black/10" : ""
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[15px] font-medium">{link.title}</span>
            <ArrowIcon />
          </div>
          {link.desc && (
            <p className="mt-1 text-xs leading-relaxed text-black/50">{link.desc}</p>
          )}
        </Link>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────────────────────── */
function MobileMenu({ open, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#173d35]/95 transition-all duration-300 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute left-1/2 top-[14px] h-[calc(100vh-28px)] w-[calc(100%-20px)] max-w-[960px] -translate-x-1/2 overflow-hidden bg-white shadow-2xl transition-all duration-300 sm:top-[24px] sm:h-[calc(100vh-48px)] sm:w-[calc(100%-32px)] ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
        style={{ fontFamily: "'Geist', sans-serif" }}
      >
        {/* Mobile header */}
        <div className="flex h-[72px] items-center justify-between border-b border-black/10 px-4 sm:h-[86px] sm:px-6 md:px-8">
          <Link to="/" onClick={onClose} className="flex items-center">
            <img
              src="/assets/logo-dark.svg"
              alt="Securitize"
              className="h-[22px] w-auto max-w-[145px] sm:h-[31px] sm:max-w-[190px]"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-[34px] font-light leading-none text-black"
          >
            ×
          </button>
        </div>

        {/* Auth buttons */}
        <div className="flex flex-wrap gap-2 border-b border-black/10 px-4 py-3 sm:px-6 md:px-8">
          <a href="#" className="rounded-full bg-[#03060d] px-5 py-[10px] text-[14px] font-semibold text-white">
            Sign Up
          </a>
          <a href="#" className="rounded-full border border-black/25 px-5 py-[10px] text-[14px] font-medium text-black">
            Log In
          </a>
        </div>

        {/* Nav items */}
        <div className="h-[calc(100%-137px)] overflow-y-auto sm:h-[calc(100%-147px)]">
          <nav className="px-4 py-3 sm:px-6 md:px-8">
            {navItems.map((item) => {
              const isOpen = openDropdown === item.label;

              if (item.dropdown) {
                return (
                  <div key={item.label} className="border-b border-black/5">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className="flex w-full items-center justify-between py-[16px] text-left text-[15px] font-normal text-[#374151]"
                    >
                      <span>{item.label}</span>
                      <ChevronIcon open={isOpen} />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-4 flex flex-col gap-3 pb-2 sm:ml-5">
                          {item.dropdown.map((link) => {
                            if (link.section) {
                              return (
                                <p key={link.section} className="pt-2 text-[12px] font-medium uppercase tracking-wide text-black/40">
                                  {link.section}
                                </p>
                              );
                            }
                            return link.external ? (
                              <a
                                key={link.title}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="text-[15px] font-medium leading-snug text-black"
                              >
                                {link.title} →
                              </a>
                            ) : (
                              <Link
                                key={link.title}
                                to={link.link}
                                onClick={onClose}
                                className="text-[15px] font-medium leading-snug text-black"
                              >
                                {link.title} →
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.link}
                  onClick={onClose}
                  className="block border-b border-black/5 py-[16px] text-[15px] font-normal text-[#374151]"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────── */
function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default Navbar;