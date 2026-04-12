import bgImg2 from '../assets/Container.png';
import Laurel from '../assets/Laurel-3.png';

export default function About() {
    return (
        <section className='flex flex-col justify-center items-center gap-2' style={{padding: ' 0rem 1rem '}}>
            {/* header section */}
            <header className="hero flex flex-col justify-end items-start h-screen w-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${bgImg2}')`, padding: "0 1rem"} }>
                <div className='flex flex-col justify-end items-start gap-2 z-10' style={{padding: "7rem 0"} }>
                    <p className='font-semibold text-orange-600 text-3xl'>About Us</p>
                    <h1 className='font-bold text-zinc-200 text-4xl md:text-5xl'>Fabrication Excellence</h1>
                </div>
            </header>

            <main className=''>
                {/* about us */}
                <section className='flex flex-col md:flex-row justify-center items-start gap-2.5' style={{padding: ' 3.5rem 0rem '}}>
                  
                        <img src={Laurel} alt="About Us" className='w-full md:w-1/2 object-cover rounded-xl shadow-lg' style={{height: '30rem'}} />
                    
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-4xl font-bold text-orange-600'>About Us</h2>
                        <p className='text-xl font-light leading-relaxed'>We are a fabrication company that specializes in building high-quality structures for our clients. We have been in business for over 10 years and have a proven track record of success. We are committed to providing our clients with the best possible service and products.</p>
                    </div>
                </section>

                {/* why choose us */}
                <section className='flex flex-col md:flex-row justify-left items-start gap-2.5' style={{padding: ' 3.5rem 0rem '}}>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-4xl font-bold text-orange-600'>Why Choose Us</h2>
                        <p className='text-xl font-light leading-relaxed'>We are a fabrication company that specializes in building high-quality structures for our clients. We have been in business for over 10 years and have a proven track record of success. We are committed to providing our clients with the best possible service and products.</p>
                    </div>
                    {/* <img src={Laurel} alt="About Us" className='w-full md:w-1/2 object-cover rounded-xl shadow-lg' style={{height: '30rem'}} /> */}
                </section>
            </main>
        </section>
    )
}