import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const protocolImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Ff757664f331747c7944c7cae1fa5fcc1?width=1200";

const partners = [
  { name: "Aave", icon: "◌" },
  { name: "UniswapX", icon: "♞" },
  { name: "RedStone", icon: "⬡", active: true },
  { name: "OKX", icon: "▣" },
  { name: "Wormhole", icon: "W" },
  { name: "Aave", icon: "◌" },
  { name: "UniswapX", icon: "♞" },
  { name: "RedStone", icon: "⬡", active: true },
  { name: "OKX", icon: "▣" },
  { name: "Wormhole", icon: "W" },
];

const utilityCards = [
  {
    title: "Multi-chain Access",
    subtitle: "Assets available across multiple blockchains",
    icon: "⌘",
    powered: [
      "Aptos Labs",
      "Arbitrum",
      "Avalanche",
      "BNB Chain",
      "Ethereum",
      "Ink by Kraken",
      "Mantle",
      "Optimism",
      "Plume",
      "Polygon",
      "Sei",
      "Solana",
      "XDC",
    ],
    body: "",
    tags: ["BUILD", "VBILL", "ACRED", "HLSCOPE", "STAC", "+ more"],
  },
  {
    title: "Cross-chain Interoperability",
    subtitle: "Move assets across multiple blockchains",
    icon: "⌘",
    powered: ["Wormhole"],
    body: "Access your tokenized assets across supported chains, and bridge between chains while maintaining full ownership.",
    tags: ["BUILD", "VBILL", "ACRED", "HLSCOPE", "STAC"],
  },
  {
    title: "Stablecoin On & Off Ramps",
    subtitle: "Invest and redeem using stablecoins",
    icon: "↟",
    powered: [],
    body: "Subscriptions and redemptions available through various stables, including USDC, USDG, RLUSD, AUSD, among others.\n\n*Atomic instant mint/redeem powered by smart contracts available for select assets",
    tags: ["BUILD", "VBILL", "ACRED", "HLSCOPE", "STAC", "M14"],
  },
  {
    title: "Oracle Pricing",
    subtitle: "Real-time NAV data",
    icon: "▰",
    powered: ["Redstone", "Chainlink", "Chronicle", "Pyth"],
    body: "Asset prices are published directly onchain, with the goal of enabling smart contract integrations, automated rebalancing, and transparent pricing for all market participants.",
    tags: ["BUILD", "VBILL", "ACRED", "HLSCOPE", "STAC", "M14"],
  },
  {
    title: "Collateral Trading",
    subtitle: "Trade on a multitude of exchanges",
    icon: "▱",
    powered: ["Binance", "crypto.com", "Deribit"],
    body: "Use your tokenized real-world assets as collateral to trade on exchange. Maintain exposure to your investments while accessing liquidity for other opportunities.\n\n*more opportunities coming soon*",
    tags: ["BUILD"],
  },
  {
    title: "DeFi Borrowing",
    subtitle: "Borrow against your RWA holdings",
    icon: "CO",
    powered: ["Aave", "Loopscale", "Zharta"],
    body: "Borrow against your tokenized assets. Maintain exposure to your investments while accessing liquidity for other opportunities, subject to platform terms and potential liquidation risk.\n\n*more opportunities coming soon*",
    tags: ["VBILL", "ACRED"],
  },
  {
    title: "Automated Leverage Strategies",
    subtitle: "Designed to increase exposure",
    icon: "▥",
    powered: ["Loopscale", "Zharta"],
    body: "Deploy automated leveraged strategies that loop your assets. Sophisticated DeFi strategies made accessible through leading protocols. Note: involves leverage and associated risks.\n\n*more opportunities coming soon*",
    tags: ["ACRED"],
  },
  {
    title: "Onchain Trading",
    subtitle: "Trade tokenized assets 24/7",
    icon: "▮",
    powered: ["UniswapX"],
    body: "Access liquidity through decentralized exchange infrastructure. Trade your tokenized assets with onchain settlement infrastructure, subject to market conditions.\n\n*more opportunities coming soon*",
    tags: ["BUILD"],
  },
];

const marketRows = [
  { market: "Aave", icon: "◌", asset: "VBILL", type: "Lending" },
  { market: "Binance", icon: "◇", asset: "BUILD", type: "Trading" },
  { market: "crypto.com", icon: "●", asset: "BUILD", type: "Trading" },
  { market: "Deribit", icon: "◉", asset: "BUILD", type: "Trading" },
  { market: "Loopscale", icon: "⊙", asset: "ACRED", type: "Leverage" },
  { market: "Loopscale", icon: "⊙", asset: "ACRED", type: "Lending" },
  { market: "UniswapX", icon: "♞", asset: "BUILD", type: "Trading" },
  { market: "Zharta", icon: "◐", asset: "ACRED", type: "Leverage, Lending" },
];

