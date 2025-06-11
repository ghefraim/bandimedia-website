import Image from "next/image";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { LiquidGlassButton } from "./LiquidGlassButton";
import Link from "next/link";

const services = [
  { title: "Video Production", description: "High-quality video content from concepts to final edits." },
  { title: "Photography", description: "Stunning visuals that capture your brand's essence." },
  { title: "Social Media", description: "Strategic management and content creation for social platforms." },
  { title: "Copywriting", description: "Compelling words that tell your story and drive action." },
  { title: "Graphic Design", description: "Visual identity and marketing materials that make you stand out." },
  { title: "Website Development", description: "Custom websites that are beautiful, functional, and user-friendly." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-5xl h-48 md:h-60 rounded-md overflow-hidden">
          <Image
            src="/under-hero.png"
            alt="Rectangle"
            className="w-full h-full object-cover rounded-md"
            width={600}
            height={400}
          />
        </div>
      </div>

      <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-12">
        Soluții Creative Pentru Orice Nevoi
      </h1>
      <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 text-center">
        We offer a comprehensive range of services to help your brand stand out in today&apos;s crowded digital landscape.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map(({ title, description }, index) => (
          <LiquidGlassCard
            key={index}
            title={title}
            description={description}
            variant="primary"
            href="#"
          />
        ))}
      </div>

      <div className="text-center mt-12 px-4">
        <Link href="/contact" className="inline-block">
          <LiquidGlassButton variant="secondary" icon>
            Contactează-ne
          </LiquidGlassButton>
        </Link>
      </div>
    </section>
  );
}