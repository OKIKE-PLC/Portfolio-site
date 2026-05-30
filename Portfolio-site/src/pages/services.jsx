import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Partner from "../components/partner";
import FabCards from "../components/fabricationCards";
import WhatsAppButton from "../components/WhatsAppButton";

// Import images
import bgHero from "../assets/Container.png";
import architecturalPlanningImg from "../assets/architectural-planning.png";
import interiorMillworkImg from "../assets/interior-millwork.png";
import constructionSiteImg from "../assets/construction-site.png";
import paintServicesImg from "../assets/paint-services.png";
import cleaningServicesImg from "../assets/deep-cleaning.png";
import visualizationImg from "../assets/3d-visualization.png";

// Icons for each service
import { LuCompass, LuWrench, LuBuilding, LuPaintbrush, LuSparkles, LuBox } from "react-icons/lu";

const services = [
  {
    id: "01",
    title: "Architectural Design & Planning",
    subtitle: "THE BRAIN OF THE PROJECT",
    image: architecturalPlanningImg,
    icon: LuCompass,
    description: "We provide comprehensive technical blueprints that translate abstract visions into precise structural directives. Our team ensures design viability, aesthetic coherence, and spatial efficiency from day one.",
    details: [
      "Comprehensive Space Planning and Elevations",
      "Landscape & Interior Architectural Designs",
      "MEP (Mechanical, Electrical, Plumbing) & Structural Drawings",
      "Regulatory Approvals & Code Compliance documentation"
    ]
  },
  {
    id: "02",
    title: "Interior Millwork & Fabrication",
    subtitle: "THE HANDS OF THE CRAFT",
    image: interiorMillworkImg,
    icon: LuWrench,
    description: "Custom craftsmanship for environments that feel genuinely yours. We merge high-grade physical materials with digital precision to fabricate built-in and free-standing furniture tailored to the space.",
    details: [
      "Bespoke Interior & Exterior Doors",
      "Custom Cabinetry, Wardrobes & Kitchen Systems",
      "Tailor-made Dining Sets, Couches & Accent Furniture",
      "Premium Veneers, Metal detailing & Finishings"
    ]
  },
  {
    id: "03",
    title: "Building Construction & Project Management",
    subtitle: "THE MACHINERY IN MOTION",
    image: constructionSiteImg,
    icon: LuBuilding,
    description: "We manage the entire life cycle of a build from excavation to hand-off. Our structured execution framework removes reliance on luck, replacing it with rigid operational milestones and safety audits.",
    details: [
      "Residential & Commercial Structural Builds",
      "Onsite Operational Supervision & Material Management",
      "Rigorous Project Timeline & Milestone Tracking",
      "Subcontractor coordination & quality verification"
    ]
  },
  {
    id: "04",
    title: "Paint Production & Services",
    subtitle: "THE SKIN OF THE STRUCTURE",
    image: paintServicesImg,
    icon: LuPaintbrush,
    description: "A building's character is defined by its skin. We formulate and apply our proprietary luxury paint line to ensure exceptional weathering, color retention, and signature tactile finishes.",
    details: [
      "Premium Professional Painting Services",
      "Proprietary Custom-made paint production",
      "Surface treatment, waterproofing & wall restoration",
      "Texture coating & specialized decorative finishes"
    ]
  },
  {
    id: "05",
    title: "3D Visualization",
    subtitle: "THE WINDOW TO FUTURE REALITY",
    image: visualizationImg,
    icon: LuBox,
    description: "Experience your environment before a single brick is laid. Using state-of-the-art rendering engines, we simulate realistic lighting, materials, and scale so you can make informed design decisions.",
    details: [
      "High-fidelity Photorealistic 3D Renderings",
      "Interactive Virtual 360-degree Walkthroughs",
      "Exterior & Interior Lighting Simulations",
      "Material, texture & finish testing platforms"
    ]
  },
  {
    id: "06",
    title: "Deep Cleaning",
    subtitle: "THE SANCTUARY UNFOLDED",
    image: cleaningServicesImg,
    icon: LuSparkles,
    description: "Construction is inherently chaotic and messy. A project is only complete when the dust settles and is meticulously cleared away, letting the architecture breathe and the designed lines shine.",
    details: [
      "Post-Construction & Renovation Deep Cleaning",
      "Dust, paint residue, and debris removal",
      "Polishing of marble, tile, glass, and steel surfaces",
      "Pre-handover sanitization & aesthetic detailing"
    ]
  }
];

