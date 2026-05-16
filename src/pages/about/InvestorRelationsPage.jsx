import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ArrowRight = ({ className = "w-3 h-3", color = "currentColor" }) => (
  <svg viewBox="0 0 12 12" fill="none" className={className}>
    <path d="M1.875 6H10.125" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.75 2.625L10.125 6L6.75 9.375" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightLg = ({ className = "w-6 h-6", color = "white" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3.75 12H20.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PdfIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="flex-shrink-0">
    <path
      d="M2.13 -1.69V12.8H23.46V4.21H17.6C17.3 4.21 17.06 3.97 17.06 3.68V-2.23H2.66C2.37 -2.23 2.13 -1.99 2.13 -1.69ZM18.13 -1.91L23.15 3.14H18.13V-1.91ZM5.86 6.36H19.73C20.02 6.36 20.26 6.60 20.26 6.90C20.26 7.19 20.02 7.43 19.73 7.43H5.86C5.57 7.43 5.33 7.19 5.33 6.90C5.33 6.60 5.57 6.36 5.86 6.36ZM5.86 9.58H19.73C20.02 9.58 20.26 9.82 20.26 10.12C20.26 10.41 20.02 10.65 19.73 10.65H5.86C5.57 10.65 5.33 10.41 5.33 10.12C5.33 9.82 5.57 9.58 5.86 9.58Z"
      fill="white"
    />
    <rect x="-0.5" y="13.87" width="26.1" height="9.66" rx="0.5" fill="white" />
    <text x="13" y="20.6" textAnchor="middle" fontSize="6.2" fontWeight="700" fontFamily="Geist, sans-serif" fill="#03060D">PDF</text>
    <path d="M2.13 24.61H23.46V27.29C23.46 27.43 23.41 27.57 23.31 27.67C23.21 27.77 23.07 27.83 22.93 27.83H2.66C2.37 27.83 2.13 27.59 2.13 27.29V24.61Z" fill="white" />
  </svg>
);

const recentPress = [
  {
    date: "5/11/2026",
    logo: "/assets/about/press/coindesk.svg",
    title: "Blackrock deepens tokenization push with new onchain fund offerings",
    href: "https://www.coindesk.com/business/2026/05/09/blackrock-deepens-tokenization-push-with-new-onchain-fund-offerings",
  },
  {
    date: "5/5/2026",
    logo: "/assets/about/press/bloomberg.svg",
    title: "Jump and Securitize Join Forces To Trade Tokenized Stocks",
    href: "https://www.bloomberg.com/news/articles/2026-05-05/jump-and-securitize-join-forces-to-trade-tokenized-stocks",
  },
  {
    date: "5/4/2026",
    logo: "/assets/about/press/ft.svg",
    title: "Securitize Receives Approval to Enable Custody and Atomic Settlement for Tokenized Securities",
    href: "https://markets.ft.com/data/announce/detail?dockey=600-202605040900PR_NEWS_USPRX____FL49483-1",
  },
];

const announcements = [
  {
    date: "5/6/2026",
    title: "Securitize, Jump Trading Group, and Jupiter Launch Fully Onchain, Regulated Trading for Tokenized Equities",
    href: "/learn/press/securitize-jump-trading-jupiter-onchain-regulated-tokenized-equities",
  },
  {
    date: "5/5/2026",
    title: "Securitize Receives Approval to Enable Custody and Atomic Settlement for Tokenized Securities",
    href: "/learn/press/securitize-approval-custody-atomic-settlement-tokenized-securities",
  },
  {
    date: "4/29/2026",
    title: "Securitize and Computershare Announce An Agreement to Enable Tokenized Shares for U.S. Issuers",
    href: "/learn/press/securitize-computershare-tokenized-shares-us-issuers",
  },
];

