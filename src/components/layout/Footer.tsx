'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { footerData } from '@/data/footerData';

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
    <footer className="text-white bg-none bg-repeat bg-auto box-border bg-left font-poppins md:bg-[url('https://cdn.prod.website-files.com/6774e9be183c4954edcadaa4/677d40f3facba32a269127c4_K%20whte.svg')] md:bg-no-repeat md:bg-size-[307.2px] md:bg-[position:80%_0px]">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border pb-0 md:pb-16">
            <div className="items-start box-border gap-x-12 flex flex-col justify-between gap-y-12 pt-0 md:[align-items:normal] md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:pt-16">
              <div className="items-start box-border gap-x-4 flex flex-col justify-start gap-y-4 w-full md:gap-x-6 md:gap-y-6 md:w-[500px]">
                <img src="/assets/logo.png" alt="" className="box-border max-w-48 w-full md:max-w-[230px]" />
                <p className="text-base box-border leading-6 md:text-lg md:leading-[27px]">Join our newsletter to stay up to date on features and releases.</p>
                <div className="box-border w-full">
                  <form 
                    name="wf-form-Subscription-form" 
                    aria-label="Subscription form" 
                    className="items-start box-border gap-x-4 flex flex-col justify-start gap-y-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="items-stretch box-border gap-x-4 flex flex-col justify-start gap-y-4 w-full md:items-start md:flex-row">
                      <div className="box-border">
                        <input 
                          name="Email" 
                          placeholder="Type your email" 
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
                      <input type="submit" value="Subscribe" className="text-gray-900 text-base font-bold bg-[var(--brand-yellow)] box-border block leading-6 text-center text-nowrap border border-[var(--brand-yellow)] px-5 py-2 rounded-[100px] border-solid md:text-lg md:leading-[27px] cursor-pointer hover:bg-yellow-500 transition-colors" />
                    </div>
                    <p className="text-xs box-border leading-[18px]">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                  </form>
                  {showSuccess && (
                    <div role="region" aria-label="Subscription form success" className="text-gray-900 bg-[var(--brand-yellow)] box-border block text-center p-6 mt-4 rounded-lg">
                      <div className="box-border">Thank you! Your submission has been received!</div>
                    </div>
                  )}
                  {showError && (
                    <div role="region" aria-label="Subscription form failure" className="bg-red-100 text-red-800 box-border block mt-2.5 p-2.5 rounded-lg">
                      <div className="box-border">Oops! Something went wrong while submitting the form.</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="items-start box-border gap-x-4 flex flex-col justify-start gap-y-4">
                <div className="text-[var(--brand-yellow)] text-lg box-border leading-[27px]">Follow Us</div>
                {footerData.socialLinks.map((link) => (
                  <a key={link.id} href={link.href} className="items-center box-border gap-x-3 flex justify-start max-w-full gap-y-3 hover:text-[var(--brand-yellow)] transition-colors" target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} alt="" className="box-border max-w-6 w-full" />
                    <div className="box-border">{link.label}</div>
                  </a>
                ))}
              </div>
            </div>
            <div className="items-start box-border gap-x-8 flex flex-col-reverse justify-between gap-y-8 mt-8 md:items-center md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:mt-[60px]">
              <p className="font-semibold box-border">
                © <strong className="font-bold box-border">{new Date().getFullYear()} BANDI MEDIA SRL</strong>
              </p>
              <Link href="/privacy-policy" className="box-border block max-w-full hover:text-[var(--brand-yellow)] transition-colors">
                <div className="box-border">Privacy policy</div>
              </Link>
            </div>
            <img src="https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677d40f3facba32a269127c4_K_whte.svg" alt="" className="box-border block max-w-64 w-full mr-auto mt-12 md:hidden md:max-w-full md:mr-0 md:mt-0" />
          </div>
        </div>
      </div>
    </footer>
  );
} 