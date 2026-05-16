import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const whyItems = [
  {
    title: "Instant Settlements",
    text: "Transfers and trades executed through smart contracts are settled immediately, reducing transactional risks and delays.",
  },
  {
    title: "Automated Regulation",
    text: "Regulatory requirements, such as jurisdictional and transfer restrictions, are automatically enforced via smart contracts.",
  },
  {
    title: "Real-Time Shareholder Data",
    text: "Access your shareholder register and get valuable insights on shareholder activity in real time—no more waiting for nightly database refreshes.",
  },
  {
    title: "Enhanced Liquidity Access",
    text: "Enable your shareholders to access a variety of liquidity options including borrowing and lending, trading on licensed marketplaces and P2P transfers.",
  },
  {
    title: "Flexible Customization",
    text: "Set up specific features, such as voting rights or dividend preferences, to make the management of share classes work for your organization.",
  },
];

const solutionCards = [
  {
    title: "Treasury Management",
    text: "Offer a more secure, yield-seeking alternative to traditional stablecoins for optimizing treasury management and maintaining liquidity onchain.",
    icon: "▣",
  },
  {
    title: "DeFi Access",
    text: "Develop new financial products, allowing blockchain companies to create potentially yield-bearing, high-quality onchain assets with streamlined processes and DeFi interoperability.",
    icon: "◎",
  },
  {
    title: "Stablecoin Issuance",
    text: "Replace traditional reserve management with onchain products, ensuring reserve transparency and quality while adhering to legal requirements.",
    icon: "▤",
  },
  {
    title: "Collateral",
    text: "Leverage your onchain assets as collateral for loans or margin trading while targeting yield generation, enhancing liquidity potential and lessening risk for traders.",
    icon: "▧",
  },
];

