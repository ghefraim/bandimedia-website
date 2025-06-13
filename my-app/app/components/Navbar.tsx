"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LiquidGlassBadge } from "./LiquidGlassBadge";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </Link>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links - Desktop Only */}
          <div className="hidden md:flex flex-wrap justify-center gap-6 text-sm md:text-base font-bold">
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            <a href="/#services" className="hover:text-primary transition">Services</a>
            <a href="/#shop" className="hover:text-primary transition">Shop</a>
            <a href="/#about" className="hover:text-primary transition">About</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-60 mt-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col items-center gap-4 text-sm font-bold">
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            <a href="/#services" className="hover:text-primary transition">Services</a>
            <a href="/#shop" className="hover:text-primary transition">Shop</a>
            <a href="/#about" className="hover:text-primary transition">About</a>
          </div>
        </div>

        {/* Badge */}
        <div className="mt-1 mb-2 flex justify-center">
          <LiquidGlassBadge variant="primary" size="md">
            AGENȚIA CREATIVĂ BANDI MEDIA
          </LiquidGlassBadge>
        </div>
      </div>
    </nav>
  );
}