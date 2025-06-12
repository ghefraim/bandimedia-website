import Image from "next/image";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { LiquidGlassButton } from "./LiquidGlassButton";
import Link from "next/link";

const services = [
  { title: "Video Production", description: "Conținut video de înaltă calitate, de la concept până la montajul final." },
  { title: "Photography", description: "Imagini spectaculoase care surprind esența brandului tău." },
  { title: "Social Media", description: "Management strategic și creare de conținut pentru platformele sociale." },
  { title: "Copywriting", description: "Texte convingătoare care spun povestea ta și generează acțiune." },
  { title: "Graphic Design", description: "Identitate vizuală și materiale de marketing care te diferențiază." },
  { title: "Website Development", description: "Site-uri web personalizate, frumoase, funcționale și ușor de utilizat." },
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
        Oferim o gamă completă de servicii pentru a ajuta brandul tău să iasă în evidență în peisajul digital aglomerat de astăzi.
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