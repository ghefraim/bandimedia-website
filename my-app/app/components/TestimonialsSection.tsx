import { LiquidGlassButton } from "./LiquidGlassButton";

const testimonials = [
  { name: "Beni Strava", company: "@ AB Hibrid Electric" },
  { name: "Andreea Bandi", company: "@ Dental Art" },
  { name: "Marinel Neaga", company: "@ La Turcu 2" },
  { name: "Laur Clauda", company: "@ Zmura Fresh" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2">
          Uite ce Spun Clienții Noștri
        </h2>
        <p className="text-center text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          We treat every client the same but different at the same time,
          tailoring strategies to each business.
        </p>

        <div className="flex flex-col items-center gap-y-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
            {testimonials.map(({ name, company }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index === 1 || index === 3 ? "mt-10" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5BA77A] mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-[#5BA77A] font-semibold text-base text-center">
                      {name}
                    </h4>
                    <p className="text-[#5BA77A] text-sm text-center">{company}</p>
                  </div>
                </div>
                <div className="border border-green-400 bg-[#12221A]/30 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[400px] w-[250px] transition-transform hover:scale-[1.02]">
                  {/* Text testimonial dacă vrei adaugă aici */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <LiquidGlassButton variant="primary">Contactează-ne</LiquidGlassButton>
        </div>
      </div>
    </section>
  );
}