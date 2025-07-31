import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="text-white box-border py-8 md:py-20">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="bg-[var(--brand-green-light)] box-border gap-x-6 flex flex-col gap-y-6 p-6 rounded-[20px] md:gap-x-20 md:flex-row md:gap-y-20 md:p-14">
            <div className="box-border w-full md:w-[692px]">
              <h2 className="text-[40px] box-border leading-[44px] md:text-[90px] md:leading-[99px]">
                HAI SĂ <span className="text-[var(--brand-yellow)]">LUCRĂM <br /> ÎMPREUNĂ</span>
              </h2>
            </div>
            <div className="items-start box-border gap-x-6 flex basis-[0%] flex-col grow justify-between gap-y-6 text-left font-poppins md:items-end md:gap-x-[normal] md:gap-y-[normal] md:text-right">
              <p className="text-lg box-border leading-[27px] text-left md:text-right">
                  Contactează-ne pentru a discuta despre posibilitatea de a lucra împreună sau pentru a răspunde la orice întrebări. Ne-ar plăcea să auzim de la tine!
                </p>
              <Link href="/contact" className="text-gray-900 text-base font-bold bg-[var(--brand-yellow)] block leading-6 text-center px-5 py-2 rounded-[100px] md:text-lg md:leading-[27px] hover:bg-yellow-500 transition-colors">Contactează-ne</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 