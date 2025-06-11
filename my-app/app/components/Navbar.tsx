"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LiquidGlassBadge } from "./LiquidGlassBadge";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Image src="/logo.png" alt="Logo" width={80} height={80} />

          {/* Hamburger (mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-primary transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links (hidden on small screens) */}
          <div className="hidden md:flex flex-wrap justify-center gap-6 text-sm md:text-base font-bold">
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

        {/* Mobile Menu (shown on click) */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4 text-sm font-bold transition-all">
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
        )}

        {/* Centered Message */}
        <div className="mt-6 flex justify-center">
          <LiquidGlassBadge variant="primary" size="md">
            AGENȚIA CREATIVĂ BANDI MEDIA
          </LiquidGlassBadge>
        </div>
      </div>
    </nav>
  );
}