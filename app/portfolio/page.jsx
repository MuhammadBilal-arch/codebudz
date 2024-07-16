"use client";
import React, { memo, useState } from "react";
import Hero from "../components/hero";
import { Nav } from "@/components/nav";
import Map from "../components/map";
import Footer from "@/components/footer";
import { ASSETS } from "@/public/path";
import { FaArrowRight } from "react-icons/fa6";
const portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const list = [
    {
      id: 1,
      title: "Web Development",
      url: ASSETS.MIX.WEB_DEVELOPMENT.src,
    },
    {
      id: 2,
      title: "Design",
      url: ASSETS.MIX.UIUX.src,
    },
    {
      id: 3,
      title: "Application Development",
      url: ASSETS.MIX.MOBILE_DEVELOPMENT.src,
    },
    {
      id: 1,
      title: "IT Consultancy",
      url: ASSETS.MIX.CONSULTANCY.src,
    },
  ];
  return (
    <div>
      <Nav />
      <Hero />
      <div className="w-full mx-auto p-5 sm:p-10 md:p-16 lg:p-20 xl:p-24 poppins-family space-y-16">
        <div className="grid md:grid-cols-2 gap-4 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
          <div className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text">
            <span className="text-primary">Creating</span> Impact With <span className="text-secondary">Every</span>{" "}
            Project.
          </div>
          <div className="space-y-4">
            <div className="text-xs md:text-sm xl:text-base text-gray-lightdark">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </div>
            <button className="bg-primary flex items-center space-x-2 text-white text-xs md:text-sm xl:text-base px-4 py-1            lg:py-2 rounded-md">
              <span>Get Started</span> <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((item) => (
            <div key={item.id} className="max-h-52 min-h-52 relative">
              <img
                src={item.url}
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute left-0 top-0 w-full h-full z-10 p-4">
                <div className="bg-secondary whitespace-nowrap text-white px-3 py-1.5 rounded-sm text-xs max-w-min">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-8/12 lg:w-7/12 2xl:w-6/12 mx-auto flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between">
          <div
            onClick={() => setActiveTab(1)}
            className={`${
              activeTab == 1 ? "bg-primary text-white" : "text-black-text"
            } text-xs cursor-pointer lg:text-sm py-2 px-4 min-w-max poppins-family font-semibold rounded-md`}
          >
            UI/UX DESIGN
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={`${
              activeTab == 2 ? "bg-primary text-white" : "text-black-text"
            } text-xs cursor-pointer lg:text-sm py-2 px-4 min-w-max poppins-family font-semibold rounded-md`}
          >
            DEVELOPMENT
          </div>
          <div
            onClick={() => setActiveTab(3)}
            className={`${
              activeTab == 3 ? "bg-primary text-white" : "text-black-text"
            } text-xs cursor-pointer lg:text-sm py-2 px-4 min-w-max poppins-family font-semibold rounded-md`}
          >
            IT CONSULTANCY
          </div>
          <div
            onClick={() => setActiveTab(4)}
            className={`${
              activeTab == 4 ? "bg-primary text-white" : "text-black-text"
            } text-xs cursor-pointer lg:text-sm py-2 px-4 min-w-max poppins-family font-semibold rounded-md`}
          >
            APP DEVELOPMENT
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((item) => (
            <div key={item.id} className="max-h-52 min-h-52 relative">
              <img
                src={item.url}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default memo(portfolio);
