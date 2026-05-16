import Navbar from "../../components/Navbar";
import TrustedInstitutions from "../../components/TrustedInstitutions";
import Footer from "../../components/Footer";

const whyCards = [
  ["◎", "Single Source of Truth", "Unified reporting across USD and native crypto assets."],
  ["⚡", "DeFi-Ready by Design", "Full reconciliation of complex onchain and protocol-level activity."],
  ["☑", "Audit-Ready Workflows", "Regulatory-grade record-keeping aligned with accounting and tax requirements."],
  ["⌘", "Enterprise integration", "Seamless connection to accounting systems, ERPs, and downstream reporting."],
];

const actionCards = [
  {
    icon: "▣",
    title: "Digital Asset Treasury Activity",
    desc: "See your full treasury—clearly and completely.",
    bullets: [
      "Crystal-clear portfolio insight: NAV, mNAV, P&L, and income reporting in both USD and native crypto assets.",
      "DeFi reconciliation at scale: Accurate tracking of all transactions, positions, and cash balances, including decentralized finance activity.",
      "Always audit-ready: Regulatory-grade records, financial statement preparation, and IRS-compliant tax-lot tracking.",
    ],
  },
  {
    icon: "▥",
    title: "Balance Sheet Reporting",
    desc: "Bring structure and confidence to crypto financials.",
    bullets: [
      "Simplified financial reporting: Clean transaction logs with clear balance sheet and income statement treatment in USD and crypto.",
      "Validated metrics: End-to-end reconciliation across wallets, protocols, and platforms.",
      "Seamless compliance: Audit-ready documentation and essential audit support built in.",
    ],
  },
  {
    icon: "◎",
    title: "Crypto-Native Business Operations",
    desc: "Operational visibility without compromise.",
    bullets: [
      "Total activity transparency: Comprehensive summaries across trading, payments, and token operations.",
      "Complex flow reconciliation: Detailed tracking of OTC trades, onchain activity, and DeFi transactions.",
      "Enterprise-grade controls: Dual-authorization oversight, banking review support, and IRS-compliant tax-lot tracking.",
    ],
  },
  {
    icon: "▤",
    title: "Vault Curator Reporting",
    desc: "Generate independent, audit-ready reporting.",
    bullets: [
      "Prepare and distribute vault and LP-level performance and allocation reporting that is readily usable by auditors and tax professionals.",
      "Provide independently gathered data for vault curators and onchain asset allocators seeking to add a layer of transparency and credibility.",
      "Align investor reporting expectations and requirements with next-generation onchain asset management experience.",
    ],
  },
];

const whoItems = [
  ["▦", "Corporate\ntreasuries\nholding digital\nassets"],
  ["◈", "Crypto-native\nbusinesses\nand DAOs"],
  ["◈", "Tokenized\nfunds and\nasset\nmanagers"],
  ["▣", "Finance and\naccounting teams\noperating\nonchain"],
  ["▥", "Vault\ncurators and\nonchain\nallocators"],
];

const partnerItems = [
  ["Complete Investor Support", "Simultaneously manage your prospect pipeline and investor onboarding from KYC/B and accreditation, to signing and funding."],
  ["Ongoing Regulation", "Designed to help reduce the risk of unauthorized issuances, transfers, or redemptions."],
  ["Streamlined Efficiency & Savings", "Less intermediaries means more cost savings, processing efficiencies, and increased accuracy for a seamless client experience."],
  ["Operational Efficiency", "Once investors are onboarded, issuances are immediate, redemptions are self-service, dividends can be reinvested, and transfers are managed via embedded regulation rules."],
  ["Integrated Fund Administration", "Gain transparency between you, your advisors, and investors with expert accounting, treasury, and investor services."],
  ["Enhanced Liquidity Options", "Offer liquidity to your shareholders through whitelisted peer-to-peer transfers or through our regulated secondary market. *"],
];

function DigitalAssetReportingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/assets/hero-fund.png"
          alt="Digital Asset Reporting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#081838]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-end px-5 pb-20 pt-[140px] md:px-10 lg:pb-[100px] lg:pt-[200px]">
          <div>
            <h1 className="font-serif text-[54px] font-normal leading-[0.9] tracking-[-0.055em] text-white md:text-[82px]">
              Digital Asset Reporting
            </h1>
            <p className="mt-5 max-w-[640px] text-[16px] leading-[1.5] text-white/80">
              Institutional-grade reporting for digital assets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto mb-[60px] text-center">
            <h2 className="font-serif text-[46px] leading-[0.96] tracking-[-0.055em] md:text-[66px]">
              Clear, compliant reporting
              <br />
              for crypto-native finance
            </h2>

            <div className="mx-auto mt-10 max-w-[680px] space-y-5 text-[15px] leading-[1.45]">
              <p>
                Securitize is the world’s leading platform for tokenizing and managing real-world assets onchain.
                Digital Asset Reporting extends that leadership with regulatory-grade reporting purpose-built for
                digital assets—bringing clarity, control, and audit readiness to crypto treasuries, funds, and
                onchain operations.
              </p>
              <p>
                From NAV and P&L to DeFi reconciliation and tax-lot tracking, Digital Asset Reporting connects
                crypto activity directly to corporate accounting and ERP systems—so finance teams can move faster
                with confidence.
              </p>
            </div>
          </div>

          <TrustedInstitutions />
        </div>
      </section>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-[44px] text-center">
            <h2 className="font-serif text-[44px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              Why Digital Asset Reporting
            </h2>
            <p className="mx-auto mt-10 max-w-[700px] text-[15px] text-white/60">
              Designed for modern finance teams managing crypto alongside traditional assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map(([icon, title, text]) => (
              <article
                key={title}
                className="flex min-h-[292px] flex-col items-center gap-10 border border-[#212121] p-8 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-white/10 text-[21px] text-white/70">
                  {icon}
                </div>
                <h3 className="font-serif text-[22px] leading-tight tracking-[-0.04em]">{title}</h3>
                <p className="max-w-[210px] text-[15px] font-semibold leading-[1.35]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <h2 className="mb-[70px] text-center font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[64px]">
            What You Can Do
          </h2>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-4">
            {actionCards.map((card) => (
              <article key={card.title} className="min-h-[730px] bg-[#f3f7fc] p-8">
                <div className="mb-[58px] mt-3 flex h-10 w-10 items-center justify-center bg-[#e4ebf4] text-[15px]">
                  {card.icon}
                </div>

                <h3 className="font-serif text-[24px] leading-[0.95] tracking-[-0.045em]">{card.title}</h3>
                <p className="mt-5 text-[14px] leading-[1.45] text-black/60">{card.desc}</p>

                <ul className="mt-8 space-y-7 pl-5 text-[14px] leading-[1.45] text-black/60">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="relative min-h-[500px]">
            <div className="grid grid-cols-1 gap-20 px-5 lg:grid-cols-2">
              <div className="relative z-10">
                <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[64px]">
                  Built on Securitize&apos;s
                  <br />
                  Regulated
                  <br />
                  Infrastructure
                </h2>
                <p className="mt-10 max-w-[500px] text-[15px] leading-[1.45]">
                  Digital Asset Reporting is powered by Securitize’s fully regulated platform for issuing,
                  administering, and servicing digital funds and securities—combining investor onboarding,
                  portfolio reporting, and treasury management in one secure ecosystem.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-screen lg:block">
              <img
                src="/assets/map.png"
                alt="Global map"
                className="h-full w-[200%] object-contain object-left opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-[300px] overflow-hidden md:h-[400px]">
        <img src="/assets/bannerBuilding.png" alt="City banner" className="h-full w-full object-cover" />
      </div>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <h2 className="text-center font-serif text-[46px] leading-none tracking-[-0.055em] md:text-[62px]">
            Who it&apos;s for
          </h2>

          <div className="mt-20 flex flex-col items-center justify-center gap-[60px] lg:flex-row lg:gap-[120px]">
            {whoItems.map(([icon, title]) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-10 w-10 items-center justify-center bg-[#e9f0f9] text-[15px]">
                  {icon}
                </div>
                <h3 className="whitespace-pre-line font-serif text-[22px] leading-[1.05] tracking-[-0.04em]">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3f7fc] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="pointer-events-none absolute right-0 top-0 hidden text-[520px] font-bold leading-none text-white/35 lg:block">
          S
        </div>

        <div className="relative z-10 mx-auto max-w-[1160px]">
          <div className="mb-[80px]">
            <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[64px]">
              Your Partner for Every Stage of
              <br />
              the Investment Lifecycle
            </h2>
            <p className="mt-8 max-w-[900px] text-[16px] leading-[1.55]">
              Our solutions improve transparency between you and your investors, and act as an add-on to our larger
              end-to-end suite of products from structuring to onboarding, issuance to trading, and all the operational
              support you need to operate with regulation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
            {partnerItems.map(([title, text]) => (
              <article key={title} className="border-b border-[#d7dce3] pb-6">
                <h3 className="font-serif text-[28px] leading-none tracking-[-0.04em]">{title}</h3>
                <p className="mt-5 text-[14px] leading-[1.55]">{text}</p>
              </article>
            ))}
          </div>

          <p className="mt-24 text-[12px] leading-relaxed text-[#665a61]">
            *Operated by a registered broker-dealer or ATS, where applicable. Participation and availability are subject
            to regulatory and issuer restrictions.
          </p>
        </div>
      </section>

      <section className="bg-[#4f74ab] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center text-center">
          <h2 className="max-w-[900px] font-serif text-[44px] leading-[0.92] tracking-[-0.055em] text-white md:text-[64px]">
            Bring clarity to your
            <br />
            digital asset operations
          </h2>
          <p className="mt-10 text-[15px] text-white/90">
            Learn how Digital Asset Reporting can support your business.
          </p>
          <a href="/digitalassetreporting-lgf" className="mt-10">
            <button className="group rounded-full bg-white px-5 py-2 text-[14px] font-semibold text-black hover:bg-white/80">
              Get in Touch <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </a>
        </div>
      </section>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <h3 className="text-[15px] text-white/70">Disclosures</h3>
          <p className="mt-6 max-w-[900px] text-[15px] leading-[1.45] text-white/70">
            Services are designed to support compliance processes but do not replace a firm&apos;s independent obligation
            to comply with applicable securities laws and regulations.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default DigitalAssetReportingPage;