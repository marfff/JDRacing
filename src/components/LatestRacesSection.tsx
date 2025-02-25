import React, { useState, useEffect } from 'react';
import { Race } from '../types';
import { Youtube } from 'lucide-react';
import { useKeyboardNav, focusableSelector } from '../hooks/useKeyboardNav';

interface LatestRacesSectionProps {
  races: Race[];
  currentRace: number;
}

const LatestRacesSection: React.FC<LatestRacesSectionProps> = ({ races, currentRace: initialRace }) => {
  const [currentRace, setCurrentRace] = useState(initialRace);
  const containerRef = useKeyboardNav({
    selector: focusableSelector
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRace((prev) => (prev + 1) % races.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [races.length]);

  const handlePrevious = () => {
    setCurrentRace((prev) => (prev - 1 + races.length) % races.length);
  };

  const handleNext = () => {
    setCurrentRace((prev) => (prev + 1) % races.length);
  };

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 md:px-8 bg-track relative"
      aria-labelledby="latest-races-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="latest-races-title"
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center"
          tabIndex={0}
        >
          LATEST RACES
        </h2>
        <div className="relative">
          <div className="w-full">
            {races.map((race, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentRace ? 'opacity-100' : 'opacity-0 hidden'
                }`}
                aria-hidden={index !== currentRace}
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/20 relative group backdrop-blur-sm">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${race.videoId}?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=0&playsinline=1&iv_load_policy=3&cc_load_policy=0&origin=${window.location.origin}&enablejsapi=1&showsearch=0&fs=0&autohide=1&mute=1&loop=1&playlist=${race.videoId}&autoplay=1&playlist=${race.videoId}&version=3&start=1`}
                    title={race.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full youtube-player"
                  />
                  <a
                    href={`https://www.youtube.com/watch?v=${race.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 group-hover:scale-105"
                    aria-label={`Watch ${race.title} on YouTube`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                      <Youtube className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="font-medium">Watch on YouTube</span>
                  </a>
                </div>
                <div className="mt-8 text-center bg-black/5 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">{race.title}</h3>
                  <p className="text-orange-500 mb-2">{race.date}</p>
                  <p className="text-gray-300">{race.result}</p>
                  <p className="text-gray-300 mt-4">{race.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {races.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentRace(index)}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  index === currentRace ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to race ${index + 1}`}
                aria-current={index === currentRace}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestRacesSection;
