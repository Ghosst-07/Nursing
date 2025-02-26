import React from "react";
import { Button } from "../ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";
import * as motion from "motion/react-client";

function Cta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-orange-500"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter text-white md:text-4xl"
            >
              Book an Appointment Today!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[600px] text-white/80 md:text-xl"
            >
              Contact us via call or WhatsApp to schedule your appointment and
              get started.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <a
              href="tel:+919634390655"
              className="bg-black text-white hover:bg-orange-600 transition-colors rounded-full flex items-center justify-center px-4 py-2 text-lg"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Call +91 9634390655
            </a>
            <a
              href="https://wa.me/919634390655"
              className="border border-black bg-green-500 text-black border-black hover:bg-black/10 transition-colors rounded-full flex items-center justify-center px-4 py-2 text-lg"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Cta;
