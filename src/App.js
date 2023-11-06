import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
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
import MarketplaceDetail from './Components/MarketplaceDetail';

function App() {
  return (
    <>
      <HashRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/acquire" element={<Acquirers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/market" element={<Market />} />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/singin" element={<SignIn />} />
          <Route path="/onboard" element={<Onboarding />} />
          <Route path="/MainDashboard" element={<MainDashboard />} />
          <Route path="/sellingDash" element={<SellingDash />} />
          <Route path="/valuation" element={<ValuationTool />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/placeDetail" element={<MarketplaceDetail />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
