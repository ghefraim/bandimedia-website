'use client';

import React, { useState } from 'react';
import { testimonialsData } from '@/data/testimonialsData';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.testimonials.length) % testimonialsData.testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
      <div className="box-border overflow-hidden">
        <div className="relative box-border">
          <div className="relative box-border z-0">
            <div role="list" className="items-stretch box-border gap-x-0 flex h-full justify-start gap-y-0 translate-x-[-563.625px] md:gap-x-10 md:gap-y-10 md:translate-x-[-1864px]" style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 2}rem))` }}>
              {testimonialsData.testimonials.map((testimonial, index) => (
                <div key={testimonial.id} role="listitem" className="relative box-border shrink-0 list-none max-w-[75%] w-[85%] mr-6 md:max-w-[960px] md:w-full md:mr-8">
                  <div className={testimonial.containerClass}>
                    <div className={testimonial.iconContainerClass}>
                      <img src={testimonial.icon} alt="Quote Icon" className="box-border h-full w-full" />
                    </div>
                    <div className="text-white items-start box-border gap-x-2 flex basis-[0%] flex-col grow justify-between gap-y-2 mt-5 font-poppins md:gap-x-8 md:gap-y-8 md:mt-10">
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
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="relative box-border z-10">
        <div className="items-center box-border gap-x-8 flex justify-center gap-y-8 mt-8 md:mt-12">
          <button
            onClick={prevSlide}
            className="cursor-pointer box-border h-12 w-12 bg-[url('https://cdn.prod.website-files.com/6774e9be183c4954edcadaa4/6774e9be183c4954edcadad5_arrow-left-alt.svg')] bg-no-repeat bg-center bg-contain border-none"
            aria-label="Previous testimonial"
          />
          <button
            onClick={nextSlide}
            className="cursor-pointer box-border h-12 w-12 bg-[url('https://cdn.prod.website-files.com/6774e9be183c4954edcadaa4/6774e9be183c4954edcadad6_arrow-right-alt.svg')] bg-no-repeat bg-center bg-contain border-none"
            aria-label="Next testimonial"
          />
        </div>
      </div>

      {/* Pagination dots for mobile */}
      <div className="box-border block md:hidden">
        <ul className="items-center box-border gap-x-2 flex justify-center gap-y-2 mt-6">
          {testimonialsData.testimonials.map((_, index) => (
            <li key={index} className="box-border">
              <button
                onClick={() => goToSlide(index)}
                className={`cursor-pointer box-border h-2 w-2 rounded-full border-none ${
                  currentSlide === index ? 'bg-[var(--brand-yellow)]' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
} 