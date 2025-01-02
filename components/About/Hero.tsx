import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50 pb-14">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">
              Phyoli Health Care At Home
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              About us
            </h1>
            <p className=" mx-auto text-xl mt-6  leading-7 text-gray-600 font-inter">
              We, at Phyoli health care are dedicated to provide high quality
              personalised nursing care services for the comfort at your home .
              Our experienced nurses and caregivers offers compassionate care to
              ensure that you and your loved ones receives the best support
              service. We aim to make healthcare accessible and impactful for
              everyone
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
