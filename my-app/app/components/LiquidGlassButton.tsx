import React from "react";
import { ChevronRight } from "lucide-react";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  onClick,
  className = "",
  href,
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-semibold rounded-xl overflow-hidden
    backdrop-blur-xl border transition-all duration-300 ease-out
    before:absolute before:inset-0 
    before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
    active:scale-95 active:duration-75
    group
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-br from-[#5BA77A]/90 via-[#5BA77A]/80 to-emerald-600/90
      border-[#5BA77A]/30 text-white shadow-[0_8px_32px_0_rgba(91,167,122,0.4)]
      hover:shadow-[0_12px_40px_0_rgba(91,167,122,0.6)]
      hover:from-[#5BA77A] hover:via-[#5BA77A]/90 hover:to-emerald-600
      hover:border-[#5BA77A]/50 hover:-translate-y-0.5
    `,
    secondary: `
      bg-white/10 border-white/30 text-white
      shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
      hover:bg-white/20 hover:border-white/50
      hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.2)]
      hover:-translate-y-0.5
    `,
    ghost: `
      bg-transparent border-[#5BA77A]/40 text-[#5BA77A]
      hover:bg-[#5BA77A]/10 hover:border-[#5BA77A]/60
      hover:shadow-[0_8px_32px_0_rgba(91,167,122,0.2)]
      hover:-translate-y-0.5
    `,
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ChevronRight
            size={size === "sm" ? 16 : size === "lg" ? 20 : 18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        )}
      </span>

      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Component>
  );
};
