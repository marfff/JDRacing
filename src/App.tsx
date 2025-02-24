import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Clock, Youtube, Instagram, Facebook, Flag, Timer, Award, Users, Gauge, ChevronDown, MapPin, Cloud, Calendar, ArrowRight } from 'lucide-react';

interface Race {
  title: string;
  date: string;
  result: string;
  videoId: string;
  description: string;
}

interface Team {
  name: string;
  period: string;
  logo?: string;
  url: string;
  description: string;
}

interface Training {
  name: string;
  url: string;
  description: string;
  coach: string;
  achievements: string;
  logo?: string;
}

interface Statistic {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  bgClass: string;
}

interface RaceSession {
  name: string;
  position?: number;
  startPosition?: number;
  endPosition?: number;
}

interface RaceDay {
  day: string;
  results: RaceSession[];
}

interface RaceResult {
  track: string;
  location: string;
  trophy: string;
  weather: string;
  date: string;
  gridSize: number;
  sessions: RaceSession[] | RaceDay[];
}

const races: Race[] = [
  {
    title: "PFi Winter Warmer",
    date: "February 2024",
    result: "19th out of 34 - First Time at PFi",
    videoId: "sCc7sVAUtyE",
    description: "Did well in some areas and practice will improve others"
  },
  {
    title: "Kimbolton HKRC - Vice Champion - 2024",
    date: "January 2025",
    result: "Micromax 2024 Series ",
    videoId: "kFxI5SfrY8w",
    description: "Fastest and Superb Tactical Racing"
  },
  {
    title: "Kimbolton Spring Series",
    date: "Spring 2024",
    result: "Racing in the Rain",
    videoId: "6FiT-Z3CyJc",
    description: "Strong showing in challenging conditions"
  }
];

const teams: Team[] = [
  {
    name: "Coles Racing",
    period: "January 2025 - Present",
    logo: "https://i.postimg.cc/yNM24RJk/temp-Imageooj1-Zg.avif",
    url: "https://www.facebook.com/profile.php?id=100054381465870",
    description: "Current team in WERA British Karting Championship"
  },
  {
    name: "GWRacing",
    period: "February 2024 - December 2024",
    logo: "https://i.postimg.cc/DwYt6HnQ/temp-Imagek-UMUSr.avif",
    url: "https://www.facebook.com/profile.php?id=100088893572245",
    description: "Progression to the top tier"
  },
  {
    name: "Mason Perren Racing",
    period: "2024",
    logo: "https://i.postimg.cc/zv5M31FN/temp-Imagee-TJo-Lq.avif",
    url: "https://www.facebook.com/profile.php?id=100056888694952",
    description: "Development and progression in karting"
  },
  {
    name: "Racing Perfection - BirelART",
    period: "2023",
    logo: "https://i.postimg.cc/YSGTsRC5/temp-Imagenc-CVo-G.avif",
    url: "https://www.facebook.com/profile.php?id=100057775745044",
    description: "Early competitive racing experience"
  },
  {
    name: "Protrain",
    period: "2023",
    url: "https://www.facebook.com/protrainracing",
    description: "Foundation racing skills"
  },
  {
    name: "Jeff Johnson Racing",
    period: "2022 - 2023",
    url: "https://www.facebook.com/groups/246927632153448/user/100000447310293",
    description: "Initial karting development"
  }
];

const training: Training = {
  name: "Team 17 / Ryley Price Driver Training",
  url: "https://www.facebook.com/people/Team-17-Coaching/61551012006781",
  description: "Professional driver training and development program",
  coach: "Ryley Price",
  achievements: "Multiple championship-winning coach",
  logo: "https://i.postimg.cc/mD7JbrMV/temp-Imagewps-GZI.avif"
};

const statistics: Statistic[] = [
  {
    label: "Races",
    value: "50+",
    icon: <Flag className="w-6 h-6" />,
    description: "Competitive races completed"
  },
  {
    label: "Podiums",
    value: "15",
    icon: <Trophy className="w-6 h-6" />,
    description: "Top 3 finishes achieved"
  },
  {
    label: "Fastest Laps",
    value: "12",
    icon: <Timer className="w-6 h-6" />,
    description: "Track records set"
  },
  {
    label: "Championships",
    value: "2",
    icon: <Award className="w-6 h-6" />,
    description: "Series championships won"
  }
];

