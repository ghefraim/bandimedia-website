import Image from "next/image";
import { ChevronRight } from 'lucide-react'
import styles from "./page.module.css";

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
      description: "Strategic management and content creation for social platforms.",
    },
    {
      title: "Copywriting",
      description: "Compelling words that tell your story and drive action.",
    },
    {
      title: "Graphic Design",
      description: "Visual identity and marketing materials that make you stand out.",
    },
    {
      title: "Website Development",
      description: "Custom websites that are beautiful, functional, and user-friendly.",
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

  

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo + Links */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold">
              <a href="#contact" className="hover:text-primary transition">Contact</a>
              <a href="#services" className="hover:text-primary transition">Services</a>
              <a href="#shop" className="hover:text-primary transition">Shop</a>
              <a href="#about" className="hover:text-primary transition">About</a>
            </div>
          </div>

          {/* Centered Message */}
          <div className="mt-4 flex justify-center">
            <div className="bg-[#5BA77A] text-black px-3 py-1 rounded-full font-semibold text-xs tracking-widest select-none text-center">
              AGENȚIA CREATIVĂ BANDI MEDIA
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 bg-green-950 text-white relative">
        {/* Titlu & Subtitlu */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Spunem povești ce nu <br /> pot fi trecute cu vederea
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Ne place esteticul, ne dorim succesul tău.
        </p>

        {/* Carousel cu 7 carduri */}
        <div className="flex justify-center items-center gap-3 px-4 max-w-7xl mx-auto mb-16 flex-wrap sm:flex-nowrap">
          
          {/* Card Stânga cu buton */}
          <div className="h-60 w-55 sm:w-42 bg-gray-300 rounded-2xl flex items-center justify-center transform-gpu rotate-y-45 -rotate-x-15 rotate-z-0 scale-100 translate-y-4 translate-x-6 hover:scale-90 hover:translate-y-0 transition-all duration-300 ease-in-out">
            <button className="w-10 h-10 bg-[#5BA77A] text-black rounded-full flex items-center justify-center text-xl">
              <ChevronRight size={24} className="rotate-180" />
            </button>
          </div>

          {/* Carduri centrale */}
          {[...Array(5)].map((_, i) => {
            const styles = [
              'rotate-y-35 -rotate-x-10 rotate-z-0 scale-95 -translate-y-2 -translate-x-2',
              'rotate-y-20 -rotate-x-15 rotate-z-0 scale-93 -translate-y-6 -translate-x-7',
              'rotate-y-0 rotate-x-0 rotate-z-0 scale-[0.90] -translate-y-7 -translate-x-10',
              'rotate-y-35 rotate-x-5 -rotate-z-0 scale-93 -translate-y-7 -translate-x-15',
              'rotate-y-30 rotate-x-10 -rotate-z-0 scale-95 -translate-y-3 -translate-x-22',
            ];
            return (
              <div
                key={i}
                className={`
                  h-60 w-40 sm:w-45 bg-gray-300 rounded-2xl
                  transform-gpu transition-all duration-300 ease-in-out
                  ${styles[i]} hover:scale-105 hover:translate-y-0
                `}
              />
            );
          })}

          {/* Card Dreapta cu buton */}
           <div className="h-60 w-36 sm:w-42 bg-gray-300 rounded-2xl flex items-center justify-center transform-gpu rotate-y-30 rotate-x-15 -rotate-z-0 scale-100 translate-y-2 -translate-x-26 hover:scale-105 hover:translate-y-0 transition-all duration-300 ease-in-out">
            <button className="w-10 h-10 bg-[#5BA77A] text-black rounded-full flex items-center justify-center text-xl">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Butoane CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
          <button className="bg-[#5BA77A] text-black px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold">
            Vezi proiectele noastre <ChevronRight className="inline" />
          </button>
          <button className="border border-[#5BA77A] text-[#5BA77A] px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold hover:bg-[#5BA77A] hover:text-black transition">
            Contactează-ne <ChevronRight className="inline" />
          </button>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="bg-green-950 text-white py-20 px-4">

        {/* Rectangle */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-5xl h-48 md:h-60 bg-gray-200 rounded-md"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-[#2e5644] shadow-md flex flex-col min-h-[240px] bg-white"
            >
              <div className="bg-green-800 h-12"></div>
              <div className="bg-[#5BA77A] text-black px-4 py-4 text-sm flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="mb-4 font-semibold text-black/80">{service.description}</p>
                <a href="#" className="text-green-800 font-semibold inline-flex items-center hover:underline mt-auto">
                  Learn more <ChevronRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12 px-4">
          <button className="bg-transparent border border-[#5BA77A] text-[#5BA77A] px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold hover:bg-[#5BA77A] hover:text-black transition">
            Contactează-ne <ChevronRight className="inline" />
          </button>
        </div>

      </section>

      
      {/* Team Section */}
      <section id="team" className="bg-green-950 text-white py-20 px-4">
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
              <div
                key={index}
                className="w-[250px] h-[360px] rounded-lg overflow-hidden shadow-md flex flex-col bg-white"
              >
                <div className="bg-gray-200 h-[200px] w-full"></div>
                <div className="bg-[#5BA77A] text-black p-4 text-sm flex flex-col justify-between flex-grow">
                  <h3 className="text-base font-semibold">{member.name}</h3>
                  <p className="text-sm text-black/80 mb-3">{member.role}</p>
                  <div className="flex space-x-2 mt-auto">
                    {/* Social icons... */}

                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="text-black hover:text-green-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.75 7H13v2.43h.08c.73-1.37 2.5-2.82 5.14-2.82 5.5 0 6.5 3.62 6.5 8.33V24h-5V15.33c0-2.07-.04-4.74-2.89-4.74-2.9 0-3.35 2.26-3.35 4.6V24h-5V7z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="text-black hover:text-green-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.4 1.4.3.5.5 1.2.6 2.4.1 1.2.1 
                        1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.6 
                        2.4-.3.6-.7 1-1.4 1.4-.5.3-1.2.5-2.4.6-1.2.1-1.6.1-4.8.1s-3.6 
                        0-4.8-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.2-.6-2.4C2.2 
                        15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.9.6-2.4.3-.6.7-1 
                        1.4-1.4.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 
                        0 8.3 0 7.1.1c-1.3.1-2.2.3-3.1.7C3.1 1.3 2.3 2.1 1.8 
                        3.1c-.4.9-.6 1.8-.7 3.1C1 8.3 1 8.7 1 12s0 3.7.1 4.9c.1 
                        1.3.3 2.2.7 3.1.5 1 1.3 1.8 2.3 2.3.9.4 1.8.6 3.1.7 1.2.1 
                        1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.3 3.1-.7 1-.5 
                        1.8-1.3 2.3-2.3.4-.9.6-1.8.7-3.1.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.7-3.1-.5-1-1.3-1.8-2.3-2.3-.9-.4-1.8-.6-3.1-.7C15.7 
                        0 15.3 0 12 0z"/>
                        <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 
                        10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                        <circle cx="18.4" cy="5.6" r="1.4"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rândul 2 */}
            <div className="flex justify-center mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers.slice(4, 7).map((member, index) => (
                  <div
                    key={index}
                    className="w-[250px] h-[360px] rounded-lg overflow-hidden shadow-md flex flex-col bg-white"
                  >
                    <div className="bg-gray-200 h-[200px] w-full"></div>
                    <div className="bg-[#5BA77A] text-black p-4 text-sm flex flex-col justify-between flex-grow">
                      <h3 className="text-base font-semibold">{member.name}</h3>
                      <p className="text-sm text-black/80 mb-3">{member.role}</p>
                      <div className="flex space-x-2 mt-auto">
                        {/* Social icons... */}

                        {/* LinkedIn */}
                    <a
                      href="#"
                      className="text-black hover:text-green-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.75 7H13v2.43h.08c.73-1.37 2.5-2.82 5.14-2.82 5.5 0 6.5 3.62 6.5 8.33V24h-5V15.33c0-2.07-.04-4.74-2.89-4.74-2.9 0-3.35 2.26-3.35 4.6V24h-5V7z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="text-black hover:text-green-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.4 1.4.3.5.5 1.2.6 2.4.1 1.2.1 
                        1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.6 
                        2.4-.3.6-.7 1-1.4 1.4-.5.3-1.2.5-2.4.6-1.2.1-1.6.1-4.8.1s-3.6 
                        0-4.8-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.2-.6-2.4C2.2 
                        15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.9.6-2.4.3-.6.7-1 
                        1.4-1.4.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 
                        0 8.3 0 7.1.1c-1.3.1-2.2.3-3.1.7C3.1 1.3 2.3 2.1 1.8 
                        3.1c-.4.9-.6 1.8-.7 3.1C1 8.3 1 8.7 1 12s0 3.7.1 4.9c.1 
                        1.3.3 2.2.7 3.1.5 1 1.3 1.8 2.3 2.3.9.4 1.8.6 3.1.7 1.2.1 
                        1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.3 3.1-.7 1-.5 
                        1.8-1.3 2.3-2.3.4-.9.6-1.8.7-3.1.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.7-3.1-.5-1-1.3-1.8-2.3-2.3-.9-.4-1.8-.6-3.1-.7C15.7 
                        0 15.3 0 12 0z"/>
                        <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 
                        10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                        <circle cx="18.4" cy="5.6" r="1.4"/>
                      </svg>
                    </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-green-950 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Titlu */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2">
            Uite ce Spun Clienții Noștri
          </h2>
          <p className="text-center text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            We treat every client the same but different at the same time, tailoring strategies to each business.
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
                    ${index === 1 || index === 3 ? 'mt-10' : ''}
                  `}
                >
                  {/* Header testimonial */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#5BA77A] mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#5BA77A] font-semibold text-base text-center">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#5BA77A] text-sm text-center">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Card testimonial */}
                  <div className="border border-green-400 bg-green-950/30 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[400px] w-[250px] transition-transform hover:scale-[1.02]">
                    {/* Add testimonial text here if needed */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#5BA77A] text-green-950 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition">
              Contactează-ne
            </button>
            <button className="border border-green-600 bg-green-900 text-green-200 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition">
              Testimoniale →
            </button>
          </div>
        </div>
      </section>
      
      {/* Shop Section */}
      <section id="shop" className="bg-green-950 py-16 px-4 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          Cumpără și poartă viziunea noastră
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Bandi Media Shop</h1>

        <div className="flex flex-wrap justify-center items-stretch gap-10 max-w-6xl mx-auto">
          {/* Product Card */}
          {[{
            title: "Bandi Presets Pro",
            description: "20 presets to make any photo look original and stylish",
            price: "$14.99",
            image: "/presets1.png",
          }, {
            title: "We do NOT belong in the Comfort Zone",
            description: "Wear our vision with our Premium clothing line.",
            price: "$24.99",
            image: "/Tshirt1.png",
          }].map((product, index) => (
            <div
              key={index}
              className="relative flex-grow basis-[240px] max-w-[720px] min-w-[300px]"
            >
              {/* Green Shadow Layer */}
              <div className="absolute inset-0 -translate-x-3 translate-y-3 bg-[#65C18C] rounded-2xl z-0"></div>

              {/* Content Card */}
              <div className="relative bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 z-10 min-h-[280px] h-full">
                <div className="flex flex-col items-start text-left max-w-md">
                  <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm mb-4">{product.description}</p>
                  <p className="text-xl font-bold mb-4">{product.price}</p>
                  <button className="bg-[#0D1F16] text-white px-8 py-3 text-base font-semibold rounded-md hover:bg-green-900 transition-all">
                    Buy
                  </button>
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
      <section id="blog" className="bg-green-950 text-white py-20 px-4">
        <div className="text-center mb-12">
          <span className="bg-[#5BA77A] text-green-950 px-4 py-1 rounded-full tracking-widest text-sm font-semibold">
            OUR BLOG
          </span>
          <h2 className="text-4xl font-semibold mt-4 mb-4">Despre industrie & Inspirație</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our collection of articles on design, marketing, and creative strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              {/* Simulare imagine sau header */}
              <div className="bg-green-800 h-36 w-full"></div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between text-sm text-green-700 font-medium mb-2">
                    <span>{post.category}</span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                </div>

                <div className="flex justify-between items-center text-sm font-semibold mt-auto">
                  <span className="text-black">By {post.author}</span>
                  <a
                    href="#"
                    className="text-green-700 hover:underline flex items-center"
                  >
                    Read more <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       

    </main>
  );
}
