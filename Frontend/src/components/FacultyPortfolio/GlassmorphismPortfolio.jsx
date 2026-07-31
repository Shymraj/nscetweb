import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  GraduationCap,
  Award,
  FileText,
  Globe,
  BookOpen,
  Briefcase,
  Trophy,
  User,
  Lightbulb,
  Microscope
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function GlassmorphismPortfolio({ faculty }) {
  // Fallbacks for baseline safety
  const name = faculty?.name || "Faculty Member";
  const desig = faculty?.desig || "Assistant Professor";
  const qual = faculty?.qual || "M.E., Ph.D";
  const email = faculty?.email || "civil@nscet.org";
  const image = faculty?.image || "";
  const spec = faculty?.spec || "Civil Engineering";
  const linkedin = faculty?.linkedin || "";
  const department = "Department of Civil Engineering";

  const listVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  // Helper for Section rendering
  const renderSection = (title, icon, items) => {
    if (!items || items.length === 0) return null;
    return (
      <motion.div
        variants={itemVariants}
        className="group relative overflow-hidden rounded-[2rem] border border-border/30 bg-background/30 p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:border-border/50 hover:bg-background/40 highlight-card"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground faculty-heading">
            {title}
          </h3>
        </div>
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-foreground/80 highlight-desc">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen overflow-visible px-6 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT SIDEBAR - STICKY PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/40 p-8 text-center backdrop-blur-3xl glass-portfolio-card shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              {/* Avatar */}
              <div className="relative mx-auto mb-6 flex justify-center">
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl opacity-70" />
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="relative h-44 w-44 rounded-full border-[3px] border-background/50 object-cover shadow-xl faculty-avatar"
                    style={{ objectPosition: faculty?.objectPosition || "center 15%" }}
                  />
                ) : (
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[3px] border-background/50 bg-background/80 text-foreground/40 shadow-xl">
                    <User className="h-16 w-16" />
                  </div>
                )}
              </div>

              {/* Name & Title */}
              <div className="space-y-2 mb-8 relative z-10">
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground faculty-name leading-tight">
                  {name}
                </h2>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary faculty-role">
                  {desig}
                </p>
                <p className="text-sm font-medium text-foreground/60 mt-2 faculty-subtext">
                  {qual}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 relative z-10">
                <Button
                  size="lg"
                  onClick={() => window.location.href = `mailto:${email}`}
                  className="w-full gap-3 rounded-xl h-12 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all duration-300 shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-bold tracking-wide">Official Email</span>
                </Button>
                
                {linkedin && (
                  <Button
                    size="lg"
                    onClick={() => window.open(linkedin, '_blank')}
                    variant="outline"
                    className="w-full gap-3 rounded-xl h-12 bg-background/50 hover:bg-background/80 border-border/40 transition-all duration-300 shadow-sm text-foreground/80"
                  >
                    <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
                    <span className="text-sm font-bold tracking-wide">LinkedIn Profile</span>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT AREA */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-8"
          >
            {/* About / Professional Summary */}
            {(faculty?.about || faculty?.highlights) && (
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-background/40 p-8 md:p-10 backdrop-blur-3xl glass-portfolio-card shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <User className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground faculty-heading">
                    Professional Summary
                  </h3>
                </div>
                
                {faculty?.about ? (
                  <p className="text-base md:text-[1.05rem] leading-relaxed text-foreground/80 faculty-subtext">
                    {faculty.about}
                  </p>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {faculty.highlights.map((item, index) => (
                      <div key={index} className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 highlight-title">
                          {item.title}
                        </p>
                        <p className="text-[0.95rem] leading-relaxed text-foreground/80 highlight-desc">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Research Domains / Specialization */}
            {spec && (
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-[2rem] border border-border/30 bg-background/30 p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:border-border/50 highlight-card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Microscope className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground faculty-heading">
                    Research Domains & Specializations
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {spec.split('&').map((domain, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-background/50 border-border/40 backdrop-blur-md text-foreground/80"
                    >
                      {domain.trim()}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Dynamic Academic Sections */}
            {renderSection("Professional Experience", <Briefcase className="h-6 w-6" />, faculty?.experience)}
            {renderSection("Selected Publications", <BookOpen className="h-6 w-6" />, faculty?.publications)}
            {renderSection("Funded Projects & Consultancy", <FileText className="h-6 w-6" />, faculty?.projects)}
            {renderSection("Patents & Innovations", <Lightbulb className="h-6 w-6" />, faculty?.patents)}
            {renderSection("Awards & Recognition", <Trophy className="h-6 w-6" />, faculty?.awards)}

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GlassmorphismPortfolio;
