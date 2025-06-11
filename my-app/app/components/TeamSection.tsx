import { LiquidGlassTeamCard } from "./LiquidGlassTeamCard";

const teamMembers = [
  { name: "Katiana Exemplu", role: "Social Media Manager" },
  { name: "Filip Bonce", role: "Graphic Designer & Photographer" },
  { name: "Paul Bandi", role: "Founder & CEO" },
  { name: "Daria Voichescu", role: "Copywriter & Strategist" },
  { name: "Denis Ursuț", role: "Videographer & Video Editor" },
  { name: "Efraim Ghiurau", role: "Website Developer" },
  { name: "Numaiștiu Numele", role: "Marketing & Ads Expert" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-2xl md:text-3xl mb-2">
          Echipa care face
        </h2>
        <h3 className="text-center text-5xl md:text-6xl font-extrabold mb-12">
          Totul Posibil
        </h3>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {teamMembers.slice(0, 4).map(({ name, role }, idx) => (
            <LiquidGlassTeamCard
              key={idx}
              name={name}
              role={role}
              imageSrc={name === "Paul Bandi" ? "/team/paul-bandi.png" : undefined}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
            {teamMembers.slice(4, 7).map(({ name, role }, idx) => (
              <LiquidGlassTeamCard key={idx} name={name} role={role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}