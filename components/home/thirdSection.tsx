import React from "react";
import Image from "next/image";
import { gridItems, thirdsectionData } from "@/data/home";
import { Ubuntu } from "next/font/google";
import * as motion from "motion/react-client";

const ubuntu = Ubuntu({
  weight: ["300", "700"],
  subsets: ["latin"],
});

function ThirdSection() {
  return (
    <section
      className={`flex bg-white ${ubuntu.className} px-4 py-8 md:px-24 md:py-14`}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-10 items-center justify-center w-full"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`${ubuntu.className} text-black font-extrabold text-3xl md:text-6xl px-4 md:px-20 text-center md:text-left`}
          >
            What Makes Phyoli Nursing Services Stand Out?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`${ubuntu.className} text-gray-500 text-lg md:text-2xl px-4 md:pr-10 text-center md:text-left`}
          >
            We redefine in-home care with a commitment to excellence,
            reliability, and compassion, making us the trusted choice for
            countless families
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row w-full gap-10 justify-center items-center"
        >
          <div className="relative w-full md:w-1/3 h-64 md:h-full">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute -left-4 -bottom-4 w-full h-full bg-orange-400 rounded-2xl"
            />
            <Image
              layout="fill"
              src="/third.jpg"
              alt="Senior with child sharing a moment"
              objectFit="cover"
              className="relative rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full md:w-2/3">
            {gridItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="p-6 md:p-10 flex flex-col rounded-md border border-gray-300 gap-2 hover:border-orange-500 transition-colors duration-500"
              >
                <h1 className="text-black text-xl md:text-3xl">
                  {item.heading}
                </h1>
                <p className="text-gray-500 text-base md:text-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ThirdSection;
