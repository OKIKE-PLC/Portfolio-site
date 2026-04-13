import './hero.css';
import bgImg from '../assets/AMFF93_1.JPG';
import bgImg2 from '../assets/Container.png';
import Compass from '../assets/Container.svg';
import Laurel from '../assets/Laurel-3.png';
// import Consultation from '../assets/consultation.png'
import { Link } from 'react-router-dom';
import Partner from '../components/partner';
import { motion } from "framer-motion";

export default function Home() {
    return (
        
        <>
           
            {/* hero section */}
            <section className="hero flex flex-col justify-center items-start md:items-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${bgImg}')`, padding: "0 1rem"} }>
                {/* hero text div */}
            <motion.header className="content flex  flex-col justify-center items-start md:items-center text-left  md:text-center" 
                    initial={{ opacity: 0,
                               x: -100
                             }}
                   animate={{ opacity: 1,
                              x:0
                             }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 70,  
                        damping: 20,
                        duration: 0.8
                            }}
                    >
                   
                <motion.h1 
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.3 }}
                    className=' text-4xl md:text-6xl max-w-sm md:max-w-6xl  leading-10 md:leading-15 font-semibold font-chubbo  m-5'> Design . Build . Renovate</motion.h1>
                <p className="md:text-2xl max-w-sm md:max-w-3xl text-orange-600">Architecture Goes Beyond Beauty
                </p>

                {/* hero cta btns */}
                <div className="cta flex flex-col md:flex-row justify-center w-full items-center gap-3">
                    {/* view projects cta btn */}
                    <Link to="/portfolio" className='bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300 md:w-1/2'  style={{padding: "12px 25px", width: "100%"}}>View Projects</Link>
                    {/* contact us btn */}
                    <Link to="/contact" className='text-stone-200 rounded-xl border-stone-100 border-2 hover:bg-orange-800 transition duration-300 md:w-1/2' style={{padding: "12px 32px", width: "100%"}}>Contact Us</Link>
                </div>
            </motion.header>
            
            </section>

            {/* services we offer section */}

            <motion.section 
                className="cards flex flex-col gap-5 service"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className=" flex flex-col text-left">
                    <p className="text-xl text-orange-600">CORE SERVICES</p>
                    <h2 className="text-[1.2rem] md:text-4xl">Machined to Perfection</h2>
                </div>
                {/* service card  */}
                <div className=" rounded-xl  grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 justify-center items-center gap-4">
                    {/* individual cards */}
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Design and Planning</h4>
                        <p className="text-[#1C1C19] font-light">The "Brain" of the project. We provide comprehensive technical blueprints including:
                            <ul className="list-disc list-inside">
                                <li>Space Planning and Elevations</li>
                                <li>Landscape and Interior Archirectural Designs</li>
                                <li>(Mechanical, Elecreical, Plumbing)MEP and Structural Drawinds</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">02</span>
                        <h4 className="text-2xl font-bold">Interior Millwork and Fabrication</h4>
                        <p className="text-[#1C1C19] font-light">Where design meets the "Hands". Custom Craftmanship for environments that feel genuinely yours:
                            <ul className="list-disc list-inside">
                                <li>Bespoke Interior Doors and Cabinetry</li>
                                <li>Custom Dining Sets and Couches.</li>
                                <li>Hign-end Woodwork and Finishings</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">03</span>
                        <h4 className="text-2xl font-bold">Building Construction and Project Management</h4>
                        <p className="text-[#1C1C19] font-light">The "Machinery" in motion. We manage the entire life cycle of a build from start to finish:
                            <ul className="list-disc list-inside">
                                <li>Residential and Commericial Development.</li>
                                <li>Onsite Operational Supervision.</li>
                                <li>Rigorous Project Timeline and Milestone Tracking</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">04</span>
                        <h4 className="text-2xl font-bold">Pain Production and Services</h4>
                        <p className="text-[#1C1C19] font-light">The "Skin" of the structure. We produce and apply our property paint line:
                            <ul className="list-disc list-inside">
                                <li>Professional Painting Services</li>
                                <li>Custom "Handmade" paint production</li>
                                <li>Surface treatment and restoration</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                    <article className="card bg-[#E5E2DD] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">05</span>
                        <h4 className="text-2xl font-bold">Deep Cleaning</h4>
                        <p className="text-[#1C1C19] font-light">Construction is tough and messy. A home feels complete only after through cleanup removes all dust and debris, transforming the space from a construction site into a Santuary. We handle this final step ourselves, ensuring the chaos is cleared so the design can breathe.
                            
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" />
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                </div>
                
            </motion.section>

            {/* best projects section */}
            <motion.section 
                className="projects bg-[#edeae5] flex flex-col gap-5 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
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

                
                    
            </motion.section>

            {/* Workprocess
            <section className="process flex flex-col  justify-center items-center gap-6" style={{margin: "3rem 0"}}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{margin: "0 0 3rem 0"}}>The Blueprint</h3>
                        <div className="w-process grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 justify-center items-center w-full">
                            <div className="flex flex-col justify-center items-start w-full" style={{margin: "0 0 1.5rem 0", padding: "0 1rem"}}>
                                <div className="bg-orange-600 w-1/4 rounded-sm" style={{padding: "1.5rem", margin: "0 0 1.5rem 0"}}>
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
            </section> */}

            {/* Our legacy section */}
            <motion.section 
                className="legacy flex flex-col lg:flex-row justify-center items-center gap-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <img src={Laurel} alt="Mrs Laurel" className="lg:w-1/2"/>
                <div className="flex flex-col justify-center gap-6 items-start" style={{padding: "0 .6rem"}}>
                    <span className="font-semibold text-xl text-orange-600">Our Legacy</span>
                    <h4 className="font-bold text-3xl md:4xl lg:6xl">Company Profile</h4>
                    <p className="text-xl md:text-2xl">OKIKE PLC is a Port Harcourt based design build firm specializing in the creation of high functioning and commercial spaces. Our team is defined as a group of professionals intentionally pit together to form a system.</p>
                    <p className="text-xl md:text-2xl">We are proud of the trust earned through our commitment to transperancy, discipline, and the mastery of the built environment</p>

                    {/* <div className="flex flex-col lg:flex-row gap-6 w-full">
                        <div className="w-1/2">
                            <h5 className="text-3xl font-bold">500+</h5>
                            <p className="text-xl">Projects Completed</p>
                        </div>
                        <div className="w-1/2">
                            <h5 className="text-3xl font-bold">500+</h5>
                            <p className="text-xl">Projects Completed</p>
                        </div>
                    </div> */}
                </div>
                
            </motion.section>

           

            <Partner />
            
            
            
            

        </>
    )
}