const investmentCards = [
  {
    logo: "BlackRock",
    title: "BlackRock USD Institutional Digital Liquidity Fund (BUILD)",
    desc: "The first tokenized fund issued on a public blockchain by the world’s largest asset manager.",
    category: "U.S. Treasury",
    offered: "Securitize Markets Exclusive",
    asset: "U.S. Treasury",
    min: "$5M",
    investor: "Qualified Purchaser",
    redemptions: "Instant",
  },
  {
    logo: "APOLLO",
    title: "Securitize Tokenized Apollo Diversified Credit Fund",
    desc: "Evergreen credit fund seeking to generate a return comprised of both current income and capital appreciation.",
    category: "Private Equity",
    offered: "Offered by Securitize Capital",
    asset: "Diversified Credit",
    min: "$50K",
    investor: "Accredited Investor",
    redemptions: "Quarterly",
  },
  {
    logo: "VanEck",
    title: "VanEck Treasury Fund",
    desc: "Earn stable yield with daily liquidity by investing in short-term U.S. Treasuries via blockchain.",
    category: "U.S. Treasury",
    offered: "Offered by Securitize Markets",
    asset: "Fixed Income",
    min: "$100k",
    investor: "Qualified Purchaser",
    redemptions: "Instant",
  },
];

function getTagClass(tag) {
  if (tag === "BUILD") return "bg-[#050505] text-white";
  if (tag === "VBILL") return "bg-[#123b73] text-white";
  if (tag === "ACRED") return "bg-[#00846f] text-white";
  if (tag === "HLSCOPE") return "bg-[#315a88] text-white";
  if (tag === "STAC") return "bg-[#158093] text-white";
  if (tag === "M14") return "bg-[#063f3c] text-white";
  return "border border-[#c7ccd3] bg-transparent text-[#7b8189]";
}

function OnchainFeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f3f7fd] text-[#050505]">
      <Navbar variant="light" />

      {/* HERO */}
<section className="bg-white px-5 pb-[24px] pt-[160px] md:px-10 lg:pt-[150px]">
    <div className="mx-auto flex min-h-[calc(100vh-150px)] max-w-[1200px] flex-col justify-between">
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[45%_55%]">
      {/* Left */}
      <div className="flex flex-col justify-center">
        <h1
          className="max-w-[530px] text-[48px] leading-[48px] tracking-[-0.06em] text-black sm:text-[56px] sm:leading-[56px] lg:text-[65px] lg:leading-[65px]"
          style={{
            fontFamily: '"PP Editorial New", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          Tokenized Assets,
          <br />
          Unlocked
        </h1>

        <p
          className="mt-[130px] max-w-[430px] text-[16px] leading-[20px] text-[#2E3545] md:mt-[155px]"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          Access DeFi-native capabilities that aim to bring real-world assets
          into the programmable economy.
        </p>
      </div>

      {/* Right original image */}
      <div className="flex items-center justify-center">
        <img
          src="https://cdn.builder.io/api/v1/file/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Ff00ee0c2adc44a6ea5d52617cc9ef78a"
          alt="Onchain ecosystem partners"
          className="w-full max-w-[350px] object-contain"
        />
      </div>
    </div>

    <p
      className="mt-12 text-center text-[10px] leading-[14px] text-[#6b7280]"
      style={{
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
      }}
    >
      Certain onchain features rely on independent third-party protocols not
      controlled or guaranteed by Securitize, may not apply to all tokenized
      securities, and participation in DeFi protocols involves substantial
      risks.
    </p>
  </div>
</section>

      {/* UTILITY */}
<section className="bg-[#f3f7fd] px-5 pb-[84px] pt-[70px]">
  <div className="mx-auto max-w-[1200px]">
    <div className="text-center">
      <p className="mb-6 text-[16px] leading-[20px] text-[#24507A]">
        Blockchain Infrastructure
      </p>

      <h2
        className="text-[42px] leading-[42px] tracking-[-0.06em] text-[#07142c] md:text-[65px] md:leading-[65px]"
        style={{
          fontFamily: '"PP Editorial New", sans-serif',
          fontWeight: 400,
        }}
      >
        Onchain Utility, Enabled
      </h2>

      <p className="mx-auto mt-8 max-w-[620px] text-[16px] leading-[20px] text-[#2E3545]">
        Capabilites aimed at increasing the utility of your tokenized assets.
      </p>
    </div>

    <div className="mt-[58px] grid grid-cols-1 gap-x-[40px] gap-y-[40px] md:grid-cols-2">
      {[
        "ad9f4ac0cf714fe7900d529f6ae9bdb9",
        "1bfc3aca7f204a78abe88b704686fdc7",
        "96285869acbd4e439f0a6750f34507bb",
        "acc62c8b15d6431bb109663f9a01cb22",
        "4ccbd98dd93744d48a81376b87a4da3c",
        "2d3bcb5a17314bc195092c0e47b84dc8",
        "6fa0029f935742128ec484d47113318a",
        "7bb29489f61f4571829264e6f92b6c25",
      ].map((id) => (
        <img
          key={id}
          src={`https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F${id}?width=943`}
          alt=""
          className="w-full rounded-[32px]"
        />
      ))}
    </div>
  </div>
</section>

    {/* MARKETPLACES */}
<section className="bg-white px-5 pb-[77px] pt-[41px] mt-[44px]">
  <div className="mx-auto max-w-[790px]">
    <div className="mb-[54px]">
      <p className="mb-5 text-[16px] leading-[20px] text-[#24507A]">
        Live Marketplaces
      </p>

      <h2
        className="text-[42px] leading-[42px] tracking-[-0.06em] text-[#07142c] md:text-[65px] md:leading-[65px]"
        style={{
          fontFamily: '"PP Editorial New", sans-serif',
          fontWeight: 400,
        }}
      >
        Liquidity, Activated
      </h2>

      <p className="mt-8 text-[16px] leading-[20px] text-[#2E3545]">
        Trade and access our assets on leading live markets.
      </p>
    </div>

    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#D5D8DD]">
            <th className="pb-5 text-[14px] font-bold text-black">Market</th>
            <th className="pb-5 text-[14px] font-bold text-black">Asset</th>
            <th className="pb-5 text-[14px] font-bold text-black">Type</th>
            <th className="pb-5 text-[14px] font-bold text-black">Details</th>
          </tr>
        </thead>

        <tbody>
          {marketRows.map((row, index) => (
            <tr
              key={`${row.market}-${index}`}
              className="border-b border-[#D5D8DD]"
            >
              <td className="py-[24px]">
                <div className="flex items-center gap-2 text-[16px] font-semibold text-[#4B5563]">
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#284f9f] text-[10px] text-white">
                    {row.icon}
                  </span>
                  {row.market}
                </div>
              </td>

              <td className="py-[24px]">
                <span
                  className={`rounded-full px-3 py-[5px] text-[11px] font-semibold leading-none ${getTagClass(
                    row.asset
                  )}`}
                >
                  {row.asset}
                </span>
              </td>

              <td className="py-[24px] text-[15px] text-black">
                {row.type}
              </td>

              <td className="py-[24px]">
                <button className="rounded-full border border-[#D5D8DD] px-5 py-2 text-[13px] font-semibold text-black transition hover:bg-black hover:text-white">
                  View →
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="mt-8 text-[10px] leading-[14px] text-[#6B7280]">
      Note: Secondary market trading is not guaranteed and may be limited by
      regulatory transfer restrictions, platform availability, or investor
      eligibility requirements. Leverage and looping functionalities are
      facilitated by independent third-party protocols. Securitize does not
      control these protocols and does not guarantee their availability,
      security, or performance.
    </p>
  </div>
</section>

      {/* DEFI PROTOCOLS */}
      <section className="bg-[#f3f7fd] px-5 pb-[54px] pt-[41px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[790px]">
            <div className="mb-8">
              <p className="mb-5 text-[12px] font-medium leading-none text-[#2b5b89]">
                Powered By
              </p>

              <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#020713] md:text-[58px]">
                DeFi Protocols
              </h2>
            </div>

            <div className="my-10 w-full overflow-hidden">
              <img
                src={protocolImage}
                alt="DeFi Protocols"
                className="block w-full"
              />
            </div>

            <p className="max-w-[760px] text-[10px] leading-[1.35] text-[#5b626b]">
              Note: Tokenized securities interacting with blockchain protocols
              may be exposed to risks including smart contract vulnerabilities,
              cybersecurity risks, loss of private keys, protocol insolvency,
              regulatory uncertainty, and extreme market volatility.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT CTA */}
<section className="bg-black px-5 pb-[46px] pt-[96px] text-white md:px-[140px]">
  <div className="mx-auto max-w-[980px]">
    <div className="mb-[70px] text-center">
      <h2
        className="mx-auto max-w-[560px] text-[42px] leading-[42px] tracking-[-0.06em] text-white md:text-[58px] md:leading-[58px]"
        style={{
          fontFamily: '"PP Editorial New", sans-serif',
          fontWeight: 400,
        }}
      >
        Step into the world of
        <br />
        tokenized assets
      </h2>

      <p className="mx-auto mt-8 max-w-[690px] text-[16px] leading-[20px] text-white">
        Join the growing ecosystem of institutional investors looking for
        onchain infrastructure for real-world assets.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {investmentCards.map((item) => (
        <article key={item.title} className="overflow-hidden bg-[#d8d8d8] text-black">
          <div className="flex h-[190px] items-center justify-center bg-[linear-gradient(rgba(3,11,30,.65),rgba(3,11,30,.65)),url('/hero.png')] bg-cover bg-center">
            <span className="text-[44px] font-bold text-white">
              {item.logo}
            </span>
          </div>

          <div className="px-7 py-8">
            <p className="mb-6 text-[11px] font-semibold text-[#24507a]">
              {item.category} &nbsp; | &nbsp; {item.offered}
            </p>

            <h3
              className="text-[28px] leading-[30px] tracking-[-0.05em] text-black"
              style={{
                fontFamily: '"PP Editorial New", sans-serif',
                fontWeight: 400,
              }}
            >
              {item.title}
            </h3>

            <p className="mt-7 text-[16px] leading-[20px] text-black/70">
              {item.desc}
            </p>

            <div className="mt-7 border-t border-black/15 text-[14px]">
              {[
                ["Asset Class", item.asset],
                ["Min. Investment", item.min],
                ["Investor Type", item.investor],
                ["Redemptions", item.redemptions],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-6 border-b border-black/15 py-4"
                >
                  <span>{label}</span>
                  <strong className="text-right">{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  
    <div className="mt-10 flex justify-center">
      <button className="rounded-full bg-[#d8d8d8] px-7 py-4 text-[14px] font-semibold text-black transition hover:bg-white">
        Explore All Investments →
      </button>
      
    </div>
  </div>

       <div className="mt-[96px] text-[9px] leading-[13px] text-white/4 5 mx-auto max-w-[980px]">
  <p className="mb-5 underline">Disclosures</p>

  <p>
    Note: Certain assets referenced on this page are issued or managed by
    third-party asset managers and are not managed by Securitize Capital. For
    applicable fund material risks, please visit each fund&apos;s product page:{" "}
    <a href="#" className="text-[#1a74eb] underline">
      ACRED
    </a>
    ,{" "}
    <a href="#" className="text-[#1a74eb] underline">
      HLSCOPE
    </a>
    ,{" "}
    <a href="#" className="text-[#1a74eb] underline">
      STAC
    </a>
    .
  </p>

  <p className="mt-5 text-white/45" >
    Certain information contained herein has been obtained from third party
    sources and such information has not been independently verified by
    Securitize. No representation, warranty, or undertaking, expressed or
    implied, is given to the accuracy or completeness of such information by
    Securitize or any other person. While such sources are believed to be
    reliable, Securitize does not assume any responsibility for the accuracy or
    completeness of such information. Securitize does not undertake any
    obligation to update the information contained herein as of any future date.
    Except where otherwise indicated, the information contained in this
    presentation is based on matters as they exist as of the date of preparation
    of such material and not as of the date of distribution or any future date.
    Recipients should not rely on this material in making any future investment
    decision.
  </p>
</div>
</section>

      {/* FOOTER */}
      <footer className="bg-black px-5 pb-10 pt-14 text-white md:px-[140px]">
        <div className="mx-auto max-w-[1200px] border-t border-white/15 pt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_2fr]">
            <div>
              <div className="mb-6 text-[26px] font-bold tracking-[-0.04em]">
                SECURITIZE
              </div>
              <p className="max-w-[280px] text-[12px] leading-[1.55] text-white/50">
                Securitize is bringing real-world assets onchain through
                regulated tokenization infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-[12px] md:grid-cols-4">
              {[
                ["Investments", "Private Funds", "Registered Funds", "Stocks"],
                ["Solutions", "Tokenization", "Transfer Agent", "Onchain"],
                ["Resources", "News", "Insights", "Support"],
                ["Company", "About", "Careers", "Contact"],
              ].map(([title, ...links]) => (
                <div key={title}>
                  <h4 className="mb-4 font-semibold text-white">{title}</h4>
                  <ul className="space-y-3 text-white/45">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="transition hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        
          
        </div>
      </footer>
    </main>
  );
}

export default OnchainFeaturesPage;