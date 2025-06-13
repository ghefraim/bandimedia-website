import { LiquidGlassButton } from "./LiquidGlassButton";
import Link from "next/link";

const testimonials = [
  { 
    name: "Beni Strava", 
    company: "@ AB Hibrid Electric",
    review: "Recomand cu încredere, echipă super faină, Paul the best Tot ce scot ei e top! Fac și deplasări 🚀🔥"
  },
  { 
    name: "Andreea Bandi", 
    company: "@ Dental Art",
    review: "Servicii de calitate, perseverență și dedicare! Felicitări! 🙏🏼 Recomand cu drag! 🥰👀"
  },
  { 
    name: "Marinel Neaga", 
    company: "@ La Turcu 2",
    review: "Administrator competent, cu o echipă competentă care oferă servicii de top!"
  },
  { 
    name: "Laur Clauda", 
    company: "@ Zmura Fresh",
    review: "Echipa Bandi Media a transformat complet prezența noastră online. Rezultate excepționale!"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2">
          Uite ce Spun Clienții Noștri
        </h2>
        <p className="text-center text-base sm:text-lg text-white/80 mb-6 max-w-2xl mx-auto">
          Tratăm fiecare client cu aceeași seriozitate, dar într-un mod personalizat, adaptând strategiile în funcție de afacerea fiecăruia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
          {testimonials.map(({ name, company, review }, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index === 1 || index === 3 ? "mt-10" : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#5BA77A] mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[#5BA77A] font-semibold text-sm text-center">
                    {name}
                  </h4>
                  <p className="text-[#5BA77A] text-xs text-center">{company}</p>
                </div>
              </div>
              <div className="border border-green-400 bg-[#12221A]/30 backdrop-blur-sm p-5 rounded-2xl shadow-md flex flex-col justify-between min-h-[280px] w-[220px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_0_rgba(91,167,122,0.4)]">
                <div className="flex-1">
                  <p className="text-white/90 text-sm leading-relaxed font-light tracking-wide">
                    "{review}"
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Link href="/contact">
            <LiquidGlassButton variant="primary">
              Contactează-ne
            </LiquidGlassButton>
          </Link>
        </div>
      </div>
    </section>
  );
}