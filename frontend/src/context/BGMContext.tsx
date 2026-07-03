// frontend/src/context/BGMContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { YouTubeVideo } from '../utils/youtube';

interface BGMContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentVideo: YouTubeVideo | null;
  setCurrentVideo: (video: YouTubeVideo | null) => void;
  volume: number;
  setVolume: (vol: number) => void;
}

const BGMContext = createContext<BGMContextType | null>(null);

export const useBGM = () => {
  const context = useContext(BGMContext);
  if (!context) throw new Error('useBGM must be used within a BGMProvider');
  return context;
};

export const BGMProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<YouTubeVideo | null>(null);
  const [volume, setVolume] = useState(0.3); // 初期音量30%

  return (
    <BGMContext.Provider value={{ isPlaying, setIsPlaying, currentVideo, setCurrentVideo, volume, setVolume }}>
      {children}
    </BGMContext.Provider>
  );
};