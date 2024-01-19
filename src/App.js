import './App.css';
// import Footer from './Components/Footer';
// import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Owner from './Components/Owner';
import Acquirers from './Components/Acquirers';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import TermsCondition from './Components/TermsCondition';
import Market from './Components/Market';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Onboarding from './Components/Onboarding';
import MainDashboard from './Components/MainDashboard';
import SellingDash from './Components/SellingDash';
import ValuationTool from './Components/ValuationTool';
import Testimonials from './Components/Testimonials';
import Advisory from './Components/Advisory';
import AdvisoryOnboard from './Components/AdvisoryOnboard';
import MarketplaceDetail from './Components/MarketplaceDetail';
import MessageDash2 from './Components/MessageDash2';
import PaymentCardDash from './Components/PaymentCardDash';
import DashboardProfile from './Components/DashboardProfile';
import Home1 from './Components/Home1';
import SellerDash from './Components/SellerDash';

//dashboard
import PaymentDash from './Components/PaymentDash'
import ChangePassword from './Components/ChangePassword'
import Dashboard from './Components/Dashboard'
import PricingDash from './Components/PricingDash'
import MarketplaceDash from './Components/MarketplaceDash'
import MarketplaceDash2 from './Components/MarketplaceDash2'
import MarketDashDetail from './Components/MarketDashDetail'
import ProjectBuying from './Components/ProjectBuying'
import MyProject from './Components/MyProject'
import MyAnalytics from "./Components/MyAnylatics"
import ContactDashboard from './Components/ContactDashboard'
import MessageDash from './Components/MessageDash'
import DashboardValuation from './Components/DashboardValuation'
import ProofOfFund from './Components/ProofOfFund'
import Favourite from './Components/Favourite'
import NotifactionDash from './Components/NotifactionDash'
import TransferService from './Components/TransferService'
import Agora from './Components/Agora';
import AdminPanelListing from './Components/AdminPanelListing';
import AdminPanel from './Components/AdminPanel';
import AdminApproveList from './Components/AdminApproveList';
import AdminChatHistoy from './Components/AdminChatHistoy';
import AdminFeedback from './Components/AdminFeedback';
import SpeechToText from './Components/testvc';

function App() {
  return (
    <>
      <HashRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home1 />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/owner" element={<Owner />} />
          <Route path="/acquire" element={<Acquirers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/TransferService" element={<TransferService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/market" element={<Market />} />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/singin" element={<SignIn />} />
          <Route path="/onboard" element={<Onboarding />} />
          <Route path="/sellingDash" element={<SellingDash />} />
          <Route path="/valuation" element={<ValuationTool />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/advisoryOnbaord" element={<AdvisoryOnboard />} />
          <Route path="/placeDetail" element={<MarketplaceDetail />} />
          {/* <Route path="/message" element={<MessageDash2 />} /> */}
          <Route path="/payCart" element={<PaymentCardDash />} />
          <Route path="/seller" element={<SellerDash />} />
          <Route path="/MarketDash2" element={<MarketplaceDash2 />} />
          <Route path="/call/:id" element={<Agora />} />
          <Route path="/AdminPanel" element={<AdminPanel />}>
            <Route path="AdminPanelListing" element={<AdminPanelListing />} />
            <Route path="AdminApproveList" element={<AdminApproveList />} />
            <Route path="AdminChatHistoy" element={<AdminChatHistoy />} />
            <Route path="AdminFeedback" element={<AdminFeedback />} />
          </Route>
          <Route path="/MainDashboard" element={<MainDashboard />} >
            <Route path="proflie" element={<DashboardProfile />} />
            <Route path="contactDashboard" element={<ContactDashboard />} />
            <Route path="MessageDash" element={<MessageDash />} />
            <Route path="PaymentDash" element={<PaymentDash />} />
            <Route path="ChangePassword" element={<ChangePassword />} />
            <Route path="Dashbaord" element={<Dashboard />} />
            <Route path="MarketDash" element={<MarketplaceDash />} />
            <Route path="MarketDetail" element={<MarketDashDetail />} />
            <Route path="ProjectBuying" element={<ProjectBuying />} />
            <Route path="PricingDash" element={<PricingDash />} />
            <Route path="MyProject" element={<MyProject />} />
            <Route path="MyAnalytics" element={<MyAnalytics />} />
            <Route path="DashValuation" element={<DashboardValuation />} />
            <Route path="ProofFund" element={<ProofOfFund />} />
            <Route path="favorites" element={<Favourite />} />
            <Route path="Notification" element={<NotifactionDash />} />
            <Route path="vc" element={<SpeechToText />} />
          </Route>

        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </>
  );
}

export default App;
