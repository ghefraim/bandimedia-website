import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ShopSection from "./components/ShopSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ShopSection />
        <BlogSection />
      </main>
    </>
  );
}