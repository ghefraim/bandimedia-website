"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { LiquidGlassButton } from "./LiquidGlassButton";

export function ParallaxCarousel() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Card configurations - middle card (index 2) is smallest, outer cards are largest
  const cardConfigs = [
    // Far left card (largest)
    {
      width: "w-52",
      height: "h-80",
      baseTransform: "scale(1) translateY(-20px)",
      zIndex: "z-10",
      hasButton: true,
      buttonRotation: "rotate-180",
      parallaxMultiplier: 0.12, // Most movement
    },
    // Left card
    {
      width: "w-48",
      height: "h-72",
      baseTransform: "scale(0.95) translateY(-10px)",
      zIndex: "z-20",
      hasButton: false,
      parallaxMultiplier: 0.08, // Medium movement
    },
    // Center card (smallest)
    {
      width: "w-40",
      height: "h-60",
      baseTransform: "scale(0.85)",
      zIndex: "z-30",
      hasButton: false,
      parallaxMultiplier: 0.04, // Minimal movement
    },
    // Right card
    {
      width: "w-48",
      height: "h-72",
      baseTransform: "scale(0.95) translateY(-10px)",
      zIndex: "z-20",
      hasButton: false,
      parallaxMultiplier: 0.08, // Medium movement
    },
    // Far right card (largest)
    {
      width: "w-52",
      height: "h-80",
      baseTransform: "scale(1) translateY(-20px)",
      zIndex: "z-10",
      hasButton: true,
      buttonRotation: "",
      parallaxMultiplier: 0.12, // Most movement
    },
  ];

  return (
    <div className="relative flex justify-center items-center px-4 max-w-7xl mx-auto mb-16 min-h-[400px] overflow-visible">
      <div
        className="flex justify-center items-center gap-1"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
      >
        {cardConfigs.map((config, index) => {
          const parallaxY = scrollY * config.parallaxMultiplier;

          return (
            <div
              key={index}
              className={`
                ${config.width} ${config.height}
                bg-gray-300 rounded-2xl
                ${config.zIndex}
                hover:shadow-2xl
                cursor-pointer
                ${config.hasButton ? "flex items-center justify-center" : ""}
              `}
              style={{
                transformStyle: "preserve-3d",
                transform: `${config.baseTransform} translateY(${parallaxY}px)`,
                transition: "transform 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `${
                  config.baseTransform
                } translateY(${parallaxY - 8}px) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `${config.baseTransform} translateY(${parallaxY}px)`;
              }}
            >
              {config.hasButton && (
                <LiquidGlassButton variant="primary">
                  <ChevronRight size={24} className={config.buttonRotation} />
                </LiquidGlassButton>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
