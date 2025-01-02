import { Phone, Stethoscope } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

function Herosection() {
  return (
    <>
      <section className="bg-white overflow-hidden ">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img
                className="object-contain w-auto h-48"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt=""
              />
            </div>

            <div className=" relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <p className="w-fit border border-gray-400 rounded-full px-2 py-1 md:ml-0 ml-4 text-orange-500 font-bold">
                Wish to Cure
              </p>

              <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                Phyoli Health Care at Home
              </h1>
              <p className="mt-8 text-xl text-black">
                Empowering families through professional and compassionate
                in-home nursing care, tailored to enhance every aspect of
                well-being. Our personalized approach ensures unparalleled
                comfort, fosters a seamless recovery process, and provides peace
                of mind for both patients and their loved ones. With a
                commitment to excellence, we aim to create a nurturing
                environment where health thrives, recovery accelerates, and
                families find the support they need during critical times.
              </p>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-5">
                <Link href="/#services">
                  <div className="flex items-center gap-2 text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-[#fae29f] transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>Get in Touch</span>
                  </div>
                </Link>

                <Link href="/#services">
                  <div className="flex items-center gap-2 text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-[#fae29f] transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    <span>Learn More</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full "
                src="https://as1.ftcdn.net/jpg/05/85/79/92/1000_F_585799297_bVYT9JzJs1uiwjRsIlDVvRdMbrqoqNCB.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <Stethoscope className="w-10 h-10 text-orange-500" />

                  <h2 className="font-bold text-white text-7xl ml-2.5">
                    1000+
                  </h2>
                </div>
                <p className="max-w-xs mt-1.5 text-xl text-white">
                  Patients have trusted our <br /> nursing services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
