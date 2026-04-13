import Compass from "../assets/Container.svg";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: Compass,
    header: "Lead Capture & Pre-qualification",
    text: "Identifying the right fit for the system",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
  },
  {
    id: 2,
    image: Compass,
    header: "Site Inspection",
    text: "Evaluating the ground and the goal",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
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
    background: "bg-[#E5E2DD]",
  },
  {
    id: 5,
    image: Compass,
    header: "Mobilization",
    text: "Moving the machinery and materials to the field",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
  },
  {
    id: 6,
    image: Compass,
    header: "Procurement",
    text: "Sourcing quality components for the build.",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
  },
  {
    id: 7,
    image: Compass,
    header: "Execution & Supervision",
    text: "Daily safety checks and progress logs",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
  },
  {
    id: 8,
    image: Compass,
    header: "Quality Control (QC) Routine",
    text: "Verifying workmanship at every milestone",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
  },
  {
    id: 9,
    image: Compass,
    header: "Handover & Aftercare",
    text: "Final inspection and long-term support",
    color: "bg-[#907067]",
    background: "bg-[#E5E2DD]",
  },
];

export default function FabCards() {
  return (
    <motion.section 
      className="flex flex-row flex-wrap justify-center items-center gap-6 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          className={`card ${card.background} w-[300px] h-[320px] flex flex-col justify-start items-start gap-4 rounded-xl`}
          style={{ padding: "1.5rem" }}
        >
          <div className="img p-3 shrink-0 border rounded-full border-orange-600 flex justify-center items-center">
            <img src={card.image} alt={card.header} className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-orange-900 mt-2">
            {card.header}
          </h4>
          <p className="text-[#1C1C19] font-light">{card.text}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
