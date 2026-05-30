import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DivisionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  statusText?: string;
  Icon: LucideIcon;
  variant: "blue" | "gold";
}

export function DivisionCard({
  title,
  description,
  image,
  href,
  statusText,
  Icon,
  variant,
}: DivisionCardProps) {
  // Define dynamic style tokens based on variant
  const glowClass =
    variant === "blue"
      ? "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-blue-400/40 border-blue-900/20"
      : "hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:border-amber-400/40 border-amber-900/20";

  const iconBgClass =
    variant === "blue" ? "bg-blue-500/10 text-blue-400" : "bg-amber-500/10 text-amber-400";

  const statusBadgeClass =
    variant === "blue"
      ? "bg-blue-500/15 text-blue-100 border-blue-500/30"
      : "bg-amber-500/15 text-amber-100 border-amber-500/30";

  const titleHoverClass =
    variant === "blue" ? "group-hover:text-blue-400" : "group-hover:text-amber-400";

  const buttonClass =
    variant === "blue"
      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20"
      : "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20";

  return (
    <div
      className={`group relative bg-navy-light/40 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col h-full hover:-translate-y-2 ${glowClass}`}
    >
      {/* Visual Image Header */}
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent" />
        
        {statusText && (
          <div className={`absolute top-4 right-4 flex items-center gap-1.5 border px-3 py-1.5 rounded-full text-xs font-semibold shadow-md ${statusBadgeClass}`}>
            <Icon className="h-3.5 w-3.5" />
            <span>{statusText}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgClass}`}>
              <Icon className="h-5 w-5" />
            </div>
            <h2 className={`text-2xl md:text-3xl font-display font-extrabold tracking-tight text-white transition-colors duration-300 ${titleHoverClass}`}>
              {title}
            </h2>
          </div>
          
          <p className="text-steel-light/85 text-sm md:text-base leading-relaxed mb-8">
            {description}
          </p>
        </div>

        <div>
          <Button
            asChild
            className={`w-full justify-center group/btn py-6 text-base font-bold transition-all duration-300 shadow-md ${buttonClass}`}
          >
            <Link to={href}>
              Enter Division
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
