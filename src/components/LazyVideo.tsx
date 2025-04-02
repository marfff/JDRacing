import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  videoId: string;
  title: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ videoId, title }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Preload the video
    const preloadIframe = document.createElement('iframe');
    preloadIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=0&playsinline=1&iv_load_policy=3&cc_load_policy=0&origin=${window.location.origin}&enablejsapi=1&showsearch=0&fs=0&autohide=1&mute=1&loop=1&playlist=${videoId}&version=3&start=1`;
    preloadIframe.style.display = 'none';
    document.body.appendChild(preloadIframe);

    const timer = setTimeout(() => {
      document.body.removeChild(preloadIframe);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(preloadIframe)) {
        document.body.removeChild(preloadIframe);
      }
    };
  }, [videoId]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-full relative">
      {!isPlaying ? (
        <button 
          onClick={handlePlay}
          className="w-full h-full relative group"
          aria-label="Play video"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
            style={{ 
              backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
              filter: 'brightness(0.7)'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=0&playsinline=1&iv_load_policy=3&cc_load_policy=0&origin=${window.location.origin}&enablejsapi=1&showsearch=0&fs=0&autohide=1&mute=1&loop=1&playlist=${videoId}&autoplay=1&version=3&start=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full youtube-player"
        />
      )}
    </div>
  );
};

export default LazyVideo;
