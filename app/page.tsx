import { Metadata } from "next";

import { HomeCard } from "@/components/home/homeCard";

import Herosection from "@/components/home/herosection";

import { LogoScroll } from "@/components/home/logo-scroll";
import ThirdSection from "@/components/home/thirdSection";
import Cta from "@/components/home/cta";
import Testimonial from "@/components/home/Testimonials";
import AppointmentCallToAction from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: "Phyoli Nursing Services - In-Home Patient Care in Dehradun",
  description:
    "Professional nursing services for post-surgical, wound dressing, palliative care, and stoma care across India.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Herosection />

      <LogoScroll />
      <AppointmentCallToAction phoneNumber={""} whatsappNumber={""}/>

      {/* Services Grid Section */}
      <HomeCard />

      {/* Third Section */}
      <ThirdSection />

      {/* CTA Section */}
      <Cta />

      {/* Testimonials */}
      <Testimonial />
    </div>
  );
}
