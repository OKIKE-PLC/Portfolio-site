import bgImg2 from "../assets/Container.png";
import Sha_sha from "../assets/Sha-Sha.png";
import Partner from "../components/partner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuHouse, LuShieldCheck, LuSettings, LuPenTool } from "react-icons/lu";

export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center"
    >
      {/* header section */}
      <motion.header
        className="hero flex flex-col justify-end items-start h-screen w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${bgImg2}')`, padding: "3rem 1rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="marginAuto flex flex-col justify-end items-start gap-2 z-10"
          style={{ padding: "0 0 3.5rem 0" }}
        >
          <p className="font-semibold text-orange-600 text-xl md:text-3xl">About Us</p>
          <h1 className="font-bold text-zinc-200 text-3xl md:text-5xl leading-tight">
            Fabrication Excellence
          </h1>
        </div>
      </motion.header>

      
        {/* about us */}
        <section
          style={{ padding: " 3.5rem 1rem " }}
        >
          <div className="marginAuto flex flex-col md:flex-row justify-center items-start gap-2.5">
            <motion.div 
              className="w-full md:w-1/2 flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <img
            src={Sha_sha}
            alt="Sha-sha Ceo"
            loading="lazy"
            className=" rounded-xl"
            style={{ height: "35rem" }}
          />
            </motion.div>
          

          <motion.div 
            className="w-full h-full flex flex-col justify-center items-start md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
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
              within their spaces, guiding vision into form.
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
            
          </motion.div>
          </div>
            
        </section>

        {/* why choose us */}
        <section
          className="w-full bg-[#1c1c19] text-zinc-200"
        >
          <div className="marginAuto flex flex-col justify-left items-start gap-2.5 ">
              <motion.h2
                className="text-4xl bg-[#F5F2ED] font-bold text-orange-600"
                style={{ marginBottom: " 1.5rem ", padding: " 2rem 1rem ", borderRadius: " 0rem 0rem 2rem 0rem " }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Why Choose Us
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 " style={{ padding: " 0rem 1rem 3.5rem 1rem "}}>
                {/* design for real life */}
                <motion.div 
                  className="flex flex-col justify-center items-start gap-2 border border-zinc-800  w-full rounded-xl hover:border-orange-600 transition-colors duration-300" 
                  style={{ borderRadius: " 1rem ", padding: " 3.5rem " }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <LuHouse className="w-6 h-6 stroke-[2.5]" />
                  <h3 className="text-2xl font-bold uppercase tracking-[0.2em]">
                    Design for Real Life:
                  </h3>
                  <article className="text-xl text-zinc-500 font-light leading-snug">
                    We believe spaces should support how people truly live and work.
                    Our designs consider movement, comfort, and daily habits to
                    create environments that feel natural and easy to use.
                  </article>
                </motion.div>
                {/* radical responsibilty */}
                <motion.div 
                  className="flex flex-col justify-center items-start gap-2 border border-zinc-800 w-full rounded-xl hover:border-orange-600 transition-colors duration-300" 
                  style={{ borderRadius: " 1rem ", padding: " 3.5rem " }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <LuShieldCheck className="w-6 h-6 stroke-[2.5]" />
                  <h3 className="text-2xl font-bold uppercase tracking-[0.2em]">
                    Radical Responsibility:
                  </h3>
                  <article className="text-xl text-zinc-500 font-light leading-snug">
                    We own the outcome. We believe responsibility is the ability to
                    own the result of an action, whether good or bad. We deliver
                    results
                  </article>
                </motion.div>
                {/* system-driven execution*/}
                <motion.div 
                  className="flex flex-col justify-center items-start gap-2 border border-zinc-800  w-full rounded-xl hover:border-orange-600 transition-colors duration-300" 
                  style={{ borderRadius: " 1rem ", padding: " 3.5rem " }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <LuSettings className="w-6 h-6 stroke-[2.5]" />
                  <h3 className="text-2xl font-bold uppercase tracking-[0.2em]">
                    System-Driven Execution:
                  </h3>
                  <article className="text-xl text-zinc-500 font-light leading-snug">
                    We don't rely on "luck" or "bursts of energy". We rely on a
                    structured operational framework that ensures every nail and
                    every brushstroke is documented and verified.
                  </article>
                </motion.div>
                {/* integrity in craft */}
                <motion.div 
                  className="flex flex-col justify-center items-start gap-2 border border-zinc-800  w-full rounded-xl hover:border-orange-600 transition-colors duration-300" 
                  style={{ borderRadius: " 1rem ", padding: " 3.5rem " }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  <LuPenTool className="w-6 h-6 stroke-[2.5]" />
                  <h3 className="text-2xl font-bold uppercase tracking-[0.2em]">
                    Integrity in Craft:
                  </h3>
                  <article className="text-xl text-zinc-500 font-light leading-snug">
                    We maintain a "Learning Loop". Our humility allows us to
                    consistently refine our craft, ensuring that our "Master" mind
                    always has control over the technical execution.
                  </article>
                </motion.div>
              
              </div>
              <motion.div 
                className="w-full flex flex-col justify-center items-center" 
                style={{padding: "2rem 0rem"}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                  <Link to="/about/meet-the-team" className="bg-orange-600 rounded-xl" style={{padding: "2rem 5rem"}}>Meet The Team</Link>
                </motion.div>
          </div>
        </section>

       
        <Partner />
    </section>
  );
}
