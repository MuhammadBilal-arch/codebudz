import { ASSETS } from "@/public/path";
import React, { memo } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const OurCompany = () => {
  return (
    <div
      className="relative lg:max-h-screen bg-cover bg-top bg-no-repeat px-5 md:px-10 lg:px-24 py-20 space-y-6 poppins-family"
      style={{ backgroundImage: `url(${ASSETS.BACKGROUND.BG_ABOUT.src})` }}
    >
      <div className="flex items-center flex-col lg:flex-row space-y-12 md:space-y-0">
        <div className="lg:w-1/2">
          <div className="flex items-center justify-between space-x-2">
            <div className="lg:w-1/2  space-y-6">
              <div className="text-sm md:text-base lg:text-lg font-bold text-primary uppercase">
                Our Company
              </div>
              <div className="text-xl md:text-2xl lg:text-4xl font-semibold text-black-text w-9/12">
                We Are Leads In digital Solution
              </div>
              <p className="text-xs md:text-sm 2xl:text-base text-gray-lightdark">
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc oer posu ere viverra .Aliquam eros justo, posuere
                lobortis non, vive rra laoreet augue mattis fermentum
                ullamcorper viverra laoreet Aliquam eros justo, posuere loborti
              </p>
              <button className="bg-primary text-white py-2 flex items-center justify-center rounded-md px-4 text-xs md:text-sm lg:text-base">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2 lg:flex items-center justify-end">
          <div className="max-h-[200px] relative md:max-h-[300px] xl:max-h-[400px]">
            <img
              src={ASSETS.MIX.OUR_COMPANY.src}
              alt=""
              className="object-cover max-h-[200px] lg:max-h-[300px] xl:max-h-[400px]"
            />
            <div
              data-aos="fade-right"
              className="absolute px-4 space-x-4 flex items-center justify-center left-[-35%] text-white top-1/3 transform -translate-y-1/2 h-16 md:h-20 lg:h-24 xl:h-32 lg:w-60 xl:w-72 bg-primary border-2 border-white"
            >
              <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                20 +
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px]">
                Years <br />
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OurCompany);
