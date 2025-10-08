import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

export default function CTASection() {
  return (
    <section className="text-white box-border py-8 md:py-20">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="bg-[var(--brand-green-light)] box-border gap-x-6 flex flex-col gap-y-6 p-6 rounded-[20px] md:gap-x-20 md:flex-row md:gap-y-20 md:p-14">
            <div className="box-border w-full md:w-[692px]">
              <h2 className="text-[40px] box-border leading-[44px] md:text-[60px] md:leading-[69px] font-normal">
                HAI SĂ <span className="text-[var(--brand-yellow)]"><br/>LUCRĂM <br /> ÎMPREUNĂ</span>
              </h2>
            </div>
            <div className="items-start box-border gap-x-6 flex basis-[0%] flex-col grow justify-between gap-y-6 text-left font-poppins md:items-end md:gap-x-[normal] md:gap-y-[normal] md:text-right">
              <p className="text-sm font-light box-border leading-[20px] text-left md:text-lg md:font-normal md:leading-[27px] md:text-right">
                  Ai o viziune? Tu vii cu ideea, noi venim cu strategii, content și rezultate. Vino să răsturnăm regulile și să rescriem povestea ta pe social media! Contactează-ne acum și o să ai parte de o analiză gratuită.
                </p>
              <CTAButton href="/contact">Contactează-ne</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 