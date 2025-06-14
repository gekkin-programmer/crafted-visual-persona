
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
      {/* Left: Logo */}
      <span className="font-playfair text-2xl font-bold tracking-wide animate-fade-in">
        [Your Name]
      </span>
      {/* Center: Links */}
      <ul className="hidden md:flex flex-1 justify-center gap-8">
        {links.map((link) => (
          <li key={link.id} className="flex items-center">
            <a
              href={`#${link.id}`}
              className="font-inter text-lg text-muted-foreground hover:text-primary px-2 py-1 transition-colors duration-200 relative after:block after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Right: Contact Button */}
      <div className="hidden md:flex items-center ml-6">
        <Button
          variant="secondary"
          className="min-w-[120px]"
          asChild
        >
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
