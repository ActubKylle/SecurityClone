import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BLOCKCHAIN_FEATURES = [
  {
    icon: '⚡',
    title: 'Multi-chain Access',
    desc: 'Assets available across multiple blockchains',
    poweredBy: ['Aptos Labs','Arbitrum','Avalanche','BNB Chain','Ethereum','Ink by Kraken','Mantle','Optimism','Plume','Polygon','Sei','Solana','XDC'],
    tags: ['BUIDL','VBILL','ACRED','HLSCOPE','STAC','+ more'],
  },
  {
    icon: '🔗',
    title: 'Cross-chain Interoperability',
    desc: 'Move assets across multiple blockchains',
    poweredBy: ['Wormhole'],
    body: 'Access your tokenized assets across supported chains, and bridge between chains while maintaining full ownership.',
    tags: ['BUIDL','VBILL','ACRED','HLSCOPE','STAC'],
  },
  {
    icon: '↕',
    title: 'Stablecoin On & Off Ramps',
    desc: 'Invest and redeem using stablecoins',
    body: 'Subscriptions and redemptions available through various stables, including USDC, USDG, RLUSD, AUSD, among others.\n\n*Atomic instant mint/redeem powered by smart contracts available for select assets',
    tags: ['BUIDL','VBILL','ACRED','HLSCOPE','STAC','MI4'],
  },
  {
    icon: '📊',
    title: 'Oracle Pricing',
    desc: 'Real-time NAV data',
    poweredBy: ['Redstone','Chainlink','Chronicle','Pyth'],
    body: 'Asset prices are published directly onchain, with the goal of enabling smart contract integrations, automated rebalancing, and transparent pricing for all market participants.',
    tags: ['BUIDL','VBILL','ACRED','HLSCOPE','STAC','MI4'],
  },
];

const TAG_COLORS = {
  BUIDL:    { bg: '#111', color: '#fff' },
  VBILL:    { bg: '#065f46', color: '#fff' },
  ACRED:    { bg: '#14532d', color: '#fff' },
  HLSCOPE:  { bg: '#1e3a5f', color: '#fff' },
  STAC:     { bg: '#3b2f00', color: '#fff' },
  MI4:      { bg: '#4a1515', color: '#fff' },
  '+ more': { bg: 'transparent', color: '#888', border: '1px solid #ccc' },
};

const LIVE_MARKETS = [
  { name: 'Aave',       asset: 'VBILL', type: 'Lending',          href: 'https://app.aave.com/reserve-overview/?underlyingAsset=0x2255718832bc9fd3be1caf75084f4803da14ff01&marketName=proto_horizon_v3' },
  { name: 'Binance',    asset: 'BUIDL', type: 'Trading',          href: 'https://www.binance.com/en' },
  { name: 'crypto.com', asset: 'BUIDL', type: 'Trading',          href: 'https://crypto.com/us/price/blackrock-usd-institutional-digital-liquidity-fund-cdc' },
  { name: 'Deribit',    asset: 'BUIDL', type: 'Trading',          href: 'https://www.deribit.com/' },
  { name: 'Loopscale',  asset: 'ACRED', type: 'Leverage',         href: 'https://app.loopscale.com/loops/acred-usdg' },
  { name: 'Loopscale',  asset: 'ACRED', type: 'Lending',          href: 'https://app.loopscale.com/market/USDG?collateral=FubtUcvhSCr3VPXEcxouoQjKQ7NWTCzXyECe76B7L3f8&role=borrow' },
  { name: 'UniswapX',   asset: 'BUIDL', type: 'Trading',          href: 'https://uniswap.securitize.io/' },
  { name: 'Zharta',     asset: 'ACRED', type: 'Leverage, Lending', href: 'https://institutional.zharta.io/connect' },
];

