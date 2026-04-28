import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink, Code, Server, Database } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-blue-400 font-semibold tracking-wide uppercase mb-3">
            B.Tech Data Science & Computer Science Student
          </motion.h2>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Priyansh Kumar
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enthusiastic and hardworking fresher with practical knowledge of Python, Data Analysis, and Machine Learning. Experienced in developing robust backend architectures and data-driven web applications.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <a href="mailto:priyanshkumar21jul@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://linkedin.com/in/priyansh-kumar-326487302" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 border border-slate-700">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 border border-slate-700">
              <Github size={20} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-slate-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <Code className="text-blue-400" /> Technical Arsenal
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Languages", icon: <Code size={24}/>, skills: ["Python", "Java", "C/C++", "JavaScript", "HTML/CSS", "DSA"] },
              { title: "Frameworks & Tools", icon: <Server size={24}/>, skills: ["React", "Node.js", "Flask", "AWS S3", "Power BI", "Excel"] },
              { title: "Databases", icon: <Database size={24}/>, skills: ["SQL", "MySQL", "DBMS", "SQLite"] }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 text-emerald-400">
                  {category.icon}
                  <h4 className="text-xl font-semibold text-slate-100">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="bg-slate-900 text-slate-300 px-3 py-1 rounded-md text-sm font-medium border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <Server className="text-emerald-400" /> Featured Projects
          </motion.h3>

          <div className="space-y-8">
            {[
              {
                title: "Cloud-based File Storage System",
                tech: ["Python", "Flask", "AWS S3", "SQL", "React", "Node.js"],
                desc: "Developed a secure web application for scalable remote file management. Integrated AWS S3 for reliable cloud storage and utilized SQL for robust user data management. Backend architecture built with clean, modular code."
              },
              {
                title: "Inventory Management System",
                tech: ["Java", "JavaScript", "HTML", "CSS", "SQL"],
                desc: "Created a full-stack web application during a professional internship to efficiently track stock levels and manage orders. Designed a responsive frontend interface and implemented secure backend logic to streamline daily data entry."
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-slate-100">{project.title}</h4>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><ExternalLink size={24}/></a>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-slate-100">Education</h3>
            <div className="space-y-6 relative border-l-2 border-slate-700 ml-3 pl-6">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                <h4 className="text-lg font-bold text-slate-200">B.Tech (Computer Science)</h4>
                <p className="text-blue-400 font-medium">IILM University (2023 - 2027)</p>
                <p className="text-slate-400 mt-2">CGPA: 7.4</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-slate-600 border-4 border-slate-900"></div>
                <h4 className="text-lg font-bold text-slate-200">Intermediate (12th)</h4>
                <p className="text-slate-400">Govt. Sr. Sec School (2021 - 2023)</p>
                <p className="text-slate-400 mt-2">Percentage: 62%</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-slate-100">Certifications</h3>
            <ul className="space-y-4">
              {[
                { name: "Data Analytics", issuer: "Deloitte" },
                { name: "Python Fundamentals, Full Stack", issuer: "Infosys Springboard, Edu Skill Academy" },
                { name: "Programming in C", issuer: "Get It Project LTD." },
                { name: "Java Programming", issuer: "Get It Project LTD" },
                { name: "DBMS", issuer: "Great Learning" }
              ].map((cert, idx) => (
                <li key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center hover:bg-slate-700/50 transition-colors">
                  <span className="font-medium text-slate-200">{cert.name}</span>
                  <span className="text-sm text-emerald-400">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-12 px-6 text-center border-t border-slate-800">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-8">Looking for an opportunity to contribute my skills to a forward-thinking team. Feel free to reach out!</p>
          <div className="flex gap-6 mb-8 text-slate-400">
            <a href="tel:+917903037700" className="hover:text-blue-400 transition-colors flex items-center gap-2"><Phone size={20}/> +91-7903037700</a>
            <a href="mailto:priyanshkumar21jul@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-2"><Mail size={20}/> Email Me</a>
          </div>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Priyansh Kumar. Built with React & Tailwind.</p>
        </div>
      </footer>

    </div>
  );
}