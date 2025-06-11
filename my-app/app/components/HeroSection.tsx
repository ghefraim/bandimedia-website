import { LiquidGlassButton } from "./LiquidGlassButton";
import { ParallaxCarousel } from "./ParallaxCarousel";
import Link from "next/link"; 

export default function HeroSection() {
  return (
    <section className="text-center pt-10 pb-16 relative"> {/* py-16 → pt-10 pb-16 */}
      <h1 className="text-3xl md:text-6xl font-bold leading-relaxed md:leading-tight mb-4 max-w-[90%] md:max-w-4xl mx-auto">
        Spunem povești ce nu{" "}
        <br className="hidden md:inline" />
        pot fi trecute cu vederea
      </h1>
      <p className="text-base md:text-xl text-gray-200 mb-10">
        Ne place esteticul, ne dorim succesul tău.
      </p>

      <ParallaxCarousel />

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
        <Link href="/contact" className="w-full md:w-auto">
          <LiquidGlassButton variant="primary">Contactează-ne</LiquidGlassButton>
        </Link>
        <LiquidGlassButton variant="secondary" icon>
          Vezi proiectele noastre
        </LiquidGlassButton>
      </div>
    </section>
  );
}