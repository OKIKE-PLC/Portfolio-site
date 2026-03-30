import darkLogo from '../assets/Dark.png';

export default function Footer() {
    return (
        <section className='grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-4 bg-[#1C1C19] text-zinc-100' style={{padding: "3rem 1rem"}}>
        <div className='flex flex-col gap-3 justify-center items-start'>
            <a href="#"><img src={darkLogo} alt="Okike Logo" width={60} /></a>
            <p>The Architectural Monolith. Engineering excellence and design precision in every structural detail.</p>
        </div>
        <div className='flex flex-col gap-3 justify-center items-start'>
            <span className='text-orange-600'>Explore</span>
            <div className='flex flex-col justify-center items-start gap-2 font-light'>
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Process</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        
        <div className='flex flex-col gap-3 justify-center items-start'>
            <span className='text-orange-600'>Services</span>
            <div className='flex flex-col justify-center items-start gap-2 font-light'>
                <a href="#">Interior Design</a>
                <a href="#">3D and Architectural Design</a>
                <a href="#">Oil and Gas</a>
                <a href="#">Residential</a>
            </div>
        </div>
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Legal</span>
            <div className='flex flex-col justify-center items-start gap-2 font-light'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
        <div className='flex flex-col gap-3 justify-start items-start'>
            <span className='text-orange-600'>Social</span>
            <div className='flex flex-col justify-center items-start gap-2 font-light'>
                <a href="#">X</a>
                <a href="#">LinkedIn</a>
                
            </div>
        </div>
    </section>
    )
    
}