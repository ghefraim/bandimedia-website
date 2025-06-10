import React from "react";

interface LiquidGlassBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LiquidGlassBadge: React.FC<LiquidGlassBadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-full overflow-hidden
    border transition-all duration-300 ease-out
    group cursor-default
  `;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs tracking-wider",
    md: "px-3 py-1 text-xs tracking-widest",
    lg: "px-4 py-1.5 text-sm tracking-widest",
  };

  const variantClasses = {
    primary: `
      bg-[#5BA77A] text-white border-[#5BA77A]
      shadow-[0_4px_16px_0_rgba(91,167,122,0.3)]
      hover:shadow-[0_6px_20px_0_rgba(91,167,122,0.4)]
      hover:bg-[#4A9B6B]
    `,
    secondary: `
      bg-white/10 border-white/30 text-white
      shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
      hover:bg-white/20 hover:border-white/50
      hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.2)]
    `,
    accent: `
      bg-gradient-to-br from-[#5BA77A]/90 via-[#4A9B6B]/85 to-[#3D8A5A]/90
      border-[#5BA77A]/50 text-black
      shadow-[0_4px_16px_0_rgba(91,167,122,0.4)]
      hover:bg-gradient-to-br hover:from-[#5BA77A]/95 hover:via-[#4A9B6B]/90 hover:to-[#3D8A5A]/95
      hover:border-[#5BA77A]/70
      hover:shadow-[0_6px_20px_0_rgba(91,167,122,0.6)]
    `,
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </div>
  );
};
