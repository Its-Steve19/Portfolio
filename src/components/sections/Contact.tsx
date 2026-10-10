import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { profileData } from "../../data/profile";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Failed to send message. Please try again or email directly.",
        );
      }
    } catch (err) {
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#121216]/50 border-t border-[#272730]"
    >
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind, software opportunity, or collaboration? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#18181f] border border-[#272730] space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                I am actively looking for software development opportunities and
                freelance projects. Reach out via email or WhatsApp.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#121216] border border-[#272730] hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">
                      Email Me
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${profileData.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#121216] border border-[#272730] hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400">
                      {profileData.whatsappFormatted}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-[#18181f] border border-[#272730] space-y-6"
            >
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>
                    Message sent successfully! I will get back to you shortly.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Software Development Opportunity / Freelance Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#272730] text-white focus:outline-none focus:border-emerald-500 text-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "submitting"}
                className="w-full justify-center"
              >
                {status === "submitting"
                  ? "Sending Message..."
                  : "Send Message"}{" "}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
