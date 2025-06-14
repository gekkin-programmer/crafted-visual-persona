
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";

const Hero = () => (
  <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-8 pt-32 pb-20 min-h-[520px]">
    <div className="flex-1 flex flex-col items-start gap-7 animate-fade-in">
      <h1 className="font-playfair text-[2.8rem] leading-tight md:text-6xl font-bold text-primary mb-2">
        Hi, I'm <span className="text-accent animate-scale-in">[Your Name]</span>
      </h1>
      <h2 className="font-inter text-xl md:text-2xl text-muted-foreground mb-4">
        Creative Developer &amp; Designer crafting memorable digital experiences.
      </h2>
      <p className="font-inter max-w-xl text-lg text-muted-foreground/90 mb-8">
        I build delightful products and interfaces with a focus on clarity, precision, and personality.
      </p>
      <Button asChild size="lg" variant="accent" className="group">
        <a href="#projects" className="flex items-center gap-1 font-semibold text-lg">
          See my work <ArrowDownRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
    <div className="flex-1 flex justify-center items-center animate-scale-in">
      <div className="w-56 h-56 rounded-full shadow-card overflow-hidden border-4 border-primary flex items-center justify-center animate-fade-in">
        <img
          src="/photo-1649972904349-6e44c42644a7"
          alt="Portrait"
          className="object-cover w-full h-full"
          draggable={false}
        />
      </div>
    </div>
  </section>
);

export default Hero;
