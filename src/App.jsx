import React from 'react'
import { motion } from 'framer-motion'
import HeroCanvas from './components/HeroCanvas'
import Nav from './components/Nav'

export default function App() {
  const skills = {
    Frontend: ["React.js", "Angular", "Vue.js", "Next.js", "Redux", "Tailwind CSS", "Material-UI", "TypeScript", "HTML5", "CSS3", "JavaScript"],
    Backend: ["Node.js", "Express.js", "Nest.js", "FastAPI", "Django", "Flask", "GraphQL", "REST API", "WebSocket"],
    "AI / ML": ["OpenAI API", "LangChain", "Hugging Face", "TensorFlow", "PyTorch", "RAG", "NLP", "IBM Watson Assistant", "Dialogflow", "RASA NLU", "Stable Diffusion"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Elasticsearch", "Neo4j", "IBM Db2"],
    "Cloud & DevOps": ["AWS", "IBM Cloud", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "CloudFormation", "CI/CD"],
    Testing: ["Jest", "Cypress", "Mocha", "Postman", "OAuth 2.0", "JWT", "API Testing", "WebRTC", "Socket.io"]
  }

  const experiences = [
    {
      title: "Full Stack Developer | Cognizant Technology Services",
      period: "Nov 2020 – Present",
      bullets: [
        "Delivered 6+ enterprise applications (React, Node.js, PostgreSQL) for 50K+ users with 99.9% uptime.",
        "Built 4 AI chatbots for document retrieval, expenses, and leave management; reduced manual workload by 30%.",
        "Designed Generative AI invoice retrieval cutting search from 2 minutes to < 10 seconds.",
        "Optimized APIs & DB queries for 45% faster responses; improved Lighthouse scores.",
        "Automated CI/CD with Jenkins & GitHub Actions on Kubernetes; cut deployment from 60 min to 10 min."
      ]
    },
    {
      title: "Full Stack Developer | Oasys Cybernetics",
      period: "Nov 2019 – Aug 2020",
      bullets: [
        "Developed Hospital Management System reducing patient admin time by 25%.",
        "Designed modular Angular components enabling 40% faster feature delivery.",
        "Implemented Dockerized CI/CD workflows improving deployment reliability."
      ]
    },
    {
      title: "Full Stack Developer | Memorres Digital",
      period: "Mar 2019 – Oct 2019",
      bullets: [
        "Created RAGA chatbot (RASA NLU + Dialogflow) serving 5K+ users in real time.",
        "Improved frontend data fetching by 60% with optimized GraphQL + REST APIs.",
        "Managed multi-cloud infrastructure with Terraform improving DR readiness by 35%."
      ]
    },
    {
      title: "Full Stack Developer | Abbigale Cloud Services",
      period: "Aug 2015 – Feb 2019",
      bullets: [
        "Built telemedicine platform for 10K+ patients; reduced wait times by 50%.",
        "Deployed multi-channel chatbots (Slack/WhatsApp/Messenger) increasing engagement by 35%.",
        "Mentored 4 developers raising sprint velocity by 20%."
      ]
    }
  ]

  const projects = [
    {
      name: "MAXHUB AI Chatbot",
      tagline: "Internal support automation",
      items: [
        "IBM Watson Assistant integration reduced support tickets by 25%.",
        "Built secure backend with Node.js and role-based access."
      ]
    },
    {
      name: "Caterpillar Digital Marketplace",
      tagline: "SEO & conversion uplift",
      items: [
        "React components optimized for SEO increased organic traffic by 30%.",
        "Server-side rendering & code-splitting for faster TTFB."
      ]
    },
    {
      name: "SANOFI Finance Chatbot",
      tagline: "GenAI + SAP integration",
      items: [
        "Reduced finance query handling time by 40%.",
        "Integrated with SAP and retrieval-augmented generation (RAG)."
      ]
    },
    {
      name: "AI Invoice Retrieval",
      tagline: "GenAI-powered search",
      items: [
        "Cut invoice search time from 2 minutes to under 10 seconds.",
        "Hybrid search with embeddings + keyword for precision."
      ]
    }
  ]

  return (
    <div className="font-display">
      <Nav />

      {/* HERO */}
      <section className="relative h-[92vh] overflow-hidden">
        <HeroCanvas />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Ravi <span className="text-brand-500">Surapati</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-3 text-lg md:text-2xl text-slate-300"
          >
            Full Stack Developer • Generative AI & Chatbot Specialist
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <a href="#projects" className="px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-700 transition shadow-glow">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-slate-900/70 border border-slate-700 hover:border-brand-600 transition">Contact</a>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      </section>

      {/* ABOUT */}
      <section id="about" className="section py-20">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2 card">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-slate-300 leading-relaxed">
              Full Stack Developer with 9+ years building scalable, AI‑powered applications in React, Node.js, and Python.
              Proven track record delivering enterprise chatbots, Generative AI solutions, and high‑performance web platforms that cut costs by up to 40% and serve 50K+ users with 99.9% uptime.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
            <ul className="space-y-2 text-slate-300">
              <li>🏆 9+ years experience</li>
              <li>👥 50K+ users served</li>
              <li>⚡ 99.9% uptime</li>
              <li>🤖 4+ enterprise chatbots</li>
              <li>🚀 CI/CD in 10 minutes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section py-20">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="card">
              <h3 className="font-semibold mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => <span key={s} className="badge">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section py-20">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800" />
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="pl-10">
                <div className="card">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-slate-400 text-sm">{exp.period}</span>
                  </div>
                  <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section py-20">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="card">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-slate-400 text-sm">{p.tagline}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1">
                {p.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section py-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="card">
          <p className="text-slate-300">Open to roles in Full Stack, Generative AI, and Platform Engineering.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:ravisurapati12@gmail.com" className="badge">📧 ravisurapati12@gmail.com</a>
            <a href="tel:+918106258635" className="badge">📱 +91-8106258635</a>
            <a href="https://www.linkedin.com/in/ravikumar-surapati-b7969aa2" target="_blank" rel="noreferrer" className="badge">🔗 LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="section pb-10 text-center text-slate-500">
        © {new Date().getFullYear()} Ravi Surapati • Built with React, Three.js & Tailwind
      </footer>
    </div>
  )
}
