import React from 'react';
import { cn } from '@/lib/utils.js';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  subtitleClassName?: string;
  titleClassName?: string;
  invertOrder?: boolean;
}

export default function SectionTitle({ title, subtitle, align = 'center', subtitleClassName, titleClassName, invertOrder = false }: SectionTitleProps) {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <div className={`items-center box-border flex flex-col justify-start ${alignmentClasses[align]}`}>
      {/* Main title with yellow background */}
      <div className={`relative inline-block mb-2 ${invertOrder ? 'order-2' : ''}`}>
        <h2
          className={cn("relative font-black text-black text-[32px] box-border leading-[28px] z-10 px-6 py-2 md:text-[64px] md:leading-[60px] tracking-[-0.05em]", titleClassName)}
        >
          {title}
        </h2>
        <div
          className="absolute inset-0 bg-[var(--brand-yellow)] z-0"
          style={{ transform: 'skewX(-15deg)' }}
        ></div>
      </div>

      {/* Subtitle if provided */}
      {subtitle && (
        <h2
          className={cn("text-black text-[32px] box-border leading-[28px] md:text-[64px] md:leading-[60px] tracking-[-0.05em]", subtitleClassName)}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
} 