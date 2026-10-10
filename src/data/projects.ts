import { Project } from "../types";

export const projectsData: Project[] = [
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
    image: "/images/projects/onionlink.svg",
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
    image: "/images/projects/zion.svg",
  },
];
