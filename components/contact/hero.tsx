import { Description } from "@radix-ui/react-dialog";
import { Mail, Phone } from "lucide-react";
import { title } from "process";
import React from "react";
import * as motion from "motion/react-client";

const items = [
  {
    title: "Customer Support",
    description:
      "Get in touch with our customer support team for any queries or issues.",
  },

  {
    title: "Feedback & Suggestions",
    description:
      "We would love to hear your feedback and suggestions to improve our services.",
  },
  {
    title: "Other Queries",
    description:
      "For any other queries or information, feel free to reach out to us.",
  },
];

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-400"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 p-8 lg:p-16">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-2/3">
          <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Contact Us
          </h1>
          <p className="text-white text-lg md:text-xl">
            Email, call, or complete the form to learn how we can solve your
            problem. Our team is dedicated to providing you with the best
            possible service and support. Whether you have questions about our
            services, need assistance with an issue, or simply want to provide
            feedback, we are here to help. Reach out to us through any of the
            contact methods listed below, and we will get back to you as soon as
            possible.
          </p>
          <div className="text-white  space-y-4 ">
            <div className="flex flex-row items-center gap-2 ">
              <div className="bg-white p-2 rounded-full shadow-xl">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <p className="text-black text-xl font-semibold">
                phyolienterprises@gmail.com
              </p>
            </div>
            <div className="flex flex-row items-center gap-2  ">
              <div className="bg-white p-2 rounded-full shadow-xl">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <p className="text-black text-xl font-semibold">+91-9634390655</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start pt-20 gap-6 py-8">
            {items.map((item) => (
              <div
                key={item.title}
                className=" w-full sm:w-[45%] lg:w-[30%] rounded-md bg-white shadow-lg p-5"
              >
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-1/3 rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-md border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-md border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded-md border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                placeholder="Your Message"
                rows={8}
              ></textarea>
            </div>
            <div className="text-center lg:text-left">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
