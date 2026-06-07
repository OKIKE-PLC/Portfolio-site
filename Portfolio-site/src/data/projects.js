// import bgImg2 from "../assets/Container.png";
// import residentialImg from "../assets/residential.png";
import Shield from "../assets/Icon.svg";
import beachHouse  from "../assets/Beach_house_3D-interior.jpg"
import beachHouse1 from "../assets/Beach_house_3D- interior-2.jpg"
import beachHouse2 from "../assets/Beach_house_3D- interior-3.jpg"
import RooftopMural from "../assets/rooftop-mural.JPG"
import RooftopMural1 from "../assets/rooftop-mural2.JPG"
import RooftopMural2 from "../assets/rooftop-mural3.JPG"
import SandStone1 from "../assets/Sandstone Apartment.jpg"
import SandStone from "../assets/Sandstone Apartment2.jpg"
import SandStone2 from "../assets/Sandstone Apartment3.jpg"
import bedroom1 from "../assets/2bedroom-Apartment.JPG"
import bedroom2 from "../assets/2bedroom-Apartment3.JPG"
import bedroom from "../assets/2bedroom-Apartment2.JPG"




const projects = [
  {
    id: 1,
    slug: "beach-house-3d-interior",
    image: beachHouse,
    heroImage: beachHouse,
    gallery: [beachHouse, beachHouse1, beachHouse2],
    category: "3D VISUALIZATION / 2023",
    title: "Beach House 3D Interior",
    size: "large",
    color: "bg-blue-900",
    // Case study content
    challenge: {
      heading: "THE CHALLENGE",
      text: "The client had a dream of a home that felt like a sanctuary—open, airy, and deeply connected to the surrounding landscape. However, the site presented significant constraints: a sloped terrain that complicated foundation work and a need to maximize natural light while maintaining privacy. The vision was to create a haven that felt both luxurious and grounded in its environment.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Embracing the slope, enhancing the light.",
      text: "Our solution involved a split-level design that stepped with the natural topography, creating a dynamic internal flow while minimizing excavation. Expansive floor-to-ceiling glazing dissolves the boundaries between inside and out, while strategically placed courtyards and light wells draw sunlight deep into the core of the home. The material palette combines warm woods, cool concrete, and natural stone to create a tactile, layered experience.",
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
      text: "The home became a sanctuary that lives and breathes with its surroundings. The split-level design creates a natural hierarchy of spaces, from the dramatic double-height living area to the intimate private quarters. Expansive glazing frames curated views of the landscape, while the material palette creates a sense of warmth and permanence. The project achieved its goal of creating a home that is both a haven and a work of art.",
    },
  },
  {
    id: 2,
    slug: "RooftopMural",
    image: RooftopMural,
    heroImage: RooftopMural,
    gallery: [RooftopMural, RooftopMural1, RooftopMural2],
    category: "RESIDENTIAL FABRICATION / 2022",
    title: "Rooftop Mural",
    size: "tall",
    color: "bg-stone-800",
    challenge: {
      heading: "THE CHALLENGE",
      text: "The client envisioned a home that would serve as a vibrant cultural expression—a living canvas that reflects the energy and creativity of its occupants. The challenge was to integrate artistic vision with architectural functionality, creating a space that inspires while remaining deeply livable. The site offered expansive views but also required careful consideration of privacy and environmental integration.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "A symphony of art and architecture, where every surface tells a story.",
      text: "We approached the residency as a dialogue between bold artistic expression and structural integrity. The design features a dynamic interplay of volumes and voids, with cantilevered volumes that challenge conventional forms. Custom fabricated metal screens and textured concrete surfaces create a tactile experience, while integrated lighting washes the building in a warm glow, transforming it into a beacon of creativity.",
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
      text: "The residency stands as a testament to the power of bold artistic expression. The dynamic interplay of volumes and voids creates a sense of movement and energy, while the custom fabricated metal screens and textured concrete surfaces provide a tactile experience. The integrated lighting washes the building in a warm glow, transforming it into a beacon of creativity.",
    },
  },
  {
    id: 3,
    slug: "SandStone-Apartment",
    image: SandStone,
    heroImage: SandStone,
    gallery: [SandStone, SandStone1, SandStone2],
    category: "RESTORATION & LEGACY / 2024",
    title: "SandStone Apartment",
    size: "wide",
    color: "bg-amber-900",
    challenge: {
      heading: "THE CHALLENGE",
      text: "A prominent business family sought to transform a historic colonial-era building into a contemporary corporate headquarters. The primary challenge was to reconcile the building's fragile heritage—characterized by intricate wrought-iron balconies and aging masonry—with the demands of modern office infrastructure. The structure had suffered decades of neglect, resulting in significant structural deterioration.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Honoring the past through precision restoration and modern reinforcement.",
      text: "Our restoration strategy treated the original structure as a living archive. Using 3D laser scanning, we documented every rivet, beam, and decorative element before beginning any intervention. The restoration philosophy was 'minimum intervention, maximum preservation'—strengthening what existed rather than replacing it.",
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
      text: "The SandStone Apartment stands as a testament to the power of architectural integrity. The dynamic interplay of volumes and voids creates a sense of movement and energy, while the custom fabricated metal screens and textured concrete surfaces provide a tactile experience. The integrated lighting washes the building in a warm glow, transforming it into a beacon of creativity.",
    },
  },
  {
    id: 4,
    slug: "2bedroom-Apartment",
    image: bedroom,
    heroImage: bedroom,
    gallery: [bedroom, bedroom1, bedroom2],
    category: "COMMERCIAL MOBILITY / 2024",
    title: "2bedroom-Apartment",
    size: "small",
    color: "bg-slate-800",
    challenge: {
      heading: "THE CHALLENGE",
      text: "Redeveloping a constrained downtown site into a high-density commercial and residential hub. The challenge was to maximize usable space while creating a building that felt open, light-filled, and integrated with its urban context.",
    },
    solution: {
      heading: "CONCEPTUAL CORE",
      subheading:
        "Maximizing space with a courtyard-centric design.",
      text: "Our solution was to create a building that turns constraints into assets. By organizing the program around a central courtyard, we were able to bring natural light and ventilation deep into the building's core. The structure uses a diagrid exoskeleton that eliminates the need for interior columns, giving tenants complete freedom to configure their spaces.",
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
      text: "The 2bedroom-Apartment stands as a testament to the power of architectural integrity. The dynamic interplay of volumes and voids creates a sense of movement and energy, while the custom fabricated metal screens and textured concrete surfaces provide a tactile experience. The integrated lighting washes the building in a warm glow, transforming it into a beacon of creativity.",
    },
  },
  //  {
  //   id: 5,
  //   slug: "port-harcourt-oil-services-facility",
  //   image: bgImg2,
  //   heroImage: residentialImg,
  //   category: "INDUSTRIAL FABRICATION / 2022",
  //   title: "Port Harcourt Oil Services Facility",
  //   size: "tall",
  //   color: "bg-zinc-800",
  //   challenge: {
  //     heading: "THE CHALLENGE",
  //     text: "Engineering a high-performance operational campus for a leading oil field services firm in the Niger Delta required confronting an extreme environment head-on. The site demanded infrastructure resilient to tropical humidity, heavy rainfall, and industrial vibration loads, while maintaining operational continuity for a 24/7 rotating workforce.",
  //   },
  //   solution: {
  //     heading: "CONCEPTUAL CORE",
  //     subheading: "Industrial toughness without sacrificing operational efficiency.",
  //     text: "We developed a modular campus strategy built around a central operations spine, with workshop bays, equipment storage, and administrative zones radiating outward. The structural logic prioritised rapid deployment of prefabricated steel modules, enabling phased construction without disrupting ongoing site operations. Every structural decision was driven by ease of maintenance and long service life under industrial loads.",
  //     materialsHeading: "MATERIAL SYSTEMS",
  //     materials: [
  //       {
  //         icon: Shield,
  //         title: "Pre-Engineered Steel Modules",
  //         description:
  //           "Factory-fabricated structural modules enabling rapid site assembly with minimal skilled labour requirements on site.",
  //       },
  //       {
  //         icon: Shield,
  //         title: "Industrial Composite Cladding",
  //         description:
  //           "High-density polyethylene-core panels with a 30-year manufacturer warranty against tropical degradation.",
  //       },
  //       {
  //         icon: Shield,
  //         title: "Raised Equipment Plinths",
  //         description:
  //           "Reinforced concrete plinths engineered to absorb vibration from heavy industrial machinery and drilling equipment.",
  //       },
  //     ],
  //   },
  //   result: {
  //     heading: "THE RESULT",
  //     text: "The facility was delivered in two phases, with Phase 1 operational within 14 weeks of site mobilisation. The modular approach delivered a 22% cost saving over conventional construction and established a replicable template now deployed at two additional Delta region sites. The campus currently supports a rotating workforce of over 400 personnel.",
  //   },
  // },
  // {
  //   id: 6,
  //   slug: "transcorp-commercial-village",
  //   image: bgImg2,
  //   heroImage: residentialImg,
  //   category: "MIXED-USE DEVELOPMENT / 2023",
  //   title: "Transcorp Commercial Village",
  //   size: "wide",
  //   color: "bg-teal-900",
  //   challenge: {
  //     heading: "THE CHALLENGE",
  //     text: "The brief called for a mixed-use development in Abuja's Central Business District that could activate street-level commerce while delivering premium office suites above. The site's irregular geometry and an aggressive 18-month delivery window demanded a design that was both architecturally coherent and structurally efficient to build.",
  //   },
  //   solution: {
  //     heading: "CONCEPTUAL CORE",
  //     subheading: "A vertical neighbourhood where commerce and enterprise converge.",
  //     text: "We resolved the mixed-use brief by stacking uses vertically with a clear spatial logic: a covered market colonnade at grade, boutique retail on level one, and a 12-storey office tower rising from a planted podium. The tower's structural core was positioned asymmetrically to free the podium of columns, creating unobstructed event and retail space at the ground plane.",
  //     materialsHeading: "STRUCTURAL STRATEGY",
  //     materials: [
  //       {
  //         icon: Shield,
  //         title: "Offset Transfer Slab",
  //         description:
  //           "Post-tensioned transfer slab at podium level redistributing tower loads around the column-free retail zone below.",
  //       },
  //       {
  //         icon: Shield,
  //         title: "High-Performance Glazed Facade",
  //         description:
  //           "Unitised curtain wall system with integrated solar control reducing mechanical cooling loads by 35%.",
  //       },
  //       {
  //         icon: Shield,
  //         title: "Recycled Steel Structure",
  //         description:
  //           "Primary structure incorporating 40% recycled steel content, supporting the project's sustainability certification.",
  //       },
  //     ],
  //   },
  //   result: {
  //     heading: "THE RESULT",
  //     text: "The development achieved full retail lease-up six months ahead of opening, with anchor tenants citing the project's landmark status as a key draw. The office tower reached 85% occupancy within its first year, outperforming the CBD average by 30 percentage points. The project was shortlisted for the 2024 African Property Awards in the Mixed-Use Development category.",
  //   },
  // },
];

export default projects;
