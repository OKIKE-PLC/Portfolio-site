import { Link } from 'react-router-dom';
import darkLogo from '../assets/Dark.png';
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-4 bg-[#1C1C19] text-zinc-100' style={{padding: "3rem 1rem"}}>
        <div className='flex flex-col gap-3 justify-start items-start'>
            <a href="#"><img src={darkLogo} alt="Okike Logo" width={60} /></a>
            <p>The Architectural Monolith. Engineering excellence and design precision in every structural detail.</p>
        </div>
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Explore</span>
            <div className='flex flex-col justify-start items-start gap-2 font-light'>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/process">Process</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Services</span>
            <div className='flex flex-col justify-start items-start gap-2 font-light'>
                <a href="#">Interior Design</a>
                <a href="#">3D and Architectural Design</a>
                <a href="#">Oil and Gas</a>
                <a href="#">Residential</a>
            </div>
        </div>
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Legal</span>
            <div className='flex flex-col justify-start items-start gap-2 font-light'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Social</span>
            <div className='flex flex-col justify-center items-start gap-5 font-light'>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/okike-plc-8a27043b6"><FaLinkedinIn /> LinkedIn</a>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://x.com/Okikeplc"><BsTwitterX /> Twitter</a>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/okikestudio"><FaInstagram /> Instagram</a>
                <a className='flex justify-center items-center gap-2 hover:text-orange-600 transition duration-150' target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/share/1GsSgNwiPk/"><FaFacebookF /> Facebook</a>
                
            </div>
        </div>
    </footer>
    )
    
}