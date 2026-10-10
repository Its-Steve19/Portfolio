import React from "react";
import { Project } from "../../types";
import { Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  return (
    <div className="rounded-2xl bg-[#18181f] border border-[#272730] overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            {project.status}
          </span>
          <span className="text-xs text-gray-400">{project.type}</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
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
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="px-6 py-4 bg-[#121216]/60 border-t border-[#272730] flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 cursor-pointer"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