export default function Services() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#1C1C19] text-[#F5F2ED] overflow-hidden">
      {/* Hero Header Section */}
      <motion.header
        className="hero flex flex-col justify-end items-start h-screen w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('${bgHero}')`,
          padding: "3rem 1rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="marginAuto flex flex-col justify-end items-start gap-2 z-10 w-full" style={{ padding: "0 0 3.5rem 0" }}>
          <p className="font-semibold text-orange-600 text-xl md:text-3xl tracking-wide">- OUR EXPERTISE</p>
          <h1 className="font-bold text-zinc-100 text-4xl md:text-6xl leading-tight">
            Systematic Services
          </h1>
          <p className="max-w-2xl font-medium text-zinc-300 text-base md:text-xl mt-2">
            A carefully integrated suite of architectural, fabrication, and construction capabilities executed with radical responsibility.
          </p>
        </div>
      </motion.header>

      {/* Services Grid / Alternate list */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 flex flex-col gap-24" style={{padding: "4rem 1rem"}}>
        <div className="flex flex-col items-start justify-between border-b border-zinc-800 gap-3" style={{padding: "0rem 0rem 4rem 0rem"}}>
          <div>
            <span className="text-orange-600 font-semibold tracking-widest text-xs uppercase">Core Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Precision at Scale</h2>
          </div>
          <p className="max-w-md text-zinc-300 font-medium text-sm md:text-base mt-4 md:mt-0">
            We don't rely on luck. Each phase of our service delivery is documented, structured, and verified to ensure uncompromising quality.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
              >
                {/* Image side */}
                <motion.div 
                  className="w-full lg:w-1/2 aspect-4/3 rounded-2xl overflow-hidden relative group border border-zinc-800"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C19] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating ID badge */}
                  <div className="absolute top-6 left-6 bg-[#1C1C19] border border-orange-600/30 px-4 py-2 rounded-xl flex items-center gap-2" style={{padding: " 1rem 2rem"}}>
                    <service.icon className="text-orange-600 w-4 h-4"/>
                    <span className="font-chubbo font-bold text-sm tracking-widest">{service.id}</span>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div 
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                  <span className="text-orange-600 text-xs tracking-[0.3em] font-semibold mb-2 block">{service.subtitle}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">{service.title}</h3>
                  <p className="text-zinc-400 font-light mb-8 leading-relaxed text-base md:text-lg">{service.description}</p>
                  
                  {/* List of Details */}
                  <ul className="flex flex-col gap-4">
                    {service.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2.5 shrink-0"></span>
                        <span className="text-[#F5F2ED] opacity-90 font-light text-sm md:text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{padding: "1rem 1.5rem"}}>
                    < WhatsAppButton className="bg-orange-600 text-stone-100 rounded-lg hover:bg-orange-800 transition duration-300"/>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fabrication Process Section integrated */}
      {/* <section className="w-full bg-[#151513] border-y border-zinc-900 py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center px-4 md:px-8">
          <motion.div 
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-600 text-xs tracking-[0.3em] font-semibold mb-2 block uppercase">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Fabrication Process</h2>
            <p className="max-w-2xl text-zinc-400 font-light text-sm md:text-base">
              A comprehensive nine-step roadmap ensuring total alignment, legal clarity, and flawless engineering from first brief to long-term aftercare.
            </p>
          </motion.div>
          <FabCards />
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="w-full py-24 px-4 relative flex flex-col items-center justify-center text-center">
        <motion.div 
          className="max-w-4xl flex flex-col items-center gap-6 z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Elevate Your Space?</h2>
          <p className="max-w-xl text-zinc-400 font-light text-base md:text-lg">
            Let's discuss how our design, visualization, and precision fabrication systems can turn your vision into permanent structural form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
            <Link 
              to="/contact" 
              className="bg-orange-600 text-stone-100 rounded-xl hover:bg-orange-700 transition duration-300 px-8 py-4 font-semibold text-center"
            >
              Start Your Project
            </Link>
            <WhatsAppButton 
              text="Consult via WhatsApp"
              className="rounded-xl bg-transparent text-orange-600 border-orange-600 border-2 hover:bg-orange-600 hover:text-stone-100 transition duration-300 px-8 py-4 font-semibold text-center"
              style={{}}
            />
          </div>
        </motion.div>
      </section> */}

      <Partner />
    </section>
  );
}
