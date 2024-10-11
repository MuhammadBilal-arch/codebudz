"use client";
import React, { memo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiChevronsRight } from "react-icons/fi";

const Services = () => {
  const sliderRef = useRef(null);

  const LANGUAGES = [
    {
      heading: "Apps Development",
      desc: "Aliquam eos justo, posuere lbortivive rra laoreet matti ullamc oerposu",
      background: "bg-secondary",
    },
    {
      heading: "Web Development",
      desc: "Aliquam eos justo, posuere lbortivive rra laoreet matti ullamc oerposu",
      background: "bg-primary",
    },
    {
      heading: "UI UX Design",
      desc: "Aliquam eos justo, posuere lbortivive rra laoreet matti ullamc oerposu",
      background: "bg-secondary",
    },
    {
      heading: "Consultancy For IT",
      desc: "Aliquam eos justo, posuere lbortivive rra laoreet matti ullamc oerposu",
      background: "bg-primary",
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
      className="max-w-[1440px] mx-auto text-center space-y-16 p-5 md:p-10 lg:p-24 overflow-hidden text-purple-primary"
    >
      <div>
        <div className="md:w-10/12 mx-auto text-center flex flex-col items-center justify-center jost-family space-y-6">
          <div className="text-sm md:text-base lg:text-lg font-bold text-primary uppercase">
            Our services
          </div>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl font-semibold xl:leading-12 text-black-text lg:w-9/12">
            Offer a wide range of services to help businesses establish and
            enhance their onli ne presence.
          </div>
        </div>
      </div>
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {LANGUAGES.map((items, index) => (
            <div className={`group rounded-lg px-10 md:px-3 text-center`} key={index}>
              <div
                className={`${items.background} min-h-[250px] cursor-pointer inset-0 p-5 h-full rounded-lg transition duration-300 delay-150 z-10`}
              >
                <div className="text-center space-y-6 flex flex-col items-center justify-center">
                  <div
                    className="font-semibold h-16 flex items-center justify-center
                                     text-white text-sm md:text-base lg:text-xl xl:text-2xl"
                  >
                    {items.heading}
                  </div>
                  <div className="text-xs text-white font-light md:text-sm lg:text-base">
                    {items.desc}
                  </div>
                  <div className="text-white text-2xl text-center mx-auto">
                    <FiChevronsRight />
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
  );
};

export default memo(Services);
