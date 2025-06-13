import { LiquidGlassBadge } from "./LiquidGlassBadge";
import { LiquidGlassBlogCard }from "./LiquidGlassBlogCard";

const blogPosts = [
  {
    title: "10 Tendințe în Social Media de Urmărit în 2025",
    description: "Descoperă cele mai noi tendințe din social media care modelează peisajul digital în acest an.",
    category: "Social Media",
    date: "10 Mai 2025",
    author: "Paul Bandi",
  },
  {
    title: "Arta Povestirii Vizuale în Marketingul de Brand",
    description: "Află cum povestirea vizuală poate ridica nivelul brandului tău și crea o conexiune mai profundă cu publicul.",
    category: "Branding",
    date: "22 Aprilie 2025",
    author: "Filip Bonce",
  },
  {
    title: "Principii de Web Design Care Cresc Rata de Conversie",
    description: "Explorează principiile esențiale de design web care pot crește rata de conversie a site-ului tău.",
    category: "Web Design",
    date: "5 Aprilie 2025",
    author: "Efraim Ghiurau",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-10 px-4">
      <div className="text-center mb-10">
        <LiquidGlassBadge variant="primary" size="md">
          OUR BLOG
        </LiquidGlassBadge>
        <h2 className="text-4xl font-semibold mt-4 mb-2">Despre industrie & Inspirație</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Descoperă colecția noastră de articole despre design, marketing și strategie creativă.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-items-center">
        {blogPosts.map(({ title, description, category, date, author }, idx) => (
          <LiquidGlassBlogCard
            key={idx}
            title={title}
            description={description}
            category={category}
            date={date}
            author={author}
            href="#"
          />
        ))}
      </div>
    </section>
  );
}