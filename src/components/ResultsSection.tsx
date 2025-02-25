import React from 'react';
import { Flag, MapPin, Trophy, Cloud, Calendar, Users, ArrowRight } from 'lucide-react';
import { RaceResult, RaceSession, RaceDay } from '../types';
import { useKeyboardNav, focusableSelector } from '../hooks/useKeyboardNav';

interface ResultsSectionProps {
  raceResults: RaceResult[];
  getChangeColor: (start: number, end: number) => string;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ raceResults, getChangeColor }) => {
  const containerRef = useKeyboardNav({
    selector: focusableSelector,
  });

  const isRaceDay = (session: RaceSession | RaceDay): session is RaceDay => {
    return 'results' in session && Array.isArray(session.results);
  };

  return (
    <section 
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 md:px-8 bg-track"
      aria-labelledby="results-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="results-title"
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center"
          tabIndex={0}
        >
          RACE RESULTS
        </h2>
        <div className="bg-black/20 backdrop-blur-sm text-white py-12 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {raceResults.map((race, index) => (
                <div 
                  key={index}
                  className="bg-black/10 rounded-2xl p-8 hover:bg-black/20 transition-all backdrop-blur-[1px]"
                  role="region"
                  aria-label={`Race at ${race.track}`}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    {[
                      { icon: Flag, text: race.track, label: "Track" },
                      { icon: MapPin, text: race.location, label: "Location" },
                      { icon: Trophy, text: race.trophy, label: "Trophy" },
                      { icon: Cloud, text: race.weather, label: "Weather" },
                      { icon: Calendar, text: race.date, label: "Date" },
                      { icon: Users, text: race.gridSize.toString(), label: "Grid Size" }
                    ].map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2"
                        role="group"
                        aria-label={item.label}
                      >
                        <item.icon className="w-5 h-5 text-orange-500" aria-hidden="true" />
                        <span className="text-white">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {Array.isArray(race.sessions) && race.sessions.length > 0 && (
                    <div className="space-y-4">
                      {race.sessions.map((session, sessionIndex) => {
                        if (isRaceDay(session)) {
                          return (
                            <div 
                              key={sessionIndex}
                              className="flex flex-col items-center"
                              role="group"
                              aria-label={`Results for ${session.day}`}
                            >
                              <span className="text-orange-500 font-bold mb-2">{session.day}</span>
                              <div className="flex items-center justify-center gap-6 flex-wrap">
                                {session.results.map((result, resultIndex) => (
                                  <div 
                                    key={resultIndex}
                                    className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg"
                                    role="group"
                                    aria-label={`${result.name} result`}
                                    tabIndex={0}
                                  >
                                    <span className="text-orange-500 font-mono text-sm">{result.name}</span>
                                    {result.position !== undefined ? (
                                      <span className="text-white text-sm">
                                        Position: {result.position}
                                      </span>
                                    ) : result.startPosition !== undefined && result.endPosition !== undefined ? (
                                      <>
                                        <span className="text-white text-sm">
                                          Start: {result.startPosition}
                                        </span>
                                        <ArrowRight 
                                          className={`w-4 h-4 ${getChangeColor(result.startPosition, result.endPosition)}`}
                                          aria-hidden="true"
                                        />
                                        <span className="text-white text-sm">
                                          End: {result.endPosition}
                                        </span>
                                      </>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div 
              className="mt-12 text-xs text-orange-500 flex items-center justify-center space-x-6 font-mono border-t border-gray-800 pt-8"
              role="list"
              aria-label="Race terminology legend"
            >
              {[
                { term: "TQ", desc: "Timed Qualifying" },
                { term: "PF", desc: "Pre-Final" },
                { term: "FN", desc: "Final" },
                { term: "H", desc: "Heat" }
              ].map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-black/30 rounded-lg hover:bg-black/40 transition-all"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${item.term} means ${item.desc}`}
                >
                  {item.term} - {item.desc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
