import React, { useEffect, useRef, useState } from 'react';
import { trustedBrandsData } from '@/data/trustedBrandsData';

export default function TrustedBySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(60); // fallback default

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2; // half, since duplicated
      const speed = 20; // px per second
      const newDuration = trackWidth / speed;
      setDuration(newDuration);
    }
  }, []);

  return (
    <section className="box-border overflow-hidden py-12 md:pt-10">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="text-white items-center box-border flex-col justify-start text-center font-poppins">
            <p className="box-border mb-8 text-lg">Aleși de Branduri care Contează</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* ✅ dynamic duration applied inline */}
        <div
          ref={trackRef}
          className="flex animate-scroll-left flex-nowrap min-w-max items-center"
          style={{ animationDuration: `${duration}s` }}
        >
          {trustedBrandsData.brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img src={brand.logo} alt={brand.name} className={brand.desktopClass} />
              <img src={brand.logo} alt={brand.name} className={brand.mobileClass} />
            </div>
          ))}

          {/* duplicate for seamless loop */}
          {trustedBrandsData.brands.map((brand) => (
            <div
              key={`duplicate-${brand.id}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img src={brand.logo} alt={brand.name} className={brand.desktopClass} />
              <img src={brand.logo} alt={brand.name} className={brand.mobileClass} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}