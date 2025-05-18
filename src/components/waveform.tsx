
import React from 'react';
import { cn } from '@/lib/utils';

interface WaveformProps {
  waveform: number[];
  isPlaying?: boolean;
  className?: string;
}

const Waveform = ({ waveform, isPlaying = false, className }: WaveformProps) => {
  return (
    <div className={cn('flex items-end h-10 gap-[1px]', className)}>
      {waveform.map((value, index) => (
        <div
          key={index}
          className={cn(
            'waveform-bar transition-all duration-100 ease-in-out',
            isPlaying ? `animate-waveform-${(index % 3) + 1}` : 'opacity-70'
          )}
          style={{
            height: `${Math.max(15, value * 100)}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;
