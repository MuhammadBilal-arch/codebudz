"use client";
import React, { memo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ASSETS } from "@/public/path";
import { FaStar } from "react-icons/fa";

const Team = () => {
  const sliderRef = useRef(null);

  const LANGUAGES = [
    {
      heading: "Excutive Manager",
      desc: "Sara wisents",
      image: ASSETS.TEAM.TEAM_1.src,
      background :"bg-blue-light"
    },
    {
      heading: "UI/UX Designer",
      desc: "Isabell Adam",
      image: ASSETS.TEAM.TEAM_2.src,
      background :"bg-blue-extraLight"
    },
    {
      heading: "Projects Manager",
      desc: "Cody fisher",
      image: ASSETS.TEAM.TEAM_3.src,
      background :"bg-primary-medium bg-opacity-[33%]"
    },
    {
      heading: "IT Consultant",
      desc: "Mrs. Emily Sophia",
      image: ASSETS.TEAM.TEAM_4.src,
      background :"bg-blue-medium"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className=" text-center space-y-16 px-5 md:px-10 lg:px-24 py-14 overflow-hidden text-purple-primary">
      <div className="w-10/12 mx-auto text-center flex flex-col items-center justify-center space-y-6">
        <div className="text-2xl md:text-4xl lg:text-5xl xl:text-[65px] poppins-family font-semibold text-black-text w-9/12">
          Team
        </div>
        <div className="text-black-text text-xs md:text-sm lg:text-base font-normal w-6/12">
          Creating a concise and effective design studio brief is crucial for
          outlining your business, its services.
        </div>
      </div>
      <div className="relative pb-16">
        <Slider {...settings} ref={sliderRef}>
          {LANGUAGES.map((items, index) => (
            <div className="group rounded-lg px-10 md:px-3 text-center" key={index}>
              <div className="min-h-[250px] cursor-pointer inset-0  h-full rounded-lg transition duration-300 delay-150 z-10">
                <div className="rounded-t-[48%] rounded-b-[30%] text-center overflow-hidden  rounded-md flex flex-col items-center justify-center">
                  <div className="w-full">
                    <img
                      src={items.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={ `${items.background} space-y-3  w-full py-5`}>
                  <div className="font-semibold flex items-center justify-center text-black-text text-xs sm:text-sm lg:text-base">
                    {items.heading}
                  </div>
                  <img src={ASSETS.MIX.HORIZONTAL_DIVIDER.src} alt="" className="mx-auto"/>
                  <div className="text-black-text text-xs sm:text-sm lg:text-base">
                    {items.desc}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <div className="flex items-center">
            <div
              className="border border-primary rounded-full h-10 w-10 lg:h-12 lg:w-12 cursor-pointer flex items-center justify-center text-primary text-xl"
              onClick={handlePrevClick}
            >
              <HiChevronLeft />
            </div>
            <div
              className="ml-4 border border-primary rounded-full bg-aqua h-10 w-10 lg:h-12 lg:w-12 cursor-pointer flex items-center justify-center text-primary text-xl"
              onClick={handleNextClick}
            >
              <HiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Team);
