'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import ResultsSection from '@/components/sections/ResultsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhereSection from '@/components/sections/WhereSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import CaseStudyModal from '@/components/modals/CaseStudyModal';

export default function Home() {
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  const openCaseStudyModal = () => {
    setIsCaseStudyModalOpen(true);
  };

  const closeCaseStudyModal = () => {
    setIsCaseStudyModalOpen(false);
  };

  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <div className="bg-slate-200 box-border">
        <ResultsSection onOpenCaseStudyModal={openCaseStudyModal} />
        <ServicesSection />
      </div>
      <WhereSection />
      <div className="bg-slate-200 box-border">
        <TestimonialsSection />
      </div>
      <CTASection />
      <CaseStudyModal 
        isOpen={isCaseStudyModalOpen} 
        onClose={closeCaseStudyModal} 
      />
      <a 
        href="#" 
        role="button" 
        className="text-white bg-blue-500 box-border hidden px-[15px] py-[9px]"
        onClick={(e) => {
          e.preventDefault();
          openCaseStudyModal();
        }}
      >
        Button Text
      </a>
    </>
  );
}
