
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const About = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={cn(
        "py-16 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <h2 className="font-playfair text-3xl md:text-4xl mb-8 text-primary font-bold text-center">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-center text-lg font-inter text-muted-foreground leading-relaxed">
        <p>
          I'm a passionate developer and designer committed to building <span className="text-accent font-semibold">exceptional</span> products that inspire and engage.
          My approach blends technical expertise with a love for clean, cohesive design—always with an obsessive attention to detail.
        </p>
        <p className="mt-6">
          When I'm not at the keyboard, you might find me exploring new creative tools, reading, or seeking inspiration in nature and art.
        </p>
      </div>
    </section>
  );
};

export default About;
