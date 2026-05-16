import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Investments",
    dropdown: [
      { title: "Onchain Features", link: "/onchain-features" },
      { title: "Private Funds", link: "/invest" },
      { title: "Public Stocks", link: "/investments/stocks" },
      { title: "Alternative Assets", link: "/investments/alternative-assets" },
      { title: "Registered Funds", link: "/investments/registered-funds" },
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
    { title: "Intro to Tokenization", link: "/insights/intro-to-tokenization" },
    { title: "Whitepapers & Research", link: "/insights/whitepapers" },
    { title: "Articles", link: "/insights/articles" },
    { title: "Videos", link: "/insights/videos" },
    { section: "Developers" },
    { title: "APIs", link: "/apis" },
    { title: "Bug Bounty", link: "/bug-bounty" },
    {
      title: "Vault Registrar Sandbox",
      link: "https://labs.securitize.io/",
      external: true,
    },
  ],
},  { label: "About", link: "/about" },
];

function Navbar({ variant = "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isLight = variant === "light";
  const isSolid = scrolled || isLight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const logoSrc = isSolid ? "/assets/logo-dark.svg" : "/assets/logo.svg";
  const navText = isSolid ? "text-black" : "text-white";

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[9999] flex h-[80px] w-full items-center justify-between px-6 transition-all duration-300 lg:h-[100px] lg:px-9 ${
          isSolid
            ? "bg-[#f3f7fc]/95 text-black backdrop-blur-md border-b border-black/10"
            : "bg-transparent text-white"
        }`}
      >
        <Link to="/" className="relative z-50">
          <img
            src={logoSrc}
            alt="Securitize"
            className="h-[24px] w-auto lg:h-[29px]"
          />
        </Link>

        <ul className={`hidden h-full items-center gap-x-[30px] lg:flex ${navText}`}>
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative flex h-full items-center"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 text-sm opacity-80 transition-opacity hover:opacity-100">
                    {item.label}
                    <ChevronIcon open={activeDropdown === item.label} />
                  </button>

                  <Dropdown
                    item={item}
                    open={activeDropdown === item.label}
                  />
                </>
              ) : (
                <Link
                  to={item.link}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#"
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                isSolid
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Sign Up
            </a>

            <a
              href="#"
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                isSolid
                  ? "border-black/20 text-black hover:bg-black/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Log In
            </a>
          </div>

          <button
            onClick={() => setMobileMenu((prev) => !prev)}
            className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-md transition lg:hidden ${
              isSolid
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

function Dropdown({ item, open }) {
  const isResources = item.label === "Resources";

  if (isResources) {
    return (
      <div
        className={`absolute top-[75px] left-1/2 w-[292px] -translate-x-1/2 bg-white p-5 text-black shadow-2xl transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
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
                {link.title}
                <ArrowIcon />
              </p>
            );

            return (
              <li key={link.title}>
                {link.external ? (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[3px]"
                  >
                    {content}
                  </a>
                ) : (
                  <Link to={link.link} className="block py-[3px]">
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`absolute top-[75px] bg-white text-black shadow-2xl border border-black/10 transition-all duration-200 ${
        item.wide
          ? "left-1/2 w-[420px] -translate-x-1/2 rounded-xl p-5"
          : "left-0 w-[240px] overflow-hidden rounded-xl"
      } ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      {item.dropdown.map((link, index) => (
        <Link
          key={link.title}
          to={link.link}
          className={`group block px-5 py-4 transition hover:bg-black/[0.03] ${
            item.wide && index !== item.dropdown.length - 1
              ? "border-b border-black/10"
              : ""
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[15px] font-medium">{link.title}</span>
            <ArrowIcon />
          </div>

          {link.desc && (
            <p className="mt-1 text-xs leading-relaxed text-black/50">
              {link.desc}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
function MobileMenu({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9997] bg-black/40 backdrop-blur-sm transition-all lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[9998] h-screen w-full max-w-[380px] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 pb-8 pt-[100px]">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link || item.dropdown?.[0]?.link || "/"}
                onClick={onClose}
                className="border-b border-black/10 py-4 text-[15px] text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a href="#" className="rounded-full bg-black py-3 text-center text-sm font-medium text-white">
              Sign Up
            </a>
            <a href="#" className="rounded-full border border-black/20 py-3 text-center text-sm font-medium text-black">
              Log In
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 256 256">
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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