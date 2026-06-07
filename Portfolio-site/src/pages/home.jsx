import './hero.css';
import bgImg from '../assets/AMFF93_1.JPG';
import BeachHouse from '../assets/Beach_house_3D-interior.jpg';
import rooftop from '../assets/rooftop-mural.JPG';
import Compass from '../assets/Container.svg';
import Laurel from '../assets/Laurel-3.png';
import { Link } from 'react-router-dom';
import Partner from '../components/partner';
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { LuBuilding2 } from "react-icons/lu";
import { GrPaint } from "react-icons/gr";
import { MdCleaningServices } from "react-icons/md";
import { HiSquare3Stack3D } from "react-icons/hi2";
import FabCards from '../components/fabricationCards';

export default function Home() {
    return (  
        <>
            {/* hero section */}
            <header className="hero flex flex-col justify-center items-start md:items-center h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${bgImg}')`, padding: "0 1rem" }}>
                {/* hero text div */}
            <motion.section className="content marginAuto flex  flex-col justify-center items-start gap-10 md:items-center text-center  md:text-center"
                    initial={{ opacity: 0,
                               x: -100
                             }}
                   animate={{ opacity: 1,
                              x:0
                             }}
                    transition={{ 
                        // type: "spring", 
                        stiffness: 70,  
                        damping: 20,
                        duration: 0.8
                            }}
                    >
                        <p className="flex justify-center items-center text-orange-600 text-xl font-semibold sm:text-center  ">Interior Design . 3D Visualization . Construction</p>
                   
                <motion.h1 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.4, stiffness: 70,  damping: 20, duration: 0.8 }}
                    className=' text-4xl md:text-6xl max-w-sm md:max-w-6xl  leading-10 md:leading-15 font-semibold font-chubbo  m-5'>Turning Spaces into Stories</motion.h1>
                {/* <p className="md:text-2xl max-w-sm md:max-w-3xl text-orange-600 italic">Interior Design . 3D Visualization . Construction
                </p> */}

                {/* hero cta btns */}
                <div className="cta flex flex-col md:flex-row justify-center w-full md:w-3/4 items-center gap-3">
                    {/* view projects cta btn */}
                    <Link to="/portfolio" className='bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300 md:w-1/2'  style={{padding: "12px 25px", width: "100%"}}>View Projects</Link>
                    {/* contact us btn */}
                    <Link to="/contact" className='rounded-xl bg-transparent text-orange-600 border-orange-600 border-2 hover:bg-orange-600 hover:text-stone-100 transition duration-300 md:w-1/2' style={{padding: "12px 32px", width: "100%"}}>Contact Us</Link>
                </div>
                        {/* socials */}
           
                {/* <div className="socials w-full md:w-1/2 flex flex-row justify-between items-center gap-2" style={{padding: "1rem"}}>
                    <a className='hover:text-orange-600 transition duration-150 text-2xl' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/okike-plc-8a27043b6"><FaLinkedinIn /></a>
                    <a className='hover:text-orange-600 transition duration-150 text-2xl' target='_blank' rel='noopener noreferrer' href="https://x.com/Okikeplc"><BsTwitterX /></a>
                    <a className='hover:text-orange-600 transition duration-150 text-2xl' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/okikestudio"><FaInstagram /></a>
                    <a className='hover:text-orange-600 transition duration-150 text-2xl' target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/share/1GsSgNwiPk/"><FaFacebookF /></a>
                </div> */}
            </motion.section>
                    
            
            
            </header>

            {/* services we offer section */}

            <motion.section 
                className="cards flex flex-col gap-5 service marginAuto"
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

                    {/* architectural design and planning */}
                    <article className="card bg-[#1C1C19] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">01</span>
                        <h4 className="text-2xl font-bold">Architectural Design and Planning</h4>
                        <p className="text-[#E5E2DD] font-light">The "Brain" of the project. We provide comprehensive technical blueprints including:
                            <ul className="list-disc list-inside">
                                <li>Space Planning and Elevations</li>
                                <li>Landscape and Interior Architectural Designs</li>
                                <li>(Mechanical, Electrical, Plumbing)MEP and Structural Drawings</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <img src={Compass} alt="compass" loading="lazy" />
                        
                        </div>
                        
                    </article>

                    {/* interior millwork and fabrication */}
                    <article className="card bg-[#1C1C19] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">02</span>
                        <h4 className="text-2xl font-bold">Interior Millwork and Fabrication</h4>
                        <p className="text-[#E5E2DD] font-light">Where design meets the "Hands". Custom Craftmanship for environments that feel genuinely yours:
                            <ul className="list-disc list-inside">
                                <li>Bespoke Interior Doors and Cabinetry</li>
                                <li>Custom Dining Sets and Couches.</li>
                                <li>High-end Woodwork and Finishings</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <HiWrenchScrewdriver  className='text-orange-600'/>
                        
                        </div>
                        
                    </article>

                    {/* building construction and project management */}
                    <article className="card bg-[#1C1C19] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">03</span>
                        <h4 className="text-2xl font-bold">Building Construction and Project Management</h4>
                        <p className="text-[#E5E2DD] font-light">The "Machinery" in motion. We manage the entire life cycle of a build from start to finish:
                            <ul className="list-disc list-inside">
                                <li>Residential and Commercial Development.</li>
                                <li>Onsite Operational Supervision.</li>
                                <li>Rigorous Project Timeline and Milestone Tracking</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <LuBuilding2  className='text-orange-600'/>
                        {/* <Compass /> */}
                        </div>
                        
                    </article>

                    {/* paint production and services */}
                    <article className="card bg-[#1C1C19] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">04</span>
                        <h4 className="text-2xl font-bold">Paint Production and Services</h4>
                        <p className="text-[#E5E2DD] font-light">The "Skin" of the structure. We produce and apply our property paint line:
                            <ul className="list-disc list-inside">
                                <li>Professional Painting Services</li>
                                <li>Custom "Handmade" paint production</li>
                                <li>Surface treatment and restoration</li>
                            </ul>
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <GrPaint className='text-orange-600'/>
                        </div>
                        
                    </article>
                    {/* deep cleaning */}
                    <article className="card bg-[#1C1C19] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">05</span>
                        <h4 className="text-2xl font-bold">Deep Cleaning</h4>
                        <p className="text-[#E5E2DD] font-light">Construction is tough and messy. A home feels complete only after thorough cleanup removes all dust and debris, transforming the space from a construction site into a Sanctuary. We handle this final step ourselves, ensuring the chaos is cleared so the design can breathe.
                            
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <MdCleaningServices className='text-orange-600'/>
                        </div>
                        
                    </article>
                    {/* 3d visualization */}
                    <article className="card bg-[#1C1C19] flex flex-col justify-center items-start  gap-2">
                        <span className="text-orange-600  text-2xl font-bold">06</span>
                        <h4 className="text-2xl font-bold">3D Visualization</h4>
                        <p className="text-[#E5E2DD] font-light">We bring designs to life through photorealistic 3D renderings, allowing clients to visualize their future spaces with stunning clarity and detail.
                        </p>
                        <div className="img rounded-full border border-[#1C1C19]">
                            <HiSquare3Stack3D   className='text-orange-600'/>
                        {/* <Compass /> */}
                        </div>
                        
                    </article>
                </div>
                
            </motion.section>

            {/* best projects section */}
            <motion.section 
                className="projects bg-zinc-200 flex flex-col gap-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
                {/* selected works text */}
                <div className=''>
                        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end marginAuto">
                        <div className="flex flex-col justify-center items-baseline">
                            <p className="text-orange-600 text-sm md:text-xl">Selected Works</p>
                            <h3 className="text-2xl text-[#1C1C19]  md:text-4xl font-semibold">The <span className="text-orange-600  italic">Interior</span> Series</h3>
                        </div>
                        <Link className='text-[#1C1C19] text-sm md:text-xl  font-semibold hover:text-orange-600 hover:text-2xl transition-all duration-300' to="/portfolio">View our works</Link>
                    </div>
                    {/* selected works cards */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 marginAuto" style={{padding: "1.5rem 0"}}>
                        <div className="mb-5 w-full rounded-xl" style={{margin: "1.5rem 0", height: "30rem"}}>
                            <img className="w-full rounded-xl" src={BeachHouse} alt="Beach house 3D interior" loading="lazy"/>
                            <h4 className="text-orange-600 font-bold text-xl">Beach House 3D Visualization</h4>
                            <p className="text-[#1C1C19] font-light ">Lagos, Nigeria 2025</p>

                        </div>
                        <div className="mb-5 w-full rounded-xl" style={{margin: "1.5rem 0", height: "30rem"}}>
                            <img className="w-full rounded-xl" src={rooftop} alt="rooftop mural" loading="lazy" />
                            <h4 className="text-orange-600 font-bold text-xl">Rooftop Mural</h4>
                            <p className="text-[#1C1C19] font-light ">Lagos, Nigeria 2025</p>
                        </div>
                    </div>  
                </div>
            </motion.section>
                            {/* process */}
                <motion.section 
                    id='process' 
                    className='flex flex-col w-full justify-center items-start gap-2.5 max-w-[1440px]'
                    style={{padding: ' 4rem 1rem', margin: "0 auto"}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h3 className='text-orange-600 text-xl font-bold' style={{marginBottom: "1rem"}}>Fabrication Process</h3>
                     <FabCards />
                </motion.section>
           
            {/* Our legacy section */}
            <motion.section 
                className="legacy"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className=" flex flex-col lg:flex-row justify-center items-center gap-5 max-w-[1440px]" style={{margin: "0 auto"}}>
                    <img src={Laurel} alt="Mrs Laurel" className="lg:w-1/2 rounded-md" loading="lazy" />
                <div className="flex flex-col justify-center gap-6 items-start" style={{padding: "0 .6rem"}}>
                    <span className="font-semibold text-xl text-orange-600">Our Legacy</span>
                    <h4 className="font-bold text-3xl md:4xl lg:6xl">Company Profile</h4>
                    <p className="text-xl md:text-2xl">OKIKE PLC is a Port Harcourt based design build firm specializing in the creation of high functioning and commercial spaces. Our team is defined as a group of professionals intentionally put together to form a system.</p>
                    <p className="text-xl md:text-2xl">We are proud of the trust earned through our commitment to transparency, discipline, and the mastery of the built environment</p>
                </div>
                </div>
                
            </motion.section>
            <Partner />
        </>
    )
}