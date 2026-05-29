import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import "./hero.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section
        className="flex flex-col justify-center items-center h-screen"
        style={{ padding: "5rem 1rem" }}
      >
        <h1 className="font-bold text-4xl mb-4">Project Not Found</h1>
        <p className="text-lg font-light mb-6">
          The case study you're looking for doesn't exist.
        </p>
        <Link
          to="/portfolio"
          className="text-orange-600 font-semibold hover:underline"
        >
          ← Back to Portfolio
        </Link>
      </section>
    );
  }

  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ padding: "0 .6rem" }}
    >
      {/* Hero header */}
      <motion.header
        className="hero flex flex-col justify-end items-start h-screen w-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${project.heroImage}')`,
          padding: "0 1rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="flex flex-col justify-end items-start gap-2 z-10"
          style={{ padding: "7rem 0" }}
        >
          <p className="font-semibold text-orange-600 text-3xl">Case Study</p>
          <h1 className="font-bold text-4xl md:text-5xl">{project.title}</h1>
        </div>
      </motion.header>

      <main className="max-w-[1440px] mx-auto w-full">
        {/* Challenge */}
        <section
          id="challenge"
          className="flex flex-col lg:flex-row justify-between items-start gap-2.5"
          style={{ padding: "2rem 0rem" }}
        >
          <motion.div
            className="flex flex-col justify-center items-start gap-2.5 w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-orange-600 text-xl font-bold">
              {project.challenge.heading}
            </h4>
            <p>{project.challenge.text}</p>
          </motion.div>

          <motion.div
            className="rounded-sm lg:rounded-xl object-contain w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <img
              className="rounded-sm lg:rounded-xl w-full max-h-90 object-cover"
              src={project.heroImage}
              alt={project.title}
            />
          </motion.div>
        </section>

        {/* Solution */}
        <section
          id="solution"
          className="flex flex-col md:flex-row justify-center items-start gap-2.5"
          style={{ padding: "3.5rem 0rem" }}
        >
          <motion.div
            className="flex flex-col justify-center items-start gap-2.5 w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-orange-600 text-sm font-bold">
              {project.solution.heading}
            </h3>
            <h4 className="font-bold">{project.solution.subheading}</h4>
            <p className="font-light">{project.solution.text}</p>
          </motion.div>

          {/* Materials */}
          <motion.div
            className="rounded-xl object-contain flex flex-col justify-center items-start w-full md:w-1/2 gap-3 border-0"
            style={{ padding: "1rem .5rem" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h3
              className="text-orange-600 text-sm font-bold"
              style={{ marginBottom: "1rem" }}
            >
              {project.solution.materialsHeading}
            </h3>

            {project.solution.materials.map((material, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-start gap-2.5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2 + index * 0.15,
                }}
              >
                <div className="w-15 h-15 rounded-full flex justify-center items-start">
                  <img src={material.icon} alt="" />
                </div>
                <div>
                  <h5 className="text-sm font-bold">{material.title}</h5>
                  <p className="font-light">{material.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Result */}
        <section
          className="flex flex-col md:flex-row justify-center items-start gap-2.5"
          style={{ padding: "3.5rem 0rem" }}
        >
          <motion.div
            className="flex flex-col justify-center items-start gap-2.5 w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-orange-600 text-xl font-bold">
              {project.result.heading}
            </h4>
            <p>{project.result.text}</p>
          </motion.div>

          <motion.div
            className="rounded-sm lg:rounded-xl object-contain w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <img
              className="rounded-sm lg:rounded-xl w-full max-h-90 object-cover"
              src={project.heroImage}
              alt={project.title}
            />
          </motion.div>
        </section>
      </main>
    </section>
  );
}
