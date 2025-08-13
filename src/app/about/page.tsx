'use client';
import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import AboutStorySection from '@/components/sections/AboutStorySection';
import AboutEffectSection from '@/components/sections/AboutEffectSection';
import AboutTeamSection from '@/components/sections/AboutTeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <TrustedBySection />
      <div className="bg-slate-200 box-border">
        <AboutStorySection />
      </div>
      <AboutEffectSection />
      <AboutTeamSection />
      <div className="bg-slate-200 box-border">
        <TestimonialsSection />
      </div>
      <CTASection />
    </>
  );
}
