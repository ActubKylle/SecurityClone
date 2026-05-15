import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  "All Opportunities",
  "U.S. Treasury",
  "Private Equity",
  "Private Credit",
  "Crypto",
  "Secondary Trading",
];

const funds = [
  {
    category: "Private Equity",
    offeredBy: "Offered by Securitize Capital",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F342a1dc24d9d4c758b28ba9fb4eabf03",
    title: "Securitize Tokenized AAA CLO Fund",
    description: "Attractive income from AAA-rated CLOs with capital preservation and seamless tokenized access.",
    href: "/primary-market/Securitize-BNY-CLO-Fund",
    external: false,
    details: [
      { label: "Asset Class", value: "Fixed Income" },
      { label: "Min. Investment", value: "$100k" },
      { label: "Investor Type", value: "Accredited Investor" },
      { label: "Liquidity", value: "Daily" },
    ],
    categoryColor: "rgb(49, 118, 171)",
  },
  {
    category: "Private Equity",
    offeredBy: "Offered by Securitize Capital",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fa13c1ef6dd96483b8ca9dc9a1d44cd24",
    title: "Hamilton Lane Senior Credit Opportunities Securitize Fund",
    description: "Evergreen private credit fund seeking risk-adjusted returns and attractive floating cash yield.",
    href: "https://securitize.io/primary-market/hl-scope",
    external: true,
    details: [
      { label: "Asset Class", value: "Senior Credit" },
      { label: "Min. Investment", value: "$10K" },
      { label: "Investor Type", value: "Qualified Purchaser" },
      { label: "Redemptions", value: "On-Demand" },
    ],
    categoryColor: "rgb(49, 118, 171)",
  },
  {
    category: "U.S. Treasury",
    offeredBy: "Offered by Securitize Markets",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc0ebbc2cf3af4a239a40104d2064df08",
    title: "VanEck Treasury Fund",
    description: "Earn stable yield with daily liquidity by investing in short-term U.S. Treasuries via blockchain.",
    href: "https://securitize.io/primary-market/vaneck-vbill",
    external: true,
    details: [
      { label: "Asset Class", value: "Fixed Income" },
      { label: "Min. Investment", value: "$100k" },
      { label: "Investor Type", value: "Qualified Purchaser" },
      { label: "Redemptions", value: "Instant" },
    ],
    categoryColor: "rgb(142, 113, 55)",
  },
  {
    category: "Crypto",
    offeredBy: "Offered by Securitize Markets",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F8f80385d45994c37ad67ebdab69f66fb",
    title: "Mantle Index Four Fund",
    description: "Access institutional-grade crypto exposure with yield enhancements, bridging traditional finance and DeFi.",
    href: "https://securitize.io/primary-market/mantle-index-four-fund",
    external: true,
    details: [
      { label: "Asset Class", value: "Crypto" },
      { label: "Min. Investment", value: "$100K" },
      { label: "Investor Type", value: "Accredited Investor" },
      { label: "Redemptions", value: "Weekly" },
    ],
    categoryColor: "rgb(30, 124, 66)",
  },
  {
    category: "Private Equity",
    offeredBy: "Offered by Securitize Capital",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fb18b62d69c274ede8a421d8b9995fa62",
    title: "Securitize Tokenized Apollo Diversified Credit Fund",
    description: "Evergreen credit fund seeking to generate a return comprised of both current income and capital appreciation.",
    href: "https://securitize.io/primary-market/apollo-diversified-credit-securitize-fund",
    external: true,
    details: [
      { label: "Asset Class", value: "Diversified Credit" },
      { label: "Min. Investment", value: "$50K" },
      { label: "Investor Type", value: "Accredited Investor" },
      { label: "Redemptions", value: "Quarterly" },
    ],
    categoryColor: "rgb(49, 118, 171)",
  },
  {
    category: "Private Equity",
    offeredBy: "Offered by Securitize Capital",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F08619dd5a48544c587ca7a8f4236ac77",
    title: "Hamilton Lane Secondary VI Securitize Fund",
    description: "Evergreen private credit fund seeking risk-adjusted returns and attractive floating cash yield.",
    href: "https://securitize.io/primary-market/hl-secondary-VI",
    external: true,
    details: [
      { label: "Asset Class", value: "Private Equity" },
      { label: "Min. Investment", value: "$20K" },
      { label: "Investor Type", value: "Qualified Purchaser" },
      { label: "Lock-Up", value: "12 Months" },
    ],
    categoryColor: "rgb(49, 118, 171)",
  },
  {
    category: "U.S. Treasury",
    offeredBy: "Securitize Markets Exclusive",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd697eaeb536046a78d30095a6ca20d3d",
    title: "BlackRock USD Institutional Digital Liquidity Fund (BUIDL)",
    description: "The first tokenized fund issued on a public blockchain by the world's largest asset manager.",
    href: "https://securitize.io/primary-market/blackrock-fund",
    external: true,
    details: [
      { label: "Asset Class", value: "U.S. Treasury" },
      { label: "Min. Investment", value: "$5M" },
      { label: "Investor Type", value: "Qualified Purchaser" },
      { label: "Redemptions", value: "Instant" },
    ],
    categoryColor: "rgb(142, 113, 55)",
  },
  {
    category: "Private Equity",
    offeredBy: "Offered by Securitize Capital",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fee3fe60d2b1147dba9fdef43b3f12c5c",
    title: "Hamilton Lane Equity Opportunities Securitize Fund V",
    description: "Globally diversified fund with direct equity investments in companies with small to mid-sized enterprise values.",
    href: "https://securitize.io/primary-market/hl-eov",
    external: true,
    details: [
      { label: "Asset Class", value: "Private Equity" },
      { label: "Min. Investment", value: "$20k" },
      { label: "Investor Type", value: "Qualified Purchaser" },
      { label: "Lock-Up", value: "12 Months" },
    ],
    categoryColor: "rgb(49, 118, 171)",
  },
  {
    category: "Private Equity",
    offeredBy: "Offered by Securitize Capital",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F7bb709db88e544269b03525a55db8dae",
    title: "KKR Health Care Strategic Growth II Securitize Fund",
    description: "Institutional healthcare growth equity, focused on scale, innovation, and long-term value creation.",
    href: "/primary-market/kkr-healthcare-growth-fund",
    external: false,
    details: [
      { label: "Asset Class", value: "Private Equity" },
      { label: "Min. Investment", value: "$20k" },
      { label: "Investor Type", value: "Qualified Purchaser" },
      { label: "Lock-Up", value: "12 Months" },
    ],
    categoryColor: "rgb(49, 118, 171)",
  },
  {
    category: "U.S. Treasury",
    offeredBy: "Offered by Securitize Markets",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fcbfab8664d9246c290bceb4cf6212fa0",
    title: "Arca U.S. Treasury Fund",
    description: "Access yield in a 40 Act fund derived from a portfolio of 80%+ U.S. Treasury securities.",
    href: "https://securitize.io/primary-market/arca-rcoin",
    external: true,
    details: [
      { label: "Asset Class", value: "U.S. Treasuries" },
      { label: "Min. Investment", value: "$1k" },
      { label: "Investor Type", value: "Retail Investor" },
      { label: "Redemptions", value: "Instant" },
    ],
    categoryColor: "rgb(142, 113, 55)",
  },
  {
    category: "Secondary Trading",
    offeredBy: null,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fedc1e0c86a07472eaa8b2aaa4aec0799",
    title: "Blockchain Capital",
    description: "Leading VC firm in the blockchain industry investing in 150+ crypto companies across all stages. *Currently open for non-US investors.",
    href: "https://id.securitize.io/secondary-market/assets/d5cb4552-d82f-431c-8204-7f9ce9ada7fd",
    external: true,
    details: [
      { label: "Asset Class", value: "Venture Capital" },
      { label: "Token", value: "BCAP" },
      { label: "Investor Type", value: "Accredited Investor" },
    ],
    categoryColor: "rgb(108, 20, 107)",
  },
  {
    category: "Secondary Trading",
    offeredBy: "Securitize Markets Exclusive",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc23572f2d83b4f8da81675f25d726499",
    title: "Science Blockchain",
    description: "VC firm investing in seed-stage, early-stage, and later-stage companies based in the US.",
    href: "https://id.securitize.io/secondary-market/assets/b18f9206-9efd-4369-b984-7113c6f045bf",
    external: true,
    details: [
      { label: "Asset Class", value: "Venture Capital" },
      { label: "Token", value: "SCI2" },
      { label: "Investor Type", value: "Accredited Investor" },
    ],
    categoryColor: "rgb(108, 20, 107)",
  },
];

