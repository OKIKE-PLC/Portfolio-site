import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Process from './pages/process';
import Contact from './pages/contact';
import Residential from './pages/residential';
import './App.css';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import ScrollToTop from './components/ScrollToTop';
import MeetTheTeam from './pages/meetTheTeam';

export default function App() {
  return (
  
    <Router>
      <ScrollToTop />
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/residential" element={<Residential />} />
          <Route path="/about/meet-the-team" element={<MeetTheTeam />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