const socialLinks: SocialLink[] = [
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@JamesDevereuxRacing',
    icon: <Youtube className="w-6 h-6" />,
    bgClass: 'bg-red-600 hover:bg-red-700'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/jamesdevereuxracing/',
    icon: <Instagram className="w-6 h-6" />,
    bgClass: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/jdracing.2025',
    icon: <Facebook className="w-6 h-6" />,
    bgClass: 'bg-blue-600 hover:bg-blue-700'
  }
];

const raceResults: RaceResult[] = [
  {
    track: "Warden Law",
    location: "Durham",
    trophy: "Spring Round 3 & 4",
    weather: "Raining / Damp / Dry",
    date: "Feb 25",
    gridSize: 23,
    sessions: [
      { day: "SAT", results: [
        { name: "TQ", position: 17 },
        { name: "PF", startPosition: 17, endPosition: 21 },
        { name: "FN", startPosition: 21, endPosition: 20 }
      ]},
      { day: "SUN", results: [
        { name: "TQ", position: 22 },
        { name: "PF", startPosition: 22, endPosition: 19 },
        { name: "FN", startPosition: 19, endPosition: 20 }
      ]}
    ]
  },
  {
    track: "PFI",
    location: "Grantham",
    trophy: "Winter Warmer",
    weather: "Dry",
    date: "Feb 25",
    gridSize: 33,
    sessions: [
      { name: "TQ", position: 21 },
      { name: "PF", startPosition: 31, endPosition: 21 },
      { name: "FN", startPosition: 21, endPosition: 21 }
    ]
  }
];

