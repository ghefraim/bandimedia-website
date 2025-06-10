import React from "react";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

interface LiquidGlassTeamCardProps {
  name: string;
  role: string;
  imageSrc?: string;
  className?: string;
}

export const LiquidGlassTeamCard: React.FC<LiquidGlassTeamCardProps> = ({
  name,
  role,
  imageSrc,
  className = "",
}) => {
  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`
        relative w-[250px] h-[360px] rounded-2xl overflow-hidden
        border border-[#5BA77A]/40 
        shadow-[0_4px_16px_0_rgba(91,167,122,0.3)]
        hover:shadow-[0_8px_24px_0_rgba(91,167,122,0.4)]
        hover:scale-[1.02] hover:-translate-y-1
        transition-all duration-200 ease-out
        group cursor-default
        ${className}
      `}
    >
      {/* Full height image background */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="250px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#5BA77A] via-[#4A9B6B] to-[#3D8A5A] flex items-center justify-center">
            <span className="text-6xl font-bold text-white/80">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>

      {/* Glossy overlay section on bottom third */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5">
        {/* Main glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-sm" />

        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-transparent" />

        {/* Border gloss effects */}
        <div className="absolute inset-0 border-t border-white/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">
            {name}
          </h3>
          <p className="text-sm text-white/90 mb-4 drop-shadow-md">{role}</p>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 
                         hover:bg-white/30 hover:scale-110 transition-all duration-200
                         shadow-lg hover:shadow-xl"
            >
              <Linkedin size={16} className="text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 
                         hover:bg-white/30 hover:scale-110 transition-all duration-200
                         shadow-lg hover:shadow-xl"
            >
              <Instagram size={16} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Overall card border gloss */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-2xl" />
      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-l-2xl" />
    </div>
  );
};
