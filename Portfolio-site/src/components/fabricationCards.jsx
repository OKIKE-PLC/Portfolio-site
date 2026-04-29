import Compass from "../assets/Container.svg";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: Compass,
    header: "Lead Capture & Pre-qualification",
    text: "Identifying the right fit for the system",
    color: "#edeae5",
    background: "bg-[#1C1C19]",
  },
  {
    id: 2,
    image: Compass,
    header: "Site Inspection",
    text: "Evaluating the ground and the goal",
    color: "zinc-300",
    background: "bg-[#1C1C19]",
  },
  {
    id: 3,
    image: Compass,
    header: "Design Documentation",
    text: "Creating the Office Brain (Drawings & CGIs)",
    color: "#edeae5",
    background: "bg-[#1C1C19]",
  },
  {
    id: 4,
    image: Compass,
    header: "Quotation & Contract",
    text: "Legal and financial alignment",
    color: "",
    background: "bg-[#1C1C19]",

  },
  {
    id: 5,
    image: Compass,
    header: "Mobilization",
    text: "Moving the machinery and materials to the field",
    color: "",
    background: "bg-[#1C1C19]",
  },
  {
    id: 6,
    image: Compass,
    header: "Procurement",
    text: "Sourcing quality components for the build.",
    color: "",
    background: "bg-[#1C1C19]",
  },
  {
    id: 7,
    image: Compass,
    header: "Execution & Supervision",
    text: "Daily safety checks and progress logs",
    color: "",
    background: "bg-[#1C1C19]",
  },
  {
    id: 8,
    image: Compass,
    header: "Quality Control (QC) Routine",
    text: "Verifying workmanship at every milestone",
    color: "",
    background: "bg-[#1C1C19]",
  },
  {
    id: 9,
    image: Compass,
    header: "Handover & Aftercare",
    text: "Final inspection and long-term support",
    color: "",
    background: "bg-[#1C1C19]",
  },
];

export default function FabCards() {
  return (
    <motion.section 
      className="flex md:flex-row flex-col flex-wrap justify-center md:items-start items-center gap-6 w-full"
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
          className={`card ${card.background} md:w-[300px] md:h-[320px] w-full flex flex-col justify-start items-start gap-4 rounded-xl`}
          style={{ padding: "1.5rem" }}
        >
          <div className="img p-3 shrink-0 border rounded-full border-orange-600 flex justify-center items-center">
            <img src={card.image} alt={card.header} className="w-8 h-8" loading="lazy" />
          </div>
          <h4 className="text-xl font-bold text-orange-900 mt-2">
            {card.header}
          </h4>
          <p className="text-[#edeae5] font-light">{card.text}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
