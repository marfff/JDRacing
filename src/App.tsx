import { Suspense, lazy } from 'react';
import { Trophy, Youtube, Instagram, Facebook, Flag, Timer, Award } from 'lucide-react';
import NewsTicker from './components/NewsTicker';
import { Race, Team, TrainingProgram, Statistic, SocialLink, RaceResult } from './types';

// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'));
const StatisticsSection = lazy(() => import('./components/StatisticsSection'));
const LatestRacesSection = lazy(() => import('./components/LatestRacesSection'));
const FeaturedRaceSection = lazy(() => import('./components/FeaturedRaceSection'));
const RacingJourneySection = lazy(() => import('./components/RacingJourneySection'));
const ResultsSection = lazy(() => import('./components/ResultsSection'));
const DriverTrainingSection = lazy(() => import('./components/DriverTrainingSection'));
const FollowOnSection = lazy(() => import('./components/FollowOnSection'));

function App(): JSX.Element {
  // Move data to separate files later
  const races: Race[] = [
    {
      title: "PFi Winter Warmer",
      date: "February ",
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
      url: "https://www.facebook.com/Protrainracing",
      logo: "https://i.postimg.cc/Nj331J3P/temp-Image-Ug-Gerb.avif",
      description: "Foundation racing skills"
    },
    {
      name: "Jeff Johnson / Prokart",
      period: "2022 - 2023",
      url: "https://www.facebook.com/ProkartEngineering",
      logo: "https://i.postimg.cc/vB0hYDbw/temp-Imageb-Zh-Z0-O.avif",
      description: "Initial karting development"
    }
  ];

  const training: TrainingProgram = {
    name: "Team 17 / Ryley Price Driver Training",
    url: "https://www.facebook.com/people/Team-17-Coaching/61551012006781",
    description: "Professional driver training and development program",
    coach: "Ryley Price",
    achievements: "Multiple championship-winning coach",
    logo: "https://i.postimg.cc/mD7JbrMV/temp-Imagewps-GZI.avif"
  };

  const socialLinks: SocialLink[] = [
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/@frizzler1',
      icon: <Youtube className="w-8 h-8" />,
      bgClass: 'bg-red-600 hover:bg-red-700',
      handle: '@frizzler1'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/jamesdevereuxracing/',
      icon: <Instagram className="w-8 h-8" />,
      bgClass: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600',
      handle: '@jamesdevereuxracing'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/jdracing.2025',
      icon: <Facebook className="w-8 h-8" />,
      bgClass: 'bg-blue-600 hover:bg-blue-700',
      handle: 'jdracing.2025',
      secondaryHandle: 'James Devereux Racing'
    }
  ];

  const raceResults: RaceResult[] = [
    {
      track: "Mansell",
      location: "Dunkeswell",
      trophy: "Club Round 1",
      weather: "Dry",
      date: "March 30th",
      gridSize: 26,
      sessions: [
        { day: "March 30th", results: [
          { name: "Qualifying", startPosition: 16, endPosition: 13 },
          { name: "Heat 1", startPosition: 16, endPosition: 13 },
          { name: "Pre Final", startPosition: 12, endPosition: 14 },
          { name: "Final", startPosition: 14, endPosition: 13 }
        ]}
      ]
    },
    {
      track: "Warden Law",
      location: "Durham",
      trophy: "Spring Round 5&6",
      weather: "Dry",
      date: "March 15th",
      gridSize: 10,
      sessions: [
        { day: "SAT", results: [
          { name: "Qualifying", startPosition: 3, endPosition: 4 },
          { name: "Heat 1", startPosition: 3, endPosition: 4 },
          { name: "Heat 2", startPosition: 4, endPosition: 2, trophy: "2nd / Silver Cup" }
        ]},
        { day: "SUN", results: [
          { name: "Qualifying", position: 3 },
          { name: "Heat 1", startPosition: 1, endPosition: 6 },
          { name: "Heat 2", startPosition: 4, endPosition: 2, trophy: "2nd / Silver Cup" }
        ]}
      ]
    },
    {
      track: "Forest Edge",
      location: "Barton Stacey",
      trophy: "Club Round 1",
      weather: "Dry",
      date: "March 2nd",
      gridSize: 25,
      sessions: [
        { day: "March 2nd", results: [
          { name: "Qualifying", startPosition: 6, endPosition: 1, trophy: "🎆" },
          { name: "Heat 1", startPosition: 14, endPosition: 12 },
          { name: "Heat 2", startPosition: 14, endPosition: 12, note: "(pen)" },
          { name: "Final", startPosition: 5, endPosition: 3, note: "(dsq)" }
        ]}
      ]
    },
    {
      track: "Whilton Mill",
      location: "Daventry",
      trophy: "Club Round 1",
      weather: "Dry",
      date: "March 23rd",
      gridSize: 34,
      sessions: [
        { day: "March 23rd", results: [
          { name: "Qualifying", position: 15 },
          { name: "Heat 1", startPosition: 15, endPosition: 17 },
          { name: "Heat 2", startPosition: 15, endPosition: 17, note: "(pen)" },
          { name: "Final", startPosition: 13, endPosition: 10 }
        ]}
      ]
    },
    {
      track: "PFI",
      location: "Grantham",
      trophy: "Winter Warmer",
      weather: "Dry",
      date: "February",
      gridSize: 33,
      sessions: [
        { day: "WEEKEND", results: [
          { name: "Qualifying", position: 21 },
          { name: "Pre Final", startPosition: 31, endPosition: 21 },
          { name: "Final", startPosition: 21, endPosition: 19 }
        ]}
      ]
    },
    {
      track: "Warden Law",
      location: "Durham",
      trophy: "Spring Round 3 & 4",
      weather: "Raining / Damp / Dry",
      date: "February",
      gridSize: 23,
      sessions: [
        { day: "SAT", results: [
          { name: "Qualifying", position: 17 },
          { name: "Pre Final", startPosition: 17, endPosition: 21 },
          { name: "Final", startPosition: 21, endPosition: 20 }
        ]},
        { day: "SUN", results: [
          { name: "Qualifying", position: 22 },
          { name: "Pre Final", startPosition: 22, endPosition: 19 },
          { name: "Final", startPosition: 19, endPosition: 20 }
        ]}
      ]
    },
    {
      track: "Whilton Mill",
      location: "Daventry",
      trophy: "January Warm Up",
      weather: "Wet",
      date: "January 26th",
      gridSize: 24,
      sessions: [
        { day: "January 26th", results: [
          { name: "Qualifying", position: 13 },
          { name: "Heat 1", startPosition: 13, endPosition: 18 },
          { name: "Heat 2", startPosition: 13, endPosition: 17 },
          { name: "Heat 3", startPosition: 13, endPosition: 17 },
          { name: "Final", startPosition: 17, endPosition: 8 }
        ]}
      ]
    }
  ];

  const getChangeColor = (start: number, end: number): string => {
    if (end < start) return 'text-red-500';
    if (end > start) return 'text-green-500';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="hero-gradient"></div>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <header role="banner" aria-label="Site header" className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-1.5 sm:py-2 relative overflow-hidden">
          <div className="animate-pulse">
            <p className="text-center font-bold text-sm sm:text-base">
              <span className="text-lg sm:text-xl">⭐</span> SPONSORSHIP WANTED <span className="text-lg sm:text-xl">⭐</span>
              <span className="text-xs sm:text-sm ml-2 opacity-75">frizzler1@icloud.com</span>
              <span className="text-lg sm:text-xl ml-1">⭐</span>
            </p>
          </div>
        </div>
        <NewsTicker />
      </header>
      <div className="h-[72px] sm:h-[84px]"></div>

      <main id="main-content" role="main">
        <Suspense 
          fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="loading-spinner" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="relative">
            <HeroSection />
            <div className="relative z-10">
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <StatisticsSection statistics={statistics} />
              </div>
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <LatestRacesSection races={races} currentRace={0} />
              </div>
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <FeaturedRaceSection />
              </div>
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <RacingJourneySection teams={teams} />
              </div>
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <ResultsSection raceResults={raceResults} getChangeColor={getChangeColor} />
              </div>
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <DriverTrainingSection training={training} />
              </div>
              <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80">
                <FollowOnSection socialLinks={socialLinks} />
              </div>
            </div>
          </div>
        </Suspense>
      </main>

      <footer role="contentinfo" aria-label="Site footer" className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Website created with <span className="text-red-500">♥</span> by{' '}
            <a 
              href="https://github.com/marfff" 
              className="text-orange-500 hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              MGD
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;