import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar"; // ajustează calea dacă e diferită

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-[#0d3a26] via-[#124d34] to-[#0d3a26] min-h-screen">
      <Navbar />

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ai o idee, o întrebare sau un proiect? Trimite-ne un mesaj – suntem aici să te ajutăm!
          </p>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}