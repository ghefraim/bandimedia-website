import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactEffectSection() {
  const stats = [
    { number: '70+', label: 'Angajați', highlight: true },
    { number: '500+', label: 'Campanii cu influenceri', highlight: false },
    { number: '$145M+', label: 'Vânzări urmărite', highlight: true },
    { number: '10BN+', label: 'Impresii de campanie', highlight: false }
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-[var(--brand-green-light)] text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1312px] mx-auto px-5 md:px-10">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <SectionTitle 
            title="EFECTUL" 
            subtitle="BANDIMEDIA" 
            align="center"
            subtitleClassName="text-white"
          />
        </div>
        
        {/* Description */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-white/90 font-geist font-normal tracking-wide mb-6">
            Știm cum să combinăm perspectivele strategice cu excelența creativă pentru a crea un impact de durată.
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-white/70 font-geist font-normal tracking-wide">
            Ca agenția voastră globală de social premiată, suntem aici să schimbăm narațiunea.
          </p>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[var(--brand-yellow)] text-black font-bold px-8 py-3 text-lg hover:bg-[var(--brand-yellow-hover)] transition-colors">
              Să discutăm
            </button>
          </div>
        </div>

        {/* Stats Grid with Enhanced Gradient */}
        <div className="relative">
          {/* Gradient Border Container */}
          <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-[var(--brand-yellow)]/40 via-[var(--brand-yellow)]/10 to-[var(--brand-yellow)]/40">
            <div className="bg-gradient-to-br from-[var(--brand-green-light)]/80 to-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-black mb-2 ${
                      stat.highlight ? 'text-[var(--brand-yellow)]' : 'text-white'
                    }`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Gradient Overlay Effects */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-[var(--brand-yellow)]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[var(--brand-yellow)]/3 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
