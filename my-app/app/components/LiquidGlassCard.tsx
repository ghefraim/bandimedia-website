import React from "react";
import { ChevronRight } from "lucide-react";

interface LiquidGlassCardProps {
  title: string;
  description: string;
  href?: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  title,
  description,
  href = "#",
  variant = "primary",
  className = "",
}) => {
  const baseClasses = `
    relative flex flex-col overflow-hidden
    border transition-all duration-200 ease-out
    group cursor-default
    min-h-[240px] rounded-2xl
    hover:scale-[1.01] hover:-translate-y-0.5
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-br from-[#5BA77A] via-[#4A9B6B] to-[#3D8A5A]
      border-[#5BA77A]/40 text-white
      shadow-[0_4px_16px_0_rgba(91,167,122,0.3)]
      hover:shadow-[0_8px_24px_0_rgba(91,167,122,0.4)]
      hover:border-[#5BA77A]/60
    `,
    secondary: `
      bg-gradient-to-br from-white/20 via-white/15 to-white/10
      border-white/30 text-white
      shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
      hover:bg-gradient-to-br hover:from-white/30 hover:via-white/25 hover:to-white/20
      hover:border-white/50
      hover:shadow-[0_16px_48px_0_rgba(255,255,255,0.2)]
    `,
    accent: `
      bg-gradient-to-br from-emerald-500/80 via-[#5BA77A]/75 to-green-600/80
      border-emerald-400/40 text-white
      shadow-[0_8px_32px_0_rgba(16,185,129,0.3)]
      hover:shadow-[0_16px_48px_0_rgba(16,185,129,0.5)]
      hover:border-emerald-400/60
    `,
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Subtle glass shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />

      {/* Border gloss effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-2xl" />
      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-l-2xl" />

      {/* Content Section */}
      <div className="relative p-6 flex flex-col justify-center h-full text-center">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
