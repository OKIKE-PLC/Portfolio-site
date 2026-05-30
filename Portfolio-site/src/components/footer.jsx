import { Link } from 'react-router-dom';
import darkLogo from "../assets/(PLC)_Light-Logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1C1C19] text-zinc-100" style={{padding: "3rem 1rem"}}>
       <div className='grid grid-cols-1  md:grid-cols-4 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 gap-8 max-w-[1440px]' style={{margin: "0 auto"}}>
         <div className='flex flex-col gap-3 justify-start items-start'>
            <a href="#"><img src={darkLogo} alt="Okike Logo" width={60} loading="lazy" /></a>
            <p>The Architectural Monolith. Engineering excellence and design precision in every structural detail.</p>
        </div>
         <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Explore</span>
            <div className='flex flex-col justify-start items-start gap-2 font-light'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about/meet-the-team">Meet The Team</Link>
            </div>
        </div>
        
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Services</span>
            <div className='flex flex-col justify-start items-start gap-2 font-light'>
                <Link to="/services">Interior Design</Link>
                <Link to="/services">3D and Architectural Design</Link>
                <Link to="/services">Painting</Link>
                <Link to="/services">Cleaning</Link>
                <Link to="/services">Building Construction and Project Management</Link>
                <Link to="/services">Fabrication</Link>
            </div>
        </div>
        {/* <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Legal</span>
            <div className='flex flex-col justify-start items-start gap-2 font-light'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div> */}
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Socials</span>
            <div className='flex flex-col justify-center items-start gap-5 font-light'>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/okike-plc-8a27043b6"><FaLinkedinIn /> okike-plc</a>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://x.com/Okikeplc"><BsTwitterX /> okikeplc</a>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/okikestudio"><FaInstagram /> okikestudio</a>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/share/1GsSgNwiPk/"><FaFacebookF /> okikeplc</a>
            </div>
        </div>
       </div>
    </footer>
    )
    
}