import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactHeroSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    email: '',
    services: [] as string[],
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Mulțumim! Mesajul tău a fost trimis cu succes. Te vom contacta în curând.');
        
        // Reset form
        setFormData({
          companyName: '',
          phone: '',
          email: '',
          services: [],
          description: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'A apărut o eroare. Te rugăm să încerci din nou.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('A apărut o eroare de conexiune. Te rugăm să încerci din nou.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    }
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
            <div className="mb-8 tracking-[-0.05em]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 ">
                HAI SĂ DUCEM ÎN ONLINE
                <br />
                <span className="text-[var(--brand-yellow)]">VIZIUNEA AFACERII TALE</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl leading-snug text-white/90 font-normal tracking-tight mb-8">
              Suntem aici să transformăm ideile tale în campanii de succes.
              Completează formularul și hai să discutăm despre cum putem să-ți aducem visurile la realitate.
            </p>


          </div>

          {/* Right Side - Contact Form */}
          <div className="">
            <h2 className="text-2xl font-bold mb-8 text-white">Detaliile tale:</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Numele companiei*"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Numărul de telefon*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-200"
                  />
                </div>
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
                  className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-200"
                />
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Ce servicii te interesează?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Creare de conținut foto/video',
                    'Social media management',
                    'Web design',
                    'Ads',
                    'Copywriting',
                    'Branding'
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.services.includes(service)}
                          onChange={(e) => handleServiceChange(service, e.target.checked)}
                        />
                        <div className={`w-5 h-5 border-2 rounded transition-colors duration-200 ${
                          formData.services.includes(service) 
                            ? 'border-[var(--brand-yellow)] bg-[var(--brand-yellow)]' 
                            : 'border-slate-600 bg-transparent group-hover:border-[var(--brand-yellow)]'
                        }`}>
                          {formData.services.includes(service) && (
                            <svg className="w-3 h-3 text-black m-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-white text-sm group-hover:text-[var(--brand-yellow)] transition-colors duration-200">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <textarea
                  name="description"
                  placeholder="Detalii proiect*"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-xl text-center font-medium ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}>
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-200 transform shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-[var(--brand-yellow)] text-black hover:bg-[var(--brand-yellow-hover)] hover:scale-[1.02] hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Se trimite...</span>
                  </div>
                ) : (
                  'Trimite Propunerea'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
