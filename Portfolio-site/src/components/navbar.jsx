import { useState, useEffect, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import darkLogo from "../assets/Dark.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <section
      ref={navRef}
      className="sticky top-0 z-50  backdrop-blur-sm flex justify-between items-center"
      style={{ padding: "1rem" }}
    >
      <Link to="/">
        <img src={darkLogo} alt="Okike Logo" width={60} />
      </Link>
      <nav className="hidden md:flex justify-center items-center gap-5 text-sm ">
        <Link
          to="/"
          className="active:text-orange-600 hover:text-orange-600 hover:underline transition duration-150"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="active:text-orange-600 hover:text-orange-600 hover:underline transition duration-150"
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className="active:text-orange-600 hover:text-orange-600 hover:underline transition duration-150"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="active:text-orange-600 hover:text-osrange-600 hover:underline transition duration-150"
        >
          Contact
        </Link>
      </nav>

      <a
        href="https://wa.me/2349045942474?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300"
        style={{ padding: ".3rem .5rem" }}
      >
        Contact Us
      </a>

      {/* mobile navigation visible only on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <RiMenu4Line />
      </button>
      <div
        id="mobileMenu"
        className={`mob absolute left-0 w-full top-full md:hidden backdrop-blur-md items-start -z-10 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto visible" 
            : "opacity-0 -translate-y-5 pointer-events-none invisible"
        }`}
      >
        <nav 
          className="flex flex-col gap-6 items-center bg-stone-900" 
          style={{padding: "1rem"}}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link
            to="/"
            className="text-orange-600 hover:underline transition duration-150"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-orange-600 hover:underline transition duration-150"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-orange-600 hover:underline transition duration-150"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-orange-600 hover:underline transition duration-150"
          >
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
}
