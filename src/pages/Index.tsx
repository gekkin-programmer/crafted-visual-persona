import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <main className="pt-20 lg:pt-28 max-w-[1200px] mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <ContactForm />
      </main>
      <footer className="w-full py-8 mt-8 border-t border-border text-center text-muted-foreground font-inter">
        © {new Date().getFullYear()} Pene Nkouam Bryan. 
      </footer>
    </div>
  );
};
export default Index;
