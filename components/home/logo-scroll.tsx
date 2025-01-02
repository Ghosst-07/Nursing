import React from "react";
import { Antonio } from "next/font/google";

const antonio = Antonio({
  weight: "300",
  subsets: ["latin"],
});

const careItems = [
  "Epilepsy Care",
  "Care Of The Orthopedic Patient",
  "Tracheostomy Care",
  "ICIJ Setup At Home (Critical Care)",
  "Caretaker / Nurses For Oldage",
  "New Born Baby Care (Aaya)",
];

export function LogoScroll() {
  return (
    <div
      className={`${antonio.className} bg-orange-500 text-2xl w-full h-full overflow-hidden py-6 border-black border`}
    >
      <div className="logo-scroll-container py-1">
        <div className="logo-scroll-content">
          {careItems.map((item, i) => (
            <div key={`logo-${i}`} className="logo-item">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="logo-scroll-content">
          {careItems.map((item, i) => (
            <div key={`logo-duplicate-${i}`} className="logo-item">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
