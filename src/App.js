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

function App() {
  return (
    <>
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/owner" element={<Owner/>} />
        <Route path="/acquire" element={<Acquirers/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
      <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
