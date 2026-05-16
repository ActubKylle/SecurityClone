import Navbar from "../../components/Navbar";
import TrustedInstitutions from "../../components/TrustedInstitutions";
import Footer from "../../components/Footer";

const cards = [
  ["Fund Accounting", "Comprehensive NAV and portfolio reporting. Fund-level performance and management fees. GAAP or IFRS financial statement preparation."],
  ["Crypto Fund Services", "Automated integration and reconciliation with crypto counterparties, including exchanges, OTC desks, custodians, banks, wallets and DeFi activity."],
  ["Investor Services", "Onboard investors, monitor progress, and receive real-time support through an interactive platform."],
  ["Advisory Services", "Review trading platforms, auditors, valuation experts, administrators, attorneys and IT."],
  ["Offshore Regulation Services", "Leverage AML and reporting officer services. Support FATCA and CRS filings through portal registrations."],
  ["Banking Services", "Coordinate bank account opening processes with partner banks and review wire requests."],
  ["Management Company Accounting", "Reconcile cash and transactions. Prepare financial statements and annual budgeting."],
];

const chooseCards = [
  ["Regulated Transfer Agent", "Transactions clear in minutes, not days. The definitive onchain source of truth for your cap table and investor records."],
  ["Fund Administration", "Comprehensive full-cycle NAV, mNAV, and end-to-end investor servicing."],
  ["Reporting & Tax", "Audit-ready financial statements with IRS-compliant tax lot tracking."],
];

const digitalCards = [
  ["Advanced Portfolio Reporting", "Comprehensive reporting of NAV, balance sheet, and income statement in fiat or crypto currency, daily."],
  ["Complete Accounting", "Transaction-level accounting of all trades and transfers, gas fees, staking rewards, and income."],
  ["DeFi Reconciliation", "Full, detailed reconciliation of onchain activity including liquidity provision, borrow/lend, staking, governance activity, and income."],
  ["Operational Visibility", "Transparent reporting and activity summaries across trading, payments, and token operations."],
];

const partnerItems = [
  ["Complete Investor Support", "Simultaneously manage your prospect pipeline and investor onboarding from KYC/B and accreditation, to signing and funding."],
  ["Integrated Fund Administration", "Gain transparency between you, your advisors and investors with expert accounting, treasury and investor services."],
  ["Ongoing Regulation", "Designed to help reduce the risk of unauthorized issuances, transfers, or redemptions."],
  ["Enhanced Liquidity Options", "Offer liquidity to your shareholders through whitelisted peer-to-peer transfers or through our regulated secondary market. *"],
  ["Streamlined Efficiency and Savings", "Less intermediaries means more cost savings, processing efficiencies and increased accuracy for a seamless client experience."],
  ["Operational Efficiency", "Once investors are onboarded, issuances are immediate, redemptions are self-service, dividends can be reinvested and transfers are managed via embedded regulation rules."],
];

