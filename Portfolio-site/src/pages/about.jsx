import bgImg2 from "../assets/Container.png";
import Sha_sha from "../assets/Sha-Sha.png";
import Partner from "../components/partner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-2"
      style={{ padding: " 0rem " }}
    >
      {/* header section */}
      <motion.header
        className="hero flex flex-col justify-end items-start h-screen w-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${bgImg2}')`, padding: "0 1rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="flex flex-col justify-end items-start gap-2 z-10"
          style={{ padding: "7rem 0" }}
        >
          <p className="font-semibold text-orange-600 text-3xl">About Us</p>
          <h1 className="font-bold text-zinc-200 text-4xl md:text-5xl">
            Fabrication Excellence
          </h1>
        </div>
      </motion.header>

      <main className="">
        {/* about us */}
        <motion.section
          className="flex flex-col md:flex-row justify-center items-start gap-2.5"
          style={{ padding: " 3.5rem 1rem " }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                <img
            src={Sha_sha}
            alt="Sha-sha Ceo"
            className="w-full rounded-xl"
            style={{ height: "35rem" }}
          />
            </div>
          

          <div className="w-full h-full flex flex-col justify-center items-start md:w-1/2">
            <h2
              className="text-4xl font-bold text-orange-600"
              style={{ marginBottom: " 1.5rem " }}
            >
              ABOUT US: THE PHILOSOPHY
            </h2>
            <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-xl font-light leading-relaxed">
              We believe that design directly influences the way we think,
              live, and behave. A well designed space quietly organises life,
              shaping the way people move, interact, and experience their
              environment. Okike is our way of exploring these ideas of creation.
              With every project we help our clients realise the possibilities
              within their spaces, guiding vision into form.{" "}
            </p>
            <p
              className="text-xl font-light leading-relaxed"
              style={{ marginTop: " 1rem " }}
            >
              Through thoughtful collaborations with industry experts, we bring
              each brief to life with careful attention to detail, ensuring that
              every space is built, designed or renewed with purpose.
            </p>
            </div>
            
          </div>
        </motion.section>

        {/* why choose us */}
        <motion.section
          className="flex flex-col justify-left items-start gap-2.5 bg-[#1c1c19] text-zinc-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <h2
            className="text-4xl bg-[#F5F2ED] font-bold text-orange-600"
            style={{ marginBottom: " 1.5rem ", padding: " 2rem 1rem ", borderRadius: " 0rem 0rem 2rem 0rem " }}
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 " style={{ padding: " 0rem 1rem 3.5rem 1rem "}}>
            {/* design for real life */}
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h3 className="text-2xl font-bold text-orange-600">
                Design for Real Life:
              </h3>
              <article className="text-xl font-light leading-relaxed">
                We believe spaces should support how people truly live and work.
                Our designs consider movement, comfort, and daily habits to
                create environments that feel natural and easy to use.
              </article>
            </div>
            {/* radical responsibilty */}
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h3 className="text-2xl font-bold text-orange-600">
                Radical Responsibility:
              </h3>
              <article className="text-xl font-light leading-relaxed">
                We own the outcome. We believe responsibility is the ability to
                own the result of an action, whether good or bad. We deliver
                results
              </article>
            </div>
            {/* system-driven execution*/}
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h3 className="text-2xl font-bold text-orange-600">
                System-Driven Execution:
              </h3>
              <article className="text-xl font-light leading-relaxed">
                We don't rely on "luck" or "bursts of energy". We rely on a
                structured operational framework that ensures every nail and
                every brushstroke is documented and verified.
              </article>
            </div>
            {/* integrity in craft */}
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h3 className="text-2xl font-bold text-orange-600">
                Integrity in Craft:
              </h3>
              <article className="text-xl font-light leading-relaxed">
                We maintain a "Learning Loop". Our humility allows us to
                consistently refine our craft, ensuring that our "Master" mind
                always has control over the technical execution.
              </article>
            </div>
          </div>
        </motion.section>

        {/* <section className="bg-orange-600 text-zinc-100 flex flex-col justify-center items-center text-center gap-5" style={{padding: "3rem",

            }}>
                <h3 className="font-bold text-2xl md:4xl lg:6xl">Ready to Build Your Legacy?</h3>
                <Link to="/contact" className="bg-[#1C1C19] rounded-xl" style={{padding: "1rem"}}>Partener with Us</Link>
            </section> */}
        <Partner />
        
      </main>
    </section>
  );
}
