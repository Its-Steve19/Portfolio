import React, { useState, useEffect } from "react";
import {
  Code2,
  Menu,
  X,
  Download,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  CheckCircle,
  Cpu,
  BookOpen,
  Sparkles,
  Send,
} from "lucide-react";

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const profile = {
    name: "Steve Kamau Mbuvi",
    title: "Full-Stack & AI/ML Developer",
    tagline:
      "Building practical, high-performance web applications and intelligent systems.",
    bio: "I am a Bachelor of Science in Information Technology student at Dedan Kimathi University of Technology, Kenya, concluding my studies in December. I specialize in full-stack development, modern frontend architectures, and AI/ML integration—focusing on solving real operational and business challenges with clean, robust code.",
    location: "Nyeri, Kenya",
    email: "stevecodehub@gmail.com",
    whatsapp: "+254714316854",
    whatsappFormatted: "+254 714 316 854",
    github: "https://github.com/Its-Steve19",
    education: {
      institution: "Dedan Kimathi University of Technology",
      degree: "Bachelor of Science in Information Technology",
      completion: "December",
    },
  };

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "Tailwind CSS" },
        { name: "HTML5 / CSS3" },
        { name: "Vite" },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "Authentication & Authorization" },
        { name: "Database Integration" },
      ],
    },
    {
      category: "Data & AI/ML",
      skills: [
        { name: "Python" },
        { name: "Flask" },
        { name: "scikit-learn" },
        { name: "XGBoost" },
        { name: "Data Processing & Model Evaluation" },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "PostgreSQL" },
        { name: "Prisma ORM" },
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "Responsive Web Design" },
        { name: "IT Support & Troubleshooting" },
      ],
    },
  ];

  const projects = [
    {
      id: "kiawara-onionlink",
      title: "Kiawara OnionLink",
      type: "Agricultural Trading & Market Intelligence Platform",
      summary:
        "A web-based onion market information, trading, and price-prediction platform designed to connect farmers and buyers directly.",
      problem:
        "Farmers in regions like Kiawara face information asymmetry regarding market prices, leading to exploitation by middlemen and unpredictable selling windows.",
      targetUsers:
        "Smallholder farmers, agricultural produce buyers, and market administrators.",
      role: "Lead Full-Stack & ML Developer (Architecting frontend workflows, backend API services, and machine learning price prediction integration).",
      features: [
        "Current and historical onion market price tracking across Kiawara, Karatina, Embu, and Meru",
        "Machine learning-powered price forecasting for upcoming harvest windows",
        "Farmer produce listings and direct buyer discovery workflows",
        "M-Pesa payment integration for secure transactions",
        "Comprehensive farmer sales and profit/loss reporting dashboard",
        "Administrative management portal",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Python",
        "XGBoost",
      ],
      challenges:
        "Handling time-series agricultural pricing data effectively and building reliable regression models with limited historical variance.",
      decisions:
        "Evaluated Linear Regression, Random Forest, and XGBoost; selected XGBoost for superior handling of non-linear price determinants. Used Prisma with PostgreSQL for type-safe database operations.",
      lessons:
        "Deepened practical understanding of deploying ML inference services alongside standard transactional Node.js backends.",
      status: "In Progress",
      githubUrl: "https://github.com/Its-Steve19",
    },
    {
      id: "zion-city-flats",
      title: "Zion City Flats",
      type: "Rental Property Management System",
      summary:
        "A streamlined web-based property management system tailored for multi-building residential complexes and rental units.",
      problem:
        "Manual rent tracking and record-keeping for multiple buildings create administrative friction, delayed verifications, and reconciliation errors.",
      targetUsers: "Property landlords, caretakers, and tenants.",
      role: "Full-Stack Developer (Designing backend data models, tenant workflows, and M-Pesa verification endpoints).",
      features: [
        "Tenant registration and administrative approval workflow",
        "Unit and tenant occupancy management across multiple buildings",
        "Rent payment tracking (with rent due on the 10th of each month)",
        "M-Pesa payment verification and status logs",
        "Caretaker role-based access to relevant tenant information",
        "Administrative reports and downloadable records",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      challenges:
        "Ensuring secure role-based access control (RBAC) so caretakers can access unit data without compromising administrative records.",
      decisions:
        "Implemented clean JWT-based authentication and modular Express routing to separate tenant, caretaker, and admin controllers.",
      lessons:
        "Emphasized robust audit trails and automated date triggers for monthly billing cycles.",
      status: "In Progress",
      githubUrl: "https://github.com/Its-Steve19",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-emerald-500 selection:text-white font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#272730] shadow-xl" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Steve <span className="text-emerald-500">Mbuvi</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Journey", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                  className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none"
                >
                  {item}
                </button>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="/documents/steve-kamau-mbuvi-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-all"
            >
              <Download className="w-4 h-4" /> CV Placeholder
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#121216] border-b border-[#272730] px-4 pt-2 pb-6 space-y-3">
            {["About", "Skills", "Projects", "Journey", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-emerald-400 hover:bg-[#18181f] bg-transparent border-none"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        )}
      </header>

      <main>
        <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181f] border border-[#272730] text-emerald-400 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5" /> Full-Stack & AI/ML
                  Developer
                </div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Hi, I'm{" "}
                  <span className="text-emerald-500">{profile.name}</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-2xl leading-relaxed">
                  {profile.tagline} Based in {profile.location}, I build secure,
                  high-performance web applications and intelligent data-driven
                  systems.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => scrollTo("#projects")}
                    className="inline-flex items-center gap-2 text-base px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium cursor-pointer"
                  >
                    View Projects <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="inline-flex items-center gap-2 text-base px-6 py-3 rounded-lg bg-[#18181f] hover:bg-[#22222d] text-gray-200 border border-[#272730] font-medium cursor-pointer"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-[#18181f] border border-[#272730] p-4 shadow-2xl flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
                    <Code2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">
                    DeKUT IT Student
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Professional Portrait Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-24 bg-[#121216]/50 border-t border-[#272730]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                About Me<span className="text-emerald-500">.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                My background, academic foundation, and approach to software
                development.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>{profile.bio}</p>
                <p>
                  My technical journey covers full-stack web engineering,
                  frontend responsiveness, backend REST APIs, and exploratory
                  machine learning modeling. I enjoy tackling concrete
                  operational challenges—whether designing agricultural market
                  platforms like <em>Kiawara OnionLink</em> or streamlined
                  property management systems like <em>Zion City Flats</em>.
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-[#18181f] border border-[#272730] space-y-3">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-white font-semibold">Education</h3>
                  <p className="text-sm text-gray-400">
                    {profile.education.degree}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#18181f] border border-[#272730] space-y-3">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-white font-semibold">AI & ML Focus</h3>
                  <p className="text-sm text-gray-400">
                    Predictive modeling using Python, scikit-learn, and XGBoost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 border-t border-[#272730]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Technical Capabilities
                <span className="text-emerald-500">.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Core tools, frameworks, and technologies I work with to build
                software.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((group) => (
                <div
                  key={group.category}
                  className="p-6 rounded-2xl bg-[#18181f] border border-[#272730] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-[#272730]">
                      {group.category}
                    </h3>
                    <ul className="space-y-3">
                      {group.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center gap-2.5 text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-24 bg-[#121216]/50 border-t border-[#272730]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Featured Projects & Case Studies
                <span className="text-emerald-500">.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Real-world applications built with robust backend logic and
                modern frontend architectures.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#18181f] border border-[#272730] overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        {project.status}
                      </span>
                      <span className="text-xs text-gray-400">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#121216] border border-[#272730] text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-[#121216]/60 border-t border-[#272730]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 cursor-pointer bg-transparent border-none"
                    >
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="py-24 border-t border-[#272730]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Professional Journey & Education
                <span className="text-emerald-500">.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                My academic background and technical milestones.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="relative pl-8 border-l-2 border-emerald-500/40 space-y-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-[#0a0a0c]" />
                <span className="text-xs text-emerald-400 font-medium">
                  Ongoing • Concluding December
                </span>
                <h3 className="text-xl font-bold text-white">
                  {profile.education.degree}
                </h3>
                <p className="text-sm text-gray-300">
                  {profile.education.institution}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 bg-[#121216]/50 border-t border-[#272730]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Get In Touch<span className="text-emerald-500">.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Have a project or opportunity? Let's connect.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 rounded-2xl bg-[#18181f] border border-[#272730] space-y-6">
                  <h3 className="text-xl font-bold text-white">
                    Contact Information
                  </h3>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#121216] border border-[#272730] text-gray-300 hover:text-emerald-400"
                  >
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-medium">{profile.email}</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleContactSubmit}
                  className="p-8 rounded-2xl bg-[#18181f] border border-[#272730] space-y-6"
                >
                  {status === "success" && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" /> Message sent
                      successfully!
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white text-sm focus:outline-none focus:border-emerald-500 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium cursor-pointer"
                  >
                    Send Message <Send className="w-4 h-4 ml-2 inline" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#18181f] border border-[#272730] rounded-2xl p-6 text-gray-300 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-[#272730]">
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-gray-400 hover:text-white cursor-pointer bg-transparent border-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="py-4 space-y-4">
              <p>
                <strong>Summary:</strong> {selectedProject.summary}
              </p>
              <p>
                <strong>Problem:</strong> {selectedProject.problem}
              </p>
              <p>
                <strong>Role:</strong> {selectedProject.role}
              </p>
              <h4 className="font-bold text-emerald-400">Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedProject.features.map((f: string, i: number) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
