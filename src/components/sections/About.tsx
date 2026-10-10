import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { profileData } from "../../data/profile";
import { BookOpen, Cpu, Wrench, Target } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#121216]/50 border-t border-[#272730]"
    >
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="My background, academic foundation, and approach to software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>{profileData.bio}</p>
            <p>
              My technical journey covers full-stack web engineering, frontend
              responsiveness, backend REST APIs, and exploratory machine
              learning modeling. I enjoy tackling concrete operational
              challenges—whether designing agricultural market platforms like{" "}
              <em>Kiawara OnionLink</em> or streamlined property management
              systems like <em>Zion City Flats</em>.
            </p>
            <p>
              With a solid grounding in Information Technology from Dedan
              Kimathi University of Technology, I prioritize clean architecture,
              robust error handling, and writing maintainable code that delivers
              real utility.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-[#18181f] border border-[#272730] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">Education</h3>
              <p className="text-sm text-gray-400">
                {profileData.education.degree}
              </p>
              <p className="text-xs text-emerald-400">
                {profileData.education.institution}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#18181f] border border-[#272730] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">AI & ML Focus</h3>
              <p className="text-sm text-gray-400">
                Predictive modeling using Python, scikit-learn, and XGBoost.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#18181f] border border-[#272730] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">IT Support</h3>
              <p className="text-sm text-gray-400">
                System troubleshooting, hardware/software diagnostics, and
                deployment.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#18181f] border border-[#272730] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">Objective</h3>
              <p className="text-sm text-gray-400">
                Building practical software solutions for employers and clients.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