function FundAdministrationPage() {
  return (
    <main className="min-h-screen bg-[#f3f7fc] text-black">
      <Navbar />

      <section className="relative h-[520px] overflow-hidden">
        <img src="  /assets/hero-fund.png" alt="Fund Administration" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#06152d]/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-center px-5 md:px-10">
          <div className="mt-20">
            <h1 className="font-serif text-[58px] leading-[0.9] tracking-[-0.055em] text-white md:text-[82px]">
              Fund Administration
            </h1>
            <p className="mt-8 text-[17px] text-white/80">
              Manage your entire fund on a single integrated platform.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fc] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1160px] gap-16 md:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="mb-5 text-[13px] font-medium text-[#2b5b89]">Securitize Fund Services</p>
            <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              Built for Digital Assets. Trusted by Institutions.
            </h2>
            <p className="mt-10 max-w-[460px] text-[16px] leading-[1.55]">
              Since 2014, Securitize Fund Services has powered digital asset fund managers across the globe.
            </p>
            <p className="mt-8 text-[13px] text-[#2b5b89]">*As of 12/31/25</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              ["$26B", "AUA*"],
              ["600+", "Funds Serviced"],
              ["10 years", "Proven Experience"],
            ].map(([num, label]) => (
              <div key={label} className="flex h-[390px] flex-col justify-end bg-[linear-gradient(rgba(3,11,30,.35),rgba(3,11,30,.7)),url('/bannerBuilding.png')] bg-cover bg-center p-7 text-white">
                <h3 className="font-serif text-[42px] leading-none">{num}</h3>
                <p className="mt-2 font-serif text-[22px] leading-none">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedInstitutions />

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-5 text-[13px] font-medium text-[#2b5b89]">Comprehensive Fund Management</p>
          <h2 className="mb-16 max-w-[560px] font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[64px]">
            Leverage Expert Fund Services Solutions
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map(([title, text]) => (
              <article key={title} className="min-h-[260px] bg-[#f3f7fc] p-8">
                <div className="mb-10 flex h-10 w-10 items-center justify-center bg-[#dfe7f1] text-sm">▧</div>
                <h3 className="font-serif text-[28px] leading-none tracking-[-0.04em]">{title}</h3>
                <p className="mt-5 text-[14px] leading-[1.5] text-black/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px] text-center">
          <h2 className="font-serif text-[42px] leading-none tracking-[-0.055em] md:text-[58px]">
            Why Managers Choose Us
          </h2>
          <p className="mx-auto mt-8 max-w-[700px] text-[14px] leading-[1.5] text-white/60">
            Fund Administration is the backbone of any fund, from LP experience and reporting, to audited financial statement preparation.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {chooseCards.map(([title, text]) => (
              <article key={title} className="border border-[#212121] p-8">
                <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center bg-white/10">▧</div>
                <h3 className="font-serif text-[24px]">{title}</h3>
                <p className="mt-8 text-[14px] leading-[1.4]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px] text-center">
          <h2 className="font-serif text-[44px] leading-[0.9] tracking-[-0.055em] md:text-[62px]">
            Digital Asset Fund
            <br />
            Administration
          </h2>
          <p className="mx-auto mt-7 max-w-[650px] text-[14px]">
            The world's largest digital asset fund managers trust SFS to provide accurate and timely data for financial and regulatory reporting.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-4">
            {digitalCards.map(([title, text]) => (
              <article key={title} className="bg-[#f3f7fc] p-8 text-left">
                <div className="mb-12 flex h-10 w-10 items-center justify-center bg-[#dfe7f1]">▧</div>
                <h3 className="font-serif text-[23px] leading-tight">{title}</h3>
                <p className="mt-5 text-[13px] leading-[1.5] text-black/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1160px] gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] md:text-[58px]">
              Partnering In
              <br />
              Your Success
            </h2>
            <p className="mt-10 max-w-[445px] text-[15px] leading-[1.4] text-white/80">
              From launch to year-end, we provide expert support, operational guidance, and audit-ready reporting to help your fund grow with confidence and compliance.
            </p>
          </div>

          <div className="space-y-10">
            {[
              ["Day One Support", "Build a robust operational stack with access to a deep network of service providers and dedicated manager support."],
              ["After Launch", "Grow trust and AUM with audit-ready reporting and investor statements."],
              ["At Year-End", "Be confident with IRS-compliant tax lot tracking and cost-basis reporting."],
            ].map(([title, text], i) => (
              <div key={title}>
                <h3 className="font-serif text-[30px]">{title}</h3>
                <p className="mt-5 text-[15px] leading-[1.4] text-white/75">{text}</p>
                {i !== 2 && <div className="mt-10 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[160px]">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-5 text-[13px] font-medium text-[#2b5b89]">Partners</p>
          <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] md:text-[56px]">
            Your Partner for Every Stage of
            <br />
            the Investment Lifecycle
          </h2>
          <p className="mt-8 max-w-[900px] text-[15px] leading-[1.5]">
            Our fund administration solutions improve transparency between you and your investors.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
            {partnerItems.map(([title, text]) => (
              <article key={title} className="border-b border-[#d7dce3] pb-6">
                <h3 className="font-serif text-[28px] leading-none">{title}</h3>
                <p className="mt-5 text-[14px] leading-[1.5]">{text}</p>
              </article>
            ))}
          </div>

          <p className="mt-24 text-[12px] text-[#665a61]">
            *Operated by a registered broker-dealer or ATS, where applicable.
          </p>
        </div>
      </section>

      <section className="bg-[#4f74ab] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center text-center">
          <h2 className="mb-10 max-w-[900px] font-serif text-[42px] leading-[0.9] tracking-[-0.055em] text-white md:text-[64px]">
            Learn More About Securitize
            <br />
            Fund Services
          </h2>
          <p className="mb-10 text-[16px] text-white/90">
            Our team is available to answer all your fund administration questions.
          </p>
          <a href="/fundadmin-lgf">
            <button className="group rounded-full bg-white px-5 py-2 text-[14px] font-semibold text-black hover:bg-white/80">
              Get in Touch <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default FundAdministrationPage;