const DEFI_PROTOCOLS = [
  { name: 'Wormhole',   type: 'Interoperability', bg: '#e8f0fe', color: '#1a56db' },
  { name: 'RedStone',   type: 'Oracles',          bg: '#fef2f2', color: '#dc2626' },
  { name: 'UniswapX',   type: 'Trading',          bg: '#fdf4ff', color: '#9333ea' },
  { name: 'Aave',       type: 'Lending',          bg: '#f0fdf4', color: '#16a34a' },
  { name: 'Euler',      type: 'Lending',          bg: '#f0f9ff', color: '#0284c7' },
  { name: 'crypto.com', type: 'Lending',          bg: '#f0f4ff', color: '#1d4ed8' },
  { name: 'Deribit',    type: 'Leverage',         bg: '#222',    color: '#fff'    },
  { name: 'Zharta',     type: 'Leverage',         bg: '#fff7ed', color: '#ea580c' },
  { name: 'Binance',    type: 'Trading',          bg: '#fffbeb', color: '#d97706' },
  { name: 'Loopscale',  type: 'Leverage',         bg: '#ecfdf5', color: '#059669' },
];

const FUND_CARDS = [
  {
    manager: 'BlackRock',
    name: 'BlackRock USD Institutional Digital Liquidity Fund (BUIDL)',
    category: 'U.S. Treasury', badge: 'Securitize Markets Exclusive',
    desc: "The first tokenized fund issued on a public blockchain by the world's largest asset manager.",
    assetClass: 'U.S. Treasury', minInvestment: '$5M',
    investorType: 'Qualified Purchaser', redemptions: 'Instant',
    href: 'https://securitize.io/primary-market/blackrock-fund',
    headerBg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
  },
  {
    manager: 'APOLLO',
    name: 'Securitize Tokenized Apollo Diversified Credit Fund',
    category: 'Private Equity', badge: 'Offered by Securitize Capital',
    desc: 'Evergreen credit fund seeking to generate a return comprised of both current income and capital appreciation.',
    assetClass: 'Diversified Credit', minInvestment: '$50K',
    investorType: 'Accredited Investor', redemptions: 'Quarterly',
    href: 'https://securitize.io/primary-market/apollo-diversified-credit-securitize-fund',
    headerBg: 'linear-gradient(135deg,#0f0f0f,#1a1a1a)',
  },
  {
    manager: 'VanEck',
    name: 'VanEck Treasury Fund',
    category: 'U.S. Treasury', badge: 'Offered by Securitize Markets',
    desc: 'Earn stable yield with daily liquidity by investing in short-term U.S. Treasuries via blockchain.',
    assetClass: 'Fixed Income', minInvestment: '$100k',
    investorType: 'Qualified Purchaser', redemptions: 'Instant',
    href: 'https://securitize.io/primary-market/vaneck-vbill',
    headerBg: 'linear-gradient(135deg,#0a1628,#1a2a4a)',
  },
];

// ─── ATOMS ────────────────────────────────────────────────────────────────────

const Tag = ({ label }) => {
  const s = TAG_COLORS[label] || { bg: '#333', color: '#fff' };
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: '20px',
      fontSize: '11px', fontWeight: 700, background: s.bg,
      color: s.color, border: s.border || 'none', letterSpacing: '0.04em',
    }}>{label}</span>
  );
};

const ProtocolDot = ({ name, type, bg, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
    <div style={{
      width: 36, height: 36, borderRadius: '50%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14, fontWeight: 700, color, flexShrink: 0,
      border: '1px solid rgba(0,0,0,0.08)',
    }}>{name[0]}</div>
    <div style={{ textAlign: 'left' }}>
      <p style={{ fontWeight: 600, fontSize: '14px', color: '#111', margin: 0 }}>{name}</p>
      <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>{type}</p>
    </div>
  </div>
);

// ─── FEATURE CARD ─────────────────────────────────────────────────────────────

const FeatureCard = ({ icon, title, desc, poweredBy, body, tags }) => (
  <div style={{
    background: '#fff', borderRadius: '16px', padding: '28px',
    display: 'flex', flexDirection: 'column', gap: '16px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
  }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
      <div style={{
        width: 44, height: 44, borderRadius: '10px', background: '#f0f4ff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, flexShrink: 0,
      }}>{icon}</div>
      <div>
        <p style={{ fontWeight: 700, fontSize: '15px', margin: 0, color: '#111' }}>{title}</p>
        <p style={{ fontSize: '13px', color: '#666', margin: '2px 0 0' }}>{desc}</p>
      </div>
    </div>
    {poweredBy && (
      <div>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.08em', color: '#999', marginBottom: 8, fontWeight: 600 }}>Powered By</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {poweredBy.map(p => <span key={p} style={{ fontSize: 12, color: '#555', background: '#f5f5f5', padding: '2px 8px', borderRadius: 4 }}>{p}</span>)}
        </div>
      </div>
    )}
    {body && <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65, margin: 0, whiteSpace: 'pre-line' }}>{body}</p>}
    {tags && (
      <div>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.08em', color: '#999', marginBottom: 8, fontWeight: 600 }}>Available For</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
    )}
  </div>
);

