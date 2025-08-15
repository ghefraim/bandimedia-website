'use client';

import React, { useState, useEffect } from 'react';
import { testimonialsData } from '@/data/testimonialsData';

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
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
          <img src="/B-black.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" />
        </div>
      </div>
      <div className="relative z-10">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="items-center box-border flex flex-col justify-start text-center mb-12 md:mb-16">
            <h2 className="text-black text-[32px] box-border leading-[35.2px] md:text-[64px] md:leading-[70.4px]">CE SPUN</h2>
            <div className="relative inline-block">
              <h2 className="relative text-black text-[32px] box-border leading-[35.2px] z-10 px-6 py-2 md:text-[64px] md:leading-[70.4px]">
                CLIENȚII NOȘTRI
              </h2>
              <div 
                className="absolute inset-0 bg-[var(--brand-yellow)] z-0"
                style={{ transform: 'skewX(-15deg)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Carousel */}
      <div className="w-full px-5 md:px-10">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Navigation Arrows - Responsive positioning */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-16 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-16 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div className={`${item.containerClass} w-full min-h-[400px] max-w-md`}>
                        <div className={item.iconContainerClass}>
                          <img src={item.icon} alt="Quote Icon" className="box-border h-full w-full" />
                        </div>
                        <div className="items-start box-border gap-x-2 flex basis-[0%] flex-col grow justify-between gap-y-2 mt-5 font-poppins md:gap-x-8 md:gap-y-8 md:mt-10">
                          <p className={item.textClass}>{item.quote}</p>
                          <div className="items-start box-border gap-x-4 flex flex-col justify-center gap-y-4 md:items-center md:gap-x-5 md:flex-row md:justify-start md:gap-y-5">
                            <img src={item.avatar} alt={item.name} className="aspect-square box-border h-10 max-w-10 align-bottom w-full rounded-[100%] md:h-[74px] md:max-w-[74px]" />
                            <div className="items-start box-border gap-x-1 flex flex-col justify-start gap-y-1">
                              <div className="box-border">
                                <div className={item.nameClass}>{item.name}</div>
                                <div className={item.titleClass}>{item.title}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Desktop: Pair of testimonials
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                      {item.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex">
                          <div className={`${testimonial.containerClass} w-full min-h-[500px]`}>
                            <div className={testimonial.iconContainerClass}>
                              <img src={testimonial.icon} alt="Quote Icon" className="box-border h-full w-full" />
                            </div>
                            <div className="items-start box-border gap-x-2 flex basis-[0%] flex-col grow justify-between gap-y-2 mt-5 font-poppins md:gap-x-8 md:gap-y-8 md:mt-10">
                              <p className={testimonial.textClass}>{testimonial.quote}</p>
                              <div className="items-start box-border gap-x-4 flex flex-col justify-center gap-y-4 md:items-center md:gap-x-5 md:flex-row md:justify-start md:gap-y-5">
                                <img src={testimonial.avatar} alt={testimonial.name} className="aspect-square box-border h-10 max-w-10 align-bottom w-full rounded-[100%] md:h-[74px] md:max-w-[74px]" />
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