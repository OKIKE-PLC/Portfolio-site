import darkLogo from '../assets/Dark.png';
import Navbar from './navbar';

export default function Header() {


    return (
        <header className='flex justify-between items-center' style={{padding: "1rem"}}>
            <a href="#"><img src={darkLogo} alt="Okike Logo" width={60} /></a>

            <Navbar />

        </header>
    )
}