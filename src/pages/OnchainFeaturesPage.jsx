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
      <section className="px-5 pb-[96px] pt-[140px] md:px-10 lg:pt-[158px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="flex min-h-[520px] flex-col justify-center md:justify-between">
            <h1 className="max-w-[530px] font-serif text-[58px] leading-[0.9] tracking-[-0.06em] text-black md:text-[82px] lg:text-[92px]">
              Tokenized Assets,
              <br />
              Unlocked
            </h1>

            <p className="mt-14 max-w-[430px] text-[16px] leading-[1.35] tracking-[-0.02em] text-[#07111f] md:mt-0">
              Access DeFi-native capabilities that aim to bring real-world
              assets into the programmable economy.
            </p>
          </div>

          <div className="relative flex h-[580px] items-center justify-center overflow-hidden">
            <div className="absolute top-0 z-10 h-40 w-full bg-gradient-to-b from-[#f3f7fd] to-transparent" />
            <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-[#f3f7fd] to-transparent" />

            <div className="logo-scroll flex flex-col gap-12">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex items-center gap-8 ${
                    partner.active
                      ? "scale-110 opacity-100"
                      : "opacity-20 grayscale"
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-4xl font-bold ${
                      partner.active
                        ? "text-[#9f1822]"
                        : "bg-[#dce2ea] text-[#8a9099]"
                    }`}
                  >
                    {partner.icon}
                  </div>

                  <span
                    className={`text-[38px] font-bold tracking-[-0.055em] md:text-[46px] ${
                      partner.active ? "text-black" : "text-[#6b7280]"
                    }`}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UTILITY */}
      <section className="bg-[#f3f7fd] px-5 pb-[84px] pt-[70px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[56px] text-center">
            <p className="mb-5 text-[12px] font-medium leading-none text-[#2b5b89]">
              Blockchain Infrastructure
            </p>

            <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#020713] md:text-[58px]">
              Onchain Utility, Enabled
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.4] text-[#07111f]">
              Capabilites aimed at increasing the utility of your tokenized
              assets.
            </p>
          </div>

          <div className="mx-auto grid max-w-[930px] grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
            {utilityCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[32px] border border-[#cfd4db] bg-[#eef2f7]/45"
              >
                <div className="min-h-[218px] px-[34px] pb-7 pt-[34px]">
                  <div className="mb-8 flex items-start gap-6">
                    <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-[#dfe5ec] text-[22px] font-semibold text-[#111827]">
                      {card.icon}
                    </div>

                    <div>
                      <h3 className="text-[17px] font-bold leading-[1.1] tracking-[-0.02em] text-[#171c22]">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-[16px] leading-[1.25] tracking-[-0.02em] text-[#4d535b]">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {card.powered.length > 0 && (
                    <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-4">
                      <span className="mr-1 text-[10px] font-extrabold uppercase text-[#4b535c]">
                        Powered by
                      </span>

                      {card.powered.map((item) => (
                        <span
                          key={item}
                          className="flex items-center gap-2 text-[13px] leading-none text-[#3f4650]"
                        >
                          <span className="h-[15px] w-[15px] rounded-full bg-[#10203a]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {card.body && (
                    <p className="whitespace-pre-line text-[16px] leading-[1.24] tracking-[-0.02em] text-[#424950]">
                      {card.body}
                    </p>
                  )}
                </div>

                <div className="flex min-h-[58px] items-center gap-3 border-t border-[#d4d8de] px-[34px]">
                  <span className="text-[12px] uppercase text-[#4f5660]">
                    Available for:
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-[5px] text-[11px] font-semibold leading-none ${getTagClass(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACES */}
      <section className="bg-[#f3f7fd] px-5 pb-[84px] pt-[70px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[790px]">
            <div className="mb-[54px]">
              <p className="mb-5 text-[12px] font-medium leading-none text-[#2b5b89]">
                Live Marketplaces
              </p>

              <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#020713] md:text-[58px]">
                Liquidity, Activated
              </h2>

              <p className="mt-8 text-[15px] leading-[1.4] text-[#07111f]">
                Trade and access our assets on leading live markets.
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#c5cbd2]">
                    <th className="pb-5 text-[13px] font-bold text-black">
                      Market
                    </th>
                    <th className="pb-5 text-[13px] font-bold text-black">
                      Asset
                    </th>
                    <th className="pb-5 text-[13px] font-bold text-black">
                      Type
                    </th>
                    <th className="pb-5 text-[13px] font-bold text-black">
                      Details
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {marketRows.map((row, index) => (
                    <tr
                      key={`${row.market}-${index}`}
                      className="border-b border-[#c5cbd2]"
                    >
                      <td className="py-[22px]">
                        <div className="flex items-center gap-2 text-[14px] font-medium text-[#1f2937]">
                          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#284f9f] text-[10px] text-white">
                            {row.icon}
                          </span>
                          {row.market}
                        </div>
                      </td>

                      <td className="py-[22px]">
                        <span
                          className={`rounded-full px-3 py-[5px] text-[11px] font-semibold leading-none ${getTagClass(row.asset)}`}
                        >
                          {row.asset}
                        </span>
                      </td>

                      <td className="py-[22px] text-[14px] text-black">
                        {row.type}
                      </td>

                      <td className="py-[22px]">
                        <button className="rounded-full border border-[#c7ccd3] px-5 py-2 text-[12px] font-semibold text-black transition hover:bg-black hover:text-white">
                          View →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-[10px] leading-[1.35] text-[#5b626b]">
              Note: Secondary market trading is not guaranteed and may be
              limited by regulatory transfer restrictions, platform
              availability, or investor eligibility requirements. Leverage and
              looping functionalities are facilitated by independent third-party
              protocols. Securitize does not control these protocols and does
              not guarantee their availability, security, or performance.
            </p>
          </div>
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
      <section className="bg-black px-5 pb-[46px] pt-24 text-white md:px-[140px]">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-12 text-center">
            <h2 className="mx-auto max-w-[560px] font-serif text-[40px] leading-[0.9] tracking-[-0.055em] text-white md:text-[54px]">
              Step into the world of
              <br />
              tokenized assets
            </h2>

            <p className="mx-auto mt-7 max-w-[640px] text-[12px] leading-[1.5] text-white/80">
              Join the growing ecosystem of institutional investors looking for
              onchain infrastructure for real-world assets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {investmentCards.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden bg-[#d8d8d8] text-black"
              >
                <div className="flex h-[135px] items-center justify-center bg-[linear-gradient(rgba(3,11,30,.65),rgba(3,11,30,.65)),url('/hero.png')] bg-cover bg-center">
                  <span className="text-[34px] font-bold text-white">
                    {item.logo}
                  </span>
                </div>

                <div className="px-7 py-7">
                  <p className="mb-5 text-[10px] font-medium text-[#24507a]">
                    {item.category} &nbsp; | &nbsp; {item.offered}
                  </p>

                  <h3 className="font-serif text-[23px] leading-[1.05] tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[13px] leading-[1.45] text-black/70">
                    {item.desc}
                  </p>

                  <div className="mt-6 border-t border-black/15 text-[12px]">
                    {[
                      ["Asset Class", item.asset],
                      ["Min. Investment", item.min],
                      ["Investor Type", item.investor],
                      ["Redemptions", item.redemptions],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between border-b border-black/15 py-4"
                      >
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <button className="rounded-full bg-[#d8d8d8] px-6 py-3 text-[13px] font-semibold text-black transition hover:bg-white">
              Explore All Investments →
            </button>
          </div>

          <div className="mt-36 text-[9px] leading-[1.45] text-white/45">
            <p className="mb-4 underline">Disclosures</p>
            <p>
              Note: Certain assets referenced on this page are issued or
              managed by third-party asset managers and are not managed by
              Securitize Capital. For applicable fund material risks, please
              visit each fund’s product page. Certain information contained
              herein has been obtained from third party sources and such
              information has not been independently verified.
            </p>
          </div>
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