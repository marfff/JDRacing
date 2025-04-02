import React from 'react';
import { Mail, Youtube, Instagram, Facebook } from 'lucide-react';

const SponsorshipBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 font-bold tracking-wider hover:from-orange-500 hover:to-orange-600 transition-all duration-300 relative overflow-hidden group">
      <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <a 
            href="https://www.youtube.com/@frizzler1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 p-1.5 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://www.instagram.com/jamesdevereuxracing/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 p-1.5 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://facebook.com/jdracing.2025" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 p-1.5 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-xs sm:text-base font-bold tracking-wider whitespace-nowrap">⭐ SPONSORSHIP WANTED ⭐</span>
        </div>

        <a 
          href="mailto:frizzler@icloud.com" 
          className="hover:text-orange-200 transition-colors duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap text-[10px] sm:text-sm"
        >
          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
          frizzler@icloud.com
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  );
};

export default SponsorshipBanner;
