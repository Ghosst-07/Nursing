import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, Clock, Shield, UserCheck, Heart } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: 'Pyoli Nursing Services - In-Home Patient Care in Dehradun',
  description: 'Professional nursing services for post-surgical, wound dressing, palliative care, and stoma care across India.',
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  In-Home Patient Care in Dehradun
                </h1>
                <p className="max-w-[600px] text-blue-600 md:text-xl">
                  Dedicated care, delivering nursing services for post-surgical, wound dressing, palliative care, stoma care,
                  and various healthcare needs across India.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" bg-blue-600 hover:bg-blue-700>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg" bg-blue-600 hover:bg-blue-700>
                  Contact Us
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              alt="Healthcare Professional"
              width={550}
              height={550}
              className="mx-auto aspect-square rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="services">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us?</h2>
              <p className="max-w-[900px] text-blue-600 md:text-xl">
                Expert nursing services available in Dehradun at your doorstep, offered at affordable prices
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card border-blue-100>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <Clock className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">24/7 Care</h3>
                <p className="text-center text-sm text-blue-600">Round-the-clock nursing services at your convenience</p>
              </CardContent>
            </Card>
            <Card border-blue-100>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <Shield className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Expert Care</h3>
                <p className="text-center text-sm text-blue-600">Professional and experienced nursing staff</p>
              </CardContent>
            </Card>
            <Card border-blue-100>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <UserCheck className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Personalized Care</h3>
                <p className="text-center text-sm text-blue-600">Tailored healthcare solutions for your specific needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-blue-600 md:text-xl">
                Contact us today to learn more about our services and how we can help you or your loved ones
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" bg-blue-600 hover:bg-blue-700>
                <PhoneCall className="mr-2 h-4 w-4" />
                Call +91 8864953313
              </Button>
              <Button variant="outline" size="lg" bg-blue-600 hover:bg-blue-700>
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-blue-50">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Pyoli Nursing Services</h3>
              <p className="max-w-[350px] text-sm text-blue-600">
                Dedicated to providing quality healthcare services in the comfort of your home
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Services</h4>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>Post-Surgical Care</li>
                  <li>Wound Dressing</li>
                  <li>Palliative Care</li>
                  <li>Stoma Care</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Contact</h4>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>UK, Dehradun 248001</li>
                  <li>+91 8864953313</li>
                  <li>Help@Pyolinursingservices.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-blue-600">© 2024 Pyoli Nursing Services. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" bg-blue-600 hover:bg-blue-700>
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" bg-blue-600 hover:bg-blue-700>
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

