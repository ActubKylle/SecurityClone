import { Link } from "react-router-dom";

const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center text-sm border-b border-gray-100 py-3 last:border-0">
    <span className="text-gray-400 font-sans">{label}</span>
    <span className="text-gray-900 font-medium font-sans text-right ml-4">
      {value}
    </span>
  </div>
);

const SectionHeader = ({ topLabel, title, isSerif = false }) => (
  <div className="text-center mb-[60px]">
    <p className="text-[12px] font-medium text-blue-600 mb-3 uppercase tracking-[0.1em] font-sans">
      {topLabel}
    </p>
    <h2
      className={`text-4xl md:text-5xl text-gray-900 ${isSerif ? "font-serif" : "font-bold font-sans"}`}
    >
      {title}
    </h2>
  </div>
);

const InvestmentsSection = () => {
  const privateFunds = [
    {
      title: "VanEck Treasury Fund",
      href: "/primary-market/vaneck-vbill",
      tag: "U.S. Treasury",
      offeredBy: "Offered by Securitize Markets",
      desc: "Earn stable yield with daily liquidity by investing in short-term U.S. Treasuries via blockchain.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc0ebbc2cf3af4a239a40104d2064df08",
      stats: {
        class: "Fixed Income",
        min: "$100k",
        type: "Qualified Purchaser",
        redemptions: "Instant",
      },
    },
    {
      title: "BlackRock USD Institutional Digital Liquidity Fund (BUIDL)",
      href: "/primary-market/blackrock-fund",
      tag: "U.S. Treasury",
      offeredBy: "Securitize Markets Exclusive",
      desc: "The first tokenized fund issued on a public blockchain by the world's largest asset manager.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd697eaeb536046a78d30095a6ca20d3d",
      stats: {
        class: "U.S. Treasury",
        min: "$5M",
        type: "Qualified Purchaser",
        redemptions: "Instant",
      },
    },
    {
      title: "Hamilton Lane Senior Credit Opportunities Securitize Fund",
      href: "/primary-market/hl-scope",
      tag: "Private Equity",
      offeredBy: "Offered by Securitize Capital",
      desc: "Evergreen private credit fund seeking risk-adjusted returns and attractive floating cash yield.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fa13c1ef6dd96483b8ca9dc9a1d44cd24",
      stats: {
        class: "Senior Credit",
        min: "$10K",
        type: "Qualified Purchaser",
        redemptions: "On-Demand",
      },
    },
  ];

  const publicStocks = [
    {
      name: "Currenc Group Inc (CURR)",
      tag: "Public Offering",
      status: "Available now.",
      desc: "Currenc Group Inc. is a fintech company dedicated to transforming global financial services through artificial intelligence (AI).",
      stats: {
        class: "Tokenized Public Stock",
        type: "Retail",
        detail: "Secondary Market Trading",
      },
    },
    {
      name: "FG Nexus Inc. (FGNX)",
      tag: "Public Offering | Tradable",
      status: "Available Soon. Join Waitlist.",
      desc: "The first preferred equity available on a blockchain. Converting your existing shares into tokenized form.",
      stats: {
        class: "Tokenized Public Stock",
        type: "Retail",
        detail: "Waitlist Active",
      },
    },
  ];

  return (
    <section className="bg-[#f3f7fc] py-20 md:py-[120px] px-5 md:px-10 space-y-[120px]">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-[120px]">
        {/* --- PRIVATE FUNDS --- */}
        <div className="w-full flex flex-col items-center">
          <SectionHeader
            topLabel="Private Funds"
            title="Tokenize Your Portfolio"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {privateFunds.map((fund, idx) => (
              <a
            href={fund.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden bg-white text-black no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
           >
                <div className="relative h-[200px] overflow-hidden bg-[#06101f]">
                  <img
                    src={fund.image}
                    alt={fund.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#06101f]/45 to-[#06101f]/90" />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-8">
                  <div className="flex items-center gap-3 text-[12px] font-semibold">
                    <span className="text-[#8e7137]">{fund.tag}</span>
                    <span className="h-3 w-px bg-black/30" />
                    <span className="text-[#386a9e]">{fund.offeredBy}</span>
                  </div>

                  <h3 className="min-h-[62px] font-serif text-[26px] font-normal leading-[1.05] tracking-[-0.045em] text-black">
                    {fund.title}
                  </h3>

                  <p className="min-h-[78px] text-[15px] leading-[1.45] text-black/55">
                    {fund.desc}
                  </p>

                  <div className="mt-auto">
                    <StatRow label="Asset Class" value={fund.stats.class} />
                    <StatRow label="Min. Investment" value={fund.stats.min} />
                    <StatRow label="Investor Type" value={fund.stats.type} />
                    <StatRow
                      label="Redemptions"
                      value={fund.stats.redemptions}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <Link
            to="/invest"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
          >
            Learn More <span>→</span>
          </Link>
        </div>

        {/* --- PUBLIC STOCKS --- */}
        <div className="w-full flex flex-col items-center">
          <SectionHeader
            topLabel="Public Funds"
            title="Tokenized Public Stocks"
            isSerif={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {publicStocks.map((stock, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm border border-gray-100"
              >
                <div className="h-[180px] bg-[#030b1e] flex flex-col items-center justify-center p-8 text-center">
                  <h2 className="text-white text-2xl font-bold tracking-tighter mb-2">
                    {stock.name.split(" ")[0]}
                  </h2>
                  <p className="text-white/60 text-[10px] uppercase">
                    {stock.status}
                  </p>
                </div>
                <div className="p-8 flex flex-col gap-5">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tight">
                    {stock.tag}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 min-h-[50px]">
                    {stock.name}
                  </h3>
                  <p className="text-sm text-gray-500 min-h-[80px]">
                    {stock.desc}
                  </p>
                  <div className="pt-2">
                    <StatRow label="Asset Class" value={stock.stats.class} />
                    <StatRow label="Investor Type" value={stock.stats.type} />
                  </div>
                </div>
              </div>
            ))}
            <ComingSoonCard title="Coming Soon" isDark={true} />
          </div>

          <Link
            to="/investments/stocks"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
          >
            Learn More <span>→</span>
          </Link>
        </div>
        {/* --- ALTERNATIVE INVESTMENTS (TRUMP/MALDIVES) --- */}
        <div className="w-full flex flex-col items-center">
          <SectionHeader
            topLabel="For investors"
            title="Tokenized Alternative Investments"
            isSerif={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            <div className="bg-white shadow-sm border border-gray-100">
              <div className="h-[200px] bg-[#1a1a1a] flex items-center justify-center p-10">
                <div className="text-center text-white border border-white/20 p-4">
                  <p className="text-[10px] tracking-widest uppercase">Trump</p>
                  <p className="text-[8px] opacity-60">
                    International Hotel & Resort
                  </p>
                  <p className="text-[10px] font-serif italic">Maldives</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  WLFI DAR Maldives Limited Tokenized Asset Offering
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  An investment opportunity offering economic exposure to the
                  development of the Trump International Hotel & Resort,
                  Maldives.
                </p>
                <StatRow label="Asset Class" value="Alternative Investment" />
                <StatRow label="Investor Type" value="Accredited Investor" />
              </div>
            </div>
            <ComingSoonCard />
            <ComingSoonCard />
          </div>

          {/* Public Stocks Disclaimer */}
          <div className="w-full text-[10px] text-gray-400 leading-relaxed max-w-[900px] text-left self-start">
            <p>
              * DT Marks Defi LLC, an entity affiliated with Donald J. Trump and
              certain of his family members, has an indirect economic interest
              through approximately 38% beneficial ownership of an affiliate of
              WLFI DAR Maldives Limited ("WLFD"), which is entitled to earn a
              portion of the proceeds from the token issuance by virtue of its
              indirect economic interest in WLFD. DT Marks Defi LLC and Donald
              J. Trump are not the issuer of the tokens, are not sponsoring,
              endorsing, promoting or soliciting this offering, and they have no
              responsibility for the structure or performance of this token
              offering. Any references to or quotes or imagery attributed to or
              associated with Donald J. Trump or his family members should not
              be construed as an endorsement or representation or warranty with
              respect to any product or service offering. This token is not
              political or associated with any political campaign. ** This
              material is intended for informational purposes only. This is not
              an offer or solicitation to buy or sell securities and is not
              intended as investment advice or recommendation.
            </p>
            <p className="mt-2">Texts.stocks-disclaimer-liquidity</p>
          </div>
          <Link
            to="/investments/alternative-assets"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
          >
            Learn More <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ComingSoonCard = ({ title = "Coming Soon", isDark = false }) => (
  <div className="bg-white shadow-sm border border-gray-100 opacity-80">
    <div
      className={`h-[180px] flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-900 text-white"}`}
    >
      <span className="text-lg font-medium">{title}</span>
    </div>
    <div className="p-8 space-y-6">
      <div className="h-4 w-3/4 bg-gray-100 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-100 animate-pulse"></div>
      <div className="mt-8 space-y-4">
        <div className="h-[1px] bg-gray-100"></div>
        <div className="h-4 w-full bg-gray-50"></div>
      </div>
    </div>
  </div>
);

export default InvestmentsSection;
