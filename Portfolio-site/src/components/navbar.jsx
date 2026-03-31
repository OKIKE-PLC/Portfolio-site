import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import darkLogo from '../assets/Dark.png';

export default function Navbar() {
const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById ('mobileMenu')

    if(mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
    } else {
        mobileMenu.classList.add('hidden')
    }
}

    return (
        
        <section className='flex justify-between items-center' style={{padding: "1rem"}}>
        <Link to="/"><img src={darkLogo} alt="Okike Logo" width={60} /></Link>
            <nav className='hidden md:flex justify-center items-center gap-5 text-sm '>
                <Link to="/" className='hover:text-orange-600 hover:underline transition duration-150'>Home</Link>
                <Link to="/portfolio" className='hover:text-orange-600 hover:underline transition duration-150'>Portfolio</Link>
                <Link to="/contact" className='hover:text-orange-600 hover:underline transition duration-150'>Contact</Link>
            </nav>

            <Link to="/contact" className='hidden md:block bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300' style={{padding: ".3rem .5rem"}}>Contact Us</Link>

            {/* mobile navigation visible only on mobile */}
            <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
                <RiMenu4Line />
            </button>
            <div id='mobileMenu' className='mob  hidden fixed top-11.5 md:hidden bg-opacity-70 backdrop-blur-md items-start'>
                <nav className='flex flex-col gap-6 items-center'>
                    <Link to="/" className='text-orange-600 hover:underline transition duration-150'>Home</Link>
                <Link to="/portfolio" className='text-orange-600 hover:underline transition duration-150'>Portfolio</Link>
                <Link to="/contact" className='text-orange-600 hover:underline transition duration-150'>Contact</Link>
                </nav>
            </div>
        </section>
    )
}