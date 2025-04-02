import { ReactNode } from 'react';

export interface Race {
  title: string;
  date: string;
  result: string;
  videoId: string;
  description: string;
}

export interface Team {
  name: string;
  period: string;
  logo?: string;
  url: string;
  description: string;
}

export interface RacingJourneyTeam {
  name: string;
  period: string;
  description: string;
  logo?: string;
  url?: string;
}

export interface TrainingProgram {
  name: string;
  url: string;
  description: string;
  coach: string;
  achievements: string;
  logo?: string;
}

export interface Statistic {
  label: string;
  value: string;
  icon: ReactNode;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
  bgClass: string;
  handle: string;
  secondaryHandle?: string;
}

export interface RaceSession {
  name: string;
  position?: number;
  startPosition?: number;
  endPosition?: number;
  trophy?: string;
  note?: string;
}

export interface RaceDay {
  day: string;
  results: RaceSession[];
  endPosition?: number;
}

export interface RaceResult {
  track: string;
  location: string;
  trophy: string;
  weather: string;
  date: string;
  gridSize: number;
  sessions: RaceSession[] | RaceDay[];
}
