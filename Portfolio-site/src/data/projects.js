import bgImg2 from "../assets/Container.png";
import residentialImg from "../assets/residential.png";
import Shield from "../assets/Icon.svg";

const projects = [
  {
    id: 1,
    slug: "lagos-waterfront-pavilion",
    image: bgImg2,
    heroImage: residentialImg,
    category: "MARITIME INFRASTRUCTURE / 2023",
    title: "Lagos Waterfront Pavilion",
    size: "large",
    color: "bg-blue-900",
    // Case study content
    challenge: {
      heading: "THE CHALLENGE",
      text: "The Lagos Waterfront presented a unique architectural paradox: the need for a structure that felt ephemeral and light while resisting the brutal corrosive power of a high-salinity coastal environment. The Atlantic mist and shifting sands created a site that was as volatile as it was beautiful.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Balancing visual lightness with extreme coastal durability.",
      text: "Our solution centered on a structural paradox. We developed a design language that evokes the transparency of the Atlantic mist while maintaining the tectonic strength of a fortress. The result is a 'living skin'—a pavilion that breathes with the wind but stands resolute against the salt-laden atmosphere.",
      materialsHeading: "MATERIAL INNOVATION",
      materials: [
        {
          icon: Shield,
          title: "Marine-Grade Steel",
          description:
            "High-performance alloy specifically treated for 50+ year lifespans in high-salinity zones.",
        },
        {
          icon: Shield,
          title: "Tensile Mesh Cladding",
          description:
            "Lightweight woven steel mesh providing wind permeability while maintaining structural integrity.",
        },
        {
          icon: Shield,
          title: "Anti-Corrosion Coating",
          description:
            "Proprietary nano-ceramic finish engineered to resist salt spray and UV degradation.",
        },
      ],
    },
    result: {
      heading: "THE RESULT",
      text: "The Lagos Waterfront presented a unique architectural paradox: the need for a structure that felt ephemeral and light while resisting the brutal corrosive power of a high-salinity coastal environment. The Atlantic mist and shifting sands created a site that was as volatile as it was beautiful.",
    },
  },
  {
    id: 2,
    slug: "federal-capital-residency",
    image: bgImg2,
    heroImage: residentialImg,
    category: "RESIDENTIAL FABRICATION / 2022",
    title: "Federal Capital Residency",
    size: "tall",
    color: "bg-stone-800",
    challenge: {
      heading: "THE CHALLENGE",
      text: "Designing a residential complex in the heart of the Federal Capital Territory that harmonizes modern luxury with the cultural identity of the region. The project demanded materials that could withstand the Sahel climate while maintaining a refined aesthetic.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Merging contemporary design with regional material authenticity.",
      text: "We approached the residency as a dialogue between modern fabrication techniques and indigenous building traditions. The structural framework uses advanced steel framing while the exterior facades incorporate locally-sourced stone and terracotta accents, creating a residence that feels both timeless and distinctly Nigerian.",
      materialsHeading: "MATERIAL INNOVATION",
      materials: [
        {
          icon: Shield,
          title: "Structural Steel Frame",
          description:
            "Precision-engineered steel skeleton providing seismic resilience and open-plan flexibility.",
        },
        {
          icon: Shield,
          title: "Terracotta Rain Screen",
          description:
            "Custom-fired terracotta panels acting as a breathable rain screen for thermal regulation.",
        },
        {
          icon: Shield,
          title: "Low-E Glazing System",
          description:
            "High-performance glass reducing solar heat gain by 60% while maximizing natural light.",
        },
      ],
    },
    result: {
      heading: "THE RESULT",
      text: "A landmark residential development that set a new benchmark for luxury living in Abuja. The project achieved a 40% reduction in energy consumption compared to conventional builds, while its innovative use of local materials earned recognition at the West African Architecture Awards.",
    },
  },
  {
    id: 3,
    slug: "heritage-conservation-initiative",
    image: bgImg2,
    heroImage: residentialImg,
    category: "RESTORATION & LEGACY / 2024",
    title: "Heritage Conservation Initiative",
    size: "wide",
    color: "bg-amber-900",
    challenge: {
      heading: "THE CHALLENGE",
      text: "Restoring a century-old colonial-era steel structure while preserving its historical significance and adapting it for modern public use. The original ironwork had suffered decades of neglect, requiring a delicate balance between conservation integrity and structural reinforcement.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Honoring the past through precision restoration and modern reinforcement.",
      text: "Our conservation strategy treated the original structure as a living archive. Using 3D laser scanning, we documented every rivet, beam, and decorative element before beginning any intervention. The restoration philosophy was 'minimum intervention, maximum preservation'—strengthening what existed rather than replacing it.",
      materialsHeading: "RESTORATION TECHNIQUES",
      materials: [
        {
          icon: Shield,
          title: "3D Laser Documentation",
          description:
            "Sub-millimetre scanning of all original elements to create a complete digital twin for precision restoration.",
        },
        {
          icon: Shield,
          title: "Period-Matched Alloys",
          description:
            "Custom-smelted iron alloys matching the chemical composition of the original 1920s materials.",
        },
        {
          icon: Shield,
          title: "Invisible Reinforcement",
          description:
            "Carbon-fibre internal bracing hidden within original members for modern load requirements.",
        },
      ],
    },
    result: {
      heading: "THE RESULT",
      text: "The restored structure now serves as a vibrant cultural centre, welcoming over 50,000 visitors annually. The project was recognised by the National Commission for Museums and Monuments as a benchmark for heritage conservation in West Africa, proving that preservation and progress can coexist.",
    },
  },
  {
    id: 4,
    slug: "modern-office-complex",
    image: bgImg2,
    heroImage: residentialImg,
    category: "COMMERCIAL MOBILITY / 2024",
    title: "Modern Office Complex",
    size: "small",
    color: "bg-slate-800",
    challenge: {
      heading: "THE CHALLENGE",
      text: "Creating a next-generation office complex that redefines the workspace experience in Lagos. The brief demanded a building that could adapt to rapidly evolving work patterns while standing as a bold architectural statement on the Victoria Island skyline.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Designing for flexibility, performance, and architectural boldness.",
      text: "The complex was conceived as a 'vertical campus'—a series of stacked, interconnected work environments that encourage movement and collaboration. The structural system uses a diagrid exoskeleton that eliminates the need for interior columns, giving tenants complete freedom to configure their spaces.",
      materialsHeading: "STRUCTURAL SYSTEMS",
      materials: [
        {
          icon: Shield,
          title: "Diagrid Exoskeleton",
          description:
            "External steel diagrid providing lateral stability while creating a striking geometric facade.",
        },
        {
          icon: Shield,
          title: "Modular Floor Plates",
          description:
            "Column-free interiors using long-span steel beams for maximum tenant flexibility.",
        },
        {
          icon: Shield,
          title: "Integrated Solar Shading",
          description:
            "Parametrically-designed aluminium fins that track sun angles for optimal daylight and thermal comfort.",
        },
      ],
    },
    result: {
      heading: "THE RESULT",
      text: "The complex has become the most sought-after commercial address on Victoria Island, achieving full occupancy within three months of completion. Its diagrid structure has become an iconic addition to the Lagos skyline, while the flexible interiors have attracted leading tech and finance firms seeking progressive workspace solutions.",
    },
  },
];

export default projects;
