import bgImg from '../assets/AMFF93_1.JPG'

import './hero.css';

export default function Hero() {
    return (
        <section className="hero flex  flex-col justify-center items-start h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${bgImg}')`, padding: "0 .5rem"} }>
            <div className="content flex  flex-col justify-center items-start text-left">
                <h1 className='text-4xl max-w-sm leading-10'>Redefining Architectural Fabrication.</h1>
                <p>Bespoke elements and construction excellence in Nigeria. We blend structural integrity with aesthetic precision to create enduring landmarks.
                </p>
                <div className="cta flex flex-col justify-center items-center gap-5">
                    <a href="#" className='bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-800 transition duration-300'  style={{padding: "12px 25px", width: ""}}>View Projects</a>
                    <a href="#" className='text-stone-200 rounded-xl border-stone-100 border-2 hover:bg-orange-800 transition duration-300' style={{padding: "12px 32px"}}>Contact Us</a>
                </div>
            </div>
            
        </section>
    )
}