import { useState, useEffect, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import darkLogo from "../assets/(PLC)-Dark-Logo.png";

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
      <nav className="hidden md:flex justify-center items-center gap-3 text-sm ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : "hover:bg-orange-200 hover:text-orange-700"
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
                : "hover:bg-orange-200 hover:text-orange-700"
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-orange-600 text-stone-100 font-medium"
                : "hover:bg-orange-200 hover:text-orange-700"
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
                : "hover:bg-orange-200 hover:text-orange-700"
            }`
          } style={{ padding: ".5rem 1rem" }}
        >
          Contact
        </NavLink>
      </nav>

      <a
        href="https://wa.me/2349045942474?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-orange-600 text-stone-100 rounded-lg hover:bg-orange-800 transition duration-300"
        style={{ padding: ".5rem 1rem" }}
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
          className="flex flex-col gap-4 items-center bg-stone-900" 
          style={{padding: "1rem"}}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-3 w-full text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-600 text-stone-100 font-medium"
                  : "text-orange-600 hover:bg-stone-800 hover:text-orange-500"
              }`
            }
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
          >
            About
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
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </section>
  );
}
