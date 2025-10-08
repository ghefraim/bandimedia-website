import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { statsData } from '@/data/statsData';

export default function WhereSection() {
  return (
    <section className="text-white relative box-border py-16 md:py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/oradea.jpg")',
        }}
      />
      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0 bg-background opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border text-center">
            <SectionTitle title="VESTUL ROMÂNIEI" subtitle="SUNTEM ÎN" subtitleClassName="text-white font-normal" invertOrder={true} />
            <div className="mt-12">
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Cu rădăcini în vest, dar idei care ajung oriunde, aducem un mix unic de creativitate locală și viziune globală. Facem deplasări în tot vestul țării, așa că, nu ezita să ne contactezi!
              </p>
            </div>
            
             {/* Stats Grid with Enhanced Gradient */}
        <div className="relative mt-16">
          {/* Gradient Border Container */}
          <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-[var(--brand-yellow)]/40 via-[var(--brand-yellow)]/10 to-[var(--brand-yellow)]/40">
            <div className="bg-gradient-to-br from-[var(--brand-green-light)]/80 to-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {statsData.map((stat, index) => (
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
          </div>
          </div>
        </div>
      </div>
    </section>
  );
} 