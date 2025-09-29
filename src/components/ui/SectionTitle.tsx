import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  subtitleClassName?: string;
  invertOrder?: boolean;
}

export default function SectionTitle({ title, subtitle, align = 'center', subtitleClassName, invertOrder = false }: SectionTitleProps) {
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
          className="relative font-black text-black text-[32px] box-border leading-[28px] z-10 px-6 py-2 md:text-[64px] md:leading-[60px] tracking-tighter"
          style={{ fontWeight: '950', letterSpacing: '-0.05em', textShadow: '0 0 1px rgba(0,0,0,0.8)' }}
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
          className={`${subtitleClassName || 'text-black'} text-[32px] box-border leading-[28px] md:text-[64px] md:leading-[60px] tracking-tighter`}
          style={{ fontWeight: '950', letterSpacing: '-0.05em', textShadow: '0 0 1px rgba(0,0,0,0.8)' }}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
} 