import { useState, useEffect, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import lightLogo from "../assets/(PLC)_Light-Logo.png";
import WhatsAppButton from "./WhatsAppButton";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 max-w-[1440px] flex justify-between items-center transition-all duration-300 bg-transparent text-stone-100 backdrop-blur-sm`}
      style={{ padding: "1rem", margin: "0 auto" }}
    >
      <Link to="/">
        <img src={lightLogo} alt="Okike Logo" width={70} />
      </Link>
      <nav className="hidden md:flex justify-center items-center gap-3 text-sm ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : `hover:bg-orange-200 hover:text-orange-700 ${isScrolled ? "text-orange-600" : "text-stone-100"}`
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : `hover:bg-orange-200 hover:text-orange-700 ${isScrolled ? "text-orange-600" : "text-stone-100"}`
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : `hover:bg-orange-200 hover:text-orange-700 ${isScrolled ? "text-orange-600" : "text-stone-100"}`
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : `hover:bg-orange-200 hover:text-orange-700 ${isScrolled ? "text-orange-600" : "text-stone-100"}`
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : `hover:bg-orange-200 hover:text-orange-700 ${isScrolled ? "text-orange-600" : "text-stone-100"}`
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          Contact
        </NavLink>
      </nav>

      <WhatsAppButton className="hidden md:block bg-orange-600 text-stone-100 rounded-lg hover:bg-orange-800 transition duration-300" />

      {/* mobile navigation visible only on mobile */}
      <button
        onClick={toggleMobileMenu}
        className={`md:hidden text-3xl p-2 z-50 transition-colors duration-300 ${isScrolled ? "text-orange-600" : "text-stone-100"}`}
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
          className="flex flex-col gap-4 items-center bg-stone-900 w-full sticky top-8 z-50" 
          style={{padding: "1rem"}}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-600 text-stone-100 font-medium"
                  : "text-orange-600 hover:bg-stone-800 hover:text-orange-500"
              }`
            }
            style={{ padding: ".5rem 1rem" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-6 py-3 w-full text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-600 text-stone-100 font-medium"
                  : "text-orange-600 hover:bg-stone-800 hover:text-orange-500"
              }`
            }
            style={{ padding: ".5rem 1rem" }}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-6 py-3 w-full text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-600 text-stone-100 font-medium"
                  : "text-orange-600 hover:bg-stone-800 hover:text-orange-500"
              }`
            }
            style={{ padding: ".5rem 1rem" }}
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `px-6 py-3 w-full text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-600 text-stone-100 font-medium"
                  : "text-orange-600 hover:bg-stone-800 hover:text-orange-500"
              }`
            }
            style={{ padding: ".5rem 1rem" }}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-6 py-3 w-full text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-600 text-stone-100 font-medium"
                  : "text-orange-600 hover:bg-stone-800 hover:text-orange-500"
              }`
            } 
            style={{ padding: ".5rem 1rem" }}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </section>
  );
}
