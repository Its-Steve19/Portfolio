import React from "react";
import { Container } from "../ui/Container";
import { profileData } from "../../data/profile";
import { Github, Mail, MessageSquare, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0c] border-t border-[#272730] py-12 text-gray-400">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xl font-bold text-white">
              {profileData.name}
              <span className="text-emerald-500">.</span>
            </span>
            <p className="text-sm mt-1 text-gray-400 max-w-md">
              {profileData.title} focused on building robust, scalable web and
              AI applications.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#18181f] border border-[#272730] flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="w-10 h-10 rounded-lg bg-[#18181f] border border-[#272730] flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${profileData.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#18181f] border border-[#272730] flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#272730] text-sm gap-4">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
