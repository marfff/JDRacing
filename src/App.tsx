import React, { Suspense, lazy } from 'react';
import { Trophy, Medal, Clock, Youtube, Instagram, Facebook, Flag, Timer, Award, Users, Gauge, ChevronDown, MapPin, Cloud, Calendar, ArrowRight } from 'lucide-react';
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
  const [currentRace, setCurrentRace] = React.useState(0);

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
      date: "February ",
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
      date: "February ",
      gridSize: 33,
      sessions: [
        { day: "WEEKEND", results: [
          { name: "TQ", position: 21 },
          { name: "PF", startPosition: 31, endPosition: 21 },
          { name: "FN", startPosition: 21, endPosition: 19 }
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

      <header role="banner" aria-label="Site header" className="relative">
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-2 relative overflow-hidden">
          <div className="animate-pulse">
            <p className="text-center font-bold">
              <span className="text-xl">⭐</span> SPONSORSHIP WANTED <span className="text-xl">⭐</span>
              <span className="text-sm ml-2 opacity-75">frizzler1@icloud.com</span>
              <span className="text-xl ml-1">⭐</span>
            </p>
          </div>
        </div>
      </header>

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
                <LatestRacesSection races={races} currentRace={currentRace} />
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