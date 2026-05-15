import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Partner Data ────────────────────────────────────────────────────────────

const PARTNERS = [
  {
    name: '677 Financial Group',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd803b9e9d41a471fbad3ba10a0c84e74',
    description:
      '677 Financial Group is a financial services firm that brings counterparty-centric proprietary liquidity provision and risk management techniques from traditional finance to digital asset markets.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Agora',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F4c0668aedb8340438972419abc3655b1',
    description:
      'Agora Finance is a blockchain-based platform offering a fully collateralized, freely tradable digital dollar (AUSD), enhancing global financial access.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Amber',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F16cad8210ced47579ac64a10fdd44606',
    description:
      'Amber Group is a global digital asset company offering digital wealth management, asset management, advisory, liquidity provision, investment, and research.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Anchorage Digital',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F9a203feb1c6b47e6a604479af7883f28',
    description:
      'Anchorage is a leading digital asset platform that offers institutional-grade custody solutions for cryptocurrencies.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Aptos Labs',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F6cfc73e52b7a4c5abafe49258f988c30',
    description:
      'Aptos Labs is an independent Layer 1 blockchain platform that uses the Move language for fast and secure translation execution.',
    categories: ['Blockchains'],
  },
  {
    name: 'Arbitrum',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F81d4c890e75748b3b35d6ccf9d85269d',
    description:
      'Arbitrum is a Layer 2 scaling solution for Ethereum developed by Offchain Labs. Arbitrum uses Optimistic Rollup technology to rapidly scale transaction throughput for decentralized apps, without sacrificing security offered by the Ethereum blockchain.',
    categories: ['Blockchains'],
  },
  {
    name: 'Avalanche',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F7bc9fe13024a4eecbdd9936e6201db80',
    description:
      'Avalanche is a decentralized platform that aims to provide an open, efficient, and interoperable ecosystem for building decentralized applications (dApps) and custom blockchain networks.',
    categories: ['Blockchains'],
  },
  {
    name: 'B2C2',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fb4204775fb634038b95859381e514c97',
    description:
      'B2C2 is a crypto-native liquidity provider, offering institutional clients reliable 24/7 access to digital asset trading solutions across global markets.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Binance',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F9be63213c66e4444b46645e008ba761a',
    description:
      'Binance is a global cryptocurrency exchange platform offering secure trading, investing, and management of digital assets.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'BitGo',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F4b519e4e89ac4c5d812324c9e4e14acd',
    description:
      'BitGo is a digital asset financial services provider offering institutional-grade custody, trading, and asset management solutions for cryptocurrencies.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'BNB Chain',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F5e143efc406c4cb6acb663ea4ad8cc36',
    description:
      'BNB Chain is a scalable, decentralized blockchain ecosystem powering Web3 apps with smart contracts, Layer 2, and data storage.',
    categories: ['Blockchains'],
  },
  {
    name: 'BNY',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Faf9454544fcb436a9f0633501f5c376a',
    description: 'BNY serves as a trusted oracle, delivering reliable financial data to power smart contracts securely.',
    categories: ['Oracles'],
  },
  {
    name: 'Chainalysis',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F1675b5c8850e41489a835506601e5b27',
    description:
      'Chainalysis delivers data and software to help institutions detect fraud, ensure regulatory compliance, and investigate illicit cryptocurrency activities.',
    categories: ['Web3 Security & Compliance'],
  },
  {
    name: 'Chainlink',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc906c6db888f4aa4a449d23dc5aaa498',
    description:
      'Chainlink is the industry-standard oracle platform that securely connects smart contracts to real-world data and systems across blockchains.',
    categories: ['Oracles'],
  },
  {
    name: 'Chronicle',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd9aea5c70a6e4914808c9dcb96466d68',
    description:
      'Chronicle Protocol delivers affordable, transparent, blockchain-agnostic oracle data through a decentralized validator network.',
    categories: ['Oracles'],
  },
  {
    name: 'Copper',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc90cb3e3cccc4e03a1a90d447628ce9f',
    description:
      'Copper is an institutional digital asset custody and trading infrastructure provider, offering secure solutions like custody, off-exchange settlement, DeFi connectivity, and treasury management to financial institutions.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Crypto.com',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F7ab0ec9416664386b4a68acac5f17d11',
    description:
      'Crypto.com is a global cryptocurrency platform offering trading, payments, and DeFi services with a focus on security and user experience.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Deribit',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd4e7f0393a47424ba4cd24b59647ee46',
    description:
      'Deribit is a crypto derivatives exchange offering options and futures trading for Bitcoin and Ethereum with deep liquidity and low latency.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Drift',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc84dca62221a417aa8ef4383724e804c',
    description:
      'Drift is a decentralized exchange on Solana offering leveraged trading, lending, and yield generation with deep onchain liquidity.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Ethena',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F020d38e8d2ec4bfab160f15880f695b1',
    description:
      'Ethena is a decentralized finance (DeFi) protocol that provides a crypto-native yield-bearing stablecoin through synthetic dollar mechanisms.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Ethereum',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F5116a0cd8f164d539929f47712d75f6e',
    description:
      'Ethereum is a decentralized, open-source blockchain platform that enables the creation and execution of smart contracts and decentralized applications (dApps).',
    categories: ['Blockchains'],
  },
  {
    name: 'Euler',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd4aafa83a243432fbd3a02e6b5938324',
    description:
      'Euler Finance is a modular, permissionless DeFi lending platform on Ethereum, enabling users to lend, borrow, and build custom financial products without limits.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'FalconX',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F42e4de5660474d908f3aebb2285ab989',
    description:
      'FalconX is a digital asset trading platform that provides institutional investors with access to liquidity across various cryptocurrency markets.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Fireblocks',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fedc5b50c6e494551b9a90ae90bc6608f',
    description:
      'Fireblocks is a secure digital asset custody and transfer platform designed for institutional investors and businesses.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Flow Traders',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fe4cf9d4c7994450ea6fa78bcf0d62b22',
    description:
      'Flow Traders is a global technology-enabled liquidity provider specializing in Exchange Traded Products (ETPs), offering continuous liquidity across major exchanges to enhance market efficiency and transparency.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Flowdesk',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F28dea42aebb1464ba564cb2364fa66ad',
    description:
      'Flowdesk provides compliant digital asset trading, market-making, and treasury services across 140+ crypto exchanges.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Frax',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F6619d59411b24e59b5e226d0ceff8574',
    description:
      'Frax is a decentralized stablecoin protocol that uses a hybrid algorithmic and collateralized model to maintain a stable value.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'FV Bank',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fdafc316ae0ef4f9bb43b215e0ea0b292',
    description:
      'FV Bank is a global digital bank providing integrated traditional and digital asset accounts with institutional-grade security and compliance.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Gauntlet',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F9d837f9b2fa24363858903f5a509580e',
    description:
      'Gauntlet is a DeFi risk management platform offering institutional-grade vaults optimized by quantitative models for secure, risk-adjusted yields.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Hedera',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F757f85fd710c447c8e89da071e7ea865',
    description:
      'Hedera is an open-source public distributed ledger that utilizes the fast, fair, and secure hashgraph consensus algorithm to enable high-throughput, low-latency decentralized applications, governed by a global council of leading organizations.',
    categories: ['Blockchains'],
  },
  {
    name: 'Hexagate',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Ff23648ac2e13472aa31c2ff0d4c20f3a',
    description:
      'Hexagate provides real-time security and risk analytics for Web3 applications, preventing exploits, hacks, and financial risks for protocols, apps, and asset managers.',
    categories: ['Web3 Security & Compliance'],
  },
  {
    name: 'Hidden Road',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fe074e3a701de430bbc16aeb462190b20',
    description:
      'Hidden Road is a financial network providing global access to credit and liquidity across traditional and digital assets.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Horizon by Aave Labs',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F2484b56a81fd48e8a893520c55730181',
    description:
      'Horizon bridges traditional finance and DeFi, allowing compliant stablecoin borrowing against tokenized money market funds and institutional-grade assets.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Ink by Kraken',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F254c0be5382842c9996089b6eef71489',
    description:
      'Ink is a blockchain network designed to provide financial institutions with secure, compliant, and scalable infrastructure for digital asset custody and settlement.',
    categories: ['Blockchains'],
  },
  {
    name: 'Kamino',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F0e2a40f84a0a4d3f8940f6f7d1426418',
    description:
      'Kamino Finance is a Solana-based DeFi platform offering automated liquidity, lending, and leverage strategies for optimized yield generation.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Komainu',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F0fc64892260c4ff795fec4e627c3226b',
    description:
      'Komainu is a digital asset custody service providing institutional-grade security and compliance for managing and safeguarding cryptocurrencies and blockchain assets.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'LTP',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc4e065331a72403ea2c028a7520ae91e',
    description:
      'LTP is a prime brokerage firm specializing in digital assets, providing institutional clients with seamless access to both centralized and decentralized liquidity through advanced, secure, and efficient trading solutions.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'M0',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F0055450c44644eb5b891636130d5f529',
    description:
      'M0 is a universal stablecoin platform providing programmable, interoperable infrastructure for building and integrating fully backed digital dollars, enabling global, onchain financial access.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Mantle',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Faef37e719b5d48efa1fda55cca0659db',
    description:
      'Mantle is a modular Ethereum Layer 2 network enabling scalable, token-governed decentralized applications and finance.',
    categories: ['Blockchains'],
  },
  {
    name: 'Midas',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F705fed999801493a8819154b44fcf986',
    description:
      'Midas is an asset tokenization protocol that brings regulatory-compliant exposure to institutional-grade assets onchain, unlocking DeFi composability for real-world assets.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Morpho',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fd74f698002074f69befbdc470f6bcab2',
    description:
      'Morpho is a decentralized lending protocol enabling permissionless, efficient, and secure onchain borrowing and lending with optimized yields.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'OKX',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fe1baf41184cc4ea790658d866f6e79f3',
    description: 'Global cryptocurrency exchange and Web3 platform for trading, earning, and managing digital assets.',
    categories: ['Custodians & Exchanges'],
  },
  {
    name: 'Open Eden',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F020b3ba89ffa4cfab0eb8ecff5991cdc',
    description:
      'Open Eden is a blockchain-based platform that provides tokenized access to U.S. Treasury yields, enabling secure and transparent real-world asset investments in DeFi.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Optimism',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fa36bce917dc84d0fad1074a86f1581d7',
    description:
      'Optimism is a Layer 2 blockchain that operates on top of Ethereum, aiming to scale the Ethereum ecosystem by using optimistic rollups, which are transactions recorded on Optimism but ultimately secured on Ethereum.',
    categories: ['Blockchains'],
  },
  {
    name: 'Plume',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fb467af259cac4316aaadde980d333ae2',
    description:
      'Plume is a purpose-built blockchain powering regulated tokenization, liquidity, and asset infrastructure for institutions.',
    categories: ['Blockchains'],
  },
  {
    name: 'Polygon',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc87b66f336ed428f9fa0c024450ce062',
    description:
      'Polygon is a Layer 2 scaling solution for Ethereum that enhances transaction speed and reduces costs while maintaining security and interoperability.',
    categories: ['Blockchains'],
  },
  {
    name: 'Pyth',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fc396ee7816f44c8d85faf5d95f765772',
    description:
      'Pyth Network brings real-time, institutional-grade market data onchain using a secure and decentralized oracle network.',
    categories: ['Oracles'],
  },
  {
    name: 'QCP',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F684fdf45bbd44c9f99fa239a6565b3ab',
    description:
      'QCP Capital is a digital asset trading firm offering tailored derivatives, spot trading, and structured solutions to institutional, professional, and accredited investors.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Re7 Capital',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F233989f31b3d4602a744f4da0637e8b6',
    description:
      'Re7 Capital is a research-driven digital asset investment firm specializing in DeFi yield and liquid alpha strategies.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'RedStone',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F8ae943642a1a478b81dc0ca39be38540',
    description:
      'RedStone is a modular blockchain oracle platform that provides secure and fast price feeds for over 1,250 assets across 70+ chains, trusted by more than 130 clients.',
    categories: ['Oracles'],
  },
  {
    name: 'Ripple',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F63ad305ff1c9433e9fc03326aff18c11',
    description:
      'Ripple is a blockchain protocol enabling decentralized liquidity, payments, and tokenized value transfer across networks.',
    categories: ['Blockchains', 'Interoperability'],
  },
  {
    name: 'Ripple/XRP',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F149d9fd18e8848a6a46092dfa54d94e3',
    description:
      'Ripple (XRP) is a digital asset enabling fast, low-cost cross-border payments for financial institutions.',
    categories: ['Blockchains'],
  },
  {
    name: 'Sei',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fe070e819ea6c485293eaf8004ae3b480',
    description:
      'Sei is a Layer 1 blockchain built for trading, delivering fast transactions, low latency, and scalability for decentralized finance and applications.',
    categories: ['Blockchains'],
  },
  {
    name: 'Silo Finance',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F13205b5090984e30b4c9466df0d4cf9f',
    description:
      'Silo Finance is a DeFi lending protocol that creates risk-isolated markets, enabling secure and efficient crypto borrowing and lending.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Sky',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fab9c53394302483ab7f76d1a8152c49e',
    description:
      'Sky.money is a non-custodial DeFi platform enabling users to upgrade DAI and MKR to USDS and SKY, offering savings and rewards.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Solana',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F5cb8fd93a4f94794b1d4f153eb37efaa',
    description:
      'Solana is a high-performance blockchain platform designed for fast, scalable, and low-cost decentralized applications and crypto transactions.',
    categories: ['Blockchains'],
  },
  {
    name: 'STBL',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fb67b46c6ebdf4f2693c27362ea965aec',
    description: 'STBL is a decentralized, non-custodial protocol introducing the next evolution of stablecoins.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Tokka Labs',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F55f724878ccc43c2ae99689bf9904a1c',
    description:
      'Tokka Labs is a proprietary trading firm specializing in digital assets, providing liquidity through algorithmic market making and advanced quantitative strategies across leading blockchain protocols.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Tron',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F3e15aaacf4d4464da1b3ebeebcae37af',
    description:
      'TRON is a decentralized blockchain platform designed to build a free, global digital content entertainment system, enabling high-throughput, scalable smart contracts and decentralized applications (dApps) with low transaction fees.',
    categories: ['Blockchains'],
  },
  {
    name: 'Uniswap Labs',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F52693cfe7d54445b91fc2e9af770799f',
    description:
      'Uniswap Labs builds decentralized exchange technology enabling permissionless, onchain trading of digital assets.',
    categories: ['DeFi Protocols'],
  },
  {
    name: 'Velo',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F88bf009e899940d7b1563bd2ddf6db47',
    description:
      'Velo is a blockchain-based financial protocol that enables cross-border payments and decentralized credit issuance using its stablecoin and smart contract infrastructure.',
    categories: ['Interoperability'],
  },
  {
    name: 'Wintermute',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Fa7c003175eff45c5925673342f578f65',
    description:
      'Wintermute is a global algorithmic trading firm in digital assets, creating liquid and efficient markets on centralized and decentralized trading platforms and off-exchange.',
    categories: ['Prime Brokers & Market Makers'],
  },
  {
    name: 'Wormhole',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F3eb89ac846c1465da5a17f6f88da0823',
    description:
      'Wormhole is an open-source interoperability platform that enables secure multichain applications by connecting blockchains, allowing seamless asset transfers, messaging, and data queries across over 30 blockchains.',
    categories: ['Interoperability'],
  },
  {
    name: 'XDC',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F75aaa45d8b7144809768ceeba58188d0',
    description:
      'XDC Network is a blockchain platform designed to enable fast, scalable, and secure enterprise-grade decentralized applications and smart contracts.',
    categories: ['Blockchains'],
  },
  {
    name: 'XLayer',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2Ff59da0be9cf340a4bb7503ce94b0b2e1',
    description:
      'X Layer is a decentralized Ethereum Layer 2 network that offers a secure and user-friendly blockchain experience to all users.',
    categories: ['Blockchains'],
  },
  {
    name: 'Zero Hash',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F03d13f1ca06747eb828725b38ac6b3af',
    description:
      'Zero Hash provides API-first technology and regulatory infrastructure to help businesses launch compliant crypto services, including trading, payments, and rewards, quickly and seamlessly.',
    categories: ['Web3 Security & Compliance'],
  },
  {
    name: 'ZKsync',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F131b816159f84262a84f153c3398fb7c',
    description:
      'ZKsync is a layer 2 protocol that uses zero-knowledge (ZK) technology to scale Ethereum and bring crypto to the mainstream.',
    categories: ['Blockchains'],
  },
  {
    name: 'Zodia',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Fd39b51a544e84e2fbb2445f58c6c6f2c%2F7aff1f2a78834095903c0beff186668a',
    description:
      'Zodia Custody is a leading institution-first digital asset custodian providing asset owners with bank-grade, segregated and compliant cold storage.',
    categories: ['Custodians & Exchanges'],
  },
];

