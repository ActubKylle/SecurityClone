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

import IntroToTokenizationPage from "./pages/insights/IntroToTokenizationPage";
import WhitepapersResearchPage from "./pages/insights/WhitepapersResearchPage";
import VideosPage from "./pages/insights/VideosPage";
import ArticlesPage from "./pages/insights/ArticlesPage";
import BugBountyPage from "./pages/insights/BugBountyPage";
import APIsPage from "./pages/insights/APIsPage";

import CompanyPage from "./pages/about/CompanyPage";
import CareersPage from "./pages/about/CareersPage";
import MediaCoveragePage from "./pages/about/MediaCoveragePage";
import InvestorRelationsPage from "./pages/about/InvestorRelationsPage";
import PressReleasesPage from "./pages/about/PressReleasesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationNamePage from "./pages/RegistrationNamePage";

import PageLoader from "./components/PageLoader";
function HomePage() {
  return (
<div className="min-h-screen w-full overflow-x-hidden bg-[#030b1e] text-white font-sans selection:bg-blue-500/30">
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
      <PageLoader />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration/name" element={<RegistrationNamePage />} />

        <Route
          path="/insights/intro-to-tokenization"
          element={<IntroToTokenizationPage />}
        />

        <Route path="/about-us/our-story" element={<CompanyPage />} />
        <Route path="/about-us/careers" element={<CareersPage />} />
        <Route path="/about-us/media-coverage" element={<MediaCoveragePage />} />
        <Route path="/about-us/investor-relations" element={<InvestorRelationsPage />} />
        <Route path="/about-us/press-releases" element={<PressReleasesPage />} />

        <Route path="/insights/whitepapers" element={<WhitepapersResearchPage />} />
        <Route path="/insights/videos" element={<VideosPage />} />
        <Route path="/insights/articles" element={<ArticlesPage />} />
        <Route path="/insights/bug-bounty" element={<BugBountyPage />} />
        <Route path="/insights/apis" element={<APIsPage />} />

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