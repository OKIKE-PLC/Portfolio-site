import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Process from './pages/process';
import Contact from './pages/contact';
import './App.css';
import Navbar from './components/navbar';

function App() {

  return (
    let component
    switch (window.location.pathname) {
      case "/":
        component = <App />
        break
      case "/":
        component = <Home />
        break
      case "/":
        component = <Portfolio />
        break
      case "/":
        component = <Process />
        break
      case "/":
        component = <Contact />
        break
    }
    return (
      <Navbar />
    )
    // <main className="mx-auto w-full">
    //   <Home />
    // </main>
  )
}

export default App
