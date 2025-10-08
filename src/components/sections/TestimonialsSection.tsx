'use client';

import React, { useState, useEffect } from 'react';
import { testimonialsData, type Testimonial } from '@/data/testimonialsData';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonialPairs = [];
  
  // Group testimonials into pairs for desktop
  for (let i = 0; i < testimonialsData.testimonials.length; i += 2) {
    testimonialPairs.push(testimonialsData.testimonials.slice(i, i + 2));
  }

  // Use individual testimonials for mobile, pairs for desktop
  const items = isMobile ? testimonialsData.testimonials : testimonialPairs;
  const totalItems = items.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative box-border pt-16 pb-20 md:pt-20 md:pb-40">
      {/* Repeating B pattern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="flex justify-between items-end h-full opacity-5">
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
        </div>
      </div>
      <div className="relative z-10">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto mb-12 md:mb-16">
          <SectionTitle title="CLIENȚII NOȘTRI" subtitle="CE SPUN" subtitleClassName="font-normal" titleClassName="font-normal" invertOrder={true} />
        </div>
      </div>
      
      {/* Testimonials Carousel */}
      <div className="w-full px-5 md:px-10">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Navigation Arrows - Responsive positioning */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 lg:-translate-x-8 xl:-translate-x-16 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="black" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 lg:translate-x-8 xl:translate-x-16 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="black" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, itemIndex) => (
                <div key={itemIndex} className="w-full flex-shrink-0 px-4">
                  {isMobile ? (
                    // Mobile: Single testimonial
                    <div className="w-full flex justify-center">
                      <div className={`${(item as Testimonial).containerClass.replace('justify-start', 'justify-center')} w-full min-h-[400px] max-w-md`}>
                        <div className={(item as Testimonial).iconContainerClass}>
                          <Image width={400} height={400} src={(item as Testimonial).icon} alt="Quote Icon" className="box-border h-full w-full" />
                        </div>
                        <div className="items-start box-border gap-x-2 flex basis-[0%] flex-col grow justify-between gap-y-2 mt-5 font-poppins md:gap-x-8 md:gap-y-8 md:mt-10">
                          <div className="flex flex-col justify-center flex-grow">
                            <p className={(item as Testimonial).textClass}>{(item as Testimonial).quote}</p>
                          </div>
                          <div className="items-start box-border gap-x-4 flex flex-col justify-center gap-y-4 md:items-center md:gap-x-5 md:flex-row md:justify-start md:gap-y-5">
                            <Image width={400} height={400} src={(item as Testimonial).avatar} alt={(item as Testimonial).name} className="aspect-square box-border h-10 max-w-10 align-bottom w-full rounded-[100%] md:h-[74px] md:max-w-[74px]" />
                            <div className="items-start box-border gap-x-1 flex flex-col justify-start gap-y-1">
                              <div className="box-border">
                                <div className={(item as Testimonial).nameClass}>{(item as Testimonial).name}</div>
                                <div className={(item as Testimonial).titleClass}>{(item as Testimonial).title}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Desktop: Pair of testimonials
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                      {item.map((testimonial: Testimonial) => (
                        <div key={testimonial.id} className="w-full flex">
                          <div className={`${testimonial.containerClass.replace('justify-start', 'justify-center')} w-full min-h-[500px]`}>
                            <div className={testimonial.iconContainerClass}>
                              <Image width={400} height={400} src={testimonial.icon} alt="Quote Icon" className="box-border h-full w-full" />
                            </div>
                            <div className="items-start box-border gap-x-2 flex basis-[0%] flex-col grow justify-between gap-y-2 mt-5 font-poppins md:gap-x-8 md:gap-y-8 md:mt-10">
                              <div className="flex flex-col justify-center flex-grow">
                                <p className={testimonial.textClass}>{testimonial.quote}</p>
                              </div>
                              <div className="items-start box-border gap-x-4 flex flex-col justify-center gap-y-4 md:items-center md:gap-x-5 md:flex-row md:justify-start md:gap-y-5">
                                <Image width={400} height={400} src={testimonial.avatar} alt={testimonial.name} className="aspect-square box-border h-10 max-w-10 align-bottom w-full rounded-[100%] md:h-[74px] md:max-w-[74px]" />
                                <div className="items-start box-border gap-x-1 flex flex-col justify-start gap-y-1">
                                  <div className="box-border">
                                    <div className={testimonial.nameClass}>{testimonial.name}</div>
                                    <div className={testimonial.titleClass}>{testimonial.title}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index 
                    ? 'bg-[var(--brand-yellow)]' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to ${isMobile ? 'testimonial' : 'testimonial pair'} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
} 