'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navigationData } from '@/data/navigationData';
import Image from 'next/image';
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div role="banner" className="sticky bg-background box-border z-[1000] py-3.5 top-0 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="items-center box-border flex justify-between">
            <Link href="/" aria-label="home" className="relative text-zinc-800 box-border block float-left max-w-24 w-full ml-3 mr-auto md:max-w-[130px] md:mx-0">
              <Image
               src="/assets/logo.png" alt="" className="box-border inline-block max-w-full w-full" width={130} height={130} />
            </Link>
            <nav role="navigation" className="relative items-center bg-background box-border hidden flex-col float-right justify-start min-h-0 min-w-0 px-5 py-8 md:bg-transparent md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:p-0">
              <div className="box-border gap-x-6 flex flex-col min-h-0 min-w-0 gap-y-6 mr-0 pb-6 md:flex-row md:min-h-[auto] md:min-w-[auto] md:mr-8 md:pb-0">
                {navigationData.mainNav.map((item) => (
                  <Link key={item.id} href={item.href} className="text-white box-border flex min-h-0 min-w-0 font-poppins md:min-h-[auto] md:min-w-[auto]">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="items-stretch box-border flex flex-col justify-start min-h-0 min-w-0 md:[align-items:normal] md:block md:flex-row md:justify-normal md:min-h-[auto] md:min-w-[auto]">
               <Link href="/contact" className="text-base font-bold bg-[var(--brand-yellow)] hover:bg-[var(--brand-yellow-hover)] text-black box-border block leading-6 text-center  px-5 py-2 rounded-[100px] font-poppins md:text-lg md:inline-block md:leading-[27px]">
                 <span className="md:hidden">Contact</span>
                 <span className="hidden md:inline">Contactează-ne</span>
               </Link>
              </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`absolute top-full left-0 w-full bg-background border-t border-white/10 z-[999] md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2">
                  {navigationData.mainNav.map((item) => (
                    <Link 
                      key={item.id} 
                      href={item.href} 
                      className="text-white text-sm font-poppins hover:text-[var(--brand-yellow)] transition-colors py-3 px-2 text-center rounded-lg hover:bg-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div 
              aria-label="menu" 
              role="button" 
              className="relative text-white text-2xl box-border block float-right h-8 leading-9 min-h-[auto] min-w-[auto] -order-1 w-8 p-1 md:text-gray-900 md:hidden md:h-auto md:min-h-0 md:min-w-0 md:order-none md:w-auto md:p-[18px] cursor-pointer hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative flex flex-col justify-center items-center h-full w-full gap-1">
                <div className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </div>
            <div className="items-stretch box-border flex flex-col justify-start min-h-[auto] min-w-[auto] md:[align-items:normal] md:hidden md:flex-row md:justify-normal md:min-h-0 md:min-w-0">
            <Link href="/contact" className="text-base font-bold bg-[var(--brand-yellow)] hover:bg-[var(--brand-yellow-hover)] text-black box-border block leading-6 text-center  px-3 py-2 rounded-[100px] font-poppins md:text-lg md:inline-block md:leading-[27px]">
              <span className="md:hidden">Contact</span>
              <span className="hidden md:inline">Contactează-ne</span>
            </Link>
             
              {/* <Link href="/contact" className="text-base font-bold bg-[var(--brand-yellow)] box-border block leading-6 min-h-[auto] min-w-[auto] text-center border border-[var(--brand-yellow)] px-5 py-2 rounded-[100px] border-solid font-poppins md:text-lg md:inline-block md:leading-[27px] md:min-h-0 md:min-w-0">Contactează-ne</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 