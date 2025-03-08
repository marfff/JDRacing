import React from 'react';

const NewsTicker: React.FC = () => {
  return (
    <div className="bg-orange-600/90 text-white py-2 relative overflow-hidden border-t border-orange-500/30 z-50">
      <div className="animate-ticker whitespace-nowrap">
        <p className="text-center font-bold inline-block px-4 text-sm sm:text-base">
          NEW MARCH RACES & RESULTS COMING SOON
          <span className="inline-block px-4 sm:px-8">•</span>
          NEW MARCH RACES & RESULTS COMING SOON
          <span className="inline-block px-4 sm:px-8">•</span>
          NEW MARCH RACES & RESULTS COMING SOON
        </p>
      </div>
    </div>
  );
};

export default NewsTicker;
