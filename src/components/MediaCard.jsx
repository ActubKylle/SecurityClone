const newsItems = [
  {
    date: "11/05/2026",
    title: "Blackrock deepens tokenization push with new onchain fund offerings",
    href: "https://www.coindesk.com/business/2026/05/09/blackrock-deepens-tokenization-push-with-new-onchain-fund-offerings",
    logo: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fadb38ec443d5410782821dd9c774fde6",
  },
  {
    date: "05/05/2026",
    title: "Jump and Securitize Join Forces To Trade Tokenized Stocks",
    href: "https://www.bloomberg.com/news/articles/2026-05-05/jump-and-securitize-join-forces-to-trade-tokenized-stocks",
    logo: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Ff93b1fb50a1445d79fcb132108a94e94",
  },
  {
    date: "04/05/2026",
    title: "Securitize Receives Approval to Enable Custody and Atomic Settlement for Tokenized Securities",
    href: "https://markets.ft.com/data/announce/detail?dockey=600-202605040900PR_NEWS_USPRX____FL49483-1",
    logo: "https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F9c3c2cf410ac41ec99a7dbdf83ab0394",
  },
];

function MediaCard({ date, title, href, logo }) {
  return (
    <div className="flex flex-col items-start justify-start bg-white w-full max-w-[350px] p-5 lg:p-8 gap-5 flex-grow mx-auto h-full shadow-sm">
      <div className="h-[60px] w-auto">
        <img
          src={logo}
          alt="Media Logo"
          className="h-[60px] object-contain w-auto"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <p className="text-sm text-black/50 m-0">{date}</p>
      <p className="text-base md:text-2xl font-medium text-[#03060d] leading-snug line-clamp-4 overflow-hidden m-0 font-serif">
        {title}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold flex items-center text-black/80 gap-1 no-underline hover:underline"
      >
        Read More
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
      <div className="flex-grow" />
    </div>
  );
}

export default function MediaCoverage() {
  return (
    <section className="flex flex-col items-center px-5 md:px-10 py-20 md:py-[120px] bg-[#f3f7fc]">
      <div className="w-full max-w-[1160px]">
        <div className="flex flex-col gap-[60px] items-center">
          <p className="text-sm -mb-10 text-[#4F74AB] font-semibold uppercase tracking-wider">
            Media Coverage
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-[#03060d] font-serif text-center">
            Securitize in the News
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:items-stretch gap-5 py-5 lg:py-10 px-5 justify-center lg:justify-start">
            {newsItems.map((item, i) => (
              <MediaCard key={i} {...item} />
            ))}
          </div>

          <a
            href="/about-us/media-coverage"
            className="py-2 px-5 rounded-full flex items-center justify-center text-sm whitespace-nowrap transition-all duration-150 ease-out bg-[#03060d] text-white hover:bg-black/80 no-underline group"
          >
            View All Media
            <span className="ml-1.5 inline-block transition-transform duration-150 ease-out group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}