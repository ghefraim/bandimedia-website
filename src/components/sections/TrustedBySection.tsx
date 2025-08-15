import React from 'react';
import { trustedBrandsData } from '@/data/trustedBrandsData';

export default function TrustedBySection() {
  return (
    <section className="box-border overflow-hidden py-12 md:py-20">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="text-white items-center box-border flex-col justify-start text-center font-poppins">
            <p className="box-border mb-8 text-lg">Aleși de Branduri care Contează</p>
          </div>
        </div>
      </div>
      <div className="box-border mt-8">
        <div className="box-border mt-5 md:mt-4">
          <div className="relative overflow-hidden">
            {/* Single scrolling row */}
            <div className="flex animate-scroll-left space-x-10 md:space-x-16">
              {/* Original brands */}
              {trustedBrandsData.brands.map((brand) => (
                <div key={brand.id} className="flex-shrink-0">
                  <div className="box-border">
                    <img src={brand.logo} alt={brand.name} className={brand.desktopClass} />
                    <img src={brand.logo} alt={brand.name} className={brand.mobileClass} />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {trustedBrandsData.brands.map((brand) => (
                <div key={`duplicate-${brand.id}`} className="flex-shrink-0">
                  <div className="box-border">
                    <img src={brand.logo} alt={brand.name} className={brand.desktopClass} />
                    <img src={brand.logo} alt={brand.name} className={brand.mobileClass} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 