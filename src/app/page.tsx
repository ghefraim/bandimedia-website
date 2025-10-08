'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerData } from '@/data/footerData';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (adjust as needed)
  const launchDate = new Date('2024-12-31T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could integrate with your email service
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="flex justify-between items-center h-full opacity-5">
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[600px] object-contain" width={400} height={600} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[600px] object-contain" width={400} height={600} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[600px] object-contain" width={400} height={600} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/assets/logo.png"
            alt="Bandi Media"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-6 tracking-tighter">
            COMING
            <br />
            <span className="text-[var(--brand-yellow)]">SOON</span>
          </h1>
        </div>

        {/* Social Links & Contact */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
}
