"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Code2, User, MessageSquare, FileText } from "lucide-react";
import { Inter, Outfit } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

// Custom Brand Icons (since Lucide v1.0 removed brand icons)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className={`min-h-screen bg-[#030303] text-white selection:bg-purple-500/30 ${inter.className} overflow-x-hidden`}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-40"
        >
          <Image 
            src="/backgrounds/hero-bg.png" 
            alt="Background" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#030303]/80 to-[#030303]" />
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-8 text-sm font-medium">
        <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
        <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2 
            }}
            className="relative w-40 h-40 mx-auto mb-10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-white/20 p-1 backdrop-blur-md overflow-hidden">
              <Image 
                src="/profile.jpg" 
                alt="Jaimin Vaghasiya" 
                fill 
                className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-6xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 ${outfit.className}`}
          >
            Jaimin Vaghasiya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Crafting high-performance <span className="text-white font-medium">Mobile Experiences</span> & Scalable <span className="text-white font-medium">Admin Interfaces</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-2xl text-base font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-2xl text-base font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Let&apos;s Talk
            </motion.a>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="flex justify-center gap-6 mt-12 text-white/40"
          >
            <a href="https://github.com/jaiminvaghasiya2803" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jaimin-vaghasiya-0744a51a1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className={`text-3xl font-bold ${outfit.className}`}>About Me</h2>
            </div>
            
            <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-6 font-light">
              <p>
                As a <span className="text-white font-medium">React Native Developer</span> with over 4 years of expertise, I specialize in bridging the gap between complex backend logic and seamless mobile user experiences.
              </p>
              <p>
                My approach combines technical rigor—leveraging <span className="text-white font-medium">Redux Toolkit, Zustand, and GraphQL</span>—with a keen eye for performance optimization and automated testing via <span className="text-white font-medium">Maestro</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { label: "Experience", value: "4+ Years" },
                { label: "Projects", value: "15+ Done" },
                { label: "Location", value: "India" },
                { label: "Availability", value: "Full-time" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/30 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${outfit.className}`}>Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">A curated selection of mobile applications and web platforms I&apos;ve built for global brands.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Discogs Marketplace",
                tech: ["React Native", "GraphQL", "REST"],
                description: "A premium music marketplace experience for browsing massive catalogs and managing vinyl collections.",
                image: "/projects/discogs.png",
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                name: "InspX Control",
                tech: ["React JS", "Redux", "Analytics"],
                description: "Enterprise-grade admin ecosystem for pest control businesses featuring real-time task orchestration.",
                image: "/projects/inspx.png",
                color: "from-emerald-500/20 to-teal-500/20"
              },
              {
                name: "GoGrads Portal",
                tech: ["Next.js", "RTK Query", "Auth"],
                description: "A high-performance talent matching platform connecting graduates with industry-leading internships.",
                image: "/projects/gograds.png",
                color: "from-orange-500/20 to-red-500/20"
              },
              {
                name: "JuniorIQ Edu",
                tech: ["Expo", "Animations", "Learning"],
                description: "Interactive educational universe for children with gamified learning paths and story-driven quests.",
                image: "/projects/juniori.png",
                color: "from-pink-500/20 to-rose-500/20"
              },
              {
                name: "Westside E-shop",
                tech: ["Shopify", "React Native", "E-commerce"],
                description: "Flagship retail mobile experience for a leading fashion brand with seamless checkout flows.",
                image: "/projects/westside.png",
                color: "from-indigo-500/20 to-blue-500/20"
              },
              {
                name: "Sony PS5 Kiosk",
                tech: ["React Native", "Hardware API"],
                description: "Futuristic digital kiosk interface for PlayStation retail environments with rich interactive media.",
                image: "/projects/sony-ps5.png",
                color: "from-blue-600/20 to-cyan-500/20"
              },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all hover:border-white/20"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-60 group-hover:opacity-40 transition-opacity`} />
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 relative z-20">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${outfit.className}`}>{project.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    Explore Project <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-4xl md:text-5xl font-black mb-8 ${outfit.className}`}>The Technical <br />Stack</h2>
              <p className="text-gray-400 text-lg font-light mb-12">
                I build using modern, future-proof technologies to ensure scalability, speed, and cross-platform consistency.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <GithubIcon className="w-8 h-8 text-white/20" />
                <LinkedinIcon className="w-8 h-8 text-white/20" />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Core", items: ["React Native", "Expo", "React JS", "Next.js"] },
                { title: "State", items: ["Redux Toolkit", "Zustand", "RTK Query"] },
                { title: "APIs", items: ["GraphQL", "REST", "Firebase"] },
                { title: "Tools", items: ["Maestro", "Git", "Postman", "OAuth"] },
              ].map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                >
                  <h4 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-4">{category.title}</h4>
                  <div className="space-y-2">
                    {category.items.map(item => (
                      <div key={item} className="text-white/80 font-medium">{item}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl font-black mb-4 ${outfit.className}`}>Career Timeline</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {[
              {
                role: "React Native Developer",
                company: "Bytes Technolab Pvt. Ltd",
                period: "Feb 2025 – Present",
                desc: "Spearheading mobile innovation with Next.js and React Native. Implementing automated quality assurance with Maestro."
              },
              {
                role: "React Native Developer",
                company: "Metizsoft Solutions Pvt. Ltd",
                period: "Dec 2021 – Feb 2025",
                desc: "Delivered enterprise e-commerce solutions for global brands. Specialized in Shopify integration and custom UI kits."
              }
            ].map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-10 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                <div className="text-sm font-bold text-purple-400 mb-1">{exp.period}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <div className="text-white/60 font-medium mb-4">{exp.company}</div>
                <p className="text-gray-400 font-light max-w-2xl">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 p-12 md:p-20 text-center"
          >
            <div className="relative z-10">
              <h2 className={`text-4xl md:text-6xl font-black mb-8 leading-tight ${outfit.className}`}>Ready to start a <br />project together?</h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light">
                I&apos;m currently available for full-time opportunities or selective freelance collaborations. Let&apos;s build something exceptional.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="mailto:vaghasiyajaimin28@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-12 py-5 rounded-3xl text-lg font-bold flex items-center gap-3"
                >
                  <Mail className="w-6 h-6" />
                  Email Me
                </motion.a>
                <motion.a
                  href="tel:+918735903175"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-3xl text-lg font-bold flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call Me
                </motion.a>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-12 text-white/40">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Ahmedabad, India
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  React Native Specialist
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className={`text-2xl font-black ${outfit.className}`}>JV.</div>
          <div className="text-white/30 text-sm font-medium">
            © 2025 Jaimin Vaghasiya. Designed for the Future.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/jaiminvaghasiya2803" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/jaimin-vaghasiya-0744a51a1" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
