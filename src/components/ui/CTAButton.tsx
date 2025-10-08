import React from 'react';
import Link from 'next/link';

export interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function CTAButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  fullWidth = false,
}: CTAButtonProps) {
  // Base styles
  const baseStyles = 'font-bold box-border text-center rounded-[100px] transition-colors inline-block';

  // Variant styles
  const variantStyles = {
    primary: 'bg-[var(--brand-yellow)] hover:bg-[var(--brand-yellow-hover)] text-black',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline: 'bg-transparent border-2 border-[var(--brand-yellow)] text-[var(--brand-yellow)] hover:bg-[var(--brand-yellow)] hover:text-black',
  };

  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-4 py-1.5 leading-5 md:text-base md:leading-6',
    md: 'text-base px-5 py-2 leading-6 md:text-lg md:leading-[27px]',
    lg: 'text-lg px-6 py-3 leading-7 md:text-xl md:leading-8',
  };

  // Disabled styles
  const disabledStyles = disabled ? 'bg-gray-600 text-gray-400 cursor-not-allowed hover:bg-gray-600' : '';

  // Width styles
  const widthStyles = fullWidth ? 'w-full block' : '';

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;

  // If href is provided, render as Link
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
