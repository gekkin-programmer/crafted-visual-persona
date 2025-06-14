
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Modern SaaS Dashboard UI",
    desc: "A feature-rich, fully responsive admin dashboard for data-driven platforms.",
    image: "/photo-1487058792275-0ad4aaf24ca7",
    tech: ["React", "Tailwind", "TypeScript", "Shadcn UI"],
    link: "#",
    modalDetails: "Built for large teams and scalability. Includes authentication, real-time data, and custom charts."
  },
  {
    title: "E-Commerce Experience",
    desc: "A smooth, animated online store focused on user experience and performance.",
    image: "/photo-1488590528505-98d2b5aba04b",
    tech: ["React", "API", "Redux"],
    link: "#",
    modalDetails: "Custom checkout flow, seamless cart, adaptive product grid. Optimized core web vitals."
  },
  {
    title: "Personal Blog Platform",
    desc: "Minimal, elegant blog CMS engineered for publishing and growth.",
    image: "/photo-1461749280684-dccba630e2f6",
    tech: ["Next.js", "MDX", "SEO"],
    link: "#",
    modalDetails: "Markdown-based, easy theming, great Lighthouse scores, shareable content blocks."
  }
];

const Projects = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 animate-fade-in">
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
