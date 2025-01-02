import React from "react";
import * as motion from "motion/react-client";
import Whyus from "@/components/About/Whyus";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Background with more vibrant gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-600 via-orange-500 to-gray-300 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <p className="inline-flex px-6 py-2 text-base font-semibold text-white bg-orange-600 rounded-full shadow-lg font-pj">
              Phyoli Health Care At Home
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-pj">
              About Us
            </h1>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="mx-auto mt-6 text-xl leading-8 text-gray-100 sm:max-w-3xl font-inter">
              We, at Phyoli Health Care, are dedicated to providing high-quality
              personalized nursing care services in the comfort of your home.
              Our experienced nurses and caregivers offer compassionate care to
              ensure that you and your loved ones receive the best support
              services. We aim to make healthcare accessible and impactful for
              everyone.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <Whyus />
        </div>
      </div>
    </section>
  );
}
