import { motion } from "framer-motion";
import {
  LuUserSearch,
  LuMapPinCheck,
  LuFileText,
  LuSignature,
  LuTruck,
  LuShoppingCart,
  LuHardHat,
  LuClipboardCheck,
  LuKey
} from "react-icons/lu";

const cards = [
  {
    id: 1,
    icon: LuUserSearch,
    subtitle: "THE INITIATION",
    header: "Lead Capture & Pre-qualification",
    text: "Identifying the right fit for the system",
    background: "bg-[#1C1C19]",
  },
  {
    id: 2,
    icon: LuMapPinCheck,
    subtitle: "THE GROUNDWORK",
    header: "Site Inspection",
    text: "Evaluating the ground and the goal",
    background: "bg-[#1C1C19]",
  },
  {
    id: 3,
    icon: LuFileText,
    subtitle: "THE BLUEPRINT",
    header: "Design Documentation",
    text: "Creating the Office Brain (Drawings & CGIs)",
    background: "bg-[#1C1C19]",
  },
  {
    id: 4,
    icon: LuSignature,
    subtitle: "THE AGREEMENT",
    header: "Quotation & Contract",
    text: "Legal and financial alignment",
    background: "bg-[#1C1C19]",
  },
  {
    id: 5,
    icon: LuTruck,
    subtitle: "THE DEPLOYMENT",
    header: "Mobilization",
    text: "Moving the machinery and materials to the field",
    background: "bg-[#1C1C19]",
  },
  {
    id: 6,
    icon: LuShoppingCart,
    subtitle: "THE SOURCING",
    header: "Procurement",
    text: "Sourcing quality components for the build.",
    background: "bg-[#1C1C19]",
  },
  {
    id: 7,
    icon: LuHardHat,
    subtitle: "THE BUILD",
    header: "Execution & Supervision",
    text: "Daily safety checks and progress logs",
    background: "bg-[#1C1C19]",
  },
  {
    id: 8,
    icon: LuClipboardCheck,
    subtitle: "THE ASSURANCE",
    header: "Quality Control (QC) Routine",
    text: "Verifying workmanship at every milestone",
    background: "bg-[#1C1C19]",
  },
  {
    id: 9,
    icon: LuKey,
    subtitle: "THE LEGACY",
    header: "Handover & Aftercare",
    text: "Final inspection and long-term support",
    background: "bg-[#1C1C19]",
  },
];

export default function FabCards() {
  return (
    <section 
      className="flex md:flex-row flex-col flex-wrap justify-center md:items-stretch items-center gap-6 w-full"
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          className={`border border-zinc-800 ${card.background} md:w-[360px] w-full flex flex-col justify-start items-start rounded-xl hover:border-zinc-600 transition-colors duration-300`}
          style={{ padding: "2.5rem 2rem" }}
        >
          {/* Top Row: Small orange number and Large white number with icon */}
          <div className="flex justify-between items-start w-full mb-8">
            <span className="text-orange-600 text-xs tracking-[0.4em] font-semibold mt-2">
              0 {card.id}
            </span>
            <div className="relative flex items-center justify-center">
              <span className="text-7xl opacity-5 font-chubbo font-light text-zinc-400 leading-none tracking-tighter">
                0{card.id}
              </span>
              <div className="absolute  hover:text-orange-600 md:right-[-8px] right-[14px] bottom-[4px] text-zinc-300">
                <card.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <h5 className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold mb-3">
            {card.subtitle}
          </h5>

          {/* Header */}
          <h4 className="text-2xl font-bold text-white mb-4 leading-snug">
            {card.header}
          </h4>

          {/* Paragraph */}
          <p className="text-zinc-400 font-light text-sm leading-relaxed">
            {card.text}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
