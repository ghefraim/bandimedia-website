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
            <Image src="/logo.png" alt="Logo" width={140} height={140} />
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
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
            <Link href="/#services" className="hover:text-primary transition">
              Servicii
            </Link>
            <Link href="/#shop" className="hover:text-primary transition">
              Magazin
            </Link>
            <Link href="/#about" className="hover:text-primary transition">
              Despre
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-60 my-10" : "max-h-0"}
          `}
        >
          <div className="flex flex-col items-center gap-2 text-lg font-bold">
            <Link
              href="/contact"
              className="hover:text-primary transition min-w-36 text-center py-2"
            >
              Contact
            </Link>
            <Link
              href="/#services"
              className="hover:text-primary transition min-w-52 text-center py-2"
            >
              Servicii
            </Link>
            <Link
              href="/#shop"
              className="hover:text-primary transition min-w-52 text-center py-2"
            >
              Magazin
            </Link>
            <Link
              href="/#about"
              className="hover:text-primary transition min-w-52 text-center py-2"
            >
              Despre
            </Link>
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