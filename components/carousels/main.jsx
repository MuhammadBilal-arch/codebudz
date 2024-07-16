"use client";
import React, { memo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ASSETS } from "@/public/path";
import { FaChevronRight, FaChevronLeft, FaArrowRightLong } from "react-icons/fa6";
import { ColoredButton, TransparentButton } from "../buttons";
import { FaArrowRight } from "react-icons/fa";

const MainCarousel = () => {
  const sliderRef = useRef(null);

  const SLIDES = [
    // { IMG: ASSETS.CAROUSELS.MAIN.MAIN_SLIDE_1 },
    { IMG: ASSETS.MIX.MAIN },
    { IMG: ASSETS.MIX.CHART },
    { IMG: ASSETS.MIX.UIUX }, 

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    vertical: false,
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
    <div className="bg-gray-extralight text-center overflow-hidden text-purple-primary z-30">
      <div className="relative">
        <div className="overflow-hidden z-20">
          <div className="relative">
            <Slider {...settings} ref={sliderRef}>
              {SLIDES.map((item, index) => (
                <div key={index} className="relative ">
                  <img
                    src={item.IMG.src}
                    alt={`Slide ${index + 1}`}
                    className=" w-full min-h-96 md:min-h-ful max-h-[600px] object-cover cursor-pointer"
                  />
                  <div className="absolute left-0 top-0 inset w-full h-full bg-black-footer bg-opacity-60 min-h-96 md:min-h-ful max-h-[600px] z-10">

                  </div>
                  <div className="absolute z-10 top-0 bottom-0 md:w-8/12 left-0 right-0 mx-auto  flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center space-y-3 md:space-y-12">
                      <div className="space-y-1 sm:space-y-3 md:space-y-10 flex-col font-extrabold text-2xl sm:text-2xl md:text-4xl lg:text-[65px]">
                        <h1 className="text-white">
                          C<span className="text-yellow">re</span>ativ
                          <span className="text-blue">e</span>
                        </h1>
                        <h1 className="text-white">
                          <span className="text-blue">Di</span>gital A
                          <span className="text-secondary">ge</span>ncy
                        </h1>
                      </div>
                      <p className="text-gray-light font-light text-xs md:text-sm lg:text-base px-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis
                      </p>

                      <ColoredButton
                        title="Discover more"
                        type="button"
                        onClick={() => console.log("clicked")}
                        textColor="text-white"
                        afterIcon={<FaArrowRightLong className="text-sm" />}

                        />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute md:left-24 md:right-24 inset-0 flex items-center justify-between px-4">
              <div
                className="cursor-pointer h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 border border-white rounded-full text-white flex items-center justify-center bg-aqua text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
                onClick={handlePrevClick}
              >
                <FaChevronLeft />
              </div>
              <div
                className="cursor-pointer h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 border border-white rounded-full text-white flex items-center justify-center bg-aqua text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
                onClick={handleNextClick}
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MainCarousel);
