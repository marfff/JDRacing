import React from 'react';
import { Training } from '../types';
import { useKeyboardNav, focusableSelector } from '../hooks/useKeyboardNav';

interface DriverTrainingSectionProps {
  training: Training;
}

const DriverTrainingSection: React.FC<DriverTrainingSectionProps> = ({ training }) => {
  const containerRef = useKeyboardNav({
    selector: focusableSelector
  });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 md:px-8 bg-track"
      aria-labelledby="driver-training-title"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="driver-training-title"
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter"
          tabIndex={0}
        >
          DRIVER TRAINING
        </h2>
        <div className="max-w-3xl mx-auto bg-orange-950/40 rounded-2xl p-8 hover:bg-orange-950/50 transition-all backdrop-blur-sm">
          <div className="flex flex-col items-center">
            {training.logo && (
              <div className="mb-6">
                <img
                  src={training.logo}
                  alt={`${training.name} logo`}
                  className="w-24 h-24 object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{training.name}</h3>
            <p className="text-orange-400 text-lg font-medium mb-2">
              Coach: {training.coach}
            </p>
            <p className="text-gray-300 text-lg mb-4">
              {training.achievements}
            </p>
            <p className="text-gray-200 mb-8 text-lg">{training.description}</p>
            <a
              href={training.url}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${training.name}`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverTrainingSection;
