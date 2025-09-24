
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Bookhub from '../Images/Bookhub.png';
import Feje from '../Images/Feje.png';
import Patrick from '../Images/patrick.png';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "BookHub",
    desc: "Step into Bookhub, your secret cave of books! Join the adventure and let's explore the endless wonders of reading together!",
    image: Bookhub,
    tech: ["React.js", "TailwindCSS", "Framer Motion", "FontAwesome"],
    link: "#",
    modalDetails: "Built for large teams and scalability. Includes authentication, real-time data, and custom charts."
  },
  {
    title: "Feje Digital",
    desc: "A smooth, animated online store focused on user experience and performance.",
    image: Feje,
    tech: ["React.js", "Tailwind", "Fontawesome", "Vite"],
    link: "#",
    modalDetails: "Custom checkout flow, seamless cart, adaptive product grid. Optimized core web vitals."
  },
  {
    title: "E-commerce Book Store",
    desc: "Minimal, elegant e-comm website CMS engineered for publishing and selling books.",
    image: Patrick,
    tech: ["PHP", "Fontawesome", "CSS"],
    link: "#",
    modalDetails: "Markdown-based, easy theming, great Lighthouse scores, shareable content blocks."
  }
];

const Projects = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="projects"
      className={cn(
        "py-16 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <h2 className="font-playfair text-3xl md:text-4xl mb-10 text-primary font-bold text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {projects.map((proj, i) => (
          <div
            key={proj.title}
            className="group bg-card rounded-xl shadow-card overflow-hidden border border-border hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer relative"
            onClick={() => setOpen(i)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpen(i); }}
          >
            <img src={proj.image} alt={proj.title} className="object-cover w-full h-48" />
            <div className="p-5">
              <h3 className="font-playfair text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="font-inter text-muted-foreground mb-3 min-h-[48px]">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 pb-1">
                {proj.tech.map((tech) => (
                  <span className="text-xs text-accent bg-accent/10 border border-accent rounded px-2 py-0.5 tracking-wide font-medium" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-background to-accent transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
      {open !== null && (
        <ProjectModal
          title={projects[open].title}
          image={projects[open].image}
          description={projects[open].modalDetails}
          tech={projects[open].tech}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
};

export default Projects;
