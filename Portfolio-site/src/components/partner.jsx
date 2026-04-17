import { Link } from 'react-router-dom';

export default function Partner() {
    return (
        <section className="bg-orange-600 text-zinc-100 flex flex-col justify-center items-center text-center gap-5" style={{padding: "3rem",

            }}>
                <h3 className="font-bold text-2xl md:4xl lg:6xl">Ready to Build Your Legacy?</h3>
                <Link to="/contact" className="bg-[#1C1C19] rounded-xl" style={{padding: "1rem"}}>Partner with Us</Link>
            </section>
    )
}