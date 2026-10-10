import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
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
