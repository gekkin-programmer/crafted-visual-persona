
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="ml-2"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

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
      {/* Right: Contact Button + Theme Toggle */}
      <div className="hidden md:flex items-center ml-6">
        <Button
          variant="secondary"
          className="min-w-[120px]"
          asChild
        >
          <a href="#contact">Contact</a>
        </Button>
        <ThemeToggle />
      </div>
      {/* Mobile: Theme Toggle */}
      <div className="md:hidden flex items-center">
        <ThemeToggle />
      </div>
    </div>
  </nav>
);

export default Navbar;
