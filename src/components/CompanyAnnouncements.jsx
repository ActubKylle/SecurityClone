const announcements = [
  {
    date: "06/05/2026",
    title: "Securitize, Jump Trading Group, and Jupiter Launch Fully Onchain, Regulated Trading for Tokenized Equities",
    href: "/learn/press/securitize-jump-trading-jupiter-onchain-regulated-tokenized-equities",
  },
  {
    date: "05/05/2026",
    title: "Securitize Receives Approval to Enable Custody and Atomic Settlement for Tokenized Securities",
    href: "/learn/press/securitize-approval-custody-atomic-settlement-tokenized-securities",
  },
  {
    date: "29/04/2026",
    title: "Securitize and Computershare Announce An Agreement to Enable Tokenized Shares for U.S. Issuers",
    href: "/learn/press/securitize-computershare-tokenized-shares-us-issuers",
  },
];

function AnnouncementItem({ date, title, href, isLast }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingBottom: isLast ? 0 : 24,
        }}
      >
        <p style={{ fontSize: 13, color: "rgba(3,6,13,0.5)", margin: 0 }}>{date}</p>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            fontWeight: 500,
            color: "#03060d",
            lineHeight: 1.35,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </p>
        <a
          href={href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(3,6,13,0.8)",
            textDecoration: "none",
          }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
          onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
        >
          Read More
          <svg width="12" height="12" viewBox="0 0 448 512" fill="currentColor">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
      {!isLast && (
        <div style={{ width: "100%", height: 1, background: "rgba(3,6,13,0.1)", margin: "0 0 24px 0" }} />
      )}
    </>
  );
}

export default function CompanyAnnouncements() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "120px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1160,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px 80px",
          alignItems: "flex-start",
          padding: "0 20px",
        }}
      >
        {/* Left: heading */}
        <div style={{ flex: "0 0 auto", maxWidth: 350 }}>
          <p style={{ color: "#4F74AB", fontWeight: 600, fontSize: 13, marginBottom: 20 }}>
            Press Releases
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "#03060d",
              lineHeight: 1.15,
              fontFamily: "'Georgia', serif",
              marginBottom: 40,
            }}
          >
            Company Announcements
          </h2>
          <a
            href="/about-us/press-releases"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 24px",
              borderRadius: 44,
              background: "#03060d",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(3,6,13,0.8)"}
            onMouseLeave={e => e.currentTarget.style.background = "#03060d"}
          >
            View All Announcements <span>→</span>
          </a>
        </div>

        {/* Right: list */}
        <div style={{ flex: "1 1 340px" }}>
          {announcements.map((item, i) => (
            <AnnouncementItem
              key={i}
              {...item}
              isLast={i === announcements.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}