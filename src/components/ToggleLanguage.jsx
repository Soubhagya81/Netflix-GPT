import React, { useState } from 'react';

const LanguageToggle = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');

  const languages = ['hi', 'en', 'es'];

  return (
    <div className="flex items-center bg-red-700  rounded-full p-0.5 w-max">
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => setSelectedLanguage(language)}
          className={`flex items-center justify-center px-2.5 py-1 text-xs font-medium rounded-full transition ${
            selectedLanguage === language
              ? 'bg-black text-white'
              : 'bg-transparent text-white'
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
