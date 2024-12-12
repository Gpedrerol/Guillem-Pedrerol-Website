import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const Marquee = ({
  children,
  pauseOnHover = true,
  direction = 'left',
  speed = 'normal',
  className,
  ...props
}: MarqueeProps) => {
  const speedMap = {
    slow: '40s',
    normal: '20s',
    fast: '10s',
  };

  return (
    <div
      className={cn(
        'group relative flex overflow-hidden',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'animate-marquee flex min-w-full shrink-0 items-center justify-around gap-4',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
          direction === 'right' && 'animate-marquee-reverse'
        )}
        style={{ '--duration': speedMap[speed] } as React.CSSProperties}
      >
        {children}
      </div>
      <div
        className={cn(
          'animate-marquee flex min-w-full shrink-0 items-center justify-around gap-4',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
          direction === 'right' && 'animate-marquee-reverse'
        )}
        style={{ '--duration': speedMap[speed] } as React.CSSProperties}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};
