import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutEffectSection() {
  const stats = [
    { number: '3', label: 'Birouri în toată lumea', highlight: true },
    { number: '70+', label: 'Angajați', highlight: false },
    { number: '150+', label: 'Feed-uri sociale', highlight: false },
    { number: '350+', label: 'Evenimente & Activări', highlight: false },
    { number: '500+', label: 'Campanii cu influenceri', highlight: true },
    { number: '$145M+', label: 'Vânzări urmărite', highlight: false },
    { number: '220M+', label: 'Rețea de influenceri', highlight: false },
    { number: '10BN+', label: 'Impresii de campanie', highlight: true }
  ];

  return (
    <section className="bg-background text-white py-16 md:py-20">
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
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-white/90 mb-6 font-geist font-ultra-thin tracking-wide">
            Știm cum să combinăm perspectivele strategice cu excelența creativă pentru a crea un impact de durată.
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-white/70 font-geist font-ultra-thin tracking-wide">
            Ca agenția voastră globală de social premiată, suntem aici să schimbăm narațiunea.
          </p>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[var(--brand-yellow)] text-black font-bold px-8 py-3 text-lg hover:bg-[var(--brand-yellow-hover)] transition-colors">
              Să discutăm
            </button>
          </div>
        </div>

        {/* Stats Grid */}
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
    </section>
  );
}
