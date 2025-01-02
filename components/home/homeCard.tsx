import React from "react";
import { Ubuntu } from "next/font/google";
import * as motion from "motion/react-client";
import { HomeCardData } from "@/data/home";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

interface HomeCardProps {
  CardData: {
    icon: React.JSX.Element;
    heading: string;
    description: string;
    color: string; // Ensure this contains valid Tailwind CSS classes
  };
}

export function Cards({ CardData }: HomeCardProps) {
  return (
    <div className="flex flex-col w-full shadow-lg rounded-lg">
      <motion.div
        style={{ backgroundColor: CardData.color }}
        className="flex flex-col p-6 md:p-14 gap-4 rounded py-12 md:py-24"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full">
          {CardData.icon}
        </div>
        <div
          className={`${ubuntu.className} font-bold text-2xl md:text-4xl text-black`}
        >
          {CardData.heading}
        </div>
        <div className={`${ubuntu.className} text-lg md:text-xl text-gray-500`}>
          {CardData.description}
        </div>
      </motion.div>
    </div>
  );
}

export function HomeCard() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-32 h-32 md:w-48 md:h-48 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-orange-600 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 md:w-72 md:h-72 bg-gray-300 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-black md:text-5xl">
                Our Dedication to Exceptional Care
              </h2>
              <p className="max-w-[900px] text-gray-500 text-base md:text-xl">
                Our Unwavering Commitment to Exceptional Services
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {HomeCardData.map((card, i) => (
            <Cards key={i} CardData={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
