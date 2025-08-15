import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

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
            <SectionTitle title="VESTUL ROMÂNIEI" subtitle="SUNTEM ÎN" subtitleClassName="text-white" invertOrder={true}/>
            <div className="mt-12">
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Cu rădăcini în vest, dar idei care ajung oriunde, aducem un mix unic de creativitate locală și viziune globală. Facem deplasări în tot vestul țării, așa că, nu ezita să ne contactezi!
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">50+</div>
                <div className="text-sm opacity-80 mt-2">Colaboratori</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">3500+</div>
                <div className="text-sm opacity-80 mt-2">Postări realizate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">5M+</div>
                <div className="text-sm opacity-80 mt-2">Vizualizări</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">80+</div>
                <div className="text-sm opacity-80 mt-2">Evenimente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 