import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  Github, Mail, Linkedin, MapPin, Phone, Download,
  GraduationCap, Award, ExternalLink, ChevronRight, Server
} from 'lucide-react';
import { personalData, skills, experience, projects, education, certifications } from './data';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Komponen Navbar ---
const Navbar = () => (
  <nav className="fixed w-full bg-white/70 backdrop-blur-lg border-b border-slate-200/50 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
        Ali.dev
      </h1>
      <ul className="hidden md:flex space-x-8 font-medium text-slate-600">
        {['About', 'Skills', 'Experience', 'Education', 'Projects'].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
      <a
        href="mailto:m.alinurrohman10@gmail.com"
        className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
      >
        Hire Me
      </a>
    </div>
  </nav>
);

// --- Komponen Hero ---
const Hero = () => (
  <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-50">
    {/* Background Decorations */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>

    <div className="max-w-4xl mx-auto px-4 text-center z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 border border-blue-200">
          Available for Internship
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent</span> <br />Backend Systems
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personalData.summary}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/20">
            <Download size={20} /> Download CV
          </button>
          <div className="flex gap-3 justify-center">
            <a href="#" className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
              <Github size={22} />
            </a>
            <a href="#" className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-5">
          {[
            { icon: MapPin, label: "Location", val: personalData.contact.location },
            { icon: Mail, label: "Email", val: personalData.contact.email },
            { icon: Phone, label: "Phone", val: personalData.contact.phone }
          ].map((info, idx) => (
            <div key={idx} className="p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all">
              <info.icon className="text-blue-600 mb-3" size={24} />
              <p className="font-semibold text-slate-900">{info.label}</p>
              <p className="text-sm text-slate-500">{info.val}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Komponen Skills ---
const Skills = () => (
  <section id="skills" className="py-24 bg-white relative">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills</h2>
        <p className="text-slate-500">Tools and technologies I use to build robust applications</p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <skill.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-slate-800">{skill.name}</h3>
            <ul className="space-y-2.5">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center text-slate-600 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2.5"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// --- Komponen Experience ---
const Experience = () => (
  <section id="experience" className="py-24 bg-slate-50/80">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Journey</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                <p className="text-slate-500 font-medium">{exp.company}</p>
              </div>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full w-fit border border-slate-200">
                {exp.period}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-4 group-hover:border-blue-500 transition-all">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Komponen Education & Certifications (Interactive Links) ---
const EducationAndCertifications = () => (
  <section id="education" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education & Achievements</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="flex items-center text-xl font-bold mb-8 text-slate-800">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
            </span>
            Formal Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="pl-8 border-l-2 border-slate-100 relative pb-2">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></span>
                <h4 className="text-lg font-bold text-slate-900">{edu.school}</h4>
                <p className="text-blue-600 font-medium text-sm mb-1">{edu.degree}</p>
                <p className="text-slate-400 text-xs mb-3">{edu.period}</p>
                <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications (With Links) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="flex items-center text-xl font-bold mb-8 text-slate-800">
            <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              <Award className="w-5 h-5 text-orange-600" />
            </span>
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link || "#"}
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 hover:translate-x-2 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{cert.issuer} • {cert.year}</p>
                  </div>
                  {cert.link && <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-orange-500" />}
                </div>
                <p className="text-slate-600 text-sm mt-3 line-clamp-2">{cert.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Komponen Projects (Interactive Cards with Links) ---
const Projects = () => (
  <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-slate-500">Showcasing real-world applications and system architectures</p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col h-full"
          >
            {/* Header Card */}
            <div className="p-6 pb-0">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${project.type === 'Fullstack' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                  {project.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                {project.desc}
              </p>
            </div>

            {/* Tech Stack & Link - Pushed to bottom */}
            <div className="mt-auto p-6 pt-0">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.split(', ').map((t) => (
                  <span key={t} className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-blue-600 transition-colors group"
              >
                View Project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// --- Komponen Footer ---
const Footer = () => (
  <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Innovate?</h2>
      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
        I am currently looking for an internship opportunity. Let's discuss how my backend and AI skills can contribute to your team.
      </p>
      <a
        href={`mailto:${personalData.contact.email}`}
        className="inline-flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50"
      >
        <Mail size={18} /> Say Hello
      </a>

      <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
        <p>© 2026 Muhammad Ali Nur Rohman. Built with React & Tailwind.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <EducationAndCertifications />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;