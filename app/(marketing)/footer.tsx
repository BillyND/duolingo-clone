import React from "react";
import Image from "next/image";

const languages = [
  { name: "Tiếng Việt", image: "/assets/flags/vi.svg" },
  { name: "English", image: "/assets/flags/en.svg" },
  { name: "Spanish", image: "/assets/flags/es.svg" },
  { name: "French", image: "/assets/flags/fr.svg" },
  { name: "Japanese", image: "/assets/flags/ja.svg" },
];

function Footer() {
  return (
    <footer className="h-20 border-t-2 px-4">
      <div className="h-full mx-auto max-w-screen-lg flex items-center justify-around">
        {languages.map((language) => (
          <div key={language.name} className="flex items-center gap-3">
            <Image
              src={language.image}
              alt={language.name}
              width={32}
              height={32}
            />
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
