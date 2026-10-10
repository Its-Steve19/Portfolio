import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { profileData } from "../../data/profile";
import {
  ArrowRight,
  Download,
  Github,
  Mail,
  Code,
  Sparkles,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181f] border border-[#272730] text-emerald-400 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack & AI/ML Developer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="text-emerald-500">{profileData.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-2xl leading-relaxed">
              {profileData.tagline} Based in {profileData.location}, I build
              secure, high-performance web applications and intelligent
              data-driven systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary" size="lg" href="#projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/documents/steve-kamau-mbuvi-cv.pdf"
                external
              >
                <Download className="w-4 h-4" /> Download CV
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 text-sm text-gray-400">
              <span className="font-medium text-gray-300">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <span>•</span>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-[#18181f] border border-[#272730] p-4 shadow-2xl flex flex-col items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl pointer-events-none" />

              <div className="w-28 h-28 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
                <Code className="w-12 h-12" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {profileData.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  DeKUT IT Student
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Professional Portrait Placeholder
                </p>
              </div>

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#0a0a0c] border border-[#272730] text-[10px] text-gray-400">
                Ready for Photo
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
