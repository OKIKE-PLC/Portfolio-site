import { RiMenu4Line } from "react-icons/ri";

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
        

        <>
            <nav className='hidden md:flex justify-center items-center gap-5 text-sm '>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Home</a>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Portfolio</a>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Contact</a>
            </nav>

            <a href="#" className='hidden md:block bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300' style={{padding: ".3rem .5rem"}}>Contact Us</a>

            {/* mobile navigation visible only on mobile */}
            <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
                <RiMenu4Line />
            </button>
            <div id='mobileMenu' className='mob  hidden fixed top-11.5 md:hidden bg-opacity-70 backdrop-blur-md items-start'>
                <nav className='flex flex-col gap-6 items-center'>
                    <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Home</a>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Portfolio</a>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Contact</a>
                </nav>
            </div>
        </>
    )
}