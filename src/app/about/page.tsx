'use client';
import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import AboutStorySection from '@/components/sections/AboutStorySection';
import AboutEffectSection from '@/components/sections/AboutEffectSection';
import AboutTeamSection from '@/components/sections/AboutTeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';

export default function About() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <div className="bg-slate-200 box-border">
        <AboutStorySection />
      </div>
      <AboutEffectSection />
      <div className="box-border pt-8 " style={{ borderTop: '4px solid var(--brand-yellow)' }}>
        <AboutTeamSection />
      </div>
      <div className="bg-slate-200 box-border">
        <TestimonialsSection />
      </div>
      <CTASection />
    </>
  );
}
