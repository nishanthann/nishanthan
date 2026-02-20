import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

export interface Tag {
  label?: string;
  icon: React.ReactNode;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  gradient: string;
  website?: string;
  github?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  gradient,
  website,
  github,
}: ProjectCardProps) => {
  const handleCardClick = () => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  const handleButtonClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative shrink-0 w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw] h-[75vh] rounded-3xl overflow-hidden cursor-pointer group select-none flex flex-col bg-card border border-border"
    >
      {/* Top — Clean Image, no overlays */}
      <div className="relative w-full h-[55%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 55vw, 42vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Action Buttons — Always visible */}
        <div className="absolute top-5 right-5 z-20 flex gap-2">
          {github && (
            <button
              onClick={(e) => handleButtonClick(e, github)}
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg hover:bg-amber-400 hover:[&>svg]:text-black transition-colors duration-300 cursor-pointer"
            >
              <Github className="w-5 h-5 text-amber-400" />
            </button>
          )}
          <button
            onClick={(e) => website && handleButtonClick(e, website)}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg hover:bg-amber-400 hover:[&>svg]:text-black transition-colors duration-300 cursor-pointer"
          >
            <ArrowUpRight className="w-5 h-5 text-amber-400" />
          </button>
        </div>
      </div>

      {/* Bottom — Content with gradient (bottom-to-top transparent) */}
      <div className="flex-1 flex flex-col justify-between p-7 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${gradient} opacity-10 pointer-events-none`}
          style={{
            maskImage: "linear-gradient(to top, black 5%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 5%, transparent 100%)",
          }}
        />
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((t, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-muted/50 border-border text-muted-foreground backdrop-blur-md py-1.5 px-3 text-xs font-medium tracking-wide"
            >
              <span className="mr-1.5 opacity-80">{t.icon}</span>
              {t.label && <span>{t.label}</span>}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
