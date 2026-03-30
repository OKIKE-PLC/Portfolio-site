import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Process from './pages/process';
import Contact from './pages/contact';
import './App.css';
import Navbar from './components/navbar';
import Footer from "./components/footer";

export default function App() {
  return (
  
    <Router>
      <Navbar />
      <main className="mx-auto w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
