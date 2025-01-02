import React, { useState } from "react";
import * as motion from "motion/react-client";

const faqData = [
  {
    question: "What services does Pyoli Nursing provide?",
    answer:
      "We provide a variety of nursing services, including elder care, post-surgical care, maternity care, and more at home.",
  },
  {
    question: "How can I contact Pyoli Nursing Services?",
    answer:
      "You can contact us via email at email@email.com or call us at +91 1864854864. You can also visit us at our location in Prem Nagar, Dehradun.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the Dehradun area but can accommodate nearby regions upon request. Contact us for more details.",
  },
  {
    question: "Do you provide medical equipment rentals?",
    answer:
      "Yes, we offer medical equipment rentals such as oxygen concentrators, medical beds, and wheelchairs.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-400 w-full px-10 md:px-32 pt-20 pb-20 py-10 flex flex-col md:flex-row items-center md:items-start gap-10"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">FAQ</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Do you have any questions for us?
        </h2>
        <p className="text-white">
          If there are questions you want to ask, we will answer all your
          questions.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="border-b border-gray-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-white px-4 pb-4">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Faq;
