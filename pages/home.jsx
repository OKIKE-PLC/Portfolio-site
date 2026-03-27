import Header from "../src/components/header";
import './hero.css';
import bgImg from '../src/assets/AMFF93_1.JPG';
// import bgImg2 from '../src/assets/Container.png';
// import Compass from '../src/assets/Container.svg';

export default function Home() {
    return (
        <>
            <Header />
            {/* hero section */}
            <section className="hero flex flex-col justify-center items-start md:items-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${bgImg}')`, padding: "0 .5rem"} }>
                {/* hero text div */}
            <div className="content flex  flex-col justify-center items-start md:items-center text-left  md:text-center">
                <h1 className='text-4xl md:text-6xl max-w-sm md:max-w-3xl  leading-10 md:leading-15 font-semibold m-5'>Redefining Architectural Fabrication.</h1>
                <p className="md:text-2xl max-w-sm md:max-w-3xl">Bespoke elements and construction excellence in Nigeria. We blend structural integrity with aesthetic precision to create enduring landmarks.
                </p>

                {/* hero cta btns */}
                <div className="cta flex flex-col md:flex-row justify-center w-full items-center gap-5">
                    {/* view projects cta btn */}
                    <a href="#" className='bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300'  style={{padding: "12px 25px", width: "100%"}}>View Projects</a>
                    {/* contact us btn */}
                    <a href="#" className='text-stone-200 rounded-xl border-stone-100 border-2 hover:bg-orange-800 transition duration-300' style={{padding: "12px 32px", width: "100%"}}>Contact Us</a>
                </div>
            </div>
            
            </section>

            {/* services we offer section */}

            <section className="cards flex flex-col gap-5 service">
                <div className=" flex flex-col text-left">
                    <p className="text-[.6rem] md:text-xl text-orange-600">CORE COMPETENCIES</p>
                    <h2 className="text-[1.2rem] md:text-4xl">Machined to Perfection</h2>
                </div>
                {/* service card  */}
                <div className=" rounded-xl  grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 justify-center items-center gap-4">
                    {/* individual cards */}
                    <div className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src="../src/assets/Container.svg" alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </div>
                    <div className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src="../src/assets/Container.svg" alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </div>
                    <div className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src="../src/assets/Container.svg" alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </div>
                    <div className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src="../src/assets/Container.svg" alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </div>
                </div>
                
            </section>

            {/* best projects section */}
            <section className="projects bg-[#edeae5] flex flex-col gap-5 ">
                {/* selected works text */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end ">
                    <div className="flex flex-col justify-center items-baseline">
                        <p className="text-orange-600 text-sm md:text-xl">Selected Works</p>
                        <h3 className="text-2xl md:text-4xl font-semibold">The <span className="text-orange-600  italic">Interior</span> Series</h3>
                    </div>
                    <a href="#">View our works</a>
                </div>
                {/* selected works cards */}
                <div>
                    <div className="mb-5">
                        <img className="w-full" src="../src/assets/Container.png" alt="bgImg" />
                        <h4 className="text-[#1C1C19] font-bold text-xl">The Eko Monolith</h4>
                        <p className="text-[#1C1C19] font-light ">Lagos, Nigeria 2025</p>

                    </div>
                    <div>
                        <img className="w-full" src="../src/assets/Container.png" alt="bgImg" />
                        <h4>The Eko Monolith</h4>
                        <p>Lagos, Nigeria 2025</p>

                    </div>
                </div>
            </section>
        </>
    )
}