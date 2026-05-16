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
import TrustedInstitutions from './components/TrustedInstitutions';

import StocksPage from './pages/StocksPage';
import InvestPage from './pages/InvestPage';
import AlternativeAssetsPage from './pages/AlternativeAssetsPage';
import RegisteredFundsPage from './pages/RegisteredFundsPage';
import InstitutionalTokenizationPage from './pages/solutions/InstitutionalTokenizationPage';
import FundAdministrationPage from "./pages/solutions/FundAdministrationPage";
import DigitalAssetReportingPage from "./pages/solutions/DigitalAssetReportingPage";

function HomePage() {
  return (
    <div className="bg-[#030b1e] min-h-screen text-white font-sans selection:bg-blue-500/30">

      <Navbar />
      <Hero />
      <TrustedInstitutions />

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
<Route
  path="/solutions/digital-asset-reporting"
  element={<DigitalAssetReportingPage />}
/>
         <Route path="/invest" element={<InvestPage />} />
        <Route path="/investments/stocks" element={<StocksPage />} />
        <Route path="/investments/alternative-assets" element={<AlternativeAssetsPage />} />
        <Route path="/investments/registered-funds" element={<RegisteredFundsPage />} />
        <Route path="/solutions/institutional-tokenization" element={<InstitutionalTokenizationPage />} />
        <Route path="/solutions/fund-administration" element={<FundAdministrationPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;