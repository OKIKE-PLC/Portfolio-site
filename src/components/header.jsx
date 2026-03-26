import darkLogo from '../assets/Dark.png';

export default function Header() {
    return (
        <header className='flex justify-between items-center' style={{padding: ".5rem"}}>
            <a href="#"><img src={darkLogo} alt="Okike Logo" width={40} /></a>

            <nav className='flex justify-center items-center gap-5 text-sm '>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Home</a>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Portfolio</a>
                <a href="#" className='hover:text-orange-600 hover:underline transition duration-150'>Contact</a>
            </nav>

            <a href="#" className='bg-orange-600 text-stone-100 rounded-sm hover:bg-orange-800 transition duration-300' style={{padding: ".3rem .5rem"}}>Contact Us</a>
        </header>
    )
}