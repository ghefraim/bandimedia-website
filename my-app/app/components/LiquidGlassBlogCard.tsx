import React from "react";
import { ArrowRight } from "lucide-react";

interface LiquidGlassBlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  href?: string;
  className?: string;
}

export const LiquidGlassBlogCard: React.FC<LiquidGlassBlogCardProps> = ({
  title,
  description,
  category,
  date,
  author,
  href = "#",
  className = "",
}) => {
  return (
    <div
      className={`
        relative w-full max-w-[400px] h-[480px] rounded-2xl overflow-hidden
        border border-[#5BA77A]/40 
        shadow-[0_4px_16px_0_rgba(91,167,122,0.3)]
        hover:shadow-[0_8px_24px_0_rgba(91,167,122,0.4)]
        hover:scale-[1.02] hover:-translate-y-1
        transition-all duration-200 ease-out
        group cursor-pointer
        ${className}
      `}
    >
      {/* Full height background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5BA77A] via-[#4A9B6B] to-[#3D8A5A]" />

      {/* Image placeholder section (top 40%) */}
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-br from-green-800 via-green-700 to-green-900">
        {/* Optional: Add actual image here later */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Glossy content overlay section (bottom 60%) */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%]">
        {/* Main glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-white/80 backdrop-blur-sm" />

        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent" />

        {/* Border gloss effects */}
        <div className="absolute inset-0 border-t border-white/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/50 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-white/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 text-black">
          {/* Category and Date */}
          <div className="flex justify-between items-center text-sm font-medium mb-3">
            <span className="text-[#5BA77A] font-semibold">{category}</span>
            <span className="text-gray-600">{date}</span>
          </div>

          {/* Title and Description */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 leading-tight text-black">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* Author and Read More */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <span className="text-sm font-semibold text-black">
              By {author}
            </span>
            <a
              href={href}
              className="flex items-center gap-2 text-[#5BA77A] hover:text-[#4A9B6B] 
                         font-semibold text-sm transition-colors group-hover:gap-3 
                         transition-all duration-200"
            >
              Read more
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
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
