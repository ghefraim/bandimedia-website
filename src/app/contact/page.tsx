'use client';
import React from 'react';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import ContactEffectSection from '@/components/sections/ContactEffectSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

export default function Contact() {
  return (
    <>
      <ContactHeroSection />
      <TrustedBySection />
      <ContactEffectSection />
      <div className="bg-slate-200 box-border">
        <ContactInfoSection />
      </div>
    </>
  );
}
