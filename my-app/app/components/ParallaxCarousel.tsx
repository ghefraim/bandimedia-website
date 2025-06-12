"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { LiquidGlassButton } from "./LiquidGlassButton";

export function ParallaxCarousel() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

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

  // Function to handle video messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.event === 'onStateChange') {
        // Find the center video index
        const centerIndex = isMobile ? 1 : 2;
        
        // Mute all videos except the center one
        videoRefs.current.forEach((ref, index) => {
          if (ref) {
            ref.contentWindow?.postMessage(JSON.stringify({
              event: 'command',
              func: 'setVolume',
              args: [index === centerIndex ? 100 : 0]
            }), '*');
          }
        });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isMobile]);

  const cardConfigsDesktop = [
    {
      width: "w-52",
      height: "h-80",
      baseTransform: "scale(1) translateY(-20px)",
      zIndex: "z-10",
      hasButton: true,
      buttonRotation: "rotate-180",
      parallaxMultiplier: 0.12,
      hasVideo: false,
    },
    {
      width: "w-48",
      height: "h-72",
      baseTransform: "scale(0.95) translateY(-10px)",
      zIndex: "z-20",
      hasButton: false,
      parallaxMultiplier: 0.08,
      hasVideo: true,
      videoId: "tFhFfsebkys",
    },
    {
      width: "w-40",
      height: "h-60",
      baseTransform: "scale(0.85)",
      zIndex: "z-30",
      hasButton: false,
      parallaxMultiplier: 0.04,
      hasVideo: true,
      videoId: "iFVxV-GFgTk",
    },
    {
      width: "w-48",
      height: "h-72",
      baseTransform: "scale(0.95) translateY(-10px)",
      zIndex: "z-20",
      hasButton: false,
      parallaxMultiplier: 0.08,
      hasVideo: true,
      videoId: "O1Z1WNM1eWI",
    },
    {
      width: "w-52",
      height: "h-80",
      baseTransform: "scale(1) translateY(-20px)",
      zIndex: "z-10",
      hasButton: true,
      buttonRotation: "",
      parallaxMultiplier: 0.12,
      hasVideo: false,
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
      hasVideo: false,
    },
    {
      width: "w-28",
      height: "h-48",
      baseTransform: "scale(0.85) translateY(10px)",
      zIndex: "z-10",
      hasButton: false,
      parallaxMultiplier: 0.05,
      hasVideo: true,
      videoId: "tFhFfsebkys",
    },
    {
      width: "w-32",
      height: "h-56",
      baseTransform: "scale(0.95) translateY(-10px) translateX(15px)",
      zIndex: "z-20",
      hasButton: true,
      buttonRotation: "",
      parallaxMultiplier: 0.1,
      hasVideo: false,
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
          const isCenterVideo = config.hasVideo && ((isMobile && index === 1) || (!isMobile && index === 2));

          return (
            <div
              key={index}
              className={`
                ${config.width} ${config.height}
                bg-gray-300 rounded-2xl overflow-hidden
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
              {config.hasButton ? (
                <LiquidGlassButton variant="primary">
                  <ChevronRight size={24} className={config.buttonRotation} />
                </LiquidGlassButton>
              ) : config.hasVideo ? (
                <div className="w-full h-full relative">
                  <iframe
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={`https://www.youtube.com/embed/${config.videoId}?autoplay=1&mute=${!isCenterVideo}&loop=1&playlist=${config.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`}
                    title="YouTube Shorts"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}