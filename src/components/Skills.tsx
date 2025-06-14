
const skills = [
  "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js",
  "Shadcn UI", "Figma", "Framer Motion", "Vite", "Redux", "API Design", "UI/UX"
];

const Skills = () => (
  <section id="skills" className="py-14 animate-fade-in">
    <h2 className="font-playfair text-3xl md:text-4xl mb-10 text-primary font-bold text-center">
      Skills & Tools
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
      {skills.map(skill => (
        <span
          key={skill}
          className="bg-secondary text-secondary-foreground font-inter font-medium px-4 py-2 rounded-full shadow hover:bg-accent hover:text-white transition duration-200 text-center"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
