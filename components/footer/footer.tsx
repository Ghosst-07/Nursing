import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <motion.footer className="bg-white text-orange-500 py-8  drop-shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-300" />
              <span className="text-xl font-semibold">
                Phyoli Health Care
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link
              href="/"
              className="text-orange-500 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-orange-500 hover:text-black transition-colors"
            >
              Services
            </Link>
            <Link
              href="/"
              className="text-orange-500 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-orange-500 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-black cursor-pointer transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-black cursor-pointer transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-black cursor-pointer transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-black cursor-pointer transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © Copyright 2023. All Rights Reserved by Phyoli Health Care
        </div>
      </div>
    </motion.footer>
  );
}
