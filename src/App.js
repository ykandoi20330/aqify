import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
