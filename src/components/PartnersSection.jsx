import { useEffect, useRef } from "react";

const partners = [
  { name: "Aptos", logo: "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/apt.svg", fallback: "APT" },
  { name: "Avalanche", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg", fallback: "AVAX" },
  { name: "Sei", logo: "https://cryptologos.cc/logos/sei-sei-logo.svg", fallback: "SEI" },
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg", fallback: "ETH" },
  { name: "Hedera", logo: "https://cryptologos.cc/logos/hedera-hbar-logo.svg", fallback: "HBAR" },
  { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.svg", fallback: "SOL" },
];

const partners2 = [
  { name: "Crypto.com", fallback: "CRO" },
  { name: "Drift", fallback: "DFT" },
  { name: "Ink", fallback: "INK" },
  { name: "Polygon", fallback: "POL" },
  { name: "Frax", fallback: "FRAX" },
  { name: "Arbitrum", fallback: "ARB" },
];

function LogoCircle({ name, fallback, color = "#4F74AB" }) {
  return (
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        fontSize: 11,
        fontWeight: 700,
        color,
        letterSpacing: "0.04em",
        userSelect: "none",
      }}
    >
      {fallback}
    </div>
  );
}

function MarqueeRow({ items, direction = 1, speed = 28 }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);

  const GAP = 16;
  const ITEM_W = 80 + GAP;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalW = ITEM_W * items.length;

    const animate = () => {
      posRef.current += direction * (speed / 60);
      if (posRef.current >= totalW) posRef.current -= totalW;
      if (posRef.current < 0) posRef.current += totalW;
      track.style.transform = `translateX(${-posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed, items.length, ITEM_W]);

  const repeated = [...items, ...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      {/* fade edges */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to right, #f3f7fc, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to left, #f3f7fc, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: GAP,
          willChange: "transform",
          width: "max-content",
          padding: "8px 0",
        }}
      >
        {repeated.map((p, i) => (
          <LogoCircle key={i} name={p.name} fallback={p.fallback} />
        ))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section
      style={{
        background: "#f3f7fc",
        padding: "120px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 60, maxWidth: 700 }}>
        <p style={{ color: "#4F74AB", fontWeight: 600, fontSize: 13, marginBottom: 20, letterSpacing: "0.02em" }}>
          Partners
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            color: "#0a1628",
            lineHeight: 1.2,
            fontFamily: "'Georgia', serif",
            marginBottom: 0,
          }}
        >
          Best-in-class Service Providers,{"\n"}
          United by a Shared Mission.
        </h2>
      </div>

      {/* Marquee rows */}
      <div style={{ width: "100%", maxWidth: 900, display: "flex", flexDirection: "column", gap: 12, marginBottom: 60 }}>
        <MarqueeRow items={partners} direction={1} speed={24} />
        <MarqueeRow items={partners2} direction={-1} speed={20} />
      </div>

      {/* Description */}
      <div style={{ textAlign: "center", maxWidth: 680, display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
        <p style={{ color: "#4a5568", fontSize: 16, lineHeight: 1.7 }}>
          The Securitize Ecosystem represents a strategic alliance of premier partners committed to advancing our mission. This network includes top-tier providers across liquidity, custody, and essential onchain infrastructure.
        </p>
        <p style={{ color: "#4a5568", fontSize: 16, lineHeight: 1.7 }}>
          Through these partnerships, we're able to provide a truly comprehensive platform to provide our clients with access to top-tier solutions that support their success.
        </p>
      </div>

      {/* CTA */}
      <a
        href="/partner-ecosystem"
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
        Explore Ecosystem <span style={{ display: "inline-block" }}>→</span>
      </a>
    </section>
  );
}