import type React from 'react';
import { cn } from '../../utils/cn';

type BrandMarkProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
};

const sizeMap = {
  sm: { icon: 20, textSize: 'text-xs', subSize: 'text-[9px]' },
  md: { icon: 28, textSize: 'text-sm', subSize: 'text-[10px]' },
  lg: { icon: 40, textSize: 'text-base', subSize: 'text-xs' },
};

export const BrandMark: React.FC<BrandMarkProps> = ({
  className,
  size = 'md',
  showText = true,
}) => {
  const s = sizeMap[size];
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Icon mark */}
      <div
        className={cn(
          'flex items-center justify-center rounded-xl bg-primary-gradient text-[hsl(var(--primary-foreground))] shadow-[0_12px_28px_var(--nav-brand-shadow)]',
          size === 'sm' ? 'h-8 w-8' : size === 'md' ? 'h-10 w-10' : 'h-14 w-14'
        )}
      >
        <svg
          viewBox="0 0 64 64"
          className={cn(
            size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-7 w-7'
          )}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid background */}
          <g opacity="0.05" stroke="currentColor" strokeWidth="0.5">
            <line x1="12" y1="12" x2="52" y2="12"/>
            <line x1="12" y1="20" x2="52" y2="20"/>
            <line x1="12" y1="28" x2="52" y2="28"/>
            <line x1="12" y1="36" x2="52" y2="36"/>
            <line x1="12" y1="44" x2="52" y2="44"/>
            <line x1="12" y1="52" x2="52" y2="52"/>
            <line x1="16" y1="8" x2="16" y2="56"/>
            <line x1="24" y1="8" x2="24" y2="56"/>
            <line x1="32" y1="8" x2="32" y2="56"/>
            <line x1="40" y1="8" x2="40" y2="56"/>
            <line x1="48" y1="8" x2="48" y2="56"/>
          </g>
          {/* Candlesticks */}
          <rect x="17" y="38" width="4" height="14" rx="1" fill="currentColor" opacity="0.2"/>
          <rect x="26" y="42" width="4" height="8" rx="1" fill="currentColor" opacity="0.15"/>
          {/* Trend line */}
          <path d="M10 52 L20 42 L30 44 L40 28 L52 14"
                stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
          {/* Data points */}
          <circle cx="20" cy="42" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="30" cy="44" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="40" cy="28" r="2" fill="currentColor" opacity="0.5"/>
          {/* Highlight node */}
          <circle cx="52" cy="14" r="4" fill="currentColor" opacity="0.9"/>
          <circle cx="52" cy="14" r="2" fill="currentColor"/>
          <circle cx="52" cy="14" r="0.8" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={cn('truncate font-semibold text-foreground', s.textSize)}>
            如意金股
          </span>
          <span className={cn('truncate text-secondary-text/60', s.subSize)}>
            林姗姗
          </span>
        </div>
      )}
    </div>
  );
};