export default function InvestorRelationsPage() {
  return (
    <div className="bg-white text-[#03060D]">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[330px] md:h-[450px] lg:h-[546px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#080818" }} />
        <img
          src="/assets/about/header-image-investor.png"
          alt="Investor Relations"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          style={{ filter: "brightness(0.55)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, #06090F 0%, rgba(6,21,53,0) 40%)" }}
        />
        <div className="absolute inset-0 flex flex-col z-10 justify-end items-center max-w-[1000px] mx-auto pb-12 md:pb-[100px] pt-[100px] px-5 text-white text-center gap-5">
          <h1 className="font-serif font-normal text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05]">
            Investor Relations
          </h1>
          <p className="font-serif font-normal text-[22px] md:text-[32px] lg:text-[40px] leading-[1.2]">
            Securitize to Go Public Through Business Combination with Cantor Equity Partners II (NASDAQ: CEPT)*
          </p>
        </div>
      </section>

      {/* Investor Update */}
      <section className="px-5 md:px-10 pt-[60px] md:pt-[80px] pb-0 bg-white">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Carlos card */}
            <div
              className="relative overflow-hidden lg:col-span-2 min-h-[360px] md:min-h-[420px]"
              style={{ backgroundColor: "#F2EFEA" }}
            >
              <div className="flex flex-col justify-between p-8 md:p-12 h-full relative z-10 max-w-[60%]">
                <div>
                  <p className="text-[14px] md:text-[15px] text-[#03060D] opacity-80 mb-6">Carlos Domingo, CEO</p>
                  <h2 className="font-serif font-normal text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] text-[#03060D]">
                    Investor<br />Presentation
                  </h2>
                </div>
                <div className="flex flex-row gap-2 mt-10">
                  <a
                    href="https://www.netroadshow.com/nrs/home/#!/?show=dc35adf6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-5 rounded-[44px] text-[14px] bg-[#03060D] text-white hover:bg-[#03060D]/80 transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    Webcast
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-5 rounded-[44px] text-[14px] border border-[#03060D]/30 text-[#03060D] hover:bg-[#03060D]/10 hover:border-[#03060D]/60 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    Transcript ↗
                  </a>
                </div>
              </div>
              <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-[48%]">
                <img
                  src="/assets/about/carlos.png"
                  alt="Carlos Domingo"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>

            {/* Jan 28 announcement card */}
            <div
              className="p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[420px]"
              style={{ backgroundColor: "#F2EFEA" }}
            >
              <div>
                <p className="text-[16px] text-[#03060D] opacity-60 mb-8">Jan 28, 2026</p>
                <h3 className="font-serif text-[20px] md:text-[22px] text-[#03060D] leading-[1.3]">
                  Securitize and Cantor Equity Partners II Announce Public Filing of Registration Statement on Form S-4
                </h3>
              </div>
              <a
                href="https://securitize.io/learn/press/Securitize-and-Cantor-Equity-Partners-II-Announce-Public-Filing-of-Registration-Statement-on-Form-S4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-[#03060D] hover:underline inline-flex items-center gap-1.5 mt-6"
              >
                Read more <ArrowRight color="#03060D" />
              </a>
            </div>
          </div>

          {/* Two dark CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <a
              href="https://cdn.builder.io/o/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fefd85c0024574edc9bb8fb0e44700a07?alt=media"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-transparent hover:border-white/30 transition-colors bg-[#03060D] text-white px-7 py-7 md:py-9 flex items-center justify-between group"
            >
              <div className="flex items-center gap-5">
                <PdfIcon />
                <span className="font-serif text-[22px] md:text-[28px]">Investor Presentation PDF</span>
              </div>
              <ArrowRightLg className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.sec.gov/Archives/edgar/data/1762096/000121390026042685/ea0264119-04.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-transparent hover:border-white/30 transition-colors bg-[#03060D] text-white px-7 py-7 md:py-9 flex items-center justify-between group"
            >
              <div className="flex items-center gap-5">
                <PdfIcon />
                <span className="font-serif text-[22px] md:text-[28px]">Form S-4/A</span>
              </div>
              <ArrowRightLg className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Ticker disclaimer (dark band) */}
      <section className="px-5 md:px-10 pt-0 pb-10" style={{ backgroundColor: "#06090F" }}>
        <div className="max-w-[1000px] mx-auto pt-20 md:pt-[120px]">
          <p className="text-center text-[12px] text-white opacity-60">
            *Once the business combination is effective, Securitize intends to trade using the ticker SECZ.
          </p>
        </div>
      </section>

      {/* Recent Press */}
      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#F3F7FC" }}
      >
        <div className="max-w-[1160px] mx-auto flex flex-col items-center">
          <p className="text-[14px] text-[#4F74AB] opacity-80 mb-6">Recent Press</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full py-5 lg:py-10 px-5">
            {recentPress.map((p) => (
              <div
                key={p.href}
                className="flex flex-col items-start bg-white p-5 lg:p-8 gap-5 max-w-[350px] w-full mx-auto h-full"
              >
                <div className="h-[60px]">
                  <img src={p.logo} alt="Logo" className="h-[60px] w-auto object-contain" />
                </div>
                <p className="text-[14px] text-[#03060D] opacity-60">{p.date}</p>
                <h3 className="text-[16px] md:text-[24px] text-[#03060D] line-clamp-4 leading-[1.25]">{p.title}</h3>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-semibold text-[#03060D] opacity-80 hover:underline inline-flex items-center gap-1 mt-auto"
                >
                  Read More <ArrowRight color="#03060D" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Announcements */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px] bg-white">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
            <div className="lg:w-1/2">
              <p className="text-[14px] text-[#4F74AB] mb-5">Press Releases</p>
              <h2 className="font-serif font-normal text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] text-[#03060D] mb-10">
                Company Announcements
              </h2>
              <a
                href="/about-us/press-releases"
                className="py-2 px-5 rounded-[44px] text-[14px] bg-[#03060D] text-white hover:bg-[#03060D]/80 transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
              >
                View All Announcements
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col">
              {announcements.map((a, i) => (
                <div key={a.href}>
                  {i > 0 && <div className="w-full border-t border-[#03060D]/10 my-6" />}
                  <div className="flex flex-col gap-5">
                    <p className="text-[14px] text-[#03060D] opacity-60">{a.date}</p>
                    <h3 className="font-serif text-[16px] md:text-[24px] text-[#03060D] line-clamp-3 leading-[1.25]">
                      {a.title}
                    </h3>
                    <a
                      href={a.href}
                      className="text-[14px] font-semibold text-[#03060D] opacity-80 hover:underline inline-flex items-center gap-1"
                    >
                      Read More <ArrowRight color="#03060D" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Securitize */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#F3F7FC" }}>
        <div className="max-w-[1160px] mx-auto relative z-10">
          <div className="flex flex-col gap-10 max-w-[650px] py-[60px] lg:py-[160px] px-5">
            <h2 className="font-serif font-normal text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] text-[#03060D]">
              About Securitize
            </h2>
            <div className="flex flex-col gap-4" style={{ color: "#040F29" }}>
              <p className="text-[16px] leading-[1.5]">
                As the leading platform for tokenized real-world assets, Securitize is redefining how
                capital markets operate through regulated, onchain infrastructure.
              </p>
              <p className="text-[16px] leading-[1.5]">
                Backed by trusted institutional partners and a strong regulatory foundation, we enable
                compliant issuance, trading, and management of digital securities.
              </p>
              <p className="text-[16px] leading-[1.5]">
                Our mission is to modernize finance by bridging traditional and blockchain
                ecosystems—creating new opportunities for efficiency, access, and growth.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 top-[-5%] h-[150%] max-w-[600px] translate-x-1/2 md:translate-x-1/3 lg:translate-x-0 opacity-5">
            <img
              src="/assets/about/ir-logo-gradient.svg"
              alt=""
              className="h-full w-full object-cover object-left"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#4F74AB" }}
      >
        <div className="max-w-[1160px] mx-auto flex flex-col items-center justify-center">
          <h2 className="font-serif font-normal text-[28px] md:text-[64px] lg:text-[80px] leading-[1.05] text-white text-center mb-10 max-w-[900px]">
            Want to learn more?
          </h2>
          <a
            href="/investor-relations-lgf"
            className="py-2 px-5 rounded-[44px] text-[14px] bg-white text-[#03060D] hover:bg-white/80 transition-colors inline-flex items-center gap-1.5 group"
          >
            Get in Touch
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}