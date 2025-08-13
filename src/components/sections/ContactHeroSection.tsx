import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactHeroSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    budget: '',
    service: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const budgetOptions = [
    { value: '', label: 'Selectează bugetul' },
    { value: '10-20k', label: '10-20K EUR' },
    { value: '20-50k', label: '20-50K EUR' },
    { value: '50-100k', label: '50-100K EUR' },
    { value: '100k+', label: '100K+ EUR' }
  ];

  const serviceOptions = [
    { value: '', label: 'Selectează serviciul' },
    { value: 'social-media', label: 'Social Media Management' },
    { value: 'content-production', label: 'Content Production' },
    { value: 'influencer-marketing', label: 'Influencer Marketing' },
    { value: 'events', label: 'Evenimente & Activări' },
    { value: 'performance-marketing', label: 'Performance Marketing' },
    { value: 'tiktok-marketing', label: 'TikTok Marketing' }
  ];

  return (
    <section className="bg-background text-white py-16 md:py-20">
      <div className="max-w-[1312px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Hero Content */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-tight">
                HAI SĂ DUCEM ÎN ONLINE
                <br />
                <span className="text-[var(--brand-yellow)]">VIZIUNEA AFACERII TALE</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/90 font-geist font-normal tracking-wide mb-8">
              Suntem aici să transformăm ideile tale în campanii de succes. 
              Completează formularul și hai să discutăm despre cum putem să-ți aducem visurile la realitate.
            </p>


          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[var(--brand-green-light)] p-8 rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-white font-geist">Detaliile tale:</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Numele companiei*"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none font-geist"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none font-geist"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none font-geist"
                />
              </div>

              {/* Budget (Optional) */}
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white focus:border-[var(--brand-yellow)] focus:outline-none font-geist"
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[var(--brand-green-light)] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service (Optional) */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white focus:border-[var(--brand-yellow)] focus:outline-none font-geist"
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[var(--brand-green-light)] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description (Optional) */}
              <div>
                <textarea
                  name="description"
                  placeholder="Descriere proiect (opțional)"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none resize-none font-geist"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[var(--brand-yellow)] text-black font-bold py-3 px-6 rounded hover:bg-[var(--brand-yellow-hover)] transition-colors font-geist"
              >
                Trimite propunerea
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
