
import { Button } from "@/components/ui/button";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

const Navbar = () => (
  <nav className="fixed inset-x-0 top-0 h-16 bg-background/70 backdrop-blur z-30 shadow-sm">
    <div className="container h-full flex items-center justify-between">
      <span className="font-playfair text-2xl font-bold tracking-wide animate-fade-in">[Your Name]</span>
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="font-inter text-lg text-muted-foreground hover:text-primary px-2 py-1 transition-colors duration-200 relative after:block after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Button variant="accent" className="ml-6 hidden md:inline-block min-w-[120px]">
        Contact
      </Button>
    </div>
  </nav>
);

export default Navbar;
