import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-4 items-center mb-6">
      {/* Decorative Line Left */}
      <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 w-12 sm:w-16 h-[2px] sm:h-[3px]"></p>
      
      {/* Title Text */}
      <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
        {text1}
        <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
          {text2}
        </span>
      </p>
      
      {/* Decorative Line Right */}
      <p className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-12 sm:w-16 h-[2px] sm:h-[3px]"></p>
    </div>
  );
};

export default Title;
