import React from "react";

const languages = [
  { name: "Vietnamese", flag: "🇻🇳️" },
  { name: "English", flag: "🇬🇧️" },
  { name: "Spanish", flag: "🇪🇸️" },
  { name: "French", flag: "🇫🇷️" },
  { name: "Japanese", flag: "🇯🇵️" },
];

function Footer() {
  return (
    <footer className="h-20 border-t-2 px-4">
      <div className="h-full mx-auto max-w-screen-lg flex items-center justify-around">
        {languages.map((language) => (
          <div key={language.name} className="flex items-center gap-3">
            <span className="text-4xl">{language.flag}</span>
            <span className="font-bold text-gray-500 uppercase text-sm">
              {language.name}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