function FundCard({ fund }) {
  return (
    <a
      href={fund.href}
      target={fund.external ? "_blank" : undefined}
      rel={fund.external ? "noopener noreferrer" : undefined}
      className="bg-white flex flex-col no-underline hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src={fund.image}
            alt={fund.title}
            className="w-full h-full mkt-object-cover" // Tandaan: Ang object-cover ay nanatili dahil ito ay standard utility, tinanggal lang ang maling mkt- sa simula kung kinakailangan ngunit kadalasan ay object-cover lang talaga ito sa normal Tailwind.
            style={{ objectFit: 'cover' }} 
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-[32px] flex flex-col gap-[20px] flex-1">
        {/* Category tags */}
        <div className="flex items-center gap-[12px]">
          <span className="text-xs font-medium" style={{ color: fund.categoryColor }}>
            {fund.category}
          </span>
          {fund.offeredBy && (
            <>
              <div className="w-[2px] h-[12px] rounded-full bg-black opacity-30" />
              <span className="text-xs font-medium text-[#4F73AB]">{fund.offeredBy}</span>
            </>
          )}
        </div>

        {/* Title & description */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-semibold text-[#03060d] leading-snug min-h-[62px]">
            {fund.title}
          </h3>
          <p className="text-sm text-[#03060d] opacity-60 leading-relaxed min-h-[63px]">
            {fund.description}
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-[14px]">
          {fund.details.map((detail, i) => (
            <div key={i}>
              <div className="flex items-center gap-[4px]">
                <span className="text-sm text-[#03060d] w-[120px]">{detail.label}</span>
                <span className="text-sm font-semibold text-[#03060d]">{detail.value}</span>
              </div>
              {i < fund.details.length - 1 && (
                <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function InvestPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Opportunities");

  const filtered =
    activeCategory === "All Opportunities"
      ? funds
      : funds.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <div className="w-full h-[460px] relative overflow-hidden bg-[#030B1E]">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgb(8,24,56)",
            backgroundImage: `
              linear-gradient(rgba(8,24,56,0.72), rgba(8,24,56,0.72)),
              url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1160px] mx-auto h-full w-full flex items-end justify-between px-[20px] lg:px-0 pb-[40px] md:pb-[100px]">

          {/* LEFT */}
          <div className="flex flex-col">
            <h1 className="text-[44px] md:text-[84px] leading-[0.95] text-white font-serif mb-[10px]">
              Tokenized
              <br />
              Real-World Assets
            </h1>

            <p className="text-[22px] text-white">
              Private Funds
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex flex-col gap-[32px]">

            <div className="flex items-baseline gap-[12px]">
              <p className="text-[54px] text-white font-serif">
                $4B+
              </p>

              <p className="text-sm text-white/60">
                Tokenized Assets ¹
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="flex items-baseline gap-[12px]">
              <p className="text-[54px] text-white font-serif">
                580,000+
              </p>

              <p className="text-sm text-white/60">
                Investor Accounts ²
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Filter + Cards */}
      <div className="w-full bg-[#E9F0F9] px-[20px] py-[20px] md:py-[80px]">
        <div className="flex flex-col gap-[20px] md:gap-[60px] max-w-[1160px] mx-auto">

          {/* Mobile: dropdown */}
          <div className="md:hidden w-full">
            <div className="relative">
              <select
                className="w-full px-[16px] py-[12px] rounded-[50px] text-sm font-medium bg-white text-[#03060d] appearance-none border-0 outline-none"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg fill="currentColor" viewBox="0 0 256 256" height="1em" width="1em">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop: pill tabs */}
          <div className="hidden md:flex flex-row gap-[8px] flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-[16px] py-[12px] rounded-[50px] text-sm font-medium border-0 cursor-pointer transition-colors ${
                  activeCategory === cat
                    ? "bg-[#071636] text-white"
                    : "bg-white text-[#03060d] hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fund Cards Grid */}
          <div className="flex flex-col gap-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {filtered.map((fund, i) => (
                <FundCard key={i} fund={fund} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}