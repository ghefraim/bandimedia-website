"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-[#12221A]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#5BA77A]/40 shadow-[0_4px_16px_0_rgba(91,167,122,0.3)] space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-white">Formular de contact</h2>

      {/* Nume */}
      <div>
        <label className="block text-white mb-1">
          Nume <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Numele tău"
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#5BA77A]/60 focus:ring-1 focus:ring-[#5BA77A]/40"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-white mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Adresa ta de email"
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#5BA77A]/60 focus:ring-1 focus:ring-[#5BA77A]/40"
        />
      </div>

      {/* Telefon */}
      <div>
        <label className="block text-white mb-1">
          Telefon
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Numărul tău de telefon"
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#5BA77A]/60 focus:ring-1 focus:ring-[#5BA77A]/40"
        />
      </div>

      {/* Mesaj */}
      <div>
        <label className="block text-white mb-1">
          Mesaj <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Mesajul tău"
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#5BA77A]/60 focus:ring-1 focus:ring-[#5BA77A]/40"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`
            relative inline-flex items-center justify-center gap-2
            px-8 py-3 text-base font-semibold rounded-xl overflow-hidden
            backdrop-blur-xl border transition-all duration-300 ease-out
            border-emerald-400/30 text-white
            bg-gradient-to-br from-[#5BA77A]/90 via-[#5BA77A]/80 to-emerald-600/90
            shadow-[0_8px_32px_0_rgba(91,167,122,0.4)]
            hover:shadow-[0_12px_40px_0_rgba(91,167,122,0.6)]
            hover:from-[#5BA77A] hover:via-[#5BA77A]/90 hover:to-emerald-600
            hover:border-[#5BA77A]/50 hover:-translate-y-0.5
            active:scale-95 active:duration-75
            group md:w-auto w-full
          `}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            {status === "sending" ? "Se trimite..." : "Trimite mesajul"}
            <ChevronRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </button>
      </div>

      {/* Status messages */}
      {status === "sent" && <p className="text-green-400 text-center">Mesaj trimis cu succes!</p>}
      {status === "error" && <p className="text-red-400 text-center">A apărut o eroare.</p>}
    </form>
  );
}