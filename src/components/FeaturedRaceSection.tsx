import React from 'react';
import { Clock, Youtube, Award } from 'lucide-react';

const FeaturedRaceSection: React.FC = () => {
  return (
    <section 
      className="py-20 px-4 md:px-8 bg-gradient-to-r from-orange-950/20 via-orange-900/20 to-orange-950/20"
      aria-labelledby="featured-race-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="featured-race-title"
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center"
          tabIndex={0}
        >
          FEATURED RACE
        </h2>
        <div 
          className="bg-orange-950/30 rounded-2xl overflow-hidden hover:bg-orange-950/40 transition-all backdrop-blur-sm"
          role="article"
          aria-label="Featured race: BIKC National Championships"
        >
          <div className="relative aspect-video">
            <img
              src={`https://img.youtube.com/vi/otsT4XBe6tA/maxresdefault.jpg`}
              alt="BIKC National Championships"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.currentTarget;
                if (target.src.includes('maxresdefault')) {
                  target.src = `https://img.youtube.com/vi/otsT4XBe6tA/hqdefault.jpg`;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white mb-2">BIKC National Championships</h3>
              <div className="flex items-center gap-2 text-orange-500">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">November 2022</span>
              </div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=otsT4XBe6tA"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 group-hover:scale-105"
              aria-label="Watch BIKC National Championships on YouTube"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <Youtube className="w-5 h-5 text-red-600" />
              </div>
              <span className="font-medium">Watch on YouTube</span>
            </a>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-orange-500" aria-hidden="true" />
              <span className="text-white text-xl font-bold">National Championship Event</span>
            </div>
            <div className="space-y-4">
              <p className="text-gray-100">
                Representing in the British Indoor Karting Championship National Finals, beating 400 other drivers to the Regional and National Championships in Warrington. Showcasing skill and determination against the country's top young drivers up to 12 years old and being the youngest and only 8 year old in the Finals.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <div 
                  className="bg-black/40 rounded-lg p-4 max-w-lg mx-auto w-full text-center"
                  role="list"
                  aria-label="Championship details"
                >
                  <h4 className="text-orange-500 font-semibold mb-2">Championship Details</h4>
                  <ul className="text-gray-100 space-y-2">
                    <li>National Level Competition</li>
                    <li>Elite Driver Category</li>
                    <li>Multiple Race Format</li>
                  </ul>
                </div>
                <div 
                  className="bg-black/40 rounded-lg p-4 max-w-lg mx-auto w-full text-center"
                  role="list"
                  aria-label="Achievement highlights"
                >
                  <h4 className="text-orange-500 font-semibold mb-2">Achievement Highlights</h4>
                  <ul className="text-gray-100 space-y-2">
                    <li>Qualified for National Finals</li>
                    <li>Podium Farnborough, Reading and Cardiff TeamSport</li>
                    <li>Representing Local Region</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRaceSection;
