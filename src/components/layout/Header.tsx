'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navigationData } from '@/data/navigationData';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div role="banner" className="sticky bg-background box-border z-[1000] py-3.5 top-0 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="items-center box-border flex justify-between">
            <Link href="/" aria-label="home" className="relative text-zinc-800 box-border block float-left max-w-24 w-full ml-3 mr-auto md:max-w-[130px] md:mx-0">
              <img src="/assets/logo.png" alt="" className="box-border inline-block max-w-full w-full" />
            </Link>
            <nav role="navigation" className="relative items-center bg-background box-border hidden flex-col float-right justify-start min-h-0 min-w-0 px-5 py-8 md:bg-transparent md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:p-0">
              <div className="box-border gap-x-6 flex flex-col min-h-0 min-w-0 gap-y-6 mr-0 pb-6 md:flex-row md:min-h-[auto] md:min-w-[auto] md:mr-8 md:pb-0">
                <div className="relative box-border hidden min-h-0 min-w-0 text-left z-[900] ml-0 mr-auto md:block md:min-h-[auto] md:min-w-[auto] md:ml-auto">
                  {/* <div 
                    role="button" 
                    className="relative text-white box-border gap-x-2 flex gap-y-2 text-nowrap align-top mx-auto font-poppins cursor-pointer"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <div className="box-border min-h-0 min-w-0 text-nowrap md:min-h-[auto] md:min-w-[auto]">Services</div>
                    <div className="relative box-border h-4 leading-4 min-h-0 min-w-0 text-nowrap w-4 ml-auto my-auto right-0 inset-y-0 font-webflow_icons md:min-h-[auto] md:min-w-[auto] before:accent-auto before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-webflow_icons">▼</div>
                  </div> */}
                  {/* <nav className={`absolute bg-zinc-300 box-border min-w-full ${isServicesOpen ? 'block' : 'hidden'}`}>
                    <div className="text-white bg-gray-900 box-border gap-x-6 flex flex-col min-w-0 gap-y-6 border-[var(--brand-yellow)] mt-0 p-0 rounded-none border-0 border-solid md:gap-x-2 md:min-w-[272px] md:gap-y-2 md:border md:mt-4 md:p-6 md:rounded-2xl">
                      {navigationData.services.map((service) => (
                        <Link key={service.id} href={service.href} className="box-border flex font-poppins">
                          {service.label}
                          {'hasBreak' in service && service.hasBreak && <br className="box-border block" />}
                        </Link>
                      ))}
                    </div>
                  </nav> */}
                </div>
                {navigationData.mainNav.map((item) => (
                  <Link key={item.id} href={item.href} className="text-white box-border flex min-h-0 min-w-0 font-poppins md:min-h-[auto] md:min-w-[auto]">
                    {item.label}
                  </Link>
                ))}
                {/* <div className="box-border flex md:hidden">
                  <div className="text-white bg-gray-900 box-border gap-x-6 flex flex-col min-w-0 gap-y-6 border-[var(--brand-yellow)] mt-0 p-0 rounded-none border-0 border-solid md:gap-x-2 md:min-w-[272px] md:gap-y-2 md:border md:mt-4 md:p-6 md:rounded-2xl">
                    {navigationData.services.map((service) => (
                                             <Link key={`mobile-${service.id}`} href={service.href} className="box-border flex font-poppins">
                         {service.label}
                         {'hasBreak' in service && service.hasBreak && <br className="box-border block" />}
                       </Link>
                    ))}
                  </div>
                </div> */}
              </div>
              <div className="items-stretch box-border flex flex-col justify-start min-h-0 min-w-0 md:[align-items:normal] md:block md:flex-row md:justify-normal md:min-h-[auto] md:min-w-[auto]">
               
               <Link href="/contact" className="text-base font-bold bg-[var(--brand-yellow)] hover:bg-[var(--brand-yellow-hover)] text-black box-border block leading-6 text-center  px-5 py-2 rounded-[100px] font-poppins md:text-lg md:inline-block md:leading-[27px]">Contactează-ne</Link>
              </div>
            </nav>
            <div 
              aria-label="menu" 
              role="button" 
              className="relative text-white text-2xl box-border block float-right h-8 leading-9 min-h-[auto] min-w-[auto] -order-1 w-8 p-0 md:text-gray-900 md:hidden md:h-auto md:min-h-0 md:min-w-0 md:order-none md:w-auto md:p-[18px] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative text-white items-center box-border flex flex-col h-full justify-center gap-y-2 w-full md:text-gray-900">
                <div className="text-white box-border shrink-0 h-0.5 min-h-[auto] min-w-[auto] w-full md:text-gray-900 md:min-h-0 md:min-w-0">
                  <div className="text-white bg-white box-border h-full w-full md:text-gray-900 md:bg-gray-900"></div>
                </div>
                <div className="absolute text-white box-border md:text-gray-900 before:accent-auto before:text-white before:table before:text-2xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-9 before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact before:md:text-gray-900 after:accent-auto after:clear-both after:text-white after:table after:text-2xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-9 after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact after:md:text-gray-900"></div>
                <div className="text-white box-border shrink-0 h-0.5 min-h-[auto] min-w-[auto] w-full md:text-gray-900 md:min-h-0 md:min-w-0">
                  <div className="text-white bg-white box-border h-full w-full md:text-gray-900 md:bg-gray-900"></div>
                </div>
              </div>
            </div>
            <div className="items-stretch box-border flex flex-col justify-start min-h-[auto] min-w-[auto] md:[align-items:normal] md:hidden md:flex-row md:justify-normal md:min-h-0 md:min-w-0">
              <Link href="/contact" className="text-base font-bold bg-[var(--brand-yellow)] box-border block leading-6 min-h-[auto] min-w-[auto] text-center border border-[var(--brand-yellow)] px-5 py-2 rounded-[100px] border-solid font-poppins md:text-lg md:inline-block md:leading-[27px] md:min-h-0 md:min-w-0">Talk to Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 