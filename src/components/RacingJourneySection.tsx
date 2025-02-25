import React from 'react';
import { Users } from 'lucide-react';
import { Team } from '../types';
import { useKeyboardNav, focusableSelector } from '../hooks/useKeyboardNav';

interface RacingJourneySectionProps {
  teams: Team[];
}

const RacingJourneySection: React.FC<RacingJourneySectionProps> = ({ teams }) => {
  const containerRef = useKeyboardNav({
    selector: focusableSelector
  });

  return (
    <section 
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 md:px-8 bg-track bg-opacity-50 backdrop-blur-[2px]"
      aria-labelledby="racing-journey-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="racing-journey-title"
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center"
          tabIndex={0}
        >
          RACING JOURNEY
        </h2>
        <div 
          className="grid gap-8"
          role="list"
          aria-label="Racing teams history"
        >
          {teams.map((team, index) => (
            <div 
              key={index}
              className="bg-black/30 rounded-2xl p-8 hover:bg-black/40 transition-all group"
              role="listitem"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {team.logo ? (
                  <a
                    href={team.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-16 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                    aria-label={`Visit ${team.name} website`}
                  >
                    <img
                      src={team.logo}
                      alt={`${team.name} logo`}
                      className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity rounded-xl"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div 
                    className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{team.name}</h3>
                    <span className="text-orange-500 text-sm font-medium">{team.period}</span>
                  </div>
                  <p className="text-gray-100">{team.description}</p>
                  {team.url && (
                    <a
                      href={team.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-orange-500 hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                      aria-label={`Visit ${team.name} team page`}
                    >
                      Visit Team Page →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacingJourneySection;
