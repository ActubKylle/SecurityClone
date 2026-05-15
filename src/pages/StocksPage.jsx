import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Data ─────────────────────────────────────────────────────────────────────

const featuredIssuers = [
  {
    href: "https://currenc.securitize.io/",
    bgImage: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F008ceab49cb94683b94f8e5144a1efa8",
    logo: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F06fe1095a032421491caf7dc94c7570f",
    badge: "Available now.",
    offeringType: "Public Offering",
    offeringColor: "rgb(40, 100, 231)",
    ticker: "CURR",
    name: "Currenc Group Inc",
    description: "Currenc Group Inc. is a fintech company dedicated to transforming global financial services through artificial intelligence (AI).",
    details: [
      { label: "Asset Class", value: "Tokenized Public Stock" },
      { label: "Investor Type", value: "Retail" },
      { label: "Disclaimer", value: "This is not a new issuance; will trade in the secondary market." },
    ],
  },
  {
    href: "/fg-nexus-fgnx-waitlist",
    bgImage: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd9d76344d98c46ef92d3eb10263472f3",
    logo: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F83c054bbe47a4377a3b59189efae9d1b",
    badge: "Available Soon. Join Waitlist.",
    offeringType: "Public Offering | Tradable",
    offeringColor: "rgb(142, 113, 55)",
    ticker: "FGNX",
    name: "FG Nexus Inc.",
    description: "The first preferred equity available on a blockchain. Converting your existing shares into tokenized form. Join the waitlist to get notified when this stock is available.",
    details: [
      { label: "Asset Class", value: "Tokenized Public Stock" },
      { label: "Investor Type", value: "Retail" },
    ],
  },
];

const onchainFeatures = [
  {
    title: "Tokenization Made Regulated",
    description: "We help issuers tokenize their shares, bonds, or funds with regulatory guardrails built in — not afterthoughts.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24">
        <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
      </svg>
    ),
  },
  {
    title: "Tradable, 24/7",
    description: "Once tokenized, securities can flow through supported DeFi or DEX infrastructure, enabling continuous trading, real-time settlement, and transparent price formation.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24">
        <path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z" />
      </svg>
    ),
  },
  {
    title: "Regulated by Design",
    description: "Our platform embeds permissioning, KYC/AML, transaction-level controls, and lawful enforcement logic to ensure all onchain transfers meet regulatory requirements.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24">
        <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z" />
      </svg>
    ),
  },
  {
    title: "Real Securities, Digitally Native",
    description: "Tokens represent actual shares or debt instruments — not derivatives, forks, or synthetic overlays. Everything is backed by legal registration and reconciliation with traditional ledgers.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24">
        <path d="M216,40H40A16,16,0,0,0,24,56V192a16,16,0,0,0,16,16H56v16a8,8,0,0,0,16,0V208H184v16a8,8,0,0,0,16,0V208h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,152H40V56H216v64H199.32a48,48,0,1,0,0,16H216v56Zm-50.16-72a16,16,0,1,0,0,16H183a32,32,0,1,1,0-16Z" />
      </svg>
    ),
  },
  {
    title: "Unlock New Capital Tools",
    description: "Issuers can innovate with onchain capital raises, fractionalization, airdrops to users or customers, and more — reaching new classes of market participants.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24">
        <path d="M184.47,112.83c-6.18,22.33-25.32,41.63-46.53,46.93A8,8,0,0,1,136,160a8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68C184.47,112.83,184.47,112.83,184.47,112.83Z" />
      </svg>
    ),
  },
];

const howItWorks = [
  {
    num: "01",
    title: "Onboard",
    body: "Issuers engage Securitize; we coordinate with existing transfer agents or set up new ones.\n\nExisting shareholders can bring their stock after engaging with the DRS process.",
  },
  {
    num: "02",
    title: "Tokenize",
    body: "Convert existing shares or new issuances into tokens. Holders can migrate or redeem via off-chain bridges.",
  },
  {
    num: "03",
    title: "Integrate DeFi / Markets",
    body: "Tokenized assets can plug into selected liquidity pools, trading venues, or protocols, subject to issuer rules.",
  },
  {
    num: "04",
    title: "Track & Govern",
    body: "Full view of onchain and off-chain holders via an integrated, regulated ledger. Issuers can distribute dividends, vote, and manage corporate actions.",
  },
];

