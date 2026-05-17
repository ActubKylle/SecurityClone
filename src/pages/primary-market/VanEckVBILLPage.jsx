import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Stat = ({ label, value, note }) => (
  <div>
    <div className="font-serif text-[42px] leading-none tracking-[-0.04em] text-white md:text-[54px]">
      {value}
    </div>
    <p className="mt-2 text-[13px] text-white/65">{label}</p>
    {note && <p className="mt-1 text-[11px] text-white/45">{note}</p>}
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="grid grid-cols-[45%_1fr] border-b border-black/10 py-4 text-[14px]">
    <span className="text-black/55">{label}</span>
    <strong className="font-semibold text-black">{value}</strong>
  </div>
);

const MiniStat = ({ value, label }) => (
  <div className="border-t border-black/10 pt-5">
    <div className="font-serif text-[40px] leading-none tracking-[-0.04em] text-black">
      {value}
    </div>
    <p className="mt-2 text-[13px] text-black/55">{label}</p>
  </div>
);

export default function VanEckVBILLPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f3f7fc] text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06101f] px-5 pt-[120px] pb-[90px] md:px-10 md:pt-[150px] md:pb-[120px]">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101f]/95 via-[#06101f]/70 to-[#06101f]/90" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1160px] gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="mb-5 text-[13px] font-medium text-white/60">
              Private Funds
            </p>

            <h1 className="max-w-[760px] font-serif text-[58px] leading-[0.9] tracking-[-0.06em] text-white sm:text-[76px] md:text-[96px]">
              VanEck Treasury Fund
            </h1>

            <p className="mt-8 max-w-[620px] text-[18px] leading-[1.55] text-white/70">
              Seeking stable yield with daily liquidity by investing in
              short-term U.S. Treasuries via blockchain.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/registration/name"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-7 text-[15px] font-medium text-[#03060d]"
              >
                Invest Now <span className="ml-2">→</span>
              </a>

              <a
                href="#overview"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/25 px-7 text-[15px] font-medium text-white"
              >
                View Details
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-1">
            <Stat label="AUM" value="$72.21M" note="Data as of 05/14/26" />
            <Stat label="7-Day Yield" value="3.64%" note="Net of fees" />
            <Stat label="Minimum Investment" value="$1K - $1M" />
          </div>
        </div>
      </section>

      {/* Main Overview */}
      <section id="overview" className="px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              At-A-Glance
            </p>

            <h2 className="max-w-[760px] font-serif text-[46px] leading-[0.98] tracking-[-0.055em] md:text-[68px]">
              For Investors Seeking Income with Capital Preservation and
              Instant Liquidity
            </h2>

            <p className="mt-8 max-w-[760px] text-[17px] leading-[1.65] text-black/60">
              This Fund seeks to offer a stable value of $1 per token and pays
              daily accrued dividends directly to investors wallets as new
              tokens each day. The Fund primarily invests its total assets in
              cash, U.S. Treasury bills, and repurchase agreements, allowing
              investors to earn yield while holding the token on the blockchain.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MiniStat value="$600M+" label="On Chain" />
              <MiniStat value="500K+" label="Investors and Counting" />
              <MiniStat value="3%" label="Selection Rate" />
              <MiniStat value="0.5%" label="Management Fee" />
            </div>
          </div>

          <aside className="bg-white p-7 shadow-sm md:p-8">
            <h3 className="mb-6 font-serif text-[30px] tracking-[-0.04em]">
              Fund Profile
            </h3>

            <InfoRow label="Total Unitary Fee" value="0.2%" />
            <InfoRow label="Dividend Accrual" value="Daily" />
            <InfoRow label="Currency" value="USDC, USD" />
            <InfoRow label="Subscription" value="Instant" />
            <InfoRow label="Deadline" value="1:30pm ET" />
            <InfoRow label="Domicile" value="BVI" />
            <InfoRow label="Liquidity" value="Instant" />
            <InfoRow label="Hold Period" value="3 days" />

            <p className="mt-6 text-[12px] leading-relaxed text-black/45">
              Risk/Reward scale reflects the strategy’s general risk
              characteristics. Higher risk does not necessarily result in higher
              returns and may increase the risk of loss.
            </p>
          </aside>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="border-t border-white bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1160px]">
          <div className="mb-14 max-w-[720px]">
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              Blockchain Infrastructure
            </p>
            <h2 className="font-serif text-[46px] leading-[0.98] tracking-[-0.055em] md:text-[68px]">
              DeFi Features
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-black/60">
              Capabilities aimed at increasing the utility of your tokenized
              assets.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="bg-[#f3f7fc] p-7 md:p-10">
              <h3 className="font-serif text-[34px] tracking-[-0.04em]">
                Live Marketplaces
              </h3>
              <p className="mt-4 text-black/60">
                Trade and access assets on leading live markets.
              </p>

              <div className="mt-8 grid grid-cols-3 border-t border-black/10 text-[13px]">
                <span className="py-4 font-semibold">Market</span>
                <span className="py-4 font-semibold">Asset</span>
                <span className="py-4 font-semibold">Type</span>
              </div>
            </div>

            <div className="bg-[#f3f7fc] p-7 md:p-10">
              <h3 className="font-serif text-[34px] tracking-[-0.04em]">
                Liquidity, Activated
              </h3>
              <p className="mt-4 text-black/60">
                Access liquidity through eligible third-party protocols and
                supported markets.
              </p>

              <div className="mt-8 grid grid-cols-3 border-t border-black/10 text-[13px]">
                <span className="py-4 font-semibold">Lending</span>
                <span className="py-4 font-semibold">Asset</span>
                <span className="py-4 font-semibold">Details</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[12px] leading-relaxed text-black/45">
            Secondary market trading is not guaranteed and may be limited by
            regulatory transfer restrictions, platform availability, or investor
            eligibility requirements.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-[#f3f7fc] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 lg:grid-cols-[380px_1fr]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              Getting Started
            </p>
            <h2 className="font-serif text-[46px] leading-[0.98] tracking-[-0.055em] md:text-[68px]">
              Subscription Process
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-black/60">
              Once you verify your identity, you can quickly invest in offerings
              without having to go through the same onboarding process again.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Create Account / Log In",
                "Verify your identity, complete your investment profile questionnaire, and submit an accreditation application.",
              ],
              [
                "02",
                "Choose Your Investment",
                "Select the fund you wish to invest in and enter the investment amount.",
              ],
              [
                "03",
                "Sign Documents",
                "View and sign subscription documents and follow funding instructions.",
              ],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-white p-7">
                <span className="font-serif text-[52px] leading-none text-black/20">
                  {num}
                </span>
                <h3 className="mt-8 font-serif text-[28px] leading-tight tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-black/55">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Chains */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1160px]">
          <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
            Compare Chains
          </p>

          <h2 className="mb-12 font-serif text-[46px] leading-[0.98] tracking-[-0.055em] md:text-[68px]">
            Available Share Classes
          </h2>

          <div className="overflow-hidden bg-[#f3f7fc]">
            {[
              ["Blockchain", "Mgmt Fee", "Investment Min"],
              ["Avalanche", "20 bps", "$100k"],
              ["BNB Chain", "20 bps", "$100k"],
              ["Ethereum", "20 bps", "$1M"],
              ["Solana", "20 bps", "$100k"],
            ].map((row, index) => (
              <div
                key={row[0]}
                className={`grid grid-cols-3 px-6 py-5 text-[14px] ${
                  index === 0
                    ? "bg-[#06101f] font-semibold text-white"
                    : "border-b border-black/10 text-black"
                }`}
              >
                <span>{row[0]}</span>
                <span>{row[1]}</span>
                <span>{row[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind Investment */}
      <section className="bg-[#f3f7fc] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 lg:grid-cols-[420px_1fr]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              Behind The Investment
            </p>
            <h2 className="font-serif text-[46px] leading-[0.98] tracking-[-0.055em] md:text-[68px]">
              VanEck
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              <MiniStat value="$181.4B" label="AUM" />
              <MiniStat value="70+" label="Years in Business" />
              <MiniStat value="400" label="Employees Globally" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                "Track Record of Innovation",
                "From international equity to blockchain-linked funds, VanEck brings first-mover expertise.",
              ],
              [
                "Client-Centered",
                "Independent and privately owned, VanEck operates with long-term alignment to investor outcomes.",
              ],
              [
                "Institutional Rigor",
                "Built with the controls, compliance, and standards demanded by global investors.",
              ],
              [
                "Deep Expertise",
                "Teams of seasoned portfolio managers, analysts, and risk professionals back every strategy.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white p-7">
                <h3 className="font-serif text-[28px] leading-tight tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-black/55">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="bg-white px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1160px] text-[12px] leading-relaxed text-black/50">
          <p>
            This is neither an offer to sell nor a solicitation to purchase any
            security. Investors should carefully consider the investment
            objectives, risks, charges, and expenses of the fund. Past
            performance is not a guarantee of future results.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}