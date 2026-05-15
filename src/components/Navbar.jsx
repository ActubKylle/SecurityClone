import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  // NAV ITEMS
  const investments = [
    {
      title: "Onchain Features",
      link: "/onchain-features",
    },
    {
      title: "Private Funds",
      link: "/invest",
    },
    {
      title: "Public Stocks",
      link: "/investments/stocks",
    },
    {
      title: "Alternative Assets",
      link: "/investments/alternative-assets",
    },
    {
      title: "Registered Funds",
      link: "/investments/registered-funds",
    },
  ];

  const solutions = [
    {
      title: "Tokenization As A Service",
      desc: "Tokenize your investment products on our regulation-focused platform.",
      link: "/institutional-tokenization",
    },
    {
      title: "Fund Administration",
      desc: "Manage your entire fund on a single integrated platform.",
      link: "/fund-administration",
    },
    {
      title: "Digital Asset Reporting",
      desc: "Institutional-grade reporting for digital assets.",
      link: "/digital-asset-reporting",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999]
        h-[80px] lg:h-[100px]
        flex items-center justify-between
        px-6 lg:px-[36px]
        transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-black/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="relative z-50">
          <img
            src={scrolled ? "/assets/logo-dark.svg" : "/assets/logo.svg"}
            alt="Logo"
            className="h-[24px] lg:h-[29px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul
          className={`hidden lg:flex items-center gap-x-[30px]
          h-full transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {/* INVESTMENTS */}
          <li
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("investments")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Investments

              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "investments" ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </button>

            {/* DROPDOWN */}
            <div
              className={`absolute top-[75px] left-0
              w-[240px]
              bg-white rounded-xl border border-black/10
              shadow-2xl overflow-hidden
              transition-all duration-200 ${
                activeDropdown === "investments"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {investments.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group flex items-center justify-between
                  px-5 py-4 text-[15px]
                  text-black hover:bg-black/[0.03]
                  transition"
                >
                  <span>{item.title}</span>

                  <svg
                    className="w-3 h-3 opacity-60 transition-transform group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                  </svg>
                </Link>
              ))}
            </div>
          </li>

          {/* SOLUTIONS */}
          <li
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Solutions

              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </button>

            {/* DROPDOWN */}
            <div
              className={`absolute top-[75px] left-1/2 -translate-x-1/2
              w-[420px]
              bg-white rounded-xl border border-black/10
              shadow-2xl p-5
              transition-all duration-200 ${
                activeDropdown === "solutions"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="flex flex-col">
                {solutions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className={`group py-4 ${
                      index !== solutions.length - 1
                        ? "border-b border-black/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-black group-hover:text-blue-600 transition-colors">
                      <span className="font-medium text-[15px]">
                        {item.title}
                      </span>

                      <svg
                        className="w-3 h-3 transition-transform group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                      </svg>
                    </div>

                    <p className="text-xs text-black/50 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link
              to="/partner-ecosystem"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Ecosystem
            </Link>
          </li>

          <li>
            <Link
              to="/resources"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Resources
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              About
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all ${
                scrolled
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Sign Up
            </a>

            <a
              href="#"
              className={`text-sm font-medium px-4 py-2.5 rounded-full border transition-all ${
                scrolled
                  ? "border-black/20 text-black hover:bg-black/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Log In
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`lg:hidden relative z-50
            flex items-center justify-center
            w-10 h-10 rounded-md transition ${
              scrolled
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenu ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              } absolute`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenu ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              } absolute`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[9997]
        transition-all duration-300 ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-0 right-0
        w-full max-w-[380px] h-screen
        bg-white z-[9998]
        transition-transform duration-300 ease-out
        shadow-2xl ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-[100px] px-6 pb-8 h-full overflow-y-auto">
          {/* LINKS */}
          <div className="flex flex-col">
            <Link
              to="/onchain-features"
              onClick={() => setMobileMenu(false)}
              className="py-4 border-b border-black/10 text-[15px]"
            >
              Investments
            </Link>

            <Link
              to="/institutional-tokenization"
              onClick={() => setMobileMenu(false)}
              className="py-4 border-b border-black/10 text-[15px]"
            >
              Solutions
            </Link>

            <Link
              to="/partner-ecosystem"
              onClick={() => setMobileMenu(false)}
              className="py-4 border-b border-black/10 text-[15px]"
            >
              Ecosystem
            </Link>

            <Link
              to="/resources"
              onClick={() => setMobileMenu(false)}
              className="py-4 border-b border-black/10 text-[15px]"
            >
              Resources
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
              className="py-4 text-[15px]"
            >
              About
            </Link>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 mt-8">
            <a
              href="#"
              className="bg-black text-white text-sm font-medium py-3 rounded-full text-center"
            >
              Sign Up
            </a>

            <a
              href="#"
              className="border border-black/20 text-black text-sm font-medium py-3 rounded-full text-center"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;