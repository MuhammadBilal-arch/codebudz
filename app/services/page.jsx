"use client";
import React, { memo } from "react";
import Hero from "../components/hero";
import { Nav } from "@/components/nav";
import Map from "../components/map";
import Footer from "@/components/footer";
import { ASSETS } from "@/public/path";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  
  const LANGUAGES = 
  [
    {
      heading: "Apps Development",
      desc: "Ensure flawless performance with rigorous testing. From functionality to usability, we adhere to the highest standards.       ",
      background: "bg-secondary",
    },
    {
      heading: "Web Development",
      desc: "Ensure flawless performance with rigorous testing. From functionality to usability, we adhere to the highest standards.       ",
      background: "bg-primary",
    },
    {
      heading: "UI UX Design",
      desc: "Ensure flawless performance with rigorous testing. From functionality to usability, we adhere to the highest standards.       ",
      background: "bg-secondary",
    },
    {
      heading: "Digital Marketing",
      desc: "Ensure flawless performance with rigorous testing. From functionality to usability, we adhere to the highest standards.       ",
      background: "bg-primary",
    },
    {
      heading: "Quality Assurance",
      desc: "Ensure flawless performance with rigorous testing. From functionality to usability, we adhere to the highest standards.       ",
      background: "bg-secondary",
    },
    {
      heading: "Mobile Application Development",
      desc: "Ensure flawless performance with rigorous testing. From functionality to usability, we adhere to the highest standards.       ",
      background: "bg-primary",
    },
  ];


  
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Nav />
      <Hero />
      <div className="w-full mx-auto poppins-family space-y-14">
        {/* Services COMPANY */}
        <div className="max-w-[1440px] mx-auto flex poppins-family px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-10 lg:pt-16">
          <div className="space-y-4 text-gray-extradark poppins-family text-xs text-left sm:text-sm xl:text-base ">
            <img
              className="float-right md:float-left sm:mb-2 pl-2 md:pl-4 pb-4 w-32 h-32 sm:w-24 sm:h-24 md:w-80 lg:w-1/2 md:h-96
                        duration-1000 object-cover md:object-contain"
              src={ASSETS.SERVICES.SERVICES.src}
              alt=""
            />
            <div className="space-y-3 md:space-y-6 md:overflow-hidden">
              <div className="text-xs md:text-sm lg:text-base text-primary uppercase font-medium">
                Real-time Analytics
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl md:leading-12 jost-family font-semibold text-black-text">
                High q<span className="text-secondary">uality produc</span>ts
                services, is able to serve you
              </div>
              <p
                className="text-xs md:text-sm 2xl:text-base text-gray-lightdark lg:w-8/12"
                style={{ lineHeight: "1.5" }}
              >
                Our commitment to your success does not end with delivery; we
                give continuous support and help to ensure a smooth transition
                and long-term success.
              </p>
              <div className="h-0.5 bg-gray-bluegray"></div>

              <button className="bg-primary flex items-center space-x-2 text-white text-xs md:text-sm xl:text-base px-5 py-1  lg:py-2 rounded-md">
                <span>Contact</span> <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        {/* OUR MISSION */}
        <div className="flex bg-blue-extraLight flex-col items-center justify-center space-y-8 xl:space-y-12 w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 lg:py-16">
          <div className="space-y-4 md:w-10/12 lg:w-8/12 max-auto text-center">
            <div className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text ">
              We envisio<span className="text-secondary">n design</span> and
              development experience
            </div>
            <div className="text-gray-dark">
              We start by getting a thorough grasp of your objectives, issues,
              and vision.
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 w-10/12">
            {LANGUAGES.map((items, index) => (
              <div
                className={`${items.background} cursor-pointer flex-col space-y-3  p-5 lg:p-7 h-full rounded-2xl poppins-family`}
                key={index}
              >
                <div
                  className="font-medium w-full text-left
                    text-white text-sm md:text-base lg:text-xl 2xl:text-2xl"
                >
                  {items.heading}
                </div>
                <div className="text-xs text-white font-light md:text-sm 2xl:text-base">
                  {items.desc}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default memo(Services);
