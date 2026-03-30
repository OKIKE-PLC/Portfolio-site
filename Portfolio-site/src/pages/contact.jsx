import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

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


    return (
        <section className="mx-auto" style={{padding: "3rem .6rem"}}>
            {/* main contact div */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-5" >
                {/* left div */}
                <div className="flex flex-col justify-center items-start gap-5 text-left md:w-1/2">
                    <h1 className="text-orange-600 font-light text-xl lg:text-2xl">Get in Touch</h1>
                    <p className="font-light">Let's discuss your next architectural landmark. Our fabrication experts and designers are ready to translate your vision into a structural monolith.</p>
                    <div className="flex flex-col md:flex-row justify-center items-start gap-4">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <CiLocationOn className="text-orange-600 font-bold text-3xl"/>
                            <div className="flex flex-col justify-center items-start gap-2">
                                <h3>Headquarters</h3>
                                <p>Industrial Zone 4, Architectural District Lagos, Nigeria</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <MdOutlineEmail className="text-orange-600 font-bold text-3xl"/>
                            <div className="flex flex-col justify-center items-start gap-2">
                                <h3>Inquiries</h3>
                                <a href="mailto:info@okikeplc.com">info@okikeplc.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right/contact div */}
                <div className="flex flex-col justify-center items-start gap-5 text-left  w-full md:w-1/2 rounded-xl" >
                    <h3 className="text-orange-600 font-light text-xl lg:text-2xl">Project Brief</h3>
                    <form className="space-y-5 flex flex-col justify-center w-full items-start gap-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
                        required
                        

                        style={{padding: ".5rem"}}
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Business email"
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
                        required

                        style={{padding: ".5rem"}}
                    />

                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
                        required
                        style={{padding: ".5rem"}}
                        >
                        <option value="">Select service</option>
                        <option>Interior Design</option>
                        <option>3D and Architectural Design</option>
                        <option>Residential</option>
                    </select>

                    <textarea
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals..."
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
                    required
                    style={{padding: ".5rem"}}
                    />

                    <button
                            type="submit"
                            // disabled={loading}
                            className="w-full bg-orange-600 text-white  py-4 rounded-xl hover:bg-orange-700 transition font-medium" 
                            style={{padding: ".5rem"}}
                    >
                        Submit
                    </button>

                    </form>
                    </div>
            </div>
        </section>
    )
}