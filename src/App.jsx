import React from 'react'
import { motion } from 'framer-motion'
import HeroCanvas from './components/HeroCanvas'
import Nav from './components/Nav'

export default function App() {
  // Skills
  const skills = {
    Frontend: ["React.js", "Angular", "Vue.js", "Next.js", "Redux", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    Backend: ["Node.js", "Express.js", "Nest.js", "Django", "Flask", "FastAPI", "GraphQL", "REST API"],
    "AI & ML": ["IBM Watson Assistant", "Dialogflow", "RASA", "Hugging Face", "TensorFlow", "PyTorch", "Keras", "spaCy", "NLP", "Generative AI"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "IBM Db2"],
    "Cloud & DevOps": ["AWS", "IBM Cloud", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "CI/CD"],
    Testing: ["Jest", "Mocha", "Cypress", "Postman", "OAuth 2.0", "JWT"]
  }

  // Experience
  const experiences = [
    {
      title: "Full Stack Developer | Cognizant Technology Services",
      period: "Nov 2020 – Present",
      bullets: [
        "Developed end-to-end web apps on IBM Cloud with Node.js, React.js, PostgreSQL.",
        "Specialized in AI-driven features and chatbot development with IBM Watson.",
        "Built & integrated multiple chatbots for document retrieval, expenses, and leave mgmt.",
        "Applied Python ML libraries (TensorFlow, Keras, scikit-learn, Hugging Face) for AI/GenAI.",
        "Ensured secure data management with IBM Db2 and pgAdmin."
      ]
    },
    {
      title: "Full Stack Developer | Oasys Cybernetics",
      period: "Nov 2019 – Aug 2020",
      bullets: [
        "Developed Angular frontends and Node.js backends for scalable apps.",
        "Integrated REST APIs and GraphQL for efficient data exchange.",
        "Implemented CI/CD with Jenkins, GitHub Actions, Docker, and Kubernetes.",
        "Applied Terraform & Ansible for cloud infra provisioning.",
        "Monitored apps with Prometheus, Grafana, ELK stack."
      ]
    },
    {
      title: "Full Stack Developer | Memorres Digital",
      period: "Mar 2019 – Oct 2019",
      bullets: [
        "Designed Angular apps and chatbots using RASA NLU & Dialogflow.",
        "Enhanced performance with optimized frontend data flows.",
        "Worked in agile teams to deliver features rapidly."
      ]
    },
    {
      title: "Full Stack Developer | Abbigale Cloud Services",
      period: "Aug 2015 – Feb 2019",
      bullets: [
        "Built secure and scalable PHP + Angular web apps.",
        "Deployed apps to cloud platforms with optimized cost and performance.",
        "Led development teams and mentored junior developers."
      ]
    }
  ]

  // Projects
  const projects = [
    {
      name: "Sanofi Chatbots",
      tagline: "Enterprise AI Assistants",
      items: [
        "Built chatbots with IBM Watson Assistant integrated with SAP.",
        "Managed invoices, travel expenses, leave, and documents retrieval.",
        "Implemented with Node.js, Vue.js, and IBM Db2."
      ]
    },
    {
      name: "Caterpillar Digital Marketplace",
      tagline: "One-stop developer platform",
      items: [
        "Developed new user-facing features and reusable libraries.",
        "Implemented SEO best practices to boost visibility.",
        "Delivered UI fixes, performance optimizations, and cross-browser compatibility."
      ]
    },
    {
      name: "HMIS",
      tagline: "Hospital Management System",
      items: [
        "Automated patient data & admin workflows with Angular4 + Node.js.",
        "Implemented CI/CD using Jenkins & Docker.",
        "Created responsive UI with Bootstrap and CSS layouts."
      ]
    },
    {
      name: "E-Medical Application",
      tagline: "Telemedicine Platform",
      items: [
        "Enabled video/audio consultations with doctors on web & mobile.",
        "Implemented secure patient data handling and booking system.",
        "Provided specialist directory for easier patient-doctor interaction."
      ]
    },
    {
      name: "AI Chatbots",
      tagline: "Generative AI Assistants",
      items: [
        "Built AI agents automating invoices, expenses, leave workflows.",
        "Integrated SAP with contextual queries using Hugging Face Transformers.",
        "Applied Python ML for predictive analytics and NLP."
      ]
    }
  ]

  return (
    <div className="font-display bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Nav />

      {/* HERO */}
      <section className="relative h-[92vh] overflow-hidden">
        <HeroCanvas />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Ravi <span className="text-cyan-400">Surapati</span>
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
            <a href="#projects" className="px-5 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition shadow-lg">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-slate-800 border border-cyan-400 text-cyan-300 hover:bg-slate-700 transition">Contact</a>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900 pointer-events-none" />
      </section>

      {/* ABOUT */}
      <section id="about" className="section py-20">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">About</h2>
            <p className="text-slate-300 leading-relaxed">
             A highly skilled Full-Stack Developer with 9 years of experience in designing, developing, and deploying end-to-end web applications across diverse industries. Proficient in integrating AI and Generative AI solutions using platforms such as IBM Watson Assistant, Google Dialogflow, and Hugging Face Transformers.

Adept at building intelligent, conversational interfaces and automating workflows through advanced chatbot development. Expertise spans modern web technologies (React, Angular, Node.js, HTML, CSS) with a strong foundation in cloud-native infrastructure for scalable, maintainable deployments.

Experienced in leveraging Python for machine learning and Generative AI, including natural language processing (NLP), text generation, and predictive analytics, using frameworks such as TensorFlow, Keras, scikit-learn, Pandas, and spaCy.

Passionate about creating smart, user-centric applications that blend robust engineering with cutting-edge AI capabilities.  </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Quick Stats</h3>
            <ul className="space-y-2 text-slate-300">
              <li>🏆 9+ years experience</li>
              <li>🤖 Generative AI & Chatbot Specialist</li>
              <li>⚡ Expert in React, Node.js, Python</li>
              <li>☁️ Cloud & DevOps (AWS, IBM Cloud, K8s)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section py-20">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold mb-3 text-cyan-300">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => <span key={s} className="px-3 py-1 rounded-full border border-cyan-500 bg-slate-800 text-cyan-300">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section py-20">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="pl-10">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-lg font-semibold text-cyan-300">{exp.title}</h3>
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
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cyan-300">{p.name}</h3>
                <span className="text-cyan-500 text-sm">{p.tagline}</span>
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
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Contact</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-300">Open to Full Stack, Generative AI, and Chatbot roles.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:ravisurapati12@gmail.com" className="px-3 py-1 rounded-full border border-cyan-500 bg-slate-800 text-cyan-300">📧 ravisurapati12@gmail.com</a>
            <a href="tel:+918106258635" className="px-3 py-1 rounded-full border border-cyan-500 bg-slate-800 text-cyan-300">📱 +91-8106258635</a>
            <a href="https://www.linkedin.com/in/ravikumar-surapati-b7969aa2" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full border border-cyan-500 bg-slate-800 text-cyan-300">🔗 LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="section pb-10 text-center text-slate-500">
        © {new Date().getFullYear()} Ravi Surapati • Built with React, Three.js & Tailwind
      </footer>
    </div>
  )
}
