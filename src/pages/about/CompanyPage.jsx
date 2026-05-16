import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const editorial = {
  fontFamily: '"PP Editorial New", Georgia, serif',
  fontWeight: 400,
};

const geist = {
  fontFamily: "Geist, Roboto, Arial, sans-serif",
};

const leadership = [
  { name: "Carlos Domingo", role: "Co-Founder & CEO", img: "/assets/about/team/carlos-domingo.jpg" },
  { name: "Brett Redfearn", role: "President", img: "/assets/about/team/brett-redfearn.jpg" },
  { name: "Billy Miller", role: "Chief Operating Officer", img: "/assets/about/team/billy-miller.jpg" },
  { name: "Joe Nikolson", role: "CEO & COO, Securitize Markets", img: "/assets/about/team/joe-nikolson.jpg" },
  { name: "Jorge Serna", role: "C-3PO (CPO & CTO)", img: "/assets/about/team/jorge-serna.jpg" },
  { name: "Francisco Flores", role: "Chief Financial Officer", img: "/assets/about/team/francisco-flores.jpg" },
  { name: "Chongwu Du", role: "Chief Strategy Officer", img: "/assets/about/team/chongwu-du.jpg" },
  { name: "Jerome Roche", role: "General Counsel", img: "/assets/about/team/jerome-roche.jpg" },
  { name: "Suzy Singh", role: "Deputy Chief Operating Officer", img: "/assets/about/team/suzy-singh.jpg" },
  { name: "Giang Bui", role: "Vice President, Head of Issuer Growth", img: "/assets/about/team/giang-bui.jpg" },
  { name: "Mikhail Davidyan", role: "Head Of Securitize Fund Services", img: "/assets/about/team/mikhail-davidyan.jpg" },
];

const board = [
  { name: "Carlos Domingo", role: "Co-Founder & CEO", img: "/assets/about/team/carlos-domingo.jpg" },
  { name: "Brett Redfearn", role: "President", img: "/assets/about/team/brett-redfearn.jpg" },
  { name: "Jon Steel", role: "Managing Director At Blackrock", img: "/assets/about/team/jon-steel.jpg" },
  { name: "Tal Elyashiv", role: "Managing Partner & Co-Founder At Spice VC", img: "/assets/about/team/tal-elyashiv.jpg" },
  { name: "W Bradford Stephens", role: "Managing Partner & Co-Founder At Blockchain Capital", img: "/assets/about/team/bradford-stephens.jpg" },
  { name: "Pedro Teixeira", role: "Managing Director & Co Head Of Morgan Stanley Investment Management's Tactical Value", img: "/assets/about/team/pedro-teixeira.jpg" },
  { name: "Chris Bruner", role: "Chief Product Officer At Tradeweb", img: "/assets/about/team/chris-bruner.jpg" },
  { name: "Sunil Sabharwal", role: "Former US Board member to IMF", img: "/assets/about/team/sunil-sabharwal.jpg" },
];

const advisors = [
  {
    name: "Manolo Sanchez",
    img: "/assets/about/team/manolo-sanchez.jpg",
    roles: [
      { org: "Fannie Mae", title: "Board Member" },
      { org: "BBVA Compass", title: "Former Chairman & CEO" },
    ],
  },
  {
    name: "James Wallis",
    img: "/assets/about/team/james-wallis.jpg",
    roles: [
      { org: "Ripple", title: "VP Of Central Bank Engagements" },
      { org: "7e4, LLC", title: "Founder" },
      { org: "IBM", title: "Vice President, Blockchain" },
    ],
  },
  {
    name: "Donna Redel",
    img: "/assets/about/team/donna-redel.jpg",
    roles: [
      { org: "World Economic Forum", title: "Managing Director" },
      { org: "Prudential Securities", title: "CIO" },
      { org: "New York Commodities Exchange", title: "Former Chairwoman" },
    ],
  },
  {
    name: "Matthew Le Merle",
    img: "/assets/about/team/matthew-le-merle.jpg",
    roles: [
      { org: "Fifth Era & Blockchain Coinvestors", title: "Managing Partner" },
      { org: "SFOX", title: "Vice Chairman" },
    ],
  },
  {
    name: "Dick Costolo",
    img: "/assets/about/team/dick-costolo.jpg",
    roles: [
      { org: "Twitter", title: "Former CEO" },
      { org: "Google", title: "Group Product Manager" },
    ],
  },
  {
    name: "Chris Conetta",
    img: "/assets/about/team/chris-conetta.jpg",
    roles: [{ org: "Nearwater Capital", title: "Senior Advisor" }],
  },
];

