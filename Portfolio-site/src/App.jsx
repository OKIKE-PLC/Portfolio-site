import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import CaseStudy from './pages/CaseStudy';
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
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="/about/meet-the-team" element={<MeetTheTeam />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
