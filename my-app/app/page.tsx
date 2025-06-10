import Image from "next/image";
import { LiquidGlassButton } from "./components/LiquidGlassButton";
import { LiquidGlassBadge } from "./components/LiquidGlassBadge";
import { LiquidGlassCard } from "./components/LiquidGlassCard";
import { LiquidGlassTeamCard } from "./components/LiquidGlassTeamCard";
import { LiquidGlassBlogCard } from "./components/LiquidGlassBlogCard";
import { ParallaxCarousel } from "./components/ParallaxCarousel";

export default function Home() {
  const services = [
    {
      title: "Video Production",
      description: "High-quality video content from concepts to final edits.",
    },
    {
      title: "Photography",
      description: "Stunning visuals that capture your brand's essence.",
    },
    {
      title: "Social Media",
      description:
        "Strategic management and content creation for social platforms.",
    },
    {
      title: "Copywriting",
      description: "Compelling words that tell your story and drive action.",
    },
    {
      title: "Graphic Design",
      description:
        "Visual identity and marketing materials that make you stand out.",
    },
    {
      title: "Website Development",
      description:
        "Custom websites that are beautiful, functional, and user-friendly.",
    },
  ];

  const teamMembers = [
    { name: "Katiana Exemplu", role: "Social Media Manager" },
    { name: "Filip Bonce", role: "Graphic Designer & Photographer" },
    { name: "Paul Bandi", role: "Founder & CEO" },
    { name: "Daria Voichescu", role: "Copywriter & Strategist" },
    { name: "Denis Ursuț", role: "Videographer & Video Editor" },
    { name: "Efraim Ghiurau", role: "Website Developer" },
    { name: "Numaiștiu Numele", role: "Marketing & Ads Expert" },
  ];

  const testimonials = [
    { name: "Beni Strava", company: "@ AB Hibrid Electric" },
    { name: "Andreea Bandi", company: "@ Dental Art" },
    { name: "Marinel Neaga", company: "@ La Turcu 2" },
    { name: "Laur Clauda", company: "@ Zmura Fresh" },
  ];

  const blogPosts = [
    {
      title: "10 Social Media Trends to Watch in 2025",
      description:
        "Discover the latest social media trends that are shaping the digital landscape this year.",
      category: "Social Media",
      date: "May 10, 2025",
      author: "Paul Bandi",
    },
    {
      title: "The Art of Visual Storytelling in Brand Marketing",
      description:
        "Learn how visual storytelling can elevate your brand and connect with your audience on a deeper level.",
      category: "Branding",
      date: "April 22, 2025",
      author: "Filip Bonce",
    },
    {
      title: "Web Design Principles That Boost Conversion Rates",
      description:
        "Explore the key web design principles that can help increase your website's conversion rates.",
      category: "Web Design",
      date: "April 5, 2025",
      author: "Efraim Ghiurau",
    },
  ];

  return (
    <main className="min-h-screen bg-[#12221A] text-white ">
      {/* Navigation */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo + Links */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold">
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
              <a href="#services" className="hover:text-primary transition">
                Services
              </a>
              <a href="#shop" className="hover:text-primary transition">
                Shop
              </a>
              <a href="#about" className="hover:text-primary transition">
                About
              </a>
            </div>
          </div>

          {/* Centered Message */}
          <div className="mt-4 flex justify-center">
            <LiquidGlassBadge variant="primary" size="md">
              AGENȚIA CREATIVĂ BANDI MEDIA
            </LiquidGlassBadge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 relative">
        {/* Titlu & Subtitlu */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Spunem povești ce nu <br /> pot fi trecute cu vederea
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Ne place esteticul, ne dorim succesul tău.
        </p>

        {/* Carousel cu 5 carduri cu parallax */}
        <ParallaxCarousel />

        {/* Butoane CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
          <LiquidGlassButton variant="primary">
            Contactează-ne
          </LiquidGlassButton>
          <LiquidGlassButton variant="secondary" icon>
            Vezi proiectele noastre
          </LiquidGlassButton>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        {/* Rectangle */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-5xl h-48 md:h-60 rounded-md ">
            <Image
              src="/under-hero.png"
              alt="Rectangle"
              className="w-full h-full object-coverimage.png rounded-md"
              width={600}
              height={400}
            />
          </div>
        </div>

        <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-12">
          Soluții Creative Pentru Orice Nevoi
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 text-center">
          We offer a comprehensive range of services to help your brand stand
          out in today&apos;s crowded digital landscape.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <LiquidGlassCard
              key={index}
              title={service.title}
              description={service.description}
              variant="primary"
              href="#"
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12 px-4">
          <LiquidGlassButton variant="secondary" icon>
            Contactează-ne
          </LiquidGlassButton>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-2">
            Echipa care face
          </h2>
          <h3 className="text-center text-5xl md:text-6xl font-extrabold mb-12">
            Totul Posibil
          </h3>

          {/* Rândul  */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <LiquidGlassTeamCard
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={
                  member.name === "Paul Bandi"
                    ? "/team/paul-bandi.png"
                    : undefined
                }
              />
            ))}
          </div>

          {/* Rândul 2 */}
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
              {teamMembers.slice(4, 7).map((member, index) => (
                <LiquidGlassTeamCard
                  key={index}
                  name={member.name}
                  role={member.role}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className=" py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Titlu */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2">
            Uite ce Spun Clienții Noștri
          </h2>
          <p className="text-center text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            We treat every client the same but different at the same time,
            tailoring strategies to each business.
          </p>

          {/* Grid Responsive Carduri */}
          {/* Testimoniale cu Header deasupra și aranjare în 2 rânduri tip scară */}
          <div className="flex flex-col items-center gap-y-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center
                    ${index === 1 || index === 3 ? "mt-10" : ""}
                  `}
                >
                  {/* Header testimonial */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#5BA77A] mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#5BA77A] font-semibold text-base text-center">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#5BA77A] text-sm text-center">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Card testimonial */}
                  <div className="border border-green-400 bg-[#12221A]/30 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[400px] w-[250px] transition-transform hover:scale-[1.02]">
                    {/* Add testimonial text here if needed */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <LiquidGlassButton variant="primary">
              Contactează-ne
            </LiquidGlassButton>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4  text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          Cumpără și poartă viziunea noastră
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Bandi Media Shop
        </h1>

        <div className="flex flex-wrap justify-center items-stretch gap-10 max-w-6xl mx-auto">
          {/* Product Card */}
          {[
            {
              title: "Bandi Presets Pro",
              description:
                "20 presets to make any photo look original and stylish",
              price: "$14.99",
              image: "/presets1.png",
            },
            {
              title: "We do NOT belong in the Comfort Zone",
              description: "Wear our vision with our Premium clothing line.",
              price: "$24.99",
              image: "/Tshirt1.png",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="relative flex-grow basis-[240px] max-w-[720px] min-w-[300px]"
            >
              {/* Green Shadow Layer */}
              <div className="absolute inset-0 -translate-x-3 translate-y-3 bg-[#65C18C] rounded-2xl z-0"></div>

              {/* Content Card */}
              <div className="relative bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 z-10 min-h-[280px] h-full">
                <div className="flex flex-col items-start text-left max-w-md">
                  <h3 className="text-2xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm mb-4">{product.description}</p>
                  <p className="text-xl font-bold mb-4">{product.price}</p>
                  <LiquidGlassButton variant="primary">Buy</LiquidGlassButton>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 md:w-70 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-green-300 text-green-300 rounded-lg hover:bg-green-900 hover:text-white transition-colors"
          >
            View All Products →
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className=" py-20 px-4">
        <div className="text-center mb-12">
          <LiquidGlassBadge variant="primary" size="md">
            OUR BLOG
          </LiquidGlassBadge>
          <h2 className="text-4xl font-semibold mt-4 mb-4">
            Despre industrie & Inspirație
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our collection of articles on design, marketing, and
            creative strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-items-center">
          {blogPosts.map((post, index) => (
            <LiquidGlassBlogCard
              key={index}
              title={post.title}
              description={post.description}
              category={post.category}
              date={post.date}
              author={post.author}
              href="#"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
