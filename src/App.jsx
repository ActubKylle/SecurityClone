import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import InvestmentsSection from './components/InvestmentsSection';
import EnterpriseSolutions from './components/EnterpriseSolutions';
import PartnersSection from './components/PartnersSection';
import BannerSeparator from './components/BannerSeparator';
import CompanyAnnouncements from './components/CompanyAnnouncements';
import MediaCoverage from './components/MediaCoverage';
import Footer from './components/Footer';

import OnchainFeaturesPage from './pages/OnchainFeaturesPage';
import PartnerEcosystemPage from './pages/PartnerEcosystemPage';
import StocksPage from './pages/StocksPage';
import InvestPage from './pages/InvestPage';
import AlternativeAssetsPage from './pages/AlternativeAssetsPage';
import RegisteredFundsPage from './pages/RegisteredFundsPage';

function HomePage() {
  return (
    <div className="bg-[#030b1e] min-h-screen text-white font-sans selection:bg-blue-500/30">

      <Navbar />

      <Hero />

      <AboutSection />

      <InvestmentsSection />

      <EnterpriseSolutions />

      <PartnersSection />

      <BannerSeparator />

      <CompanyAnnouncements />

      <MediaCoverage />

      <Footer />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Separate Page */}
        <Route path="/onchain-features" element={<OnchainFeaturesPage />} />
        <Route path="/partner-ecosystem" element={<PartnerEcosystemPage />} />
         <Route path="/invest" element={<InvestPage />} />
        <Route path="/investments/stocks" element={<StocksPage />} />
        <Route path="/investments/alternative-assets" element={<AlternativeAssetsPage />} />
        <Route path="/investments/registered-funds" element={<RegisteredFundsPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;