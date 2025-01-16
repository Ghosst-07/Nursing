"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeItem, setActiveItem] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveItem(path === "/" ? "home" : path.replace("/", ""));
  }, [path]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const updateIndicator = (item: string) => {
    const element = document.getElementById(`nav-${item}`);
    if (element && indicatorRef.current) {
      indicatorRef.current.style.width = `${element.offsetWidth}px`;
      indicatorRef.current.style.left = `${element.offsetLeft}px`;
    }
  };

  useEffect(() => {
    updateIndicator(activeItem);
  }, [activeItem]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Phyoli Nursing Services"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold md:inline hidden text-black">
            Phyoli Health Care
          </span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-6 relative">
          {["home", "services", "about", "contact"].map((item) => (
            <Link
              key={item}
              id={`nav-${item}`}
              className={`font-medium text-black hover:text-orange-500 transition-colors ${
                activeItem === item ? "text-orange-500" : ""
              }`}
              href={item === "home" ? "/" : `${item}`}
              onMouseEnter={() => {
                setHoveredItem(item);
                updateIndicator(item);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                updateIndicator(activeItem);
              }}
              onClick={() => setActiveItem(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300"
          />
        </nav>
        <Button
          className="hidden md:flex bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-full ml-4"
          onClick={() => (window.location.href = "tel:+919634390655")}
        >
          <PhoneCall className="mr-2 h-4 w-4" />
          +91 9634390655
        </Button>

        {/* Mobile Navbar */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            className="hidden md:flex items-center gap-2 text-sm font-medium text-black hover:text-orange-500 transition-colors"
            href="mailto:Help@Phyolinursingservices.com"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">
              Help@Phyolinursingservices.com
            </span>
          </Link>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-full">
            <PhoneCall className="mr-2 h-4 w-4" />
            +91 9634390655
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-orange-400 ">
              <SheetTitle>Menu</SheetTitle>
              <div className="flex flex-col gap-4 mt-4">
                {["home", "services", "about", "contact"].map((item) => (
                  <Link
                    key={item}
                    className={`font-medium transition-colors ${
                      activeItem === item
                        ? "text-white"
                        : "text-black hover:text-orange-500"
                    }`}
                    href={item === "home" ? "/" : `${item}`}
                    onClick={() => {
                      setActiveItem(item);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-black" />
                  <span className="text-black">+91 8864953313</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-black">
                    123 Address, Healthcare City, India
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
