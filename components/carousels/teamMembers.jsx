"use client";
import React, { memo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiChevronsRight } from "react-icons/fi";
import { ASSETS } from "@/public/path";
import { FaStar } from "react-icons/fa6";
const TeamMembers = () => {
  const sliderRef = useRef(null);

  const LANGUAGES = [
    {
      heading: "Marvin McKinney",
      desc: "Inspect Data",
      image: ASSETS.TEAM_MEMBERS.TEAM_MEMBER_1.src,
    },
    {
      heading: "Kristin Watson",
      desc: "IOS Developer",
      image: ASSETS.TEAM_MEMBERS.TEAM_MEMBER_2.src,
    },
    {
      heading: "Ralph Edwards",
      desc: "Business intelligence",
      image: ASSETS.TEAM_MEMBERS.TEAM_MEMBER_3.src,
    },
    {
      heading: "Kathryn Murphy",
      desc: "Project management",
      image: ASSETS.TEAM_MEMBERS.TEAM_MEMBER_4.src,
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
    <div
      id="services"
      className="bg-[#F8FCFC]  text-center space-y-16 px-5 md:px-10 lg:px-24 py-14 overflow-hidden text-purple-primary w-full"
    >
      <div className="max-w-[1440px] mx-auto">
        <div>
          <div className="w-10/12 mx-auto text-center flex flex-col items-center justify-center poppins-family space-y-2 md:space-y-4 lg:space-y-6">
            <div className="text-sm md:text-base lg:text-lg font-medium text-primary uppercase">
              Team Member
            </div>
            <div className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text w-9/12">
              Client's Review
            </div>
          </div>
        </div>
        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {LANGUAGES.map((items, index) => (
              <div
                className={`group rounded-lg px-10 md:px-3 text-center`}
                key={index}
              >
                <div
                  className={`min-h-[250px] cursor-pointer inset-0 p-5 h-full rounded-lg transition duration-300 delay-150 z-10`}
                >
                  <div className="text-center pb-2 overflow-hidden bg-white rounded-md space-y-3 flex flex-col items-center justify-center">
                    <div className="">
                      <img
                        src={items.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="font-semibold  flex items-center justify-center poppins-family
                                     text-black-text text-sm md:text-base lg:text-lg xl:text-xl"
                    >
                      {items.heading}
                    </div>
                    <div className="font-medium  text-gray-lightdark text-xs md:text-sm lg:text-base xl:text-lg">
                      {items.desc}
                    </div>
                    <div className="text-yellow text-xl space-x-1 flex items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div
            className="absolute border border-primary top-1/2 transform -translate-y-1/2 left-0 sm:-left-6 md:-left-10 cursor-pointer h-8 w-8 rounded-full  text-primary flex items-center justify-center text-xl"
            onClick={handlePrevClick}
          >
            <HiChevronLeft />
          </div>
          <div
            className="absolute border border-primary top-1/2 transform -translate-y-1/2 right-0 sm:-right-6 md:-right-10 cursor-pointer h-8 w-8 rounded-full bg-aqua text-primary flex items-center justify-center text-xl"
            onClick={handleNextClick}
          >
            <HiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TeamMembers);
