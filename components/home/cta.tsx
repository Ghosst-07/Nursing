import React from "react";
import { Button } from "../ui/button";
import { Mail, PhoneCall } from "lucide-react";
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[600px] text-white/80 md:text-xl"
            >
              Contact us today to learn more about our services and how we can
              help you or your loved ones.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-black text-white hover:bg-orange-600 transition-colors rounded-full"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Call +91 8864953313
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-black border-black hover:bg-black/10 transition-colors rounded-full"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Cta;
