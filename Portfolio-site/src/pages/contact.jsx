import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessKey = "sf_7a61f149d6fa443daaea459b"; 

    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, accessKey } ),
      });

      if (response.ok) {
        alert("Success! We'll be in touch soon.");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section 
      className="mx-auto" 
      style={{ padding: "5.5rem 1rem" }}
    >
      {/* main contact div */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 marginAuto">
        {/* left div */}
        <motion.div 
          className="flex flex-col justify-center items-start gap-5 text-left md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-orange-600 font-light text-xl lg:text-2xl">
            Get in Touch
          </h1>
          <p className="font-light">
            Let's discuss your next architectural landmark. Our fabrication
            experts and designers are ready to translate your vision into a
            structural monolith.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-start gap-4">
            <motion.div 
              className="flex flex-col justify-center items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <CiLocationOn className="text-orange-600 font-bold text-3xl" />
              <div className="flex flex-col justify-center items-start gap-2">
                <h3>Office</h3>
                <p>Industrial Zone 4, Architectural District Lagos, Nigeria</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            >
              <MdOutlineEmail className="text-orange-600 font-bold text-3xl" />
              <div className="flex flex-col justify-center items-start gap-2">
                <h3>Inquiries</h3>
                <a href="mailto:okikestudio@okikeplc.com" className="hover:text-orange-600 transition-colors duration-200">okikestudio@okikeplc.com</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* right/contact div */}
        <motion.div 
          className="flex flex-col justify-center items-start gap-5 text-left  w-full md:w-1/2 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <h3 className="text-orange-600 font-light text-xl lg:text-2xl">
            Project Brief
          </h3>
          <form className="space-y-5 flex flex-col justify-center w-full items-start gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}

              placeholder="Full name"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
              required
              style={{ padding: ".5rem" }}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
              required
              style={{ padding: ".5rem" }}
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border bg-orange-600 border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
              required
              style={{ padding: ".5rem" }}
            >
              <option value="">Select service</option>
              <option>Interior Design</option>
              <option>3D and Architectural Design</option>
              <option>Woodwork</option>
              <option>Renovations</option>
              <option>Furniture</option>
              <option>Other</option>
            </select>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
              required
              style={{ padding: ".5rem" }}
            />

            <button
              type="submit"
              // disabled={loading}
              className="w-full bg-orange-600 text-white  py-4 rounded-xl hover:bg-orange-700 transition font-medium"
              style={{ padding: ".5rem" }}
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
