import React from 'react';
import { servicesData } from '@/data/servicesData';

export default function ServicesSection() {
  return (
    <section id="services" className="box-border overflow-hidden py-16 md:overflow-visible md:py-20">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border w-full md:w-auto">
            <div className="box-border max-w-[300px] w-full mx-auto md:max-w-none md:w-[854px]">
              {/* Custom title without yellow background */}
              <div  className="items-center box-border flex flex-col justify-start text-center">
                <h2 className="text-black text-[32px] box-border leading-[35.2px] md:text-[64px] md:leading-[70.4px] font-black tracking-tighter">
                  SERVICIILE PE CARE ȚI LE PUTEM OFERI
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full mt-16 max-w-[1200px] mx-auto md:mt-20">
              {servicesData.services.map((service, index) => {
                const bgColor = index === 0 ? 'bg-[var(--brand-green-light)]' : 
                                index === 1 ? 'bg-slate-700' : 
                                index === 2 ? 'bg-[var(--brand-yellow)]' : 
                                index === 3 ? 'bg-emerald-700' : 
                                index === 4 ? 'bg-amber-400' : 'bg-stone-700';
                const textColor = index === 2 || index === 4 ? 'text-black' : 'text-white';
                
                return (
                  <div key={service.id} className={`${bgColor} ${textColor} rounded-[20px] p-5 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12`}>
                    {/* Image Container */}
                    <div className="flex-shrink-0">
                      <div className="w-full h-40 md:w-[300px] md:h-[200px] flex items-center justify-center">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    
                    {/* Content Container */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 