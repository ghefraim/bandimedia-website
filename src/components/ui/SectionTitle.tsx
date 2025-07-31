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
        <h2 className="relative text-black text-[32px] box-border leading-[35.2px] z-10 px-6 py-2 md:text-[64px] md:leading-[70.4px]">
          {title}
        </h2>
        <div
          className="absolute inset-0 bg-[var(--brand-yellow)] z-0"
          style={{ transform: 'skewX(-15deg)' }}
        ></div>
      </div>

      {/* Subtitle if provided */}
      {subtitle && (
        <h2 className={`${subtitleClassName || 'text-black'} text-[32px] box-border leading-[35.2px] md:text-[64px] md:leading-[70.4px]`}>
          {subtitle}
        </h2>
      )}
    </div>
  );
} 