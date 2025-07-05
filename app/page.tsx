"use client";


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";


const projects = [
  {
    title: "Student Marks Predictor",
    description:
      "Built a regression model to predict academic performance based on attendance, study time, and previous grades.",
    image: "/projects/student-marks.png",
    live: "https://student-marks-predictor-whvgephlstfpcv3pm7kubg.streamlit.app/",
    code: "https://github.com/amalabera/student-marks-predictor",
  },
  {
    title: "Executive KPI Dashboard",
    description:
      "Developed an interactive Streamlit dashboard using MySQL, Excel, and filters to visualize business KPIs and automate reporting.",
    image: "/projects/kpi-dashboard.png",
    live: "https://executive-kpi-dashboard-b4pljzrmzenl8hwotztzm7.streamlit.app/",
    code: "https://github.com/amalabera/kpi-dashboard",
  },
  {
    title: "Amala Food Blog",
    description:
      "Created a responsive and animated food blog website showcasing recipes, reviews, and personal culinary stories.",
    image: "/projects/food-blog.png",
    live: "https://amalafoodblog.ccbp.tech/",
    code: "https://github.com/amalabera/amalafoodblog",
  },
];


export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>("dark");
  const [state, handleSubmit] = useForm("movwlblw");


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0d0d0d] text-white" : "bg-white text-black"
      }`}
    >
      {/* Navigation */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-[#262626]">
        <h1 className="text-2xl font-bold text-white">
          Amala<span className="text-lime-400"> Bera</span>
        </h1>
        <nav className="bg-[#111] border border-lime-400 rounded-full px-6 py-2 flex space-x-6">
          {["Home", "Experience", "Projects", "My Skills", "Contact"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-semibold ${
                link === "Home"
                  ? "text-black bg-lime-400 px-3 py-1 rounded-full"
                  : "text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </header>


      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20" id="home">
        <div className="flex justify-center">
          <Image
            src="/amala_hero.png"
            alt="Amala Hero"
            width={400}
            height={400}
            className="rounded-2xl border border-lime-400 shadow-lg"
          />
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl font-bold leading-tight">
            Hello<br />
            I'm <span className="text-lime-400">Amala Bera</span><br />
            Business Data Analyst
          </h2>


          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              href="mailto:beraamala43@gmail.com"
              className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:scale-105 transition"
            >
              Say Hii →
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="group border border-lime-400 text-white px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black inline-flex items-center gap-2 transition"
            >
              <span className="group-hover:drop-shadow-glow">Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:drop-shadow-glow"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 16.5l4-4h-3V3h-2v9.5H8l4 4zM5 18v2h14v-2H5z" />
              </svg>
            </Link>
          </div>


         <div className="flex gap-4 mt-6 justify-center md:justify-start">
  {/* LinkedIn */}
  <Link
    href="https://linkedin.com/in/amalabera"
    target="_blank"
    className="bg-lime-400 text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 10.2h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.2c.6-.8 1.5-1.2 2.5-1.2 1.9 0 3.5 1.6 3.5 3.5v5.5z" />
    </svg>
    LinkedIn
  </Link>

  {/* GitHub */}
  <Link
    href="https://github.com/amalabera"
    target="_blank"
    className="bg-lime-400 text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7-.7 2-1.1.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.7.9 1.1 1.9 1.1 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.7 1 .7 2v3c0 .3.2.6.8.5A12 12 0 0012 .3" />
    </svg>
    GitHub
  </Link>
</div>

        </motion.div>
      </section>


         {/* Experience */}
      <section id="experience" className="py-16 bg-[#0d0d0d] text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
          My Experience
        </h2>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-[#111] p-6 rounded-2xl border border-lime-400 shadow-xl hover:shadow-lime-500/40 transition-transform transform hover:scale-105"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-4">
              <Image
                src="/images/business_data_analyst.png"
                alt="Business Data Analyst"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-lime-400">Business Data Analyst</h3>
                <p className="text-sm text-gray-300">Accenture | Nov 2021 – Dec 2023</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              <li>Analyzed and visualized business data to support decision-making.</li>
              <li>Created automated dashboards using SQL, Python, and Tableau.</li>
              <li>Collaborated with stakeholders to deliver insights on performance.</li>
              <li>Led QA reviews and data validation for new tools.</li>
              <li>Supported enterprise-wide business intelligence strategies by integrating data sources and ETL flows.</li>
               <li>Streamlined data accessibility and empowered self-service
                analytics across departments.</li>
                <li>Identified opportunities for cost savings and revenue growth through deep dive
analytics.</li>
<li>Delivered insights that contributed to a 20% boost in process efficiency and
margin improvements. </li>
            </ul>
          </div>




          <div
            className="bg-[#111] p-6 rounded-2xl border border-lime-400 shadow-xl hover:shadow-lime-500/40 transition-transform transform hover:scale-105"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-4">
              <Image
                src="/images/quality_analyst.png"
                alt="Quality Analyst"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-lime-400">Quality Analyst</h3>
                <p className="text-sm text-gray-300">Accenture | Mar 2021 – Nov 2021</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              <li>Conducted manual and automated testing of mobile apps.</li>
              <li>Reduced testing cycle time by 20% through optimized QA processes.</li>
              <li>Developed test cases and tracked issues using JIRA.</li>
              <li>Ensured quality standards for app releases and performance.</li>
              <li>Managed and Spearheaded content optimization for Google platforms, enhancing
                  brand consistence.</li>
                <li>Delivered high-volume assets with
                  98%+ accuracy.</li>
                <li>Designed and executed onboarding programs for 50+ hires, reducing training time
                  and productivity.</li>
            </ul>
          </div>
        </div>
      </section>




      {/* Projects */}
      <section id="projects" className="px-6 py-20 bg-[#111]">
  <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((project, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-lime-400 hover:shadow-xl hover:scale-105 transition-all"
      >
        <div className="w-full h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={300}
            className="w-full h-64 object-contain bg-white rounded-t-xl"




          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold mb-2 text-lime-400">{project.title}</h4>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          <div className="flex gap-4">
            <Link
              href={project.live}
              target="_blank"
              className="text-sm bg-lime-400 text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              Live Demo
            </Link>
            <Link
              href={project.code}
              target="_blank"
              className="text-sm border border-lime-400 text-lime-400 px-4 py-2 rounded-full font-semibold hover:bg-lime-400 hover:text-black transition"
            >
              View Code
            </Link>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
























      {/* Skills */}
      <section id="skills" className="bg-black text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
















        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">🧠 Programming & Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ src: "/icons/python.jpg", name: "Python" }, { src: "/icons/numpy.png", name: "NumPy" }, { src: "/icons/sklearn.png", name: "Scikit-Learn" }, { src: "/icons/seaborn.png", name: "Seaborn" }].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg">
                <img src={skill.src} alt={skill.name} className="w-16 h-16 rounded-full" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
















        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">📊 Data Visualization</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ src: "/icons/tableau.jpg", name: "Tableau" }, { src: "/icons/powerbi.png", name: "Power BI" }, { src: "/icons/excel.png", name: "Excel" }].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg">
                <img src={skill.src} alt={skill.name} className="w-16 h-16 rounded-full" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
















        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">📐 Statistical & ML</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ src: "/icons/matplotlib.png", name: "Statistical Programming" }, { src: "/icons/ml.jpg", name: "Machine Learning" }].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg">
                <img src={skill.src} alt={skill.name} className="w-16 h-16 rounded-full" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
















        <div>
          <h3 className="text-xl font-semibold mb-4">🗃️ Databases & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ src: "/icons/sql.png", name: "MySQL" }, { src: "/icons/git.png", name: "Git / GitHub" }].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg">
                <img src={skill.src} alt={skill.name} className="w-16 h-16 rounded-full" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
















            {/* Contact Section */}
<section id="contact" className="max-w-3xl mx-auto py-20 px-6">
  <div className="text-center mb-10">
    <h3 className="text-3xl font-bold">Contact Me</h3>
    <p className="text-gray-400 mt-2 text-sm">
      Please contact me directly at
      <a
        href="mailto:beraamala04@gmail.com"
        className="group text-lime-400 underline inline-flex items-center gap-2 ml-1"
      >
        <Mail className="w-4 h-4 transition-all duration-500 group-hover:rotate-12 group-hover:text-white group-hover:drop-shadow-glow" />
        beraamala04@gmail.com
      </a>{" "}
      or through this form.
    </p>
  </div>








  {state.succeeded ? (
    <p className="text-green-400 text-center text-lg">
      Thank you! Your message has been sent ✅
    </p>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#111] p-8 rounded-xl border border-lime-400"
    >
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-lime-400 text-white"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />








      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-lime-400 text-white"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />








      <textarea
        id="message"
        name="message"
        required
        placeholder="Your Message"
        rows={5}
        className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-lime-400 text-white"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />








      <button
        type="submit"
        disabled={state.submitting}
        className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:scale-105 transition"
      >
        Send Message →
      </button>
    </form>
  )}
</section>


    </main>
  );
}


