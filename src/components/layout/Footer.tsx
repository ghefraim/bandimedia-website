'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { footerData } from '@/data/footerData';
import Image from 'next/image';
export default function Footer() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (email.trim()) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <footer className="text-white bg-none bg-repeat bg-auto box-border bg-left font-normal">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border pb-0 pb-2">
            <div className="items-center box-border gap-x-12 flex flex-col justify-center gap-y-12 pt-0 md:items-start md:justify-between md:gap-x-[normal] md:flex-row md:gap-y-[normal] ">
              <div className="items-start box-border gap-x-4 flex flex-col justify-start gap-y-4 w-full md:gap-x-6 md:gap-y-6 md:w-[500px]">
                <Image 
                  src="/assets/logo.png" 
                  alt="" 
                  className="box-border max-w-48 w-full md:max-w-[230px]" 
                  width={230}
                  height={230}
                />
                <p className="text-base box-border leading-6 md:text-lg md:leading-[27px]">Alătură-te newsletter-ului nostru pentru a fi la curent cu noutățile și lansările.</p>
                <div className="box-border w-full">
                  <form 
                    name="wf-form-Subscription-form" 
                    aria-label="Subscription form" 
                    className="items-start box-border gap-x-4 flex flex-col justify-start gap-y-0"
                    onSubmit={handleSubmit}
                  >
                    <div className="items-stretch box-border gap-x-4 flex flex-col justify-start gap-y-4 w-full md:items-start md:flex-row">
                      <div className="box-border">
                        <input 
                          name="Email" 
                          placeholder="Introdu adresa de email" 
                          type="email" 
                          className="text-lg box-border block h-12 leading-[25.7143px] outline-zinc-300 align-middle w-full border border-slate-600 p-3 rounded-lg border-solid"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div className="box-border mt-2">
                          <div className="box-border">
                            {/* Simplified version without reCAPTCHA for demo */}
                          </div>
                        </div>
                      </div>
                      <input type="submit" value="Abonează-te" className="text-gray-900 text-base font-bold bg-[var(--brand-yellow)] box-border block leading-6 text-center text-nowrap border border-[var(--brand-yellow)] px-5 py-2 rounded-[100px] border-solid md:text-lg md:leading-[27px] cursor-pointer hover:bg-yellow-500 transition-colors" />
                    </div>
                    <p className="mt-2 text-xs box-border leading-[18px]">Prin abonare ești de acord cu <Link href="/privacy-policy" className="text-[var(--brand-yellow)]">Politica noastră de Confidențialitate</Link> și consimți să primești actualizări de la compania noastră.</p>
                  </form>
                  {showSuccess && (
                    <div role="region" aria-label="Subscription form success" className="text-gray-900 bg-[var(--brand-yellow)] box-border block text-center p-6 mt-4 rounded-lg">
                      <div className="box-border">Mulțumim! Cererea ta a fost primită!</div>
                    </div>
                  )}
                  {showError && (
                    <div role="region" aria-label="Subscription form failure" className="bg-red-100 text-red-800 box-border block mt-2.5 p-2.5 rounded-lg">
                      <div className="box-border">Ups! Ceva nu a mers bine la trimiterea formularului.</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="items-center box-border gap-x-24 flex flex-col justify-center gap-y-8 md:flex-row md:items-start">
                <div className="items-center box-border gap-x-4 flex flex-col justify-center gap-y-4 text-center md:items-start md:text-left">
                  <div className="text-[var(--brand-yellow)] text-lg box-border leading-[27px]">Contact</div>
                  <div className="items-center box-border gap-x-4 flex flex-col justify-center gap-y-2 md:items-start">
                    <div className="box-border">
                      Locație: 
                      <a 
                        href="https://maps.app.goo.gl/rSg45evCSk8epxdY8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--brand-yellow)] hover:underline ml-1"
                      >
                        Str. Lăpușului nr. 21, Oradea
                      </a>
                    </div>
                    {/* <div className="box-border">Telefon: +40 740 123 456</div> */}
                    <div className="box-border">
                      Email: 
                      <a 
                        href="mailto:contact@bandimedia.com" 
                        className="text-[var(--brand-yellow)] hover:underline ml-1"
                      >
                        contact@bandimedia.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border gap-x-4 flex flex-col justify-center gap-y-4 text-center md:items-start md:text-left">
                  <div className="text-[var(--brand-yellow)] text-lg box-border leading-[27px]">Urmărește-ne</div>
                  {footerData.socialLinks.map((link) => (
                    <a key={link.id} href={link.href} className="items-center box-border gap-x-3 flex justify-center max-w-full gap-y-3 hover:text-[var(--brand-yellow)] transition-colors md:justify-start" target="_blank" rel="noopener noreferrer">
                      <Image src={link.icon} alt="" className="box-border max-w-6 w-full" width={24} height={24} />
                      <div className="box-border">{link.label}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className=" flex text-center w-full items-center box-border gap-x-8 flex-col-reverse justify-center gap-y-8 md:items-center md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:mt-0">
              <p className="mt-4 font-semibold text-center box-border">
                © <strong className="font-bold box-border mt-2">{new Date().getFullYear()} BANDI MEDIA SRL</strong>
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 