const forInvestors = [
  {
    title: "Discover Tokenized Securities",
    description: "Explore equity, debt, or fund tokens backed by real issuers.",
    icon: <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z" /></svg>,
  },
  {
    title: "True Ownership",
    description: "These tokens represent actual legally enforceable claims — not derivatives or synthetic wrappers.",
    icon: <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24"><path d="M128,16a112,112,0,1,0,112,112A112.13,112.13,0,0,0,128,16Zm0,208a96,96,0,1,1,96-96A96.11,96.11,0,0,1,128,224Z" /></svg>,
  },
  {
    title: "Plug Into DeFi",
    description: "Use your holdings in supported protocols (e.g. lending, staking, collateralization) — where allowed.",
    icon: <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24"><path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116Z" /></svg>,
  },
  {
    title: "Simple Onboarding",
    description: "Join via regulated onboarding (KYC, wallet setup), then interact with tokens via approved wallets and trading interfaces.",
    icon: <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24"><path d="M144,157.68a68,68,0,1,0-71.9,0C51.45,164.44,32.87,177.07,17.93,194.85a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Z" /></svg>,
  },
];

const whySecuritize = [
  "Regulatory-first approach — we build with regulation as the foundation.",
  "Proven track record — trusted in token securities, capital markets, and custody.",
  "Bridging legacy & future markets — we integrate with both traditional and blockchain infrastructures.",
  "Customizability & control — issuers retain governance over permitted integrations, trading rules, etc.",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function IssuerCard({ issuer }) {
  return (
    <a
      href={issuer.href}
      target={issuer.href.startsWith("http") ? "_blank" : undefined}
      rel={issuer.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="bg-white overflow-hidden w-full h-full flex flex-col no-underline hover:shadow-md transition-shadow"
    >
      {/* Dark image header */}
      <div className="h-[160px] md:h-[200px] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `url("${issuer.bgImage}") center center / cover`,
            mixBlendMode: "multiply",
          }}
        />
        <div
          className="absolute"
          style={{
            background: "linear-gradient(rgb(3,11,30) 0%, rgba(3,11,30,0) 100%)",
            transform: "matrix(1,0,0,-1,0,0)",
            width: "100%", height: "100%", top: 0, left: 0,
          }}
        />
        <div
          className="absolute"
          style={{
            background: "linear-gradient(rgb(3,11,30) 0%, rgb(3,11,30) 100%)",
            mixBlendMode: "exclusion",
            width: 435, height: 255, top: -54, left: -60,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={issuer.logo}
            alt={issuer.name}
            className="w-[160px] md:w-[200px] object-contain"
          />
        </div>
        <div className="absolute bottom-4 w-full flex justify-center">
          <p className="text-white text-[10px] md:text-[12px] font-medium">{issuer.badge}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col items-start w-full flex-1 p-[20px] md:p-[32px] gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-[16px] md:gap-[20px] w-full">
          <p className="text-xs font-normal" style={{ color: issuer.offeringColor }}>
            {issuer.offeringType}
          </p>
          <h3 className="text-[20px] md:text-[24px] font-serif font-normal text-[#03060d] leading-snug">
            {issuer.name} <span className="opacity-60">({issuer.ticker})</span>
          </h3>
          <p className="text-xs md:text-sm text-[#03060d] opacity-60 leading-relaxed">
            {issuer.description}
          </p>
        </div>
        <div className="flex flex-col w-full gap-[8px] md:gap-[14px]">
          {issuer.details.map((d, i) => (
            <div key={i}>
              <div className="flex items-start gap-2">
                <span className="text-xs md:text-sm text-[#03060d] min-w-[120px]">{d.label}</span>
                <span className="text-xs md:text-sm font-medium text-[#03060d]">{d.value}</span>
              </div>
              {i < issuer.details.length - 1 && (
                <div className="w-full h-[1px] mt-[8px]" style={{ backgroundColor: "rgba(3,11,30,0.1)" }} />
              )}
            </div>
          ))}
          <span className="text-xs md:text-sm text-[#03060d]">See Disclosure *</span>
        </div>
      </div>
    </a>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="bg-[#F3F7FC] p-[20px] md:p-[32px] md:min-h-[360px]">
      <div className="flex flex-col gap-[20px] md:gap-[24px]">
        <div className="w-[48px] h-[48px] bg-[#4F73AB1A] flex items-center justify-center text-[#4F73AB]">
          {feature.icon}
        </div>
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] md:text-[24px] font-serif font-normal text-[#03060d] leading-snug">
            {feature.title}
          </h3>
          <p className="text-xs md:text-sm text-[#03060d] opacity-60 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function StocksPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <div
        className="w-full relative overflow-hidden h-[600px]"
        style={{ backgroundColor: "rgb(8,24,56)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(8,24,56,0.7),rgba(8,24,56,0.7))",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-[1160px] mx-auto w-full h-full pt-[140px] pb-[40px] lg:pt-[200px] lg:pb-[100px] px-[20px] flex items-end justify-start">
          <div className="flex flex-col z-10 gap-[8px] md:gap-[20px]">
            <h1 className="text-[clamp(36px,6vw,72px)] font-normal text-white font-serif leading-tight">
              Tokenized Public Stocks
            </h1>
            <p className="text-white opacity-80 max-w-[640px] text-sm md:text-base">
              Securitize enables native tokenization of public stocks - for both institutions and investors - using blockchain technology, seamlessly integrating with traditional markets.
            </p>
            <div className="flex gap-[16px] mt-[16px]">
              <a
                href="/homepage-lgf-select"
                className="py-[8px] px-[20px] rounded-[44px] flex items-center justify-center text-sm whitespace-nowrap transition-colors bg-white text-[#03060d] hover:bg-[rgba(255,255,255,0.8)] no-underline"
              >
                Tokenize Your Stock
              </a>
              <a
                href="/invest"
                className="py-[8px] px-[20px] rounded-[44px] flex items-center justify-center text-sm whitespace-nowrap transition-colors border text-white border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.1)] no-underline"
              >
                Invest In Tokenized Assets
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Featured Issuers ── */}
      <section
        className="flex flex-col items-center px-[20px] md:px-[140px] py-[60px] md:py-[120px]"
        style={{ backgroundColor: "rgb(243,247,252)" }}
      >
        <div className="flex flex-col items-center gap-[40px] md:gap-[60px] w-full max-w-[1160px]">
          <h1 className="text-[32px] md:text-[64px] font-normal font-serif text-[#03060d] text-center">
            Featured Issuers
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
            {featuredIssuers.map((issuer, i) => (
              <IssuerCard key={i} issuer={issuer} />
            ))}
            {/* Coming Soon card */}
            <div className="hidden md:block">
              <div className="bg-white overflow-hidden w-full h-full flex flex-col">
                <div
                  className="h-[200px] relative overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "rgb(13,15,17)" }}
                >
                  <p className="relative z-10 text-white font-serif text-center text-[22px]">
                    Coming Soon
                  </p>
                </div>
                <div className="flex flex-col gap-[40px] items-start p-[32px]">
                  <div className="w-full h-[24px] bg-gray-200 rounded" />
                  <div className="w-2/3 h-[16px] bg-gray-100 rounded" />
                  <span className="text-sm text-[#03060d]">See Disclosure *</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#03060d] opacity-60 text-center leading-relaxed">
            * This material is intended for informational purposes only. This is not an offer or solicitation to buy or sell securities and is not intended as investment advice or recommendation.
          </p>
        </div>
      </section>

      {/* ── Onchain Equity Unlocked ── */}
      <section
        className="flex flex-col items-center px-[20px] md:px-[140px] py-[60px] md:py-[120px]"
        style={{ backgroundColor: "rgb(255,255,255)" }}
      >
        <div className="flex flex-col gap-[40px] md:gap-[80px] w-full max-w-[1160px]">
          <h1 className="text-[32px] md:text-[64px] font-normal font-serif text-[#03060d] text-left">
            Onchain Equity, Unlocked
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px] md:gap-[24px]">
            {onchainFeatures.map((f, i) => (
              <FeatureCard key={i} feature={f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        className="flex flex-col items-center px-[20px] md:px-[140px] py-[60px] md:py-[160px]"
        style={{ backgroundColor: "rgb(3,6,13)" }}
      >
        <div
          className="flex flex-col md:flex-row gap-[24px] md:gap-[100px] w-full max-w-[1160px]"
        >
          {/* Left */}
          <div className="flex flex-col flex-1 gap-[20px] md:gap-[40px]">
            <span className="text-xs font-medium text-white capitalize">Diving Deeper</span>
            <h1 className="text-[32px] md:text-[64px] font-normal font-serif text-white max-w-[445px] leading-tight">
              How It Works
            </h1>
            <p className="text-sm md:text-base text-white opacity-80 max-w-[445px]">
              We've built a seamless, regulated pipeline for bridging traditional securities and blockchain.
            </p>
          </div>
          {/* Right */}
          <div className="flex flex-col flex-1 gap-[24px] md:gap-[40px]">
            {howItWorks.map((step, i) => (
              <div key={i}>
                <div className="flex flex-row md:flex-col gap-[16px]">
                  <span className="text-base text-white opacity-60 min-w-[40px] md:min-w-0">{step.num}</span>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="text-[20px] md:text-[32px] font-normal font-serif text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white opacity-80 leading-relaxed whitespace-pre-line">
                      {step.body}
                    </p>
                  </div>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="w-full h-[1px] mt-[24px] md:mt-[40px]" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Investors ── */}
      <section
        className="flex flex-col items-center px-[20px] md:px-[140px] py-[60px] md:py-[160px]"
        style={{ backgroundColor: "rgb(255,255,255)" }}
      >
        <div className="flex flex-col gap-[40px] md:gap-[80px] w-full max-w-[1160px] items-center">
          <h1 className="text-[32px] md:text-[64px] font-normal font-serif text-[#03060d] text-center">
            For Investors
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
            {forInvestors.map((item, i) => (
              <div key={i} className="bg-[#F3F7FC] p-[20px] md:p-[32px] md:min-h-[360px]">
                <div className="flex flex-col gap-[20px] md:gap-[24px]">
                  <div className="w-[48px] h-[48px] bg-[#4F73AB1A] flex items-center justify-center text-[#4F73AB]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="text-[20px] md:text-[24px] font-serif font-normal text-[#03060d]">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#03060d] opacity-60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Stats */}
          <div className="flex flex-col items-center gap-[24px] w-full">
            <span className="text-xs font-medium text-[#03060d] uppercase">For Investors</span>
            <h2 className="text-[28px] md:text-[48px] font-serif font-normal text-[#03060d] text-center">
              Looking for More Tokenized Assets?
            </h2>
            <a
              href="/invest"
              className="py-[8px] px-[20px] rounded-[44px] bg-[#03060d] text-white text-sm no-underline hover:bg-[rgba(3,6,13,0.8)] transition-colors"
            >
              Learn More →
            </a>
            <div className="flex items-center gap-[20px] md:gap-[80px]">
              <div className="flex items-center gap-[16px]">
                <span className="text-[28px] font-serif text-[#03060d]">24/7/365</span>
                <div className="text-xs text-[#03060d]"><p>Trading</p><p>Access</p></div>
              </div>
              <div className="w-[1px] h-[60px] hidden md:block" style={{ backgroundColor: "rgba(3,6,13,0.2)" }} />
              <div className="flex items-center gap-[16px]">
                <span className="text-[28px] font-serif text-[#03060d]">580,000+</span>
                <div className="text-xs text-[#03060d]"><p>Investor</p><p>Accounts ²</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Securitize ── */}
      <section
        className="flex flex-col items-center px-[20px] md:px-[140px] py-[60px] md:py-[160px]"
        style={{ backgroundColor: "rgb(243,247,252)" }}
      >
        <div className="flex flex-col gap-[40px] md:gap-[80px] w-full max-w-[1160px] items-center">
          <h1 className="text-[32px] md:text-[64px] font-normal font-serif text-[#03060d] text-center">
            Why Choose Securitize
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[40px] md:gap-x-[80px] md:gap-y-[24px]">
            {whySecuritize.map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-[20px] md:gap-[40px] md:p-[32px]">
                <div className="w-[48px] h-[48px] bg-[#4F73AB1A] flex items-center justify-center text-[#4F73AB]">
                  <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24">
                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z" />
                  </svg>
                </div>
                <p className="text-[20px] md:text-[24px] font-serif text-[#03060d] text-center leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual CTA ── */}
      <section className="w-full flex flex-col md:flex-row">
        {/* Issuers (dark blue) */}
        <div
          className="w-full md:w-1/2 px-[24px] md:px-[48px] py-[40px] md:py-[60px] flex flex-col gap-[40px]"
          style={{ backgroundColor: "rgb(20,39,81)" }}
        >
          <div className="flex flex-col gap-[24px]">
            <span className="text-xs font-medium capitalize" style={{ color: "rgb(241,220,178)" }}>For Issuers</span>
            <h2 className="text-[32px] md:text-[48px] font-serif font-normal text-white leading-tight">
              Tokenize Your Company's Stock
            </h2>
            <a
              href="/homepage-lgf-select"
              className="py-[8px] px-[20px] rounded-[44px] inline-flex items-center justify-center text-sm bg-white text-[#03060d] hover:bg-[rgba(255,255,255,0.8)] no-underline transition-colors w-fit"
            >
              Get in Touch →
            </a>
          </div>
          <div className="flex items-center gap-[20px] md:gap-[80px]">
            <div className="flex items-center gap-[16px]">
              <span className="text-[28px] font-serif text-white">$4B+</span>
              <div className="text-xs text-[rgba(255,255,255,0.5)]"><p>Tokenized</p><p>Assets ¹</p></div>
            </div>
            <div className="w-[1px] h-[60px] hidden md:block" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <div className="flex items-center gap-[16px]">
              <span className="text-[28px] font-serif text-white">SEC-Registered</span>
              <div className="text-xs text-[rgba(255,255,255,0.5)]"><p>Transfer</p><p>Agent</p></div>
            </div>
          </div>
        </div>
        {/* Investors (white) */}
        <div className="w-full md:w-1/2 bg-white px-[24px] md:px-[48px] py-[40px] md:py-[60px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[24px]">
            <span className="text-xs font-medium text-[#03060d] capitalize">For Investors</span>
            <h2 className="text-[32px] md:text-[48px] font-serif font-normal text-[#03060d] leading-tight">
              Looking for More Tokenized Assets?
            </h2>
            <a
              href="/invest"
              className="py-[8px] px-[20px] rounded-[44px] inline-flex items-center justify-center text-sm bg-[#03060d] text-white hover:bg-[rgba(3,6,13,0.8)] no-underline transition-colors w-fit"
            >
              Learn More →
            </a>
          </div>
          <div className="flex items-center gap-[20px] md:gap-[80px]">
            <div className="flex items-center gap-[16px]">
              <span className="text-[28px] font-serif text-[#03060d]">24/7/365</span>
              <div className="text-xs text-[#03060d]"><p>Trading</p><p>Access</p></div>
            </div>
            <div className="w-[1px] h-[60px] hidden md:block" style={{ backgroundColor: "rgba(3,6,13,0.2)" }} />
            <div className="flex items-center gap-[16px]">
              <span className="text-[28px] font-serif text-[#03060d]">580,000+</span>
              <div className="text-xs text-[#03060d]"><p>Investor</p><p>Accounts ²</p></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}