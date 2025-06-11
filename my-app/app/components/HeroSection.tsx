import { LiquidGlassButton } from "./LiquidGlassButton";
import { ParallaxCarousel } from "./ParallaxCarousel";

export default function HeroSection() {
  return (
    <section className="text-center py-16 relative">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        Spunem povești ce nu <br /> pot fi trecute cu vederea
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-10">
        Ne place esteticul, ne dorim succesul tău.
      </p>

      <ParallaxCarousel />

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
        <LiquidGlassButton variant="primary">Contactează-ne</LiquidGlassButton>
        <LiquidGlassButton variant="secondary" icon>
          Vezi proiectele noastre
        </LiquidGlassButton>
      </div>
    </section>
  );
}