function InstitutionalTokenizationPage() {
  return (
    <main className="min-h-screen bg-[#f3f7fd] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[620px] overflow-hidden">
        <img
          src="/assets/hero-ins.png"
          alt="City banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#06152d]/75" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06152d] to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5 md:px-10">
          <div className="mt-20 max-w-[760px]">
            <h1 className="font-serif text-[58px] leading-[0.9] tracking-[-0.055em] text-white/85 md:text-[86px]">
              Tokenization Solutions
              <br />
              For Institutions
            </h1>

            <p className="mt-8 text-[17px] font-medium text-white/70">
              Tokenize your investment products on our regulation-focused
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* WHY TOKENIZE */}
      <section className="bg-[#f3f7fd] px-5 py-[110px] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 text-[14px] font-semibold text-[#315d86]">
            Market Structures
          </p>

          <h2 className="font-serif text-[52px] leading-[0.95] tracking-[-0.055em] md:text-[72px]">
            Why Tokenize?
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-3">
            {whyItems.map((item) => (
              <article
                key={item.title}
                className="border-b border-black/15 pb-12"
              >
                <h3 className="font-serif text-[34px] leading-[1] tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-7 max-w-[330px] text-[16px] leading-[1.55] text-black">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

   

      {/* SOLUTIONS */}
      <section className="bg-[#f3f7fd] px-5 py-[100px] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-20 text-center">
            <h2 className="font-serif text-[54px] leading-[0.9] tracking-[-0.055em] md:text-[76px]">
              Onchain Solutions
              <br />
              For Your Firm
            </h2>
          </div>

          <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-8 md:grid-cols-2">
            {solutionCards.map((card) => (
              <article
                key={card.title}
                className="min-h-[260px] bg-[#e8edf4] px-9 py-9"
              >
                <div className="mb-14 flex h-[52px] w-[52px] items-center justify-center bg-[#d8e0ea] text-[22px]">
                  {card.icon}
                </div>

                <h3 className="font-serif text-[34px] leading-none tracking-[-0.05em]">
                  {card.title}
                </h3>

                <p className="mt-7 max-w-[520px] text-[16px] leading-[1.55]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
<section className="h-[300px] w-full overflow-hidden md:h-[400px]">
  <img
    src="/assets/bannerBuilding.png"
    alt="Banner"
    className="h-full w-full object-cover"
  />
</section>

{/* TOKENIZED SOLUTIONS SUITE */}
<section className="bg-white px-5 py-20 md:px-10 md:py-[160px]">
  <div className="mx-auto w-full max-w-[1160px]">
    <div className="flex flex-col gap-[60px] md:gap-[80px]">
      <h2 className="text-center font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#050505] md:text-[64px]">
        Full Suite of Tokenized Solutions
      </h2>

      <div className="flex flex-col gap-[70px]">
        <div className="flex flex-col gap-[50px] text-center">
          <p className="text-[14px] font-medium text-[#2b5b89]">
            🇺🇸 US Offerings
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-[60px] lg:flex-row lg:gap-[120px]">
            {[
              ["🤝", "Digital Share Class", "40 Act"],
              ["🏛️", "Fully Tokenized Master Fund", "Reg D/Reg S"],
              ["⌘", "Tokenized Feeder Fund", "Reg D/Reg S"],
            ].map(([icon, title, sub]) => (
              <div
                key={title}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-[rgba(79,115,171,0.1)] text-[22px]">
                  {icon}
                </div>

                <h3 className="font-serif text-[26px] leading-[0.95] tracking-[-0.045em] text-[#050505] md:text-[30px]">
                  {title}
                  <br />
                  {sub}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[50px] text-center">
          <p className="text-[14px] font-medium text-[#2b5b89]">
            🇪🇺 EU Offerings
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-[60px] lg:flex-row lg:gap-[120px]">
            {[
              ["↗", "Digital Share", ""],
              ["▦", "Digital Debt", ""],
              ["↵", "UCITS Transferable", "Securities"],
              ["▥", "Alternative", "Investment Funds"],
            ].map(([icon, title, sub]) => (
              <div
                key={title}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-[rgba(79,115,171,0.1)] text-[22px]">
                  {icon}
                </div>

                <h3 className="font-serif text-[26px] leading-[0.95] tracking-[-0.045em] text-[#050505] md:text-[30px]">
                  {title}
                  {sub && (
                    <>
                      <br />
                      {sub}
                    </>
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FULLY REGISTERED */}
<section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[160px]">
  <div className="mx-auto w-full max-w-[1160px]">
    <div className="flex w-full flex-col gap-10 md:gap-20">
      <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#050505] md:text-[64px]">
        Fully Registered
      </h2>

      <div className="flex flex-col gap-20 md:flex-row">
        {[
          {
            label: "🇺🇸 United States",
            items: [
              "First ever SEC-registered Transfer Agent operating with digital asset securities",
              "SEC-registered broker-dealer and FINRA member, operating an Alternative Trading System (ATS)",
              "Exempt Reporting Adviser filing with SEC",
            ],
          },
          {
            label: "🇪🇺 European Union",
            items: [
              "Fully passported to operate in major EU countries",
              "Investment firm (MIFID II) across main EU countries, Transfer Agent and primary market",
              "Fully regulated DLT Pilot Regime Trading and Settlement System (TSS) for trading of digital asset securities",
            ],
          },
        ].map((group) => (
          <div key={group.label} className="flex-1">
            <div className="flex flex-col gap-10">
              <p className="mb-[-20px] text-[14px] font-medium text-[#2b5b89]">
                {group.label}
              </p>

              {group.items.map((item, index) => (
                <div key={item}>
                  <p className="text-[18px] leading-[1.55] tracking-[-0.015em] text-[#03060d] md:text-[21px]">
                    {item}
                  </p>

                  {index !== group.items.length - 1 && (
                    <div className="mt-10 h-px w-full bg-[#03060d]/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* END-TO-END MANAGEMENT */}
<section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
  <div className="mx-auto w-full max-w-[1160px]">
    <div className="mb-[60px] text-center md:mb-[80px]">
      <p className="mb-5 text-[14px] font-medium text-[#4f74ab]">
        Market Structures
      </p>

      <h2 className="mb-6 font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#050505] md:text-[64px]">
        End-to-End Management &amp; Support
      </h2>

      <p className="mx-auto max-w-[900px] text-[18px] leading-[1.45] text-[#111827]">
        Our fund administration solutions improve transparency between you and
        your investors, and act as an add-on to our larger end-to-end suite of
        products from structuring to onboarding, issuance to trading, and all
        the operational support you need to operate with regulation.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-x-[80px] gap-y-10 md:grid-cols-2">
      {[
        [
          "Complete Investor Support",
          "Simultaneously manage your prospect pipeline and investor onboarding from KYC/B and accreditation, to signing and funding.",
        ],
        [
          "Ongoing Regulation",
          "Designed to help reduce the risk of unauthorized issuances, transfers, or redemptions.",
        ],
        [
          "Streamlined Efficiency & Savings",
          "Less intermediaries means more cost savings, processing efficiencies, and increased accuracy for a seamless client experience.",
        ],
        [
          "Operational Efficiency",
          "Once investors are onboarded, issuances are immediate, redemptions are self-service, dividends can be reinvested, and transfers are managed via embedded regulation rules.",
        ],
        [
          "Integrated Fund Administration",
          "Gain transparency between you, your advisors, and investors with expert accounting, treasury, and investor services.",
        ],
        [
          "Enhanced Liquidity Options",
          "Offer liquidity to your shareholders through whitelisted peer-to-peer transfers or through our regulated secondary market. *",
        ],
      ].map(([title, text]) => (
        <article
          key={title}
          className="flex flex-col gap-4 border-b border-[#e6e6e7] pb-6"
        >
          <h3 className="font-serif text-[32px] leading-[1] tracking-[-0.05em] text-[#050505] md:text-[36px]">
            {title}
          </h3>

          <p className="text-[16px] leading-[1.55] text-[#111827]">
            {text}
          </p>
        </article>
      ))}
    </div>

    <p className="mt-24 text-[12px] leading-relaxed text-[#665a61]">
      *Operated by a registered broker-dealer or ATS, where applicable.
      Participation and availability are subject to regulatory and issuer
      restrictions.
    </p>
  </div>
</section>
{/* ECOSYSTEM */}
<section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[160px]">
  <div className="mx-auto flex max-w-[1160px] flex-col items-center text-center">
    <p className="mb-5 text-[14px] font-medium text-[#2b5b89]">
      Partners
    </p>

    <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] text-[#050505] md:text-[64px]">
      The Securitize Ecosystem
    </h2>

    <div className="mt-[120px] grid grid-cols-5 gap-4 md:gap-5">
      {[
        "≋",
        "▲",
        "≋",
        "◆",
        "H",
        "⬟",
        "◐",
        "Ξ",
        "∞",
        "✿",
      ].map((icon, index) => (
        <div
          key={index}
          className="ecosystem-icon flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[28px] font-bold text-black shadow-sm md:h-[88px] md:w-[88px] md:text-[34px]"
          style={{ animationDelay: `${index * 0.12}s` }}
        >
          {icon}
        </div>
      ))}
    </div>

    <p className="mt-[70px] max-w-[660px] text-[20px] leading-[1.35] tracking-[-0.02em] text-black">
      Bringing tokenization benefits to market through this group of diverse
      TradFi and DeFi institutions across chains, custodians, exchanges, market
      makers and more.
    </p>

    <button className="mt-12 rounded-full bg-black px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-black/80">
      Explore Ecosystem →
    </button>
  </div>
</section>
{/* VIDEO RESOURCES */}
<section className="bg-white px-5 py-20 md:px-10 md:py-[160px]">
  <div className="mx-auto max-w-[1160px]">
    <h2 className="mx-auto mb-[80px] max-w-[620px] text-center font-serif text-[42px] leading-[0.9] tracking-[-0.055em] text-[#050505] md:text-[64px]">
      Navigating Tokenization
      <br />
      with Securitize
    </h2>

    <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-8 md:grid-cols-2">
      {[
        {
          eyebrow: "Securitize x Token Terminal",
          title: "Asset Tokenization 101",
          desc: "Co-founder and CEO, Carlos Domingo, walks through the benefits of tokenization for all involved stakeholders, using different products available on Securitize's platform.",
          hero: "Blackrock’s $10T Bet\non Ethereum\n\nBUILD Fund",
          bg: "from-[#05090c] to-[#141414]",
        },
        {
          eyebrow: "Securitize Insights x Bankless",
          title: "Tokenized Treasuries Onchain",
          desc: "The largest institutions in the world are here and they're tokenizing their assets. Learn about the significant steps being taken on the Securitize platform.",
          hero: "Navigating Asset Tokenization\nwith Securitize\n\nInterview with Carlos Domingo",
          bg: "from-[#120b22] to-[#24143d]",
        },
      ].map((card) => (
        <article key={card.title} className="bg-[#eef4fb]">
          <div
            className={`relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br ${card.bg}`}
          >
            <div className="absolute top-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
              ▶
            </div>

            <div className="absolute bottom-0 h-[110px] w-[70%] rounded-t-full bg-black/25 blur-sm" />

            <h3 className="relative z-10 whitespace-pre-line text-center font-serif text-[28px] leading-[1.05] tracking-[-0.045em] text-white">
              {card.hero}
            </h3>
          </div>

          <div className="px-8 py-8">
            <p className="mb-5 text-[12px] text-[#667085]">
              {card.eyebrow}
            </p>

            <h4 className="font-serif text-[26px] leading-none tracking-[-0.04em] text-black">
              {card.title}
            </h4>

            <p className="mt-5 text-[14px] leading-[1.5] text-[#667085]">
              {card.desc}
            </p>

            <button className="mt-7 text-[13px] font-medium text-[#111827]">
              Watch Video →
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
{/* BUSINESS CTA */}
<section className="bg-[#4f74ab] px-5 py-20 md:px-10 md:py-[120px]">
  <div className="mx-auto w-full max-w-[1160px]">
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="mb-10 max-w-[900px] whitespace-pre-line font-serif text-[42px] leading-[0.9] tracking-[-0.055em] text-white md:text-[64px]">
        Learn More About Our
        <br />
        Business Solutions
      </h2>

      <p className="mb-10 max-w-[700px] whitespace-pre-line text-[15px] font-medium leading-[1.45] text-white/90 md:text-[18px]">
        Our team is here to walk you through our tokenization products and
        <br className="hidden md:block" />
        discuss which best fit your needs.
      </p>

      <a href="/homepage-lgf-select">
        <button className="group rounded-full bg-white px-5 py-2 text-[14px] font-semibold text-black transition hover:bg-white/80">
          Get in Touch
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </a>
    </div>
  </div>
</section>
      <Footer />
    </main>
  );
}

export default InstitutionalTokenizationPage;