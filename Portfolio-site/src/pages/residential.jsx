import residential from '../assets/residential.png';
import FabCards from '../components/fabricationCards';
import './hero.css';


export default function Residential() {
    return (
        <section>
            {/* header section */}
            <header className="hero flex flex-col justify-end items-start h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${residential}')`, padding: "0 1rem"} }>
                <div className='flex flex-col justify-end items-start gap-2 z-10' style={{padding: "7rem 0"} }>
                    <p className='font-semibold text-orange-600 text-3xl'>Case Study</p>
                    <h1 className='font-bold text-zinc-200 text-4xl md:text-5xl'>Residential</h1>
                </div>
            </header>

            {/* page nav */}
            <nav className='flex flex-row justify-start items-start gap-2.5' style={{padding: ' .3rem 1rem '}}>
                <a href="#challenge" className='text-sm hover:text-orange-600 font-light'>CHALLENGE</a>
                <a href="#process" className='text-sm hover:text-orange-600 font-light'>PROCESS</a>
                <a href="#" className='text-sm hover:text-orange-600 font-light'>SOLUTION</a>
                <a href="#" className='text-sm hover:text-orange-600 font-light'>RESULT</a>
            </nav>

            <main>
                {/* Challenge */}
                <div id='challenge' className='flex flex-col lg:flex-row justify-center items-start gap-2.5' style={{padding: ' .3rem 1rem '}}>
                    {/* challeneg txt */}
                    <div className='flex flex-col justify-center items-start gap-2.5 lg:w-1/2'>
                            <h4 className='text-orange-600 '>THE CHALLENEGE</h4>
                            <p>The Lagos Waterfront presented a unique architectural paradox: the need for a structure that felt ephemeral and light while resisting the brutal corrosive power of a high-salinity coastal environment. The Atlantic mist and shifting sands created a site that was as volatile as it was beautiful.</p>
                        
                    </div>
                    {/* residential img */}
                    <div className='rounded-sm lg:rounded-xl lg:w-1/2 object-contain'>
                        <img className='rounded-sm lg:rounded-xl lg:w-full max-h-90 object-cover' height={60} src={residential} alt="residential building" />
                    </div>
                    
                </div>

                {/* process */}
                <div id='process' className='flex flex-col lg:flex-row  justify-center items-start gap-2.5' style={{padding: ' .3rem 1rem '}}>
                    <h3 className='text-orange-600 font-light'>Fabrication Process</h3>
                    <FabCards />
                </div>
                {/* solution */}
                <div id="solution" className='flex flex-col justify-center items-start gap-2.5' style={{padding: ' .3rem 1rem '}}>
                    <h3 className='text-orange-600 font-light items-start'>Solution</h3>
                </div>
            </main>
            

        </section>
    )
}