const investors = [
  "ARK",
  "BlackRock",
  "Blockchain Capital",
  "Morgan Stanley",
  "Tradeweb",
  "Aptos",
  "Ava Labs",
  "Blockchain.com",
  "Borderless Capital",
  "Circle",
  "Coinbase Ventures",
  "Fenbushi Capital",
  "Global Brain",
  "Hamilton Lane",
  "IDC",
  "Jump",
  "Kenetic",
  "KKDI",
  "Migration Capital",
  "Mitsui Fudosan",
  "Mouro Capital",
  "MUFG",
  "Nomura",
  "NTT Data",
  "NXTP Labs",
  "OK Blockchain Capital",
  "ParaFi",
  "Paxos",
  "Ripio",
  "Ripple",
  "SBI Holdings",
  "SeedRocket",
  "Sony Financial Ventures",
  "",
  "",
  "Spice",
  "Sumitomo Mitsui Trust Bank",
  "Tezos",
  "",
  "",
];

const timeline = [
  { year: "2016", month: "December", desc: "Carlos Domingo and his co-founders at SPiCE VC pioneer digital securities." },
  { year: "2017", month: "November", desc: "Securitize is founded to bring blockchain to alternative assets." },
  { year: "2019", month: "May", desc: "Launch of the DS Protocol for compliant digital securities." },
  { year: "2020", month: "September", desc: "Securitize Markets ATS launches as registered broker-dealer." },
  { year: "2021", month: "June", desc: "Securitize expands its platform and institutional capabilities." },
  { year: "2022", month: "March", desc: "CB Insights recognizes Securitize as a top 50 blockchain company." },
  { year: "2023", month: "October", desc: "Securitize continues expanding tokenized investment access." },
  { year: "2024", month: "March", desc: "Securitize supports major institutional tokenization milestones." },
  { year: "2025", month: "May", desc: "Securitize announces continued global expansion and partnerships." },
  { year: "2026", month: "January", desc: "Securitize advances its mission to modernize capital markets." },
];

function slugify(name) {
  return name.toLowerCase().replace(/\./g, "").replace(/&/g, "and").replace(/\s+/g, "-");
}

function SectionTitle({ eyebrow, children, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-5 text-[14px] leading-[20px] text-[#4F74AB]" style={geist}>
          {eyebrow}
        </p>
      )}

      <h2
        className="text-[44px] leading-[48px] tracking-[-0.055em] text-[#03060d] md:text-[64px] md:leading-[70px]"
        style={editorial}
      >
        {children}
      </h2>
    </div>
  );
}

function PersonCard({ person }) {
  return (
    <article className="flex flex-col gap-5">
      <div className="aspect-square w-full overflow-hidden bg-white">
        <img src={person.img} alt={person.name} className="h-full w-full object-cover" />
      </div>

      <div>
        <h3 className="text-[16px] leading-[22px] text-[#03060d]" style={geist}>
          {person.name}
        </h3>
        <p className="mt-2 text-[12px] leading-[18px] text-[#03060d]/60" style={geist}>
          {person.role}
        </p>
      </div>
    </article>
  );
}

