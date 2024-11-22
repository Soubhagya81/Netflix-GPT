import React, { useState } from 'react';

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`flex items-center justify-center transition-all ${
        isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div
        className="flex items-center border border-gray-400 rounded-lg overflow-hidden"
        style={{ width: '140px', height: '40px' }}
      >
        {/* Light Button */}
        <button
          onClick={() => setIsDarkTheme(false)}
          className={`flex items-center justify-center w-1/2 h-full transition-all ${
            !isDarkTheme ? 'bg-white text-black' : 'bg-transparent text-gray-400'
          }`}
        >
          <span className="mr-2">☀️</span> Light
        </button>

        {/* Dark Button */}
        <button
          onClick={() => setIsDarkTheme(true)}
          className={`flex items-center justify-center w-1/2 h-full transition-all ${
            isDarkTheme ? 'bg-black text-white' : 'bg-transparent text-gray-400'
          }`}
        >
          <span className="mr-2">🌙</span> Dark
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
