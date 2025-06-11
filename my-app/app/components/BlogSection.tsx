import { LiquidGlassBadge } from "./LiquidGlassBadge";
import { LiquidGlassBlogCard }from "./LiquidGlassBlogCard";

const blogPosts = [
  {
    title: "10 Social Media Trends to Watch in 2025",
    description: "Discover the latest social media trends that are shaping the digital landscape this year.",
    category: "Social Media",
    date: "May 10, 2025",
    author: "Paul Bandi",
  },
  {
    title: "The Art of Visual Storytelling in Brand Marketing",
    description: "Learn how visual storytelling can elevate your brand and connect with your audience on a deeper level.",
    category: "Branding",
    date: "April 22, 2025",
    author: "Filip Bonce",
  },
  {
    title: "Web Design Principles That Boost Conversion Rates",
    description: "Explore the key web design principles that can help increase your website's conversion rates.",
    category: "Web Design",
    date: "April 5, 2025",
    author: "Efraim Ghiurau",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="text-center mb-12">
        <LiquidGlassBadge variant="primary" size="md">
          OUR BLOG
        </LiquidGlassBadge>
        <h2 className="text-4xl font-semibold mt-4 mb-4">Despre industrie & Inspirație</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Explore our collection of articles on design, marketing, and creative strategy.
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