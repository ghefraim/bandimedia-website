import React from 'react';
import { heroData } from '@/data/heroData';
import Image from 'next/image';
// High-quality images for the hero collage
const heroImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
];

export default function HeroSection() {
  return (
    <section className="relative  ">
      {/* Fixed height image strip */}
      <div className="relative w-full h-[320px] md:h-[560px] overflow-hidden">
        <div className="flex h-full w-full">
          {heroImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-1 h-full min-w-0"
            >
              <Image 
                src={image} 
                alt={`Hero image ${index + 1}`} 
                className="h-full w-full object-cover"
                width={600}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/*  Banner - positioned to overlap (smaller + less overlap) */}
      <div className="relative z-10 flex justify-center -mt-6 md:-mt-10">
        <div className="relative inline-block">
          <div 
            className="absolute inset-0 bg-[var(--brand-yellow)] z-0"
            style={{ transform: 'skewX(-15deg)' }}
          ></div>
          <h1
            className="relative text-gray-900 text-xl min-[400px]:text-2xl md:text-6xl font-black uppercase z-10 px-6 py-2 text-center tracking-[-0.05em]"
          >
            {heroData.mainTitle.firstPart}
            <br />
            {heroData.mainTitle.secondPart}
          </h1>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative px-5 pt-10 pb-6 md:px-10 md:pt-14 md:pb-8">
        <div className="max-w-[1312px] mx-auto text-center">
          <h2
            className="text-white text-xl min-[400px]:text-2xl md:text-5xl mb-5 font-black tracking-[-0.02em]"
          >
            {heroData.subtitle}
          </h2>
          <p
            className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-snug tracking-tight font-normal"
          >
            {heroData.description}
          </p>
        </div>
      </div>
    </section>
  );
} 