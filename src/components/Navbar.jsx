import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] h-[80px] lg:h-[100px]
      flex items-center justify-between px-6 lg:px-[36px]
      transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          className="h-[24px] lg:h-[29px]"
          src={scrolled ? "/assets/logo-dark.svg" : "/assets/logo.svg"}
          alt="Home"
        />
      </Link>

      {/* NAV LINKS */}
      <ul
        className={`hidden lg:flex items-center gap-x-[30px]
        h-full font-medium transition-colors ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {/* INVESTMENTS DROPDOWN */}
        <li
          className="relative h-full flex items-center"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-sm">Investments</span>

            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>

          {/* DROPDOWN */}
          <div
            className={`absolute top-[70px] left-0 w-[220px]
  bg-white border border-black/10
  rounded-md shadow-xl
  py-2
  transition-all duration-200 ${
    showDropdown
      ? "opacity-100 visible translate-y-0"
      : "opacity-0 invisible -translate-y-1"
  }`}
          >
            <div className="flex flex-col">
              <Link
                to="/onchain-features"
                className="group flex items-center justify-between
      px-5 py-3 text-[15px]
      text-black hover:bg-gray-50 transition"
              >
                <span>Onchain Features</span>

                <svg
                  className="w-3 h-3 opacity-70 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              </Link>

              <Link
                to="/invest"
                className="group flex items-center justify-between
      px-5 py-3 text-[15px]
      text-black hover:bg-gray-50 transition"
              >
                <span>Private Funds</span>

                <svg
                  className="w-3 h-3 opacity-70 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              </Link>

              <Link
                to="/investments/stocks"
                className="group flex items-center justify-between
      px-5 py-3 text-[15px]
      text-black hover:bg-gray-50 transition"
              >
                <span>Public Stocks</span>

                <svg
                  className="w-3 h-3 opacity-70 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              </Link>

              <Link
                to="/investments/alternative-assets"
                className="group flex items-center justify-between
      px-5 py-3 text-[15px]
      text-black hover:bg-gray-50 transition"
              >
                <span>Alternative Assets</span>

                <svg
                  className="w-3 h-3 opacity-70 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              </Link>

              <Link
                to="/investments/registered-funds"
                className="group flex items-center justify-between
      px-5 py-3 text-[15px]
      text-black hover:bg-gray-50 transition"
              >
                <span>Registered Funds</span>

                <svg
                  className="w-3 h-3 opacity-70 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              </Link>
            </div>
          </div>
        </li>

        <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
          Solutions
        </li>

        <li>
          <Link
            to="/partner-ecosystem"
            className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
          >
            Ecosystem
          </Link>
        </li>

        <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
          Resources
        </li>

        <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
          About
        </li>
      </ul>

      {/* BUTTONS */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className={`text-sm font-medium px-6 py-2 rounded-full transition-all shadow-lg ${
            scrolled
              ? "bg-black text-white hover:bg-black/90"
              : "bg-white text-black hover:bg-white/90"
          }`}
        >
          Sign Up
        </a>

        <a
          href="#"
          className={`text-sm font-medium px-4 py-2 border rounded-full transition-all ${
            scrolled
              ? "text-black border-black/30 hover:bg-black/5"
              : "text-white border-white/30 hover:bg-white/10"
          }`}
        >
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
