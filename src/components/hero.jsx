import bgImg from '../assets/AMFF93_1.JPG'

import './hero.css';

export default function Hero() {
    return (
        <section className="hero flex  flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${bgImg}')`}}>
            <div className="content flex  flex-col justify-center items-center text-left  text-stone-300">
                <h1 className='text-4xl leading-10' style={{padding: ".5rem"}}>Redefining Architectural Fabrication.</h1>
                <div className="cta">
                    <a href="#">View Projects</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            
        </section>
    )
}