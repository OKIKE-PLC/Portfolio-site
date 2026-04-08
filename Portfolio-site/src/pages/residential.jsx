import residential from '../assets/residential.png';
import FabCards from '../components/fabricationCards';
import Shield from '../assets/Icon.svg';
import './hero.css';


export default function Residential() {
    return (
        <section className='flex flex-col justify-center items-center bg-[#FCF9F4]' style={{padding: ' 0 .6rem '}}>
            {/* header section */}
            <header className="hero flex flex-col justify-end items-start h-screen w-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${residential}')`, padding: "0 1rem"} }>
                <div className='flex flex-col justify-end items-start gap-2 z-10' style={{padding: "7rem 0"} }>
                    <p className='font-semibold text-orange-600 text-3xl'>Case Study</p>
                    <h1 className='font-bold text-zinc-200 text-4xl md:text-5xl'>Residential</h1>
                </div>
            </header>

            {/* page nav */}
            <nav className='flex flex-row justify-center items-center gap-2.5 w-full md:w-1/2 border border-orange-600 rounded-xl' style={{padding: '.5rem 0', marginTop: "2rem"}}>
                <a href="#challenge" className='text-sm md:text-xl font-bold hover:text-orange-600 '>CHALLENGE</a>
                <a href="#process" className='text-sm md:text-xl font-bold hover:text-orange-600 '>PROCESS</a>
                <a href="#solution" className='text-sm md:text-xl font-bold hover:text-orange-600 '>SOLUTION</a>
                <a href="#" className='text-sm md:text-xl font-bold hover:text-orange-600 '>RESULT</a>
            </nav>

            <main>
                {/* Challenge */}
                <section id='challenge' className='flex flex-col lg:flex-row justify-between items-start gap-2.5' style={{padding: ' 2rem 0rem '}}>
                    {/* challeneg txt */}
                    <div className='flex flex-col justify-center items-start gap-2.5 w-full lg:w-1/2'>
                            <h4 className='text-orange-600 text-xl font-bold'>THE CHALLENGE</h4>
                            <p>The Lagos Waterfront presented a unique architectural paradox: the need for a structure that felt ephemeral and light while resisting the brutal corrosive power of a high-salinity coastal environment. The Atlantic mist and shifting sands created a site that was as volatile as it was beautiful.</p>
                        
                    </div>
                    {/* residential img */}
                    <div className='rounded-sm lg:rounded-xl object-contain w-full lg:w-1/2'>
                        <img className='rounded-sm lg:rounded-xl w-full max-h-90 object-cover' src={residential} alt="residential building" />
                    </div>
                    
                </section>

                {/* process */}
                <section id='process' className='flex flex-col w-full justify-center items-start gap-2.5' style={{padding: ' 4rem 0'}}>
                    <h3 className='text-orange-600 text-xl font-bold' style={{marginBottom: "1rem"}}>Fabrication Process</h3>
                    <FabCards />
                </section>
                {/* solution */}
                <section id="solution" className='flex flex-col md:flex-row justify-center items-start gap-2.5 bg-[#FCF9F4]' style={{padding: ' 3.5rem 0rem '}}>
                    <div className='flex flex-col justify-center items-start gap-2.5 w-full md:w-1/2'>
                        <h3 className='text-orange-600 text-sm font-bold'>CONCEPTUAL CORE</h3>
                        <h4 className='text- font-bold'>Balancing visual lightness with extreme coastal durability.</h4>
                        <p className='font-light'>Our solution centered on a structural paradox. We developed a design language that evokes the transparency of the Atlantic mist while maintaining the tectonic strength of a fortress. The result is a 'living skin'—a pavilion that breathes with the wind but stands resolute against the salt-laden atmosphere.</p>
                    </div>
                    {/* solution img */}
                    <div className="rounded-xl object-contain flex flex-col  justify-center items-start w-full md:w-1/2 gap-3 bg-[#F6F3EE] border-0" style={{padding: "1rem .5rem"}}>
                         <h3 className='text-orange-600 text-sm font-bold ' style={{marginBottom: "1rem"}}>MATERIAL INNOVATION</h3>
                         <div className='flex justify-center items-start gap-2.5 '>
                            <div className='w-15 h-15 rounded-full flex justify-center items-start '>
                                <img src={Shield} alt="" />
                            </div>
                            <div>
                                <h5 className='text-sm font-bold'>Marine-Grade Steel</h5>
                                <p className='font-light'>High-performance alloy specifically treated for 50+ year lifespans in high-salinity zones.</p>
                            </div>
                         </div>
                         <div className='flex justify-center items-start gap-2.5 '>
                            <div className='w-15 h-15 rounded-full flex justify-center items-start '>
                                <img src={Shield} alt="" />
                            </div>
                            <div>
                                <h5 className='text-sm font-bold'>Marine-Grade Steel</h5>
                                <p className='font-light'>High-performance alloy specifically treated for 50+ year lifespans in high-salinity zones.</p>
                            </div>
                         </div>
                         <div className='flex justify-center items-start gap-2.5 '>
                            <div className='w-15 h-15 rounded-full flex justify-center items-start '>
                                <img src={Shield} alt="" />
                            </div>
                            <div>
                                <h5 className='text-sm font-bold'>Marine-Grade Steel</h5>
                                <p className='font-light'>High-performance alloy specifically treated for 50+ year lifespans in high-salinity zones.</p>
                            </div>
                         </div>
                    </div>
                </section>

                {/* results */}
                <section className='flex flex-col md:flex-row justify-center items-start gap-2.5' style={{padding: ' 3.5rem 0rem '}}>
                    
                    
                        <div className='flex flex-col justify-center items-start gap-2.5 w-full md:w-1/2'>
                            <h4 className='text-orange-600 text-xl font-bold'>THE RESULT</h4>
                            <p>The Lagos Waterfront presented a unique architectural paradox: the need for a structure that felt ephemeral and light while resisting the brutal corrosive power of a high-salinity coastal environment. The Atlantic mist and shifting sands created a site that was as volatile as it was beautiful.</p>
                        
                    </div>
                    {/* residential img */}
                    <div className='rounded-sm lg:rounded-xl object-contain w-full lg:w-1/2'>
                        <img className='rounded-sm lg:rounded-xl w-full max-h-90 object-cover' src={residential} alt="residential building" />
                    </div>
                    
                </section>
            </main>
            

        </section>
    )
}