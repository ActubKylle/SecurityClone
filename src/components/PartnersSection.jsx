import { Link } from "react-router-dom";

const row1 = [
  {
    name: "Aptos",
    src: "https://cryptologos.cc/logos/aptos-apt-logo.svg",
  },
  {
    name: "Avalanche",
    src: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
  },
  {
    name: "Ethereum",
    src: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    name: "Solana",
    src: "https://cryptologos.cc/logos/solana-sol-logo.svg",
  },
  {
    name: "Polygon",
    src: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  },
  {
    name: "Arbitrum",
    src: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
  },
];

const row2 = [
  {
    name: "Crypto.com",
    src: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.svg",
  },
  {
    name: "Drift",
    src: "https://assets.coingecko.com/coins/images/33709/large/drift_logo.png",
  },
  {
    name: "Ink",
    src: "https://assets.coingecko.com/asset_platforms/images/156/small/ink.jpeg",
  },
  {
    name: "Polygon",
    src: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  },
  {
    name: "Frax",
    src: "https://cryptologos.cc/logos/frax-share-fxs-logo.svg",
  },
  {
    name: "Arbitrum",
    src: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
  },
];
function LogoPill({ item }) {
  return (
    <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-[60px] bg-white p-[10px] md:p-[20px]">
      <img
        src={item.src}
        alt={item.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden" style={{ width: "532px" }}>
      <div
        className={`flex gap-[8px] ${
          reverse ? "animate-partners-reverse" : "animate-partners"
        }`}
      >
        {repeated.map((item, index) => (
          <LogoPill key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function PartnersSection() {
  return (
    <section className="flex flex-col items-center bg-[#f3f7fc] px-5 py-[80px] md:px-10 md:py-[160px]">
      <style>{`
        @keyframes partnersSlide {
          from { transform: translateX(0); }
          to { transform: translateX(-648px); }
        }

        @keyframes partnersSlideReverse {
          from { transform: translateX(-648px); }
          to { transform: translateX(0); }
        }

        .animate-partners {
          animation: partnersSlide 18s linear infinite;
          will-change: transform;
        }

        .animate-partners-reverse {
          animation: partnersSlideReverse 18s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="w-full max-w-[1160px]">
        <div className="mx-auto w-full max-w-[1160px]">
          <div className="flex w-full flex-col items-center">
            <div className="mb-[60px] text-center md:mb-[80px]">
              <p
                className="mb-[20px] text-[14px] font-medium leading-[20px] text-[#4F74AB]"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Partners
              </p>

              <h2
                className="mb-6 whitespace-pre-line text-[42px] leading-[46px] tracking-[-0.055em] text-black md:text-[64px] md:leading-[70px]"
                style={{
                  fontFamily: '"PP Editorial New", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Best-in-class Service Providers,{"\n"}
                United by a Shared Mission.
              </h2>
            </div>

            <div className="relative mb-[60px] flex w-full flex-col items-center gap-[8px]">
              <MarqueeRow items={row1} />
              <MarqueeRow items={row2} reverse />
            </div>

            <div className="max-w-[700px] text-center">
              <div className="mb-6 flex flex-col gap-[16px]">
                <p
                  className="text-[20px] leading-[28px] text-[#2E3545]"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  The Securitize Ecosystem represents a strategic alliance of
                  premier partners committed to advancing our mission. This
                  network includes top-tier providers across liquidity, custody,
                  and essential onchain infrastructure.
                </p>

                <p
                  className="text-[20px] leading-[28px] text-[#2E3545]"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Through these partnerships, we&apos;re able to provide a truly
                  comprehensive platform to provide our clients with access to
                  top-tier solutions that support their success.
                </p>
              </div>

              <Link
                to="/partner-ecosystem"
                className="group inline-flex items-center justify-center rounded-[44px] bg-[#03060d] px-[20px] py-[8px] text-[14px] font-medium leading-[20px] text-white transition-colors duration-150 ease-out hover:bg-[rgba(3,6,13,0.8)]"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Explore Ecosystem
                <span className="ml-[6px] inline-block transition-transform duration-150 ease-out group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;