function PeopleSection({ eyebrow, title, people }) {
  return (
    <section className="bg-[#e9f0f9] px-5 py-[80px] md:px-10 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <div className="mb-[60px]">
          <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
        </div>

        <div className="grid grid-cols-2 justify-center gap-x-6 gap-y-[60px] md:grid-cols-[repeat(auto-fit,272px)]">
          {people.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CompanyPage() {
  const [activeTimeline, setActiveTimeline] = useState(5);

const prevTimeline = () => {
  setActiveTimeline((prev) => Math.max(prev - 1, 0));
};

const nextTimeline = () => {
  setActiveTimeline((prev) => Math.min(prev + 1, timeline.length - 1));
};

const activeItem = timeline[activeTimeline];
  return (
    <div className="overflow-hidden bg-white text-[#03060d]" style={geist}>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[400px] w-full overflow-hidden md:h-[600px]">
        <div className="absolute inset-0 bg-[#081838]" />
        <img
          src="/assets/about/header-image.png"
          alt="Tokenization is unavoidable"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#081838]/40" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
          <div className="mb-4 text-[48px] leading-none text-white md:text-[64px]" style={editorial}>
            “
          </div>

          <h1
            className="text-[48px] leading-[50px] tracking-[-0.055em] text-white md:text-[78px] md:leading-[78px]"
            style={editorial}
          >
            Tokenization
            <br />
            is unavoidable
          </h1>

          <p className="mt-7 text-[14px] leading-[20px] text-white md:text-[16px]" style={geist}>
            Carlos Domingo, Founder &amp; CEO
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white px-5 py-[80px] md:px-10 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1160px]">
          <div className="mx-auto w-full max-w-[640px]">
            <SectionTitle>Our Story</SectionTitle>

            <div className="mt-12 space-y-6">
              <p className="text-[20px] leading-[30px] text-[#03060d]/80 md:text-[24px] md:leading-[34px]" style={geist}>
                In 2017, Carlos Domingo and Jamie Finn envisioned using blockchain technology to bring automation and liquidity potential to alternative asset classes. Recognizing the technology didn&apos;t exist, they built Securitize.
              </p>

              <p className="text-[20px] leading-[30px] text-[#03060d]/80 md:text-[24px] md:leading-[34px]" style={geist}>
                The first fully digital securities platform, Securitize enables issuers to raise capital and allows investors to access alternative investment opportunities in a fast and transparent way - bringing the two together like never before.
              </p>
            </div>
          </div>

       {/* Timeline */}
<div className="mx-auto mt-[80px] w-full max-w-[1160px] overflow-hidden">
  <div className="h-[20px] w-full opacity-70 [background-image:repeating-linear-gradient(90deg,#03060d_0_1px,transparent_1px_28px)] [background-size:28px_20px]" />

  <div className="mx-auto mt-[10px] w-full max-w-[640px] overflow-hidden">
    <div className="relative h-[100px] overflow-hidden">
      <div
        className="absolute left-0 top-0 flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(50% - ${activeTimeline * 220}px - 60px))`,
        }}
      >
        {timeline.map((item, index) => (
          <button
            key={item.year}
            type="button"
            onClick={() => setActiveTimeline(index)}
            className="w-[220px] text-left"
          >
            <span
              className={`text-[48px] leading-none tracking-[-0.045em] transition-opacity duration-300 ${
                index === activeTimeline
                  ? "text-[#03060d] opacity-100"
                  : "text-[#03060d] opacity-30"
              }`}
              style={{
                fontFamily: '"PP Editorial New", Georgia, serif',
                fontWeight: 400,
              }}
            >
              {item.year}
            </span>
          </button>
        ))}
      </div>
    </div>

    <div className="mt-[-10px] min-h-[130px] max-w-[400px]">
      <p className="mb-2 text-[14px] leading-[20px] text-[#4F74AB]">
        {activeItem.month}
      </p>

      <p className="mb-2 text-[16px] leading-[22px] text-[#03060d]">
        {activeItem.desc}
      </p>
    </div>

    <div className="mt-5 flex gap-2">
      <button
        type="button"
        onClick={prevTimeline}
        disabled={activeTimeline === 0}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03060d] text-white disabled:opacity-30"
      >
        ←
      </button>

      <button
        type="button"
        onClick={nextTimeline}
        disabled={activeTimeline === timeline.length - 1}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03060d] text-white disabled:opacity-30"
      >
        →
      </button>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* CITY BANNER */}
      <section className="h-[220px] w-full overflow-hidden bg-gray-200 md:h-[500px]">
        <img src="/assets/bannerBuilding.png" alt="City" className="h-full w-full object-cover" />
      </section>

      <PeopleSection eyebrow="Driving The Vision" title="Leadership Team" people={leadership} />

      <div className="h-[4px] bg-white" />

      <PeopleSection title="Board of Directors" people={board} />

      <div className="h-[4px] bg-white" />

      {/* ADVISORY */}
      <section className="bg-[#e9f0f9] px-5 py-[80px] md:px-10 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1160px]">
          <div className="mb-[60px]">
            <SectionTitle>Advisory Board</SectionTitle>
          </div>

          <div className="grid gap-x-6 gap-y-[60px] md:grid-cols-2">
            {advisors.map((advisor) => (
              <article key={advisor.name} className="grid grid-cols-[160px_1fr] gap-5 md:grid-cols-[272px_1fr]">
                <div className="aspect-square overflow-hidden bg-white">
                  <img src={advisor.img} alt={advisor.name} className="h-full w-full object-cover" />
                </div>

                <div>
                  <h3 className="text-[16px] leading-[22px] text-[#03060d]" style={geist}>
                    {advisor.name}
                  </h3>

                  <div className="my-5 h-px w-full bg-[#03060d]/10" />

                  <div className="space-y-5">
                    {advisor.roles.map((role) => (
                      <div key={role.org}>
                        <p className="text-[12px] font-medium leading-[18px] text-[#03060d]" style={geist}>
                          {role.org}
                        </p>
                        <p className="text-[12px] leading-[18px] text-[#03060d]/60" style={geist}>
                          {role.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CITY BANNER */}
      <section className="h-[220px] w-full overflow-hidden bg-gray-200 md:h-[500px]">
        <img src="/assets/bannerBuilding.png" alt="City" className="h-full w-full object-cover" />
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="bg-[#fffff] px-5 py-[80px] md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px] text-center">
          <SectionTitle center>Office Locations</SectionTitle>

          <p className="mx-auto mt-8 max-w-[740px] text-[16px] leading-[24px] text-[#03060d]" style={geist}>
            Securitize and its subsidiaries have a global footprint with offices worldwide, giving us a unique perspective and the opportunity to lead the evolution of digital asset securities in and across multiple markets.
          </p>

          <div className="relative mx-auto mt-[70px] max-w-[980px]">
            <img src="/assets/about/world-map.png" alt="World map" className="w-full opacity-60" />

           
       
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="bg-[#020611] px-5 py-[80px] text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <h2
            className="mb-[60px] text-center text-[48px] leading-[52px] tracking-[-0.055em] text-white md:text-[72px] md:leading-[76px]"
            style={editorial}
          >
            Our Investors
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-7">
            {investors.map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex h-[100px] items-center justify-center border border-[#212121] p-4"
              >
                {name && (
                  <img
                    src={`/assets/about/investors/${slugify(name)}.png`}
                    alt={name}
                    className="max-h-full max-w-full object-contain opacity-75 grayscale"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#48689a] px-5 py-[90px] md:px-10 md:py-[140px]">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2
            className="max-w-[900px] text-[48px] leading-[52px] tracking-[-0.055em] text-white md:text-[78px] md:leading-[82px]"
            style={editorial}
          >
            Explore Our Open Investment Opportunities
          </h2>

          <a
            href="/invest"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[14px] font-medium leading-[20px] text-[#03060d] transition hover:bg-white/90"
            style={geist}
          >
            Investment Opportunities <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}