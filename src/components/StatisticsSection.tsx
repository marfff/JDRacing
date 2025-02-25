import React from 'react';
import { Statistic } from '../types';

interface StatisticsSectionProps {
  statistics: Statistic[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ statistics }) => {
  return (
    <section 
      className="py-20 px-4 md:px-8 bg-track"
      aria-labelledby="statistics-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="statistics-title"
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter text-center"
          tabIndex={0}
        >
          RACING STATISTICS
        </h2>
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          role="list"
          aria-label="Racing statistics"
        >
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="bg-black/30 rounded-2xl p-6 hover:bg-black/40 transition-all hover:transform hover:scale-105"
              role="listitem"
              tabIndex={0}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-orange-500" aria-hidden="true">
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
    </section>
  );
};

export default StatisticsSection;
