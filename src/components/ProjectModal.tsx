
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ProjectModalProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  onClose: () => void;
}

const ProjectModal = ({ title, description, image, tech, onClose }: ProjectModalProps) => (
  <Dialog open onOpenChange={onClose}>
    <DialogContent className="max-w-md flex flex-col gap-4 animate-scale-in">
      <button onClick={onClose} className="self-end text-foreground hover:text-destructive mb-2">
        <X className="w-6 h-6" />
      </button>
      <img src={image} alt={title} className="rounded-lg w-full h-52 object-cover mb-3" />
      <h3 className="font-playfair text-2xl font-bold text-primary mb-1">{title}</h3>
      <p className="font-inter text-muted-foreground mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="bg-accent text-white text-xs px-3 py-1 rounded-full font-inter">{t}</span>
        ))}
      </div>
      <div className="flex w-full justify-end mt-4">
        <Button variant="outline" onClick={onClose} className="min-w-[100px]">Close</Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default ProjectModal;
