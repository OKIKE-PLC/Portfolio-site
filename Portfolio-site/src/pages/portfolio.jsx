import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Portfolio() {

  return (
    <section 
      style={{ padding: "5.5rem 1.5rem" }}
      className="marginAuto"
    >
      <motion.div 
        className="flex flex-col justify-center items-start gap-3 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-orange-600 font-light">
          - EXCELLENCE IN FABRICATION
        </span>
        <h1 className="font-bold text-xl md:text-3xl">
          Our Fabrication Legacy
        </h1>
        <p className="text-2xl font-light">
          Exploring the intersection of raw material and digital precision. Each
          monolith is a testament to our commitment to structural permanence and
          aesthetic clarity.
        </p>
      </motion.div>

      {/* projects div */}

      <div
        className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 marginAuto"
        style={{ marginTop: "1rem" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            className="  project-card relative h-[400px] mx-auto w-full group overflow-hidden rounded-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-700 ease-in-out flex flex-col justify-end p-6 md:p-8 md:opacity-0 md:group-hover:opacity-100"
              style={{ padding: ".5rem" }}
            >
              <p
                className="text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2 transform transition-transform duration-700 ease-out md:translate-y-8 md:group-hover:translate-y-0"
              >
                {project.category}
              </p>

              <h3
                className="text-xl md:text-2xl font-bold text-white leading-tight mb-4 transform transition-transform duration-700 ease-out delay-100 md:translate-y-8 md:group-hover:translate-y-0"
              >
                {project.title}
              </h3>

              <div
                className="transform transition-transform duration-700 ease-out delay-200 md:translate-y-8 md:group-hover:translate-y-0"
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-block text-white text-sm font-medium border-b-2 border-orange-600 pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
                >
                  View More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

