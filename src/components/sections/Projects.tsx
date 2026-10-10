import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { projectsData } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectDetails } from "../projects/ProjectDetails";
import { Project } from "../../types";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-[#121216]/50 border-t border-[#272730]"
    >
      <Container>
        <SectionHeading
          title="Featured Projects & Case Studies"
          subtitle="Real-world applications built with robust backend logic, modern frontend architectures, and data intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};
