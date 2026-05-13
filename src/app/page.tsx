"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  ChevronRight,
  Download,
  Users,
  Clock,
  Star,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { Inter, Outfit } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

// Custom Brand Icons
const Github = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Typing Effect Component
const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-primary font-bold">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${inter.className}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-black text-primary ${outfit.className}`}
          >
            Jaimin Vaghasiya
          </motion.div>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-secondary">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5" />
              <div className="w-6 h-0.5 bg-current mb-1.5" />
              <div className="w-6 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 font-bold"
          >
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              React Native Specialist
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl md:text-7xl font-black mb-6 leading-[1.1] ${outfit.className}`}
            >
              Crafting <br />
              <TypingEffect
                texts={["Mobile Apps", "Admin Panels", "Performant Code"]}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Hi, I&apos;m{" "}
              <span className="text-foreground">Jaimin Vaghasiya</span>. A
              developer dedicated to building scalable, high-performance mobile
              applications and web-based admin panels.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-2xl text-base font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Start a Conversation
              </a>
              <div className="flex items-center gap-4 px-4 text-secondary">
                <a
                  href="https://github.com/jaiminvaghasiya2803"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jaimin-vaghasiya-0744a51a1"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1 relative max-w-md w-full aspect-square"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-6 scale-105" />
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-border shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Jaimin Vaghasiya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 text-primary ${outfit.className}`}
            >
              About Me
            </h2>
            <div className="h-1 w-20 mx-auto rounded-full bg-primary"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Column: Detailed Paragraphs */}
            <div className="md:w-1/2 space-y-6">
              <p className="leading-relaxed text-secondary font-medium">
                I have a strong understanding of{" "}
                <span className="text-foreground">
                  React Native&apos;s architecture
                </span>{" "}
                and know how to create and manage scalable mobile applications,
                complex state management, and high-performance UI components.
              </p>
              <p className="leading-relaxed text-secondary font-medium">
                I also have extensive experience with{" "}
                <span className="text-foreground">frontend development</span>{" "}
                using{" "}
                <span className="text-foreground">
                  Next.js, HTML, CSS, and JavaScript
                </span>
                , allowing me to build comprehensive full-stack admin ecosystems
                and web platforms.
              </p>
              <p className="leading-relaxed text-secondary font-medium">
                Additionally, I am proficient in creating custom modules to
                extend app functionality and integrating applications with
                third-party services,{" "}
                <span className="text-foreground">payment gateways</span>, and{" "}
                <span className="text-foreground">Shopify Storefront APIs</span>
                .
              </p>
              <p className="leading-relaxed text-secondary font-medium">
                I have deep knowledge of{" "}
                <span className="text-foreground">
                  performance optimization techniques
                </span>
                , automated testing with{" "}
                <span className="text-foreground">Maestro</span>, and ensuring
                seamless user experiences across both iOS and Android platforms.
              </p>
              <p className="leading-relaxed text-secondary font-medium">
                Throughout my career, I have led the development of large-scale
                e-commerce projects and mobile apps for retail giants, resulting
                in{" "}
                <span className="text-foreground">
                  improved customer engagement
                </span>{" "}
                and streamlined business operations.
              </p>
              <p className="leading-relaxed text-secondary font-medium">
                I am passionate about{" "}
                <span className="text-foreground">
                  mentoring junior developers
                </span>{" "}
                and driving engineering best practices, including code reviews,
                modular architecture, and automated CI/CD workflows.
              </p>
              <p className="leading-relaxed text-secondary font-medium">
                Right now, I am working as a{" "}
                <span className="text-foreground">React Native Developer</span>,
                where I continue to push the boundaries of mobile innovation and
                scalable enterprise solutions.
              </p>
            </div>

            {/* Right Column: Info Card */}
            <div className="md:w-1/2">
              <div className="p-6 rounded-lg shadow-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start text-sm">
                    <span className="font-semibold mr-2 text-secondary">
                      Email:
                    </span>
                    <a
                      href="mailto:vaghasiyajaimin28@gmail.com"
                      className="hover:underline text-primary font-medium lowercase"
                    >
                      vaghasiyajaimin28@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="font-semibold mr-2 text-secondary">
                      Phone:
                    </span>
                    <a
                      href="tel:+918735903175"
                      className="hover:underline text-primary font-medium"
                    >
                      +91 8735903175
                    </a>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="font-semibold mr-2 text-secondary">
                      Website:
                    </span>
                    <a
                      href="#"
                      className="hover:underline text-primary font-medium"
                    >
                      jaiminvaghasiya2803.github.io
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Expertise
                  </h3>
                  <ul className="list-disc pl-5 text-secondary text-sm font-semibold space-y-2">
                    <li>React Native & Expo Development</li>
                    <li>Cross-platform Architecture</li>
                    <li>API Development & Integration</li>
                    <li>Team Leadership & Mentoring</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-primary ${outfit.className}`}
              >
                Work Experience
              </h2>
              <div className="h-1 w-20 mx-auto rounded-full bg-primary"></div>
            </div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              {[
                {
                  role: "React Native Developer",
                  company: "Neosoft Technologies",
                  period: "March 2026 – Present",
                  points: [
                    "Leading cross-platform mobile initiatives and architecting high-performance React Native applications.",
                    "Collaborating with global teams to deliver scalable enterprise solutions.",
                    "Mentoring developers and driving engineering best practices across the mobile team.",
                  ],
                },
                {
                  role: "React Native Developer",
                  company: "Bytes Technolab Pvt. Ltd",
                  period: "Feb 2025 – March 2026",
                  points: [
                    "Developed mobile applications and web admin panels using React Native, Expo, and Next.js.",
                    "Implemented Redux Toolkit, Zustand, and Maestro automation testing.",
                    "Architecting scalable solutions for enterprise-grade applications.",
                  ],
                },
                {
                  role: "React Native Developer",
                  company: "Metizsoft Solutions Pvt. Ltd",
                  period: "Dec 2021 – Feb 2025",
                  points: [
                    "Developed cross-platform apps for major retail brands including Westside, Sony, and Go Colors.",
                    "Integrated Shopify Storefront, REST, and GraphQL APIs for complex e-commerce flows.",
                    "Optimized application performance and improved load times significantly.",
                    "Managed Play Store and App Store deployment cycles for multiple production apps.",
                  ],
                },
              ].map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative mb-12 flex flex-col md:flex-row items-center ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot/Icon */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white -ml-4 z-10 shadow-lg">
                      <Briefcase className="w-4 h-4" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 ml-12 md:ml-0"}`}
                    >
                      <div className="p-6 rounded-lg shadow-lg bg-card border border-border group hover:border-primary/50 transition-all">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="font-medium mb-2 text-primary">
                          {exp.company}
                        </div>
                        <div className="text-sm mb-4 text-secondary">
                          {exp.period}
                        </div>
                        <ul className="space-y-2 text-secondary text-sm font-medium list-none">
                          {exp.points.map((point, i) => (
                            <li
                              key={i}
                              className={`flex items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                            >
                              <span
                                className={`mr-2 min-w-4 ${isEven ? "md:ml-2 md:mr-0" : ""}`}
                              >
                                •
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-blue-600 ${outfit.className}`}
              >
                Key Projects
              </h2>
              <div className="h-1 w-20 mx-auto rounded-full bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Discogs",
                  subtitle: "React Native, GraphQL, OAuth",
                  points: [
                    "Developed features for a global music marketplace with millions of releases.",
                    "Integrated REST and GraphQL APIs for artist, album, and collection data.",
                    "Implemented OAuth authentication and optimized performance for large data rendering.",
                  ],
                  tech: ["React Native", "GraphQL", "OAuth", "Maestro"],
                  link: "https://play.google.com/store/search?q=discogs&c=apps",
                },
                {
                  name: "Westside",
                  subtitle: "Shopify Storefront API, GraphQL",
                  points: [
                    "Developed a customer-facing e-commerce app for fashion and home products.",
                    "Integrated Shopify Storefront APIs for collections, cart, and checkout flows.",
                    "Implemented scalable state management and optimized API handling.",
                  ],
                  tech: ["React Native", "Shopify", "GraphQL", "Redux"],
                  link: "https://play.google.com/store/apps/details?id=com.westside",
                },
                {
                  name: "Go Colors",
                  subtitle: "React Native, Shopify, REST",
                  points: [
                    "Developed an e-commerce application for women's fashion and bottomwear.",
                    "Integrated Shopify and REST APIs for product catalogs and order management.",
                    "Implemented Firebase analytics and customer engagement tracking.",
                  ],
                  tech: ["React Native", "Shopify", "REST", "MoEngage"],
                  link: "https://play.google.com/store/apps/details?id=com.gocolors.android",
                },
                {
                  name: "DuckDuckBaby",
                  subtitle: "React Native E-Commerce",
                  points: [
                    "Developed a premium baby products app with 200+ categories.",
                    "Implemented wishlist, order tracking, and secure purchase workflows.",
                    "Integrated REST and GraphQL APIs for backend communication.",
                  ],
                  tech: ["React Native", "GraphQL", "Redux", "E-commerce"],
                  link: "https://play.google.com/store/apps/details?id=com.app.duckduckbaby",
                },
                {
                  name: "Vaastu Wisdom",
                  subtitle: "React Native, Specialized Guidance",
                  points: [
                    "Developed a mobile application focused on Vaastu guidance.",
                    "Built informative and user-friendly UI flows for content-driven experiences.",
                    "Independently handled development and feature implementation.",
                  ],
                  tech: ["React Native", "JS ES6", "Axios", "Independent"],
                  link: "https://play.google.com/store/apps/details?id=com.vaastuwisdom",
                },
                {
                  name: "InspX Control",
                  subtitle: "React JS, Redux Toolkit, Admin",
                  points: [
                    "Developed a web-based admin panel for pest control business management.",
                    "Built task management and digital signature workflows for operational teams.",
                    "Integrated REST APIs and implemented scalable Redux Toolkit architecture.",
                  ],
                  tech: ["React JS", "Redux Toolkit", "REST", "Forms"],
                },
                {
                  name: "GoGrads Portal",
                  subtitle: "Next.js, Talent Management",
                  points: [
                    "Developed an admin portal for internship and talent management operations.",
                    "Built dashboards for application and organization management.",
                    "Implemented scalable frontend architecture using Next.js.",
                  ],
                  tech: ["Next.js", "Redux", "REST", "Auth"],
                },
                {
                  name: "JuniorIQ",
                  subtitle: "Expo, Zustand, Educational",
                  points: [
                    "Developed an educational mobile application for children with interactive games.",
                    "Built story-based learning modules and engaging UI components.",
                    "Implemented lightweight state management using Zustand.",
                  ],
                  tech: ["Expo", "Zustand", "NativeWind", "Educational"],
                },
                {
                  name: "Sony PS5 Kiosk",
                  subtitle: "React Native, Digital Kiosk",
                  points: [
                    "Developed a retail kiosk application for showcasing PlayStation games.",
                    "Built interactive product browsing experiences optimized for kiosk devices.",
                    "Implemented responsive UI flows and performance optimizations.",
                  ],
                  tech: ["React Native", "Kiosk", "UX Optimization"],
                },
                {
                  name: "Go Colors Store App",
                  subtitle: "React Native, Shopify, Internal",
                  points: [
                    "Developed an internal store management application for retail staff operations.",
                    "Built product browsing and purchase management workflows.",
                    "Integrated Shopify backend services and REST APIs.",
                  ],
                  tech: ["React Native", "Shopify", "REST", "Internal"],
                },
                {
                  name: "Shop at Sony Center",
                  subtitle: "React Native, Internal Operations",
                  points: [
                    "Developed an internal staff application for managing orders.",
                    "Built workflows for finance-related operations and order tracking.",
                    "Participated in debugging, optimization, and deployment activities.",
                  ],
                  tech: ["React Native", "Operations", "Finance"],
                },
              ].map((project, idx) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-card/50 flex flex-col h-full"
                >
                  <div className="h-3 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          className="p-1 rounded-full text-blue-600 hover:text-blue-500 transition-colors"
                        >
                          <ExternalLink className="w-[18px] h-[18px]" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm mb-4 text-blue-600 font-medium">
                      {project.subtitle}
                    </p>

                    <ul className="mb-4 space-y-2 text-secondary flex-1">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://github.com/jaiminvaghasiya2803"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                Explore More on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 text-blue-600 ${outfit.className}`}
            >
              Technical Mastery
            </h2>
            <div className="h-1 w-20 mx-auto rounded-full bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-[2rem] bg-blue-600 text-white shadow-xl shadow-blue-600/20 space-y-6">
              <Star className="w-10 h-10 text-white/50" />
              <h3 className="text-2xl font-bold">Primary Expertise</h3>
              <div className="space-y-4">
                {[
                  { label: "React Native", val: "4.4 Years" },
                  { label: "JavaScript", val: "4.4 Years" },
                  { label: "TypeScript", val: "2 Years" },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className="flex justify-between items-center border-b border-white/10 pb-2"
                  >
                    <span className="font-bold">{skill.label}</span>
                    <span className="text-xs font-black uppercase bg-white/20 px-2 py-1 rounded">
                      {skill.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Core Stack",
                  items: [
                    "React JS",
                    "Next.js",
                    "Expo CLI",
                    "React Native CLI",
                  ],
                },
                {
                  title: "State & Data",
                  items: ["Redux Toolkit", "Zustand", "GraphQL", "REST API"],
                },
                {
                  title: "DevOps & Tools",
                  items: ["Maestro", "Firebase", "Git / GitLab", "Axios"],
                },
                {
                  title: "Specialized",
                  items: ["MoEngage", "Shopify API", "NativeWind", "OAuth"],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="p-6 rounded-2xl border border-border bg-card/50 hover:border-blue-600/30 transition-colors"
                >
                  <h4 className="text-xs uppercase tracking-widest text-blue-600 font-black mb-4">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-background text-xs font-bold border border-border text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-card/30 border border-border flex flex-wrap justify-center gap-12">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Analytical Thinking",
              "Time Management",
              "Communication",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 text-sm font-bold text-secondary italic"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 text-blue-600 ${outfit.className}`}
            >
              Education
            </h2>
            <div className="h-1 w-20 mx-auto rounded-full bg-blue-600"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                degree: "B.E. in Information Technology",
                school: "Gujarat Tech University",
                period: "2022 – 2025",
              },
              {
                degree: "Diploma in Information Technology",
                school: "Gujarat Tech University",
                period: "2018 – 2022",
              },
            ].map((edu) => (
              <div
                key={edu.degree}
                className="p-8 rounded-xl border border-border border-t-4 border-t-blue-600 bg-card shadow-sm hover:shadow-md transition-all"
              >
                <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                <div className="text-blue-600 font-semibold text-sm mb-1">
                  {edu.school}
                </div>
                <div className="text-secondary text-xs font-bold">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-600/20"
          >
            <h2
              className={`text-4xl md:text-6xl font-black mb-8 ${outfit.className}`}
            >
              Ready to Build <br />
              <span className="text-blue-600">Something Great?</span>
            </h2>
            <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              I am currently open to full-time opportunities and interesting
              projects. Let&apos;s talk about how I can help your team.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:vaghasiyajaimin28@gmail.com"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-blue-600/20"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a
                href="tel:+918735903175"
                className="bg-background border border-border text-foreground px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>

            <div className="mt-20 pt-10 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center gap-3 text-secondary font-bold">
                <MapPin className="w-5 h-5 text-blue-600" />
                Mumbai, India
              </div>
              <div className="flex items-center justify-center gap-3 text-secondary font-bold">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Open for Relocation
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div
            className={`text-2xl font-black text-primary ${outfit.className}`}
          >
            Jaimin Vaghasiya
          </div>
          <div className="text-muted text-sm font-bold">
            © 2025 Jaimin Vaghasiya. Built with Next.js & Passion.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/jaiminvaghasiya2803"
              target="_blank"
              className="text-muted hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaimin-vaghasiya-0744a51a1"
              target="_blank"
              className="text-muted hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
