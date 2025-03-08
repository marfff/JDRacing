import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden group z-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90%] h-[90%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-black/80 to-black animate-pulse z-20"></div>
          <div className="absolute inset-0 z-20">
            <div className="absolute w-full h-1 bg-orange-500/20 transform -rotate-45 translate-y-[30%] animate-slide"></div>
            <div className="absolute w-full h-1 bg-orange-500/20 transform -rotate-45 translate-y-[60%] animate-slide-delayed"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-20"></div>
          <div className="hero-image-container absolute inset-0 overflow-hidden">
            <img
              src="https://i.postimg.cc/VkksFNqH/IMG-1271.jpg"
              alt="James Devereux Racing"
              className="w-[250%] h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="relative mb-8">
          <div className="absolute -left-8 top-1/2 w-6 h-24 bg-gradient-to-b from-orange-500 to-transparent transform -translate-y-1/2"></div>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mt-[24px]">
            JAMES
            <span className="block text-3xl md:text-5xl mt-[-8px] tracking-[0.2em] text-orange-500">DEVEREUX</span>
            <span className="block text-3xl md:text-5xl mt-[2px] text-orange-500"># 46</span>
          </h1>
        </div>
        
        <div className="text-xl md:text-2xl tracking-wide text-gray-300 text-center max-w-2xl mb-8">
          <p className="mb-4">
            <span className="text-2xl" role="img" aria-label="British flag">🇬🇧</span>
            <span className="text-2xl mx-2" role="img" aria-label="Turkish flag">🇹🇷</span>
            11-year-old British-Turkish <span className="breathing-text">kart racer</span>
          </p>
          <div>
            <p className="mb-2">
              <span>🏁 Hometrack: Forest Edge / Camberley</span>
            </p>
            <p className="mt-[17px]">
              <span className="text-orange-500">🏎️ Class: Rotax Inter Minimax</span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[60px] left-0 right-0 flex justify-center items-center gap-4 animate-bounce">
          <ChevronDown className="w-6 h-6 text-orange-600 drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]" />
          <p className="text-sm font-semibold text-orange-600 [text-shadow:_-0.5px_-0.5px_0_#fff,_0.5px_-0.5px_0_#fff,_-0.5px_0.5px_0_#fff,_0.5px_0.5px_0_#fff]">
            Scroll to explore
          </p>
          <ChevronDown className="w-6 h-6 text-orange-600 drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]" />
        </div>

        {/* Preview of Statistics Section */}
        <div className="absolute bottom-[32px] left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default HeroSection;
