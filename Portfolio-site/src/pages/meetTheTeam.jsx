import { motion } from 'framer-motion';
import Partner from '../components/partner';
// import bgImg2 from "../assets/Container.png";
import Laurel from '../assets/Laurel-3.png';
import Sha_sha from "../assets/Sha-Sha.png";

export default function MeetTheTeam() {
    return (
            <section>
                {/* <motion.header
                    className="hero flex flex-col justify-end items-start h-screen w-screen bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url('${bgImg2}')`, padding: "0 1rem" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="flex flex-col justify-end items-start gap-2 z-10"
                        style={{ padding: "7rem 0" }}
                        >
                        <p className="font-semibold text-orange-600 text-3xl">Meet The Team</p>
                        <h1 className="font-bold text-zinc-200 text-4xl md:text-5xl">
                            The Visionaries Behind the Structure
                        </h1>
                    </div>
                </motion.header> */}

                {/* visionaries */}
                <section className='flex flex-col justify-center items-center bg-stone-900 text-zinc-200 gap-2' style={{ padding: "1rem" }}>
                    <div className='flex flex-col justify-center self-start gap-2'>
                        <p className='text-orange-600'>Visionaries</p>
                        <h2 className='text-4xl font-bold'>The Visionaries Behind the Structure</h2>
                    </div>
                    {/* visionary imgs */}
                    <div className='flex flex-col  md:flex-row  justify-between items-center gap-2 '>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src={Sha_sha} alt="Ceo/Founder of Okike Plc" style={{ height: '30rem' }} />
                            <div>
                                <h2 className='text-2xl font-bold text-orange-600'>Mr Shalom</h2>
                                <p className='text-xl  text-zinc-200  font-light'>Ceo/Founder</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src={Laurel} alt="Ceo/Founder of Okike Plc" style={{ height: '30rem' }} />
                            <div>
                                <h2 className='text-2xl font-bold text-orange-600'>Mrs Laurel</h2>
                                <p className='text-xl text-zinc-200  font-light'>Lead Architect</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*creative engines  */}
                {/* <section className='flex flex-col justify-center items-center gap-2' style={{ padding: "1rem" }}> 
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center self-start gap-2'>
                            <p className='text-orange-600'>Creative Engine</p>
                            <h2 className='text-4xl font-bold'>The Visionaries Behind the Structure</h2>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src={Sha_sha} alt="Ceo/Founder of Okike Plc" style={{ height: '30rem' }} />
                                <div>
                                    <h2 className='text-2xl font-bold text-orange-600'>Mr Shalom</h2>
                                    <p className='text-xl    font-light'>Ceo/Founder</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src={Sha_sha} alt="Ceo/Founder of Okike Plc" style={{ height: '30rem' }} />
                                <div>
                                    <h2 className='text-2xl font-bold text-orange-600'>Mr Shalom</h2>
                                    <p className='text-xl    font-light'>Ceo/Founder</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src={Sha_sha} alt="Ceo/Founder of Okike Plc" style={{ height: '30rem' }} />
                                <div>
                                    <h2 className='text-2xl font-bold text-orange-600'>Mr Shalom</h2>
                                    <p className='text-xl    font-light'>Ceo/Founder</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src={Sha_sha} alt="Ceo/Founder of Okike Plc" style={{ height: '30rem' }} />
                                <div>
                                    <h2 className='text-2xl font-bold text-orange-600'>Mr Shalom</h2>
                                    <p className='text-xl    font-light'>Ceo/Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Partner />
            </section>

    )
}