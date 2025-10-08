'use client';

import React from 'react';
import { servicesData } from '@/data/servicesData';
import SectionTitle from '../ui/SectionTitle';
import { Camera, Share2, Globe, TrendingUp, PenTool, Sparkles } from 'lucide-react';

const iconMap = {
  'content-production': Camera,
  'social-media': Share2,
  'events-activations': Globe,
  'performance-marketing': TrendingUp,
  'influencer-marketing': PenTool,
  'talent-management': Sparkles,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative box-border overflow-hidden py-16 md:overflow-visible md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-4 gap-8 p-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square bg-black rounded-full opacity-50" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border w-full md:w-auto">
            <div className="box-border max-w-[300px] w-full mx-auto md:max-w-none md:w-[854px] mb-16 md:mb-20">
              <SectionTitle title="SERVICIILE PE CARE ȚI LE" subtitle="PUTEM OFERI" />
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
              {servicesData.services.map((service, index) => {
                const Icon = iconMap[service.id as keyof typeof iconMap];
                const bgColor = index === 0 ? 'bg-[var(--brand-green-light)]' : 
                                index === 1 ? 'bg-slate-700' : 
                                index === 2 ? 'bg-[var(--brand-yellow)]' : 
                                index === 3 ? 'bg-emerald-700' : 
                                index === 4 ? 'bg-amber-400' : 'bg-stone-700';
                const textColor = index === 2 || index === 4 ? 'text-black' : 'text-white';
                const iconBgColor = index === 2 || index === 4 ? 'bg-black/10' : 'bg-white/10';
                const iconColor = index === 2 || index === 4 ? 'text-black' : 'text-white';
                
                return (
                  <div 
                    key={service.id} 
                    className={`${bgColor} ${textColor} rounded-[20px] p-6 md:p-8 flex flex-col gap-6 group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}
                  >
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-black/5 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Icon Container */}
                    <div className={`${iconBgColor} ${iconColor} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 relative z-10`}>
                      {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-3 relative z-10">
                      <h3 className="text-xl md:text-2xl font-black leading-tight tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed font-normal opacity-90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 