const CATEGORIES = [
  'All Partners',
  'Blockchains',
  'Custodians & Exchanges',
  'DeFi Protocols',
  'Interoperability',
  'Oracles',
  'Prime Brokers & Market Makers',
  'Web3 Security & Compliance',
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function PartnerCard({ partner }) {
  return (
    <div className="bg-white rounded-[8px] p-5 md:p-8 flex flex-col">
      <div className="w-16 h-16 mb-10">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h3
        className="mb-4 text-[#071636]"
        style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.3' }}
      >
        {partner.name}
      </h3>
      <p
        className="text-[#071636]"
        style={{ fontSize: '15px', lineHeight: '1.6', opacity: 0.7 }}
      >
        {partner.description}
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PartnerEcosystemPage() {
  const [activeCategory, setActiveCategory] = useState('All Partners');

  const filtered =
    activeCategory === 'All Partners'
      ? PARTNERS
      : PARTNERS.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar from existing component */}
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      <div className="w-full relative overflow-hidden h-[600px]">
        {/* Background overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: 'rgb(8, 24, 56)',
            backgroundImage:
              'linear-gradient(rgba(8,24,56,0.7),rgba(8,24,56,0.7))',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Hero image */}
        <img
          src="/assets/hero/header-image-02.3afd65d613c784163257.png"
          alt="Our Partner Ecosystem"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
        />
        {/* Content */}
       <div
  className="
    relative
    max-w-[1160px]
    mx-auto
    w-full
    h-full
    flex
    items-end
    justify-start
    px-[20px]
    pt-[140px]
    pb-[40px]

    lg:pt-[200px]
    lg:pb-[100px]
  "
>
  <div
    className="
      flex
      flex-col
      relative
      z-10
      gap-[8px]
    "
  >
    <h1
      className="
        text-white
        font-normal
        text-left
        tracking-[-0.03em]
        leading-[0.95]

        text-[48px]
        md:text-[64px]
        lg:text-[80px]
      "
      style={{
        fontFamily: '"PP Editorial New", serif',
      }}
    >
      Our Partner
      <br />
      Ecosystem
    </h1>
  </div>
</div>
      </div>

      {/* ── Filter + Cards Section ───────────────────────────────────────── */}
      <div
        className="w-full px-5 py-5 md:py-20"
        style={{ backgroundColor: '#E9F0F9' }}
      >
        <div
          className="flex flex-col max-w-[1160px] mx-auto"
          style={{ gap: '20px' }}
        >
          {/* Mobile select */}
          <div className="md:hidden w-full">
            <div className="relative">
              <select
                className="w-full px-4 py-3 rounded-[50px] text-sm font-medium bg-white text-[#071636] appearance-none"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop pill buttons */}
          <div className="hidden md:flex flex-row gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-3 rounded-[50px] text-sm font-medium transition-colors duration-150"
                style={{
                  backgroundColor:
                    activeCategory === cat ? '#071636' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#071636',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Partner grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Join CTA Section ─────────────────────────────────────────────── */}
      <div
        className="flex flex-col items-center px-5 md:px-10"
        style={{
          backgroundColor: 'rgb(79, 116, 171)',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        <div className="w-full max-w-[1160px]">
          <div className="w-full flex flex-col items-center justify-center">
            <h2
              className="font-normal text-white text-center mb-10 max-w-[900px]"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                lineHeight: '1.2',
                fontFamily: 'Georgia, "Times New Roman", serif',
                whiteSpace: 'pre-line',
              }}
            >
              Join Our Partner Ecosystem
            </h2>
            <p
              className="text-white text-center mb-10 max-w-[700px]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9,
                whiteSpace: 'pre-line',
              }}
            >
              Securitize is committed to expanding access to alternative
              investments and redefining what's possible in the digital asset
              space. We invite like-minded organizations to join us on this
              exciting journey.
            </p>
            <Link to="/homepage-lgf-select" className="inline-flex">
              <button
                className="group flex items-center justify-center bg-white text-[#071636] whitespace-nowrap transition-colors duration-150 hover:bg-white/80"
                style={{
                  padding: '8px 20px',
                  borderRadius: '44px',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                Join Our Partner Ecosystem
                <span className="ml-1.5 inline-block transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer from existing component */}
      <Footer />
    </div>
  );
}