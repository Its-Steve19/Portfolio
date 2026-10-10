import React, { useEffect } from "react";
import { Project } from "../../types";
import { X, Github, CheckCircle, AlertCircle, Cpu, User } from "lucide-react";
import { Button } from "../ui/Button";

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#18181f] border border-[#272730] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#272730] bg-[#121216]">
          <div>
            <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
              {project.type}
            </span>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#18181f] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-300">
          <div>
            <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-2">
              Project Summary
            </h4>
            <p className="text-base text-gray-200">{project.summary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-[#121216] border border-[#272730]">
              <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Problem Addressed
              </h4>
              <p className="text-sm text-gray-300">{project.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121216] border border-[#272730]">
              <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-4 h-4" /> Target Users & Role
              </h4>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Users:</strong> {project.targetUsers}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Role:</strong> {project.role}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> Main Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-300 bg-[#121216] p-3 rounded-lg border border-[#272730]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Technical Architecture & Decisions
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Challenges:</strong> {project.challenges}
              </p>
              <p>
                <strong>Decisions:</strong> {project.decisions}
              </p>
              <p>
                <strong>Lessons Learned:</strong> {project.lessons}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#121216] border border-[#272730] text-xs font-medium text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[#272730] bg-[#121216]">
          <span className="text-xs text-gray-400">
            Status:{" "}
            <strong className="text-emerald-400">{project.status}</strong>
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                external
              >
                <Github className="w-4 h-4" /> Repository
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={onClose}>
              Close Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
