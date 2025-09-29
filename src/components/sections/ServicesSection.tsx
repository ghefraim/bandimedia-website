import React from 'react';
import { servicesData } from '@/data/servicesData';

export default function ServicesSection() {
  return (
    <section id="services" className="box-border overflow-hidden py-16 md:overflow-visible md:py-20">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border text-center w-full md:w-auto">
            <div className="box-border max-w-[300px] w-full mx-auto md:max-w-none md:w-[854px]">
              {/* Custom title without yellow background */}
              <div  className="items-center box-border flex flex-col justify-start text-center">
                <h2 className="text-black text-[32px] box-border leading-[35.2px] md:text-[64px] md:leading-[70.4px] font-black tracking-tighter">
                  SERVICIILE PE CARE ȚI LE PUTEM OFERI
                </h2>
              </div>
            </div>
            <div className="box-border gap-x-10 flex flex-col max-w-full gap-y-10 w-full mt-16 mx-0 md:max-w-[1200px] md:mt-20 md:mx-auto">
              {servicesData.services.map((service) => (
                <div key={service.id} className={service.containerClass}>
                  <img src={service.image} alt="" sizes="100vw" className="self-end box-border h-40 max-w-full object-cover object-[100%_50%] text-left w-full overflow-hidden rounded-tl-none rounded-r-2xl md:h-auto md:max-w-[360px] md:object-fill md:object-[50%_50%] md:text-center md:rounded-tl-2xl md:rounded-br-none" />
                  <div className="items-stretch box-border gap-x-2 flex basis-[0%] flex-col grow justify-start gap-y-2 text-left w-full mb-0 pl-5 md:gap-x-8 md:gap-y-8 md:w-auto md:mb-12 md:pl-0">
                    <div className="items-start box-border gap-x-8 flex justify-start gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]">
                      <h3 className="text-[28px] box-border leading-[33.6px] md:text-5xl md:leading-[57.6px]">{service.title}</h3>
                    </div>
                    <p className="text-base box-border leading-5 md:text-lg md:leading-[28.8px] font-normal">{service.description}</p>
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