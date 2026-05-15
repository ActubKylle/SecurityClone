import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const funds = [
  {
    category: "U.S. Treasury",
    offeredBy: "Offered by Securitize Markets",
    title: "Arca U.S. Treasury Fund",
    description:
      "Access yield in a 40 Act fund derived from a portfolio of 80%+ U.S. Treasury securities.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    assetClass: "U.S. Treasuries",
    minInvestment: "$1k",
    investorType: "Retail Investor",
    redemptions: "Instant",
    fundType: "40 Act | SEC Listing",
    href: "/primary-market/arca-rcoin",
  },
  {
    comingSoon: true,
  },
  {
    comingSoon: true,
  },
];

function FundCard({ fund }) {
  if (fund.comingSoon) {
    return (
      <div className="bg-white overflow-hidden flex flex-col h-full">
        {/* IMAGE */}
        <div className="h-[200px] relative bg-[#0D0F11] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at center, #2b3138 0%, transparent 70%)",
            }}
          />

          <p className="relative z-10 text-white text-[32px] font-serif">
            Coming Soon
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-[32px] flex flex-col gap-[40px] flex-1">
          <div className="flex flex-col gap-[20px]">
            <div className="h-[14px] w-[120px] rounded bg-gray-200" />

            <div className="h-[24px] w-[80%] rounded bg-gray-200" />

            <div className="flex flex-col gap-[10px]">
              <div className="h-[12px] rounded bg-gray-100" />
              <div className="h-[12px] rounded bg-gray-100 w-[90%]" />
              <div className="h-[12px] rounded bg-gray-100 w-[70%]" />
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            {[
              "Asset Class",
              "Min. Investment",
              "Investor Type",
              "Redemptions",
              "Fund Type",
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-[4px]">
                  <span className="text-sm text-[#03060d] w-[120px]">
                    {item}
                  </span>

                  <div className="h-[12px] w-[120px] rounded bg-gray-200" />
                </div>

                <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
              </div>
            ))}

            <span className="text-[12px] text-[#03060d]">
              See Disclosure *
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={fund.href}
      className="bg-white overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 no-underline"
    >
      {/* IMAGE */}
      <div className="h-[200px] relative overflow-hidden">
        <img
          src={fund.image}
          alt={fund.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071636]/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-[42px] tracking-[6px] font-semibold">
              ARCA
            </p>

            <p className="uppercase text-[12px] tracking-[3px] mt-[4px]">
              Treasury Fund
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-[32px] flex flex-col gap-[40px] flex-1">
        {/* TOP */}
        <div className="flex flex-col gap-[20px]">
          {/* CATEGORY */}
          <div className="flex items-center gap-[12px]">
            <span className="text-xs font-medium text-[#8E7137]">
              {fund.category}
            </span>

            <div className="w-[2px] h-[12px] rounded-full bg-black opacity-30" />

            <span className="text-xs font-medium text-[#4F73AB]">
              {fund.offeredBy}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-[32px] leading-[1.1] text-[#03060d] font-serif">
            {fund.title}
          </h3>

          {/* DESC */}
          <p className="text-[15px] leading-[1.7] text-[#03060d] opacity-60">
            {fund.description}
          </p>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-[14px]">
          {[
            {
              label: "Asset Class",
              value: fund.assetClass,
            },
            {
              label: "Min. Investment",
              value: fund.minInvestment,
            },
            {
              label: "Investor Type",
              value: fund.investorType,
            },
            {
              label: "Redemptions",
              value: fund.redemptions,
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-[4px]">
                <span className="text-sm text-[#03060d] w-[120px]">
                  {item.label}
                </span>

                <span className="text-sm font-semibold text-[#03060d]">
                  {item.value}
                </span>
              </div>

              <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
            </div>
          ))}

          {/* FUND TYPE */}
          <div>
            <div className="flex items-center gap-[4px]">
              <span className="text-sm text-[#03060d] w-[120px]">
                Fund Type
              </span>

              <span className="text-sm font-semibold text-[#2864E7] underline">
                {fund.fundType}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function RegisteredFundsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden bg-[#081838]">
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,24,56,0.72), rgba(8,24,56,0.72)),
              url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1160px] mx-auto h-full px-[20px] flex items-end pb-[90px]">
          <h1 className="text-white text-[58px] md:text-[88px] leading-[0.95] font-serif">
            Registered Funds
          </h1>
        </div>
      </section>

      {/* SECTION */}
      <section className="bg-[#F3F7FC] py-[60px] md:py-[120px] px-[20px]">
        <div className="max-w-[1160px] mx-auto flex flex-col gap-[60px]">
          {/* TITLE */}
          <div className="flex justify-center">
            <h2 className="text-[48px] md:text-[76px] leading-none text-[#03060d] font-serif text-center">
              Featured Issuers
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {funds.map((fund, index) => (
              <FundCard key={index} fund={fund} />
            ))}
          </div>

          {/* DISCLOSURE */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] leading-[1.7] text-[#03060d] opacity-60">
              * This material is intended for informational purposes only.
              This is not an offer or solicitation to buy or sell securities
              and is not intended as investment advice or recommendation.
            </p>

            <p className="text-[12px] leading-[1.7] text-[#03060d] opacity-60">
              Texts.stocks-disclaimer-liquidity
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}