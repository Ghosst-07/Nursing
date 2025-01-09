import React from "react";
import { reasons } from "@/data/about";
import * as motion from "motion/react-client";

const Whyus = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
        
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`md:p-8 lg:p-14 ${
                index % 3 !== 0 ? "md:border-l md:border-gray-200" : ""
              } ${index >= 3 ? "md:border-t md:border-gray-200" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                className="mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {reason.icon}
              </motion.div>
              <motion.h3
                className="mt-12 text-xl font-bold text-gray-900 font-pj"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
              >
                {reason.title}
              </motion.h3>
              <motion.p
                className="mt-5 text-base text-gray-600 font-pj"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
              >
                {reason.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
