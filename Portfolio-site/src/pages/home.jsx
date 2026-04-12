import './hero.css';
import bgImg from '../assets/AMFF93_1.JPG';
import bgImg2 from '../assets/Container.png';
import Compass from '../assets/Container.svg';
import Laurel from '../assets/Laurel-3.png';
import Consultation from '../assets/consultation.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        
            {/* hero section */}
            <section className="hero flex flex-col justify-center items-start md:items-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${bgImg}')`, padding: "0 1rem"} }>
                {/* hero text div */}
            <header className="content flex  flex-col justify-center items-start md:items-center text-left  md:text-center">
                <h1 className='text-4xl md:text-6xl max-w-sm md:max-w-6xl  leading-10 md:leading-15 font-semibold m-5'>Redefining Architectural Fabrication.</h1>
                <p className="md:text-2xl max-w-sm md:max-w-3xl">Bespoke elements and construction excellence in Nigeria. We blend structural integrity with aesthetic precision to create enduring landmarks.
                </p>

                {/* hero cta btns */}
                <div className="cta flex flex-col md:flex-row justify-center w-full items-center gap-3">
                    {/* view projects cta btn */}
                    <Link to="/portfolio" className='bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300 md:w-1/2'  style={{padding: "12px 25px", width: "100%"}}>View Projects</Link>
                    {/* contact us btn */}
                    <Link to="/contact" className='text-stone-200 rounded-xl border-stone-100 border-2 hover:bg-orange-800 transition duration-300 md:w-1/2' style={{padding: "12px 32px", width: "100%"}}>Contact Us</Link>
                </div>
            </header>
            
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
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-[#907067]  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Custom metalwork, facade systems, and ornamental structures
                        designed with precision engineering.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
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
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5" style={{padding: "1.5rem 0"}}>
                    <div className="mb-5 w-full" style={{margin: "1.5rem 0"}}>
                        <img className="w-full" src={bgImg2} alt="bgImg" />
                        <h4 className="text-[#1C1C19] font-bold text-xl">The Eko Monolith</h4>
                        <p className="text-[#1C1C19] font-light ">Lagos, Nigeria 2025</p>

                    </div>
                    <div className="mb-5 w-full" style={{margin: "1.5rem 0"}}>
                        <img className="w-full" src={bgImg2} alt="bgImg" />
                        <h4 className="text-[#1C1C19] font-bold text-xl">The Eko Monolith</h4>
                        <p className="text-[#1C1C19] font-light ">Lagos, Nigeria 2025</p>
                    </div>
                </div>

                
                    
            </section>

            {/* Workprocess */}
            <section className="process flex flex-col  justify-center items-center gap-6" style={{margin: "3rem 0"}}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{margin: "0 0 3rem 0"}}>The Blueprint</h3>
                        <div className="w-process grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 justify-center items-center w-full">
                            <div className="flex flex-col justify-center items-start w-full" style={{margin: "0 0 1.5rem 0", padding: "0 1rem"}}>
                                <div className="bg-[#907067] w-1/4 rounded-sm" style={{padding: "1.5rem", margin: "0 0 1.5rem 0"}}>
                                    <img src={Consultation} />
                                </div>
                                
                                <div className="process-txt">
                                    <h4 className="font-bold text-xl">Consultation</h4>
                                    <p className="font-light">Understanding your architectural vision and site requirements.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start w-full" style={{margin: "0 0 1.5rem 0", padding: "0 1rem"}}>
                                <div className="bg-[#907067] w-1/4 rounded-sm" style={{padding: "1.5rem", margin: "0 0 1.5rem 0"}}>
                                    <img src={Consultation} />
                                </div>
                                
                                <div className="process-txt">
                                    <h4 className="font-bold text-xl">Consultation</h4>
                                    <p className="font-light">Understanding your architectural vision and site requirements.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start w-full" style={{margin: "0 0 1.5rem 0", padding: "0 1rem"}}>
                                <div className="bg-[#907067] w-1/4 rounded-sm" style={{padding: "1.5rem", margin: "0 0 1.5rem 0"}}>
                                    <img src={Consultation} />
                                </div>
                                
                                <div className="process-txt">
                                    <h4 className="font-bold text-xl">Consultation</h4>
                                    <p className="font-light">Understanding your architectural vision and site requirements.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start w-full" style={{margin: "0 0 1.5rem 0", padding: "0 1rem"}}>
                                <div className="bg-[#907067] w-1/4 rounded-sm" style={{padding: "1.5rem", margin: "0 0 1.5rem 0"}}>
                                    <img src={Consultation} />
                                </div>
                                
                                <div className="process-txt">
                                    <h4 className="font-bold text-xl">Consultation</h4>
                                    <p className="font-light">Understanding your architectural vision and site requirements.</p>
                                </div>
                            </div>
                        </div>
            </section>

            {/* Our legacy section */}
            <section className="legacy flex flex-col lg:flex-row gap-5">
                <img src={Laurel} alt="Mrs Laurel" className="lg:w-1/2"/>
                <div className="flex flex-col justify-center gap-6 items-start" style={{padding: "0 .6rem"}}>
                    <span className="font-light text-orange-600">Our Legacy</span>
                    <h4 className="font-bold text-3xl md:4xl lg:6xl">Forging Tomorrow Since 1999.</h4>
                    <p className="text-xl md:text-2xl">OKIKE PLC emerged from a singular vision: to bridge the gap between architectural imagination and structural reality. We are more than fabricators; we are partners in the construction of Nigeria's future skyline.</p>
                    <p className="text-xl md:text-2xl">Every bolt we tighten and every beam we forge carries the weight of our commitment to excellence. Our facility in Lagos serves as a laboratory of innovation where raw materials are transformed into iconic elements.</p>

                    <div className="flex flex-col lg:flex-row gap-6 w-full">
                        <div className="w-1/2">
                            <h5 className="text-3xl font-bold">500+</h5>
                            <p className="text-xl">Projects Completed</p>
                        </div>
                        <div className="w-1/2">
                            <h5 className="text-3xl font-bold">500+</h5>
                            <p className="text-xl">Projects Completed</p>
                        </div>
                    </div>
                </div>
                
            </section>

            <section className="bg-orange-600 text-zinc-100 flex flex-col justify-center items-center text-center gap-5" style={{padding: "3rem",

            }}>
                <h3 className="font-bold text-2xl md:4xl lg:6xl">Ready to Build Your Legacy?</h3>
                <a href="#" className="bg-[#1C1C19] rounded-xl" style={{padding: "1rem"}}>Partener with Us</a>
            </section>

            
            
            
            

        </>
    )
}