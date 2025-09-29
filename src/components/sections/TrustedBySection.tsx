import React, { useEffect, useRef, useState } from 'react';
import { trustedBrandsData } from '@/data/trustedBrandsData';
import Image from 'next/image';
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
            <p className="box-border uppercase text-white text-xl md:text-2xl mb-6 tracking-[-0.02em]">Aleși de Branduri care Contează</p>
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
              <Image   src={brand.logo} alt={brand.name} className={brand.desktopClass} width={400} height={400} />
              <Image src={brand.logo} alt={brand.name} className={brand.mobileClass} width={400} height={400} />
            </div>
          ))}

          {/* duplicate for seamless loop */}
          {trustedBrandsData.brands.map((brand) => (
            <div
              key={`duplicate-${brand.id}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <Image src={brand.logo} alt={brand.name} className={brand.desktopClass} width={400} height={400} />
              <Image src={brand.logo} alt={brand.name} className={brand.mobileClass} width={400} height={400} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}