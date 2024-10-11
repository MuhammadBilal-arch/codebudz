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
      image: ASSETS.COMPANIES.COMPANY_1.src,
    },
    {
      image: ASSETS.COMPANIES.COMPANY_2.src,
    },
    {
      image: ASSETS.COMPANIES.COMPANY_3.src,
    },
    {
      image: ASSETS.COMPANIES.COMPANY_4.src,
    },
    {
      image: ASSETS.COMPANIES.COMPANY_5.src,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoPlay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
      className="bg-[#F8FCFC]   text-center px-5 md:px-10 lg:px-24 py-10 overflow-hidden"
    >
      <div className="relative max-w-[1440px] mx-auto">
        <Slider {...settings} ref={sliderRef}>
          {LANGUAGES.map((items, index) => (
            <div key={index} className="h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12 mx-auto px-5">
              <img
                src={items.image}
                alt=""
                className="w-full h-full object-contain"
              />
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
  );
};

export default memo(TeamMembers);
