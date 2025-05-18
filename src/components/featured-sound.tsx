
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SoundEffect } from '@/models/sound-effects';
import { useSoundPlayback } from '@/hooks/use-sound-playback';
import Waveform from './waveform';

interface FeaturedSoundProps {
  sound: SoundEffect;
}

const FeaturedSound = ({ sound }: FeaturedSoundProps) => {
  const { isPlaying, togglePlay } = useSoundPlayback({
    audioUrl: sound.audioUrl,
  });

  return (
    <div className="bg-gradient-to-br from-sound-purple/40 to-sound-blue/20 rounded-xl p-6 relative overflow-hidden group">
      <div className="relative z-10">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-sound-purple text-white mb-4 inline-block">
          Featured
        </span>
        <h2 className="text-2xl font-bold text-white mb-2">{sound.name}</h2>
        <p className="text-gray-200 mb-4">{sound.description}</p>
        
        <div className="flex items-center space-x-4 mb-6">
          <Button
            onClick={togglePlay}
            className="bg-white text-sound-purple hover:bg-gray-100 hover:text-sound-purple/90 flex items-center"
          >
            <Play className="mr-2 h-4 w-4" />
            {isPlaying ? 'Playing' : 'Play'}
          </Button>
          
          <div className="text-sm text-white/80">
            <span className="font-medium">{sound.downloads}</span> downloads
          </div>
        </div>
        
        <div className="w-full">
          <Waveform
            waveform={sound.waveform}
            isPlaying={isPlaying}
            className="h-16"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-sound-purple/20 blur-3xl"></div>
      <div className="absolute -left-20 -top-20 w-48 h-48 rounded-full bg-sound-blue/20 blur-3xl"></div>
    </div>
  );
};

export default FeaturedSound;
