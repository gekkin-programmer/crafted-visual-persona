
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-12 pt-20 md:pt-32 pb-12 md:pb-20 min-h-[480px] md:min-h-[520px] transition-all"
    >
      {/* Text Section */}
      <div
        className={cn(
          "flex-1 flex flex-col justify-center items-center md:items-start gap-6 md:gap-7 text-center md:text-left transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-2 leading-tight" data-aos>
          Hi, I'm <span className="text-accent animate-scale-in">Bryan</span>
        </h1>
        <h2 className="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 md:mb-4">
          Creative Developer &amp; Designer crafting memorable digital experiences.
        </h2>
        <p className="font-inter max-w-xl text-base md:text-lg text-muted-foreground/90 mb-5 md:mb-8">
          I build delightful products and interfaces with a focus on clarity, precision, and personality.
        </p>
        <Button asChild size="lg" variant="secondary" className="group">
          <a href="#projects" className="flex items-center gap-1 font-semibold text-lg">
            See my work{" "}
            <ArrowDownRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
      {/* Profile Image Section */}
      <div
        className={cn(
          "flex-1 flex justify-center items-center mb-8 md:mb-0 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full shadow-card overflow-hidden border-4 border-primary flex items-center justify-center bg-background">
          <img
            src="/lovable-uploads/df5ce182-f2b9-4d21-bdc2-3492a83dd184.png"
            alt="Portrait"
            className="object-cover w-full h-full"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
