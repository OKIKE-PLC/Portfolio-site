import bgImg2 from '../assets/Container.png';
import { Link } from 'react-router-dom';
import Residential from './residential';

const projects = [
        {
        id: 1,
        image: bgImg2,
        category: 'MARITIME INFRASTRUCTURE / 2023',
        title: 'Lagos Waterfront Pavilion',
        size: 'large',    // 2x2 grid area
        color: 'bg-blue-900'
    },
    {
        id: 2,
        image: bgImg2,
        category: 'RESIDENTIAL FABRICATION / 2022',
        title: 'Federal Capital Residency',
        size: 'tall',     // 1x2 grid area
        color: 'bg-stone-800'
    },
    {
        id: 3,
        image: bgImg2,
        category: 'RESTORATION & LEGACY / 2024',
        title: 'Heritage Conservation Initiative',
        size: 'wide',     // 2x1 grid area
        color: 'bg-amber-900'
    },
    {
        id: 4,
        image: bgImg2,
        category: 'COMMERCIAL MOBILITY / 2024',
        title: 'Modern Office Complex',
        size: 'small',    // 1x1 grid area
        color: 'bg-slate-800'
    }
];

export default function Portfolio() {
    return (
        <section style={{padding: "1.5rem"}}>
            <div className='flex flex-col justify-center items-start gap-3'>
                <span className='text-orange-600 font-light'>- EXECLLENCE IN FABRICATION</span>
                <h1 className='font-bold text-xl md:text-3xl' >Our Fabrication Legacy</h1>
                <p>Exploring the intersection of raw material and digital precision. Each monolith is a testament to our commitment to structural permanence and aesthetic clarity.</p>
            </div>
            <div className=" mx-auto p-8 bg-[#faf8f5]">

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 "  >
            {projects.map((project, index) => (
            <div 
                key={project.id}
                className={`${index % 2 === 1 ? 'mt-12' : ''} h-3/4`}  // Offset right column
            >

                <div className={`relative w-full ${project.aspect} rounded-lg overflow-hidden mb-3`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                />
                </div>
                
                
                <p className="text-xs font-medium tracking-wider text-orange-500 uppercase mb-1">
                {project.category}
                </p>

                <Link to="/residential">View More</Link>
                
                
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {project.title}
                </h3>
            </div>
            ))}
        </div>
    </div>

        </section>
    )
}