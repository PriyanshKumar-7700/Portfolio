import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, Database, Network, Cloud, Lightbulb, Coffee } from 'lucide-react';

// Custom SVGs for Socials
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const XIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

// Custom SVGs for Tech Skills
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" fill="#F59E0B">
    <path d="M12.01 2.014c-4.887 0-4.665 2.113-4.665 2.113l-.004 2.222h4.756v.678H7.32c-3.444 0-4.004 2.222-4.004 4.89 0 2.666 1.444 3.11 3.555 3.11h1.11v-2.22c0-2.445 2.003-2.668 2.003-2.668h3.78s2.223-.11 2.223-2.443V4.457s.22-2.443-3.978-2.443zm-2.444 1.556a.89.89 0 1 1 0 1.778.89.89 0 0 1 0-1.778zM16.678 9.57c0 2.444-2.002 2.666-2.002 2.666h-3.78s-2.22.112-2.22 2.445v3.332s-.222 2.445 3.998 2.445c4.89 0 4.668-2.11 4.668-2.11l.004-2.223h-4.756v-.667h4.778c3.444 0 4-2.222 4-4.89 0-2.666-1.445-3.11-3.556-3.11h-1.11V9.57zm-2.444 9.333a.89.89 0 1 1 0 1.778.89.89 0 0 1 0-1.778z"/>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48">
    <path fill="#F7DF1E" d="M2 2h20v20H2z"/>
    <path fill="#000" d="M16.42 16.03c0-1.28-.6-1.74-2.02-2.23l-.86-.28c-.85-.29-1.21-.63-1.21-1.2 0-.64.55-1.11 1.42-1.11.83 0 1.41.42 1.6 1.07h2.38c-.23-1.87-1.73-3.04-3.99-3.04-2.14 0-3.8 1.15-3.8 2.97 0 1.34.8 2.05 2.37 2.56l.78.25c1.07.36 1.38.77 1.38 1.38 0 .76-.68 1.25-1.63 1.25-.98 0-1.76-.56-1.92-1.39h-2.46c.21 2.08 1.95 3.29 4.38 3.29 2.49 0 4.1-1.23 4.1-3.23zm-8.32.74c0 1.63-1.15 2.76-3.06 2.76-1.74 0-2.88-1.01-3.1-2.38h2.37c.1.58.55.88 1.13.88.66 0 1.1-.38 1.1-1.04v-7.8h2.56v7.58z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="48" height="48" fill="none" stroke="#61DAFB" strokeWidth="1">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g strokeWidth="1">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" fill="#339933">
    <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zM10.9 16.5v-5.2l-3.3 1.9v2.1l-1.5-.9V9.7l4.8-2.8 4.8 2.8v5.2l-1.5.9v-2.1l-3.3-1.9v5.2l-1.5.9z"/>
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" fill="#E34F26">
    <path d="M2.5 2.5h19l-1.7 18.5L12 23.5l-7.8-2.5L2.5 2.5zm15.1 4.5l-.2-2H5.6l.8 8.5h8.3l-.3 3.5-2.4.7-2.4-.7-.2-2H7.2l.3 4 4.5 1.3 4.5-1.3.6-7h-8.7l-.4-4.5h9.3z"/>
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" fill="#1572B6">
    <path d="M2.5 2.5h19l-1.7 18.5L12 23.5l-7.8-2.5L2.5 2.5zm15.1 4.5l-.2-2H5.6l.3 3.5h9.5l-.3 3.5H6.2l.3 3.5h7.9l-.3 3.5-2.4.7-2.4-.7-.2-2H7.2l.3 4 4.5 1.3 4.5-1.3.6-7h-8.7l-.1-1h8.9z"/>
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Portfolio() {
  const skillsData = [
    { name: "DSA", icon: <Network color="#10B981" size={48} /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "C++", icon: <span className="text-[#3B82F6] font-black text-4xl leading-none flex items-center justify-center h-12">C++</span> },
    { name: "C Language", icon: <span className="text-[#60A5FA] font-black text-4xl leading-none flex items-center justify-center h-12">C</span> },
    { name: "JavaScript", icon: <JSIcon /> },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "React.js", icon: <ReactIcon /> },
    { name: "Java", icon: <Coffee color="#EF4444" size={48} /> },
    { name: "HTML", icon: <HTMLIcon /> },
    { name: "CSS", icon: <CSSIcon /> },
    { name: "AWS S3", icon: <Cloud color="#F97316" size={48} /> },
    { name: "SQL", icon: <Database color="#94A3B8" size={48} /> },
    { name: "Problem Solving", icon: <Lightbulb color="#22C55E" size={48} /> }
  ];

  return (
    // Added smooth scrolling behavior here
    <div className="min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-amber-500 selection:text-black relative scroll-smooth">
      
      {/* Subtle Top Red/Orange Glow */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-red-600/20 to-transparent blur-2xl pointer-events-none"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto relative z-10 sticky top-0 bg-[#0f1115]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="text-2xl font-bold tracking-tight">
         
          
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-amber-500 transition-colors">Skills</a>
          <a href="#education" className="hover:text-amber-500 transition-colors">Education</a>
          <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
          <a href="#contact" className="border border-amber-500 text-amber-500 px-5 py-2 rounded-full hover:bg-amber-500 hover:text-black transition-all">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Text */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="md:w-3/5 text-left"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Hello, I'm <span className="text-amber-500">Priyansh Kumar</span>
          </motion.h1>
          
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-semibold mb-6">
            B.Tech Data Science <span className="text-amber-500">&&</span> Backend Developer
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
            An enthusiastic and hardworking fresher with practical knowledge in developing robust architectures. 
            Experienced in building data-driven projects utilizing <span className="text-amber-500 font-medium">Python, Data Analysis, and Machine Learning</span>. 
            Possesses strong problem-solving skills and an eagerness to contribute clean, modular code in a professional environment.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Get in Touch
            </a>
            <a href="#projects" className="border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-500 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
              View Projects
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-6 mt-12">
            <a href="https://linkedin.com/in/priyansh-kumar-326487302" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
              <LinkedinIcon size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
              <GithubIcon size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Circular Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-2/5 flex justify-center md:justify-end"
        >
          {/* Outer glowing ring */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-amber-600 to-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
            {/* Inner image container */}
            <div className="w-full h-full rounded-full bg-[#1a1d24] overflow-hidden border-4 border-[#0f1115]">
              <img 
                src="/profile.jpg" 
                alt="Priyansh Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400/1a1d24/f59e0b?text=PK"
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills Grid Section */}
      <section id="skills" className="py-20 px-8 bg-[#0f1115]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-16 text-white font-serif tracking-wide">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsData.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#15181e] border border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-slate-600 hover:shadow-lg transition-all cursor-default"
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-200">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Education Section */}
      <section id="education" className="py-20 px-8 bg-[#0f1115] scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 text-amber-500 font-serif tracking-wide">
            Education
          </h3>
          
          <div className="space-y-6">
            {/* University Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#15181e] border border-slate-800 rounded-xl p-8 text-left hover:border-slate-600 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <h4 className="text-xl font-bold text-white mb-2">B.Tech, Computer Science</h4>
                <p className="text-slate-400">IILM University</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-amber-500 font-mono text-sm mb-1">2023 - 2027</p>
               
              </div>
            </motion.div>

            {/* High School Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#15181e] border border-slate-800 rounded-xl p-8 text-left hover:border-slate-600 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Intermediate (12th)</h4>
                <p className="text-slate-400">Govt. Sr. Sec School</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-amber-500 font-mono text-sm mb-1">2021 - 2023</p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-[#0f1115]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-white flex items-center justify-center md:justify-start gap-3">
            <Server className="text-amber-500" /> Featured Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div key={idx} className="bg-[#15181e] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">{project.title}</h4>
                  <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><ExternalLink size={24}/></a>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Get in Touch Section */}
      <section id="contact" className="py-24 px-8 bg-[#0a0c10] border-t border-slate-800 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-serif">Get in Touch</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to connect, feel free to reach out!
        </p>
        
        <a href="mailto:priyanshkumar21jul@gmail.com" className="text-amber-500 hover:text-amber-400 text-lg md:text-xl font-medium mb-4 transition-colors">
          priyanshkumar21jul@gmail.com
        </a>
        
        <a href="tel:+917903037700" className="text-amber-500 hover:text-amber-400 text-lg md:text-xl font-medium mb-8 transition-colors">
          +91 7903037700
        </a>
        
        <p className="text-slate-500 mb-10">Greater Noida, India</p>
        
        <div className="flex items-center gap-6 mb-8">
          <a href="https://linkedin.com/in/priyansh-kumar-326487302" target="_blank" rel="noreferrer" className="text-white hover:text-amber-500 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-amber-500 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="#" className="text-white hover:text-amber-500 transition-colors">
            <XIcon size={24} />
          </a>
          <a href="#" className="text-white hover:text-amber-500 transition-colors">
            <InstagramIcon size={24} />
          </a>
        </div>
      </section>

      {/* Bottom Footer Name Bar */}
      <footer className="py-8 bg-[#15181e] border-t border-slate-800 text-center">
        <h3 className="text-2xl font-bold text-amber-500 font-serif tracking-wide">Priyansh Kumar</h3>
      </footer>
      
    </div>
  );
}