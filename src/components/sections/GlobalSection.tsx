import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function GlobalSection() {
  return (
    <section className="text-white bg-background box-border py-16 md:py-20">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border text-center">
            <SectionTitle title="ORADEA" subtitle="SITUAȚI ÎN" subtitleClassName="text-white" invertOrder={true}/>
            <div className="mt-12">
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Our global network spans across continents, connecting brands with audiences worldwide 
                while maintaining deep local insights that drive authentic engagement and measurable results.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">50+</div>
                <div className="text-sm opacity-80 mt-2">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">100M+</div>
                <div className="text-sm opacity-80 mt-2">Reach</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">500+</div>
                <div className="text-sm opacity-80 mt-2">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--brand-yellow)]">95%</div>
                <div className="text-sm opacity-80 mt-2">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 