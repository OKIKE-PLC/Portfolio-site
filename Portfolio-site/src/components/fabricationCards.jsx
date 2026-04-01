import Compass from '../assets/Container.svg';

const cards = [
    {
        id: 1,
        image: Compass,
        header: "Lead Capture & Pre-qualification",
        text: "Identifying the right fit for the system",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 2,
        image: Compass,
        header: "Site Inspection",
        text: "Evaluating the ground and the goal",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 3,
        image: Compass,
        header: "Design Documentation",
        text: "Creating the Office Brain (Drawings & CGIs)",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]",
    },
    {
        id: 4,
        image: Compass,
        header: "Quotation & Contract",
        text: "Legal and financial alignment",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 5,
        image: Compass,
        header: "Mobilization",
        text: "Moving the machinery and materials to the field",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 6,
        image: Compass,
        header: "Procurement",
        text: "Sourcing quality components for the build.",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 7,
        image: Compass,
        header: "Execution & Supervision",
        text: "Daily safety checks and progress logs",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 8,
        image: Compass,
        header: "Quality Control (QC) Routine",
        text: "Verifying workmanship at every milestone",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
    {
        id: 9,
        image: Compass,
        header: "Handover & Aftercare",
        text: "Final inspection and long-term support",
        color: "bg-[#907067]",
        background: "bg-[#E5E2DD]"
    },
]

export default function FabCards() {
    return (
        <section className='flex flex-col md:flex-row gap-5 md:flex-wrap justify-start items-start w-full'>
            {cards.map((card) => (
                <div key={card.id} className={`card ${card.background} w-full md:w-1/5 flex flex-col justify-center items-start gap-5` } style={{padding: "1rem "}}>
                    <div className="img w-15 h-15 border rounded-full border-[#907067] flex justify-center  items-center">
                        <img src={card.image} alt={card.header} />
                    </div>
                    <h4 className="text-xl md:text-xl font-bold">{card.header}</h4>
                    <p className="text-[#1C1C19] font-light">{card.text}</p>
                </div>
            ))}
        </section>
    )
}