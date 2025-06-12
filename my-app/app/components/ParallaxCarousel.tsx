"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { LiquidGlassButton } from "./LiquidGlassButton";

export function ParallaxCarousel() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateSize);

    updateSize(); // set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const cardConfigsDesktop = [
    {
      width: "w-52",
      height: "h-80",
      baseTransform: "scale(1) translateY(-20px)",
      zIndex: "z-10",
      hasButton: true,
      buttonRotation: "rotate-180",
      parallaxMultiplier: 0.12,
    },
    {
      width: "w-48",
      height: "h-72",
      baseTransform: "scale(0.95) translateY(-10px)",
      zIndex: "z-20",
      hasButton: false,
      parallaxMultiplier: 0.08,
    },
    {
      width: "w-40",
      height: "h-60",
      baseTransform: "scale(0.85)",
      zIndex: "z-30",
      hasButton: false,
      parallaxMultiplier: 0.04,
    },
    {
      width: "w-48",
      height: "h-72",
      baseTransform: "scale(0.95) translateY(-10px)",
      zIndex: "z-20",
      hasButton: false,
      parallaxMultiplier: 0.08,
    },
    {
      width: "w-52",
      height: "h-80",
      baseTransform: "scale(1) translateY(-20px)",
      zIndex: "z-10",
      hasButton: true,
      buttonRotation: "",
      parallaxMultiplier: 0.12,
    },
  ];

  const cardConfigsMobile = [
    {
      width: "w-32",
      height: "h-56",
      baseTransform: "scale(0.95) translateY(-10px) translateX(-15px)",
      zIndex: "z-20",
      hasButton: true,
      buttonRotation: "rotate-180",
      parallaxMultiplier: 0.1,
    },
    {
      width: "w-28",
      height: "h-48",
      baseTransform: "scale(0.85) translateY(10px)",
      zIndex: "z-10",
      hasButton: false,
      parallaxMultiplier: 0.05,
    },
    {
      width: "w-32",
      height: "h-56",
      baseTransform: "scale(0.95) translateY(-10px) translateX(15px)",
      zIndex: "z-20",
      hasButton: true,
      buttonRotation: "",
      parallaxMultiplier: 0.1,
    },
  ];

  const cardConfigs = isMobile ? cardConfigsMobile : cardConfigsDesktop;

  return (
    <div className="relative flex justify-center items-center px-4 max-w-7xl mx-auto mb-16 min-h-[300px] overflow-visible">
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
                e.currentTarget.style.transform = `${config.baseTransform} translateY(${
                  parallaxY - 8
                }px) scale(1.05)`;
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