// ─── MARKET ROW ───────────────────────────────────────────────────────────────

const MarketRow = ({ name, asset, type, href, isLast }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '1fr 140px 160px 100px',
    alignItems: 'center', padding: '16px 0', gap: 16,
    borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.07)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%', background: '#eef0f5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, fontWeight: 700, color: '#555', flexShrink: 0,
      }}>{name[0]}</div>
      <span style={{ fontWeight: 500, fontSize: 15, color: '#111' }}>{name}</span>
    </div>
    <div><Tag label={asset} /></div>
    <div style={{ fontSize: 14, color: '#555' }}>{type}</div>
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer"
        style={{ fontSize: 13, fontWeight: 500, color: '#1a3a8f', textDecoration: 'none' }}>
        View →
      </a>
    </div>
  </div>
);

// ─── FUND CARD ────────────────────────────────────────────────────────────────

const FundCard = ({ manager, name, category, badge, desc, assetClass, minInvestment, investorType, redemptions, href, headerBg }) => (
  <a href={href} style={{ textDecoration: 'none', display: 'block' }}>
    <div
      style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)', transition: 'transform .2s, box-shadow .2s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ height: 120, background: headerBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>{manager}</span>
      </div>
      <div style={{ padding: 20 }}>
        <p style={{ fontSize: 11, color: '#888', marginBottom: 4 }}>{category} | {badge}</p>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 10, lineHeight: 1.4 }}>{name}</h3>
        <p style={{ fontSize: 13, color: '#666', marginBottom: 16, lineHeight: 1.6 }}>{desc}</p>
        {[['Asset Class', assetClass], ['Min. Investment', minInvestment], ['Investor Type', investorType], ['Redemptions', redemptions]].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid #f0f0f0', fontSize: 13 }}>
            <span style={{ color: '#888' }}>{k}</span>
            <span style={{ fontWeight: 600, color: '#111' }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  </a>
);

// ─── PAGE EXPORT ──────────────────────────────────────────────────────────────

const OnchainFeaturesPage = () => (
  <div style={{ background: '#f0f2f8', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
    <Navbar />

    {/* HERO */}
    <div style={{ background: '#030b1e', paddingTop: 140, paddingBottom: 80, textAlign: 'center', color: '#fff' }}>
      <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.14em', opacity: .5, margin: '0 0 10px', fontWeight: 600 }}>
        Blockchain Infrastructure
      </p>
      <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, margin: '0 0 14px', fontFamily: 'Georgia, serif', letterSpacing: '-.02em' }}>
        Onchain Utility, Enabled
      </h1>
      <p style={{ fontSize: 16, opacity: .65, margin: 0 }}>
        Capabilities aimed at increasing the utility of your tokenized assets.
      </p>
    </div>

    {/* FEATURE CARDS */}
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: 20 }}>
        {BLOCKCHAIN_FEATURES.map((f, i) => <FeatureCard key={i} {...f} />)}
      </div>
    </div>

    {/* LIVE MARKETS */}
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 0' }}>
      <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: '#888', margin: '0 0 8px', fontWeight: 600 }}>
        Live Marketplaces
      </p>
      <h2 style={{ fontSize: 34, fontWeight: 700, margin: '0 0 10px', fontFamily: 'Georgia, serif', color: '#111' }}>
        Liquidity, Activated
      </h2>
      <p style={{ fontSize: 15, color: '#666', margin: '0 0 28px' }}>
        Trade and access our assets on leading live markets.
      </p>
      <div style={{ background: '#fff', borderRadius: 16, padding: '0 28px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 160px 100px', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          {['Market', 'Asset', 'Type', 'Details'].map(h => (
            <span key={h} style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: '#999' }}>{h}</span>
          ))}
        </div>
        {LIVE_MARKETS.map((m, i) => <MarketRow key={i} {...m} isLast={i === LIVE_MARKETS.length - 1} />)}
      </div>
      <p style={{ fontSize: 12, color: '#999', marginTop: 20, lineHeight: 1.6 }}>
        Note: Secondary market trading is not guaranteed and may be limited by regulatory transfer restrictions, platform availability, or investor eligibility requirements. Leverage and looping functionalities are facilitated by independent third-party protocols. Securitize does not control these protocols and does not guarantee their availability, security, or performance.
      </p>
    </div>

    {/* DEFI PROTOCOLS */}
    <div style={{ background: '#eef0f8', marginTop: 60, padding: '60px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em', color: '#888', margin: '0 0 8px', fontWeight: 600 }}>
          Powered By
        </p>
        <h2 style={{ fontSize: 40, fontWeight: 700, fontFamily: 'Georgia, serif', color: '#111', margin: '0 0 40px', letterSpacing: '-.02em' }}>
          DeFi Protocols
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 28, marginBottom: 40 }}>
          {DEFI_PROTOCOLS.map((p, i) => <ProtocolDot key={i} {...p} />)}
        </div>
        <p style={{ fontSize: 12, color: '#999', maxWidth: 700, margin: '0 auto', lineHeight: 1.65 }}>
          Note: Tokenized securities interacting with blockchain protocols may be exposed to risks including smart contract vulnerabilities, cybersecurity risks, loss of private keys, protocol insolvency, regulatory uncertainty, and extreme market volatility.
        </p>
      </div>
    </div>

    {/* STEP INTO THE WORLD CTA */}
    <div style={{ background: '#030b1e', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', fontFamily: 'Georgia, serif', margin: '0 0 16px', lineHeight: 1.2 }}>
          Step into the world of<br />tokenized assets
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: '0 0 48px', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Join the growing ecosystem of institutional investors looking for onchain infrastructure for real-world assets.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 40 }}>
          {FUND_CARDS.map((f, i) => <FundCard key={i} {...f} />)}
        </div>
        <a href="https://securitize.io/invest"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 44, border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'background .2s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          Explore All Investments →
        </a>

        {/* Disclosures */}
        <div style={{ marginTop: 60, textAlign: 'left', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 10 }}>Disclosures</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75 }}>
            Note: Certain assets referenced on this page are issued or managed by third-party asset managers and are not managed by Securitize Capital. For applicable fund material risks, please visit each fund's product page:{' '}
            <a href="https://securitize.io/primary-market/apollo-diversified-credit-securitize-fund" style={{ color: '#60a5fa' }}>ACRED</a>,{' '}
            <a href="https://securitize.io/primary-market/hl-scope" style={{ color: '#60a5fa' }}>HLSCOPE</a>,{' '}
            <a href="https://securitize.io/primary-market/Securitize-BNY-CLO-Fund" style={{ color: '#60a5fa' }}>STAC</a>.
            <br /><br />
            Certain information contained herein has been obtained from third party sources and such information has not been independently verified by Securitize. No representation, warranty, or undertaking, expressed or implied, is given to the accuracy or completeness of such information by Securitize or any other person. While such sources are believed to be reliable, Securitize does not assume any responsibility for the accuracy or completeness of such information. Securitize does not undertake any obligation to update the information contained herein as of any future date.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default OnchainFeaturesPage;