"use client";

import { Button } from "@/components/ui/button";

import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/contact/hero";
import Mapsection from "@/components/contact/mapsection";
import Faq from "@/components/contact/Faq";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="w-screen bg-white text-black">
      <Hero />
      <Mapsection />
      <Faq />
    </div>
  );
}