function App(): JSX.Element {
  const [currentRace, setCurrentRace] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRace((prev: number) => (prev + 1) % races.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getChangeColor = (start: number, end: number): string => {
    if (end < start) return 'text-green-500';
    if (end > start) return 'text-red-500';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen">
      {/* Sponsorship Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-2 relative overflow-hidden">
        <div className="animate-pulse">
          <p className="text-center font-bold">
            <span className="text-xl">⭐</span> SPONSORSHIP WANTED <span className="text-xl">⭐</span>
            <span className="text-sm ml-2 opacity-75">frizzler1@icloud.com</span>
            <span className="text-xl ml-1">⭐</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[90%] h-[90%] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-black/80 to-black animate-pulse z-20"></div>
            <div className="absolute inset-0 z-20">
              <div className="absolute w-full h-1 bg-orange-500/20 transform -rotate-45 translate-y-[30%] animate-slide"></div>
              <div className="absolute w-full h-1 bg-orange-500/20 transform -rotate-45 translate-y-[60%] animate-slide-delayed"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-20"></div>
            <div className="hero-image-container [filter:brightness(1.1)]">
              <img
                src="https://i.postimg.cc/VkksFNqH/IMG-1271.jpg"
                alt="James Devereux Racing"
                className="hero-image object-cover"
              />
              <img
                src="https://i.postimg.cc/VkksFNqH/IMG-1271.jpg"
                alt="James Devereux Racing"
                className="hero-image object-cover"
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
              <span className="text-2xl">🇬🇧</span>
              <span className="text-2xl mx-2">🇹🇷</span>
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
            <ChevronDown className="w-6 h-6 text-orange-500" />
            <p className="text-sm text-orange-500">Scroll to explore</p>
            <ChevronDown className="w-6 h-6 text-orange-500" />
          </div>

          {/* Preview of Statistics Section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 px-4 md:px-8 bg-track">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center">
            RACING STATISTICS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-black/30 rounded-2xl p-6 hover:bg-black/40 transition-all hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-500">
                    {stat.icon}
                  </div>
                  <h3 className="text-white font-bold">{stat.label}</h3>
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-100 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Races Section */}
      <div className="py-20 px-4 md:px-8 bg-track-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center">
            LATEST RACES
          </h2>
          <div className="relative">
            <div className="bg-black/30 rounded-2xl overflow-hidden hover:bg-black/40 transition-colors">
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${races[currentRace].videoId}/maxresdefault.jpg`}
                  alt={races[currentRace].title}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.currentTarget;
                    if (target.src.includes('maxresdefault')) {
                      target.src = `https://img.youtube.com/vi/${races[currentRace].videoId}/hqdefault.jpg`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{races[currentRace].title}</h3>
                  <div className="flex items-center gap-2 text-orange-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{races[currentRace].date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {currentRace === 0 ? <Trophy className="w-6 h-6 text-orange-500" /> : <Medal className="w-6 h-6 text-orange-500" />}
                  <span className="text-white font-semibold">{races[currentRace].result}</span>
                </div>
                <p className="text-gray-100">{races[currentRace].description}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${races[currentRace].videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Race Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center">
            FEATURED RACE
          </h2>
          <div className="bg-black/30 rounded-2xl overflow-hidden hover:bg-black/40 transition-all">
            <div className="relative aspect-video">
              <img
                src={`https://img.youtube.com/vi/otsT4XBe6tA/maxresdefault.jpg`}
                alt="BIKC National Championships"
                className="w-full h-full object-cover"
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
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">November 2022</span>
                </div>
              </div>
            </div>
            
            {/* YouTube button moved here */}
            <div className="px-8 pt-4">
              <a
                href="https://www.youtube.com/watch?v=otsT4XBe6tA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>Watch on YouTube</span>
              </a>
            </div>

            <div className="p-8 pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-orange-500" />
                <span className="text-white text-xl font-bold">National Championship Event</span>
              </div>
              <div className="space-y-4">
                <p className="text-gray-100">
                  Representing in the British Indoor Karting Championship National Finals, beating 400 other drivers to the Regional and National Championships in Warrington. Showcasing skill and determination against the country's top young drivers up to 12 years old and being the youngest and only 8 year old in the Finals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/40 rounded-lg p-4">
                    <h4 className="text-orange-500 font-semibold mb-2">Championship Details</h4>
                    <ul className="text-gray-100 space-y-2">
                      <li>• National Level Competition</li>
                      <li>• Elite Driver Category</li>
                      <li>• Multiple Race Format</li>
                    </ul>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <h4 className="text-orange-500 font-semibold mb-2">Achievement Highlights</h4>
                    <ul className="text-gray-100 space-y-2">
                      <li>• Qualified for National Finals</li>
                      <li>• Podium Farnborough, Reading and Cardiff TeamSport</li>
                      <li>• Representing Local Region</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Racing Journey Section */}
      <div className="py-20 px-4 md:px-8 bg-track">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center">
            RACING JOURNEY
          </h2>
          <div className="grid gap-8">
            {teams.map((team, index) => (
              <div key={index} 
                   className="bg-black/30 rounded-2xl p-8 hover:bg-black/40 transition-all group">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {team.logo ? (
                    <a href={team.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block w-16"
                    >
                      <img 
                        src={team.logo} 
                        alt={`${team.name} logo`}
                        className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity rounded-xl"
                      />
                    </a>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
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
                        className="inline-flex items-center gap-2 mt-4 text-orange-500 hover:text-orange-400 transition-colors text-sm"
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
      </div>

      {/* Results Section */}
      <div className="py-20 px-4 md:px-8 bg-track">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center">
            RACE RESULTS
          </h2>
          <div className="bg-black/90 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                {raceResults.map((race, index) => (
                  <div key={index} className="bg-black/30 rounded-2xl p-8 hover:bg-black/40 transition-all">
                    {/* Race Info Header */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Flag className="w-5 h-5 text-orange-500" />
                        <span className="text-white">{race.track}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        <span className="text-white">{race.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-orange-500" />
                        <span className="text-white">{race.trophy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-orange-500" />
                        <span className="text-white">{race.weather}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-orange-500" />
                        <span className="text-white">{race.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-orange-500" />
                        <span className="text-white">{race.gridSize}</span>
                      </div>
                    </div>

                    {/* Results Timeline */}
                    {Array.isArray(race.sessions[0]?.results) ? (
                      // Two-day format
                      <div className="space-y-4">
                        {race.sessions.map((day, dayIndex) => (
                          <div key={dayIndex} className="flex flex-col items-center">
                            <span className="text-orange-500 font-bold mb-2">{day.day}</span>
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                              {day.results.map((session, sessionIndex) => (
                                <div key={sessionIndex} className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
                                  <span className="text-orange-500 font-mono text-sm">{session.name}</span>
                                  {session.position ? (
                                    <span className="text-white text-sm">{session.position}</span>
                                  ) : (
                                    <>
                                      <span className="text-white text-sm">{session.startPosition}</span>
                                      <ArrowRight className={`w-4 h-4 ${getChangeColor(session.startPosition, session.endPosition)}`} />
                                      <span className="text-white text-sm">{session.endPosition}</span>
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Single-day format
                      <div className="flex items-center justify-center gap-6 flex-wrap">
                        {race.sessions.map((session, sessionIndex) => (
                          <div key={sessionIndex} className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
                            <span className="text-orange-500 font-mono text-sm">{session.name}</span>
                            {session.position ? (
                              <span className="text-white text-sm">{session.position}</span>
                            ) : (
                              <>
                                <span className="text-white text-sm">{session.startPosition}</span>
                                <ArrowRight className={`w-4 h-4 ${getChangeColor(session.startPosition, session.endPosition)}`} />
                                <span className="text-white text-sm">{session.endPosition}</span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Race Terminology Legend */}
              <div className="mt-12 text-xs text-orange-500 flex items-center justify-center space-x-6 font-mono border-t border-gray-800 pt-8">
                <span className="px-3 py-1.5 bg-black/30 rounded-lg hover:bg-black/40 transition-all">TQ - Timed Qualifying</span>
                <span className="px-3 py-1.5 bg-black/30 rounded-lg hover:bg-black/40 transition-all">PF - Pre-Final</span>
                <span className="px-3 py-1.5 bg-black/30 rounded-lg hover:bg-black/40 transition-all">FN - Final</span>
                <span className="px-3 py-1.5 bg-black/30 rounded-lg hover:bg-black/40 transition-all">H - Heat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driver Training Section */}
      <div className="py-20 px-4 md:px-8 bg-track-alt">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Gauge className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                PROFESSIONAL TRAINING
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Team 17 Logo */}
              {training.logo && (
                <a
                  href={training.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-16 shrink-0"
                >
                  <img
                    src={training.logo}
                    alt="Team 17 Racing"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </a>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4">{training.name}</h3>
                <p className="text-gray-100 mb-4">{training.description}</p>
                <div className="flex items-center gap-2 text-orange-500 mb-4">
                  <Trophy className="w-5 h-5" />
                  <span>{training.achievements}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-100">
                  <Users className="w-5 h-5" />
                  <span>Coach: {training.coach}</span>
                </div>
                {training.url && (
                  <a
                    href={training.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Follow On Section */}
      <div className="py-20 px-4 md:px-8 bg-track">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center">
            FOLLOW THE JOURNEY
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-2xl transition-all border-2 border-white flex items-center gap-3 ${link.bgClass}`}
                >
                  <div className="text-white">
                    {link.icon}
                  </div>
                  <span className="text-white font-semibold">{link.platform}</span>
                </a>
              ))}
            </div>
            <p className="flex flex-wrap justify-center gap-6 text-xl md:text-2xl text-gray-300">
              <span>🏎️ Karting</span>
              <span>🏊‍♂️ Swimming</span>
              <span>⛷️ Skiing</span>
              <span>⚽ Football</span>
            </p>
          </div>
        </div>
      </div>

      {/* Design Credit */}
      <div className="py-8 px-4 md:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-100 text-sm">
            Designed with ❤️ by{' '}
            <span className="text-orange-500">
              MGD 2025
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;