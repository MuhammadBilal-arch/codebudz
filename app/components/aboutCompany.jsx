import { ASSETS } from "@/public/path";
import Image from "next/image";
import React, { memo } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const AboutCompany = () => {
  return (
    <div
      className="relative bg-blue-extraLight lg:max-h-screen bg-cover bg-top bg-no-repeat px-5 md:px-10 lg:px-24 pt-24 space-y-6 poppins-family"
      // style={{ backgroundImage: `url(${ASSETS.BACKGROUND.BG_ABOUT.src})` }}
    >
      <div className="absolute inset-0 animate-moveUpDown h-full top-0">
      <Image
        src={ASSETS.BACKGROUND.BG_ABOUT.src}
        alt=""
        fill={true}

        className="object-cover object-top h-full"
      />
      </div>
      <div className="text-sm md:text-base lg:text-lg font-bold text-primary uppercase">
        About Company
      </div>
      <div className="flex items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
        <div className="lg:w-1/2">
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="md               :w-1/2 lg:w-full">
                <div className="text-xl md:text-2xl lg:text-4xl font-semibold text-black-text w-9/12">
                  Digital Agency Can Help You
                </div>
                <p className="text-xs md:text-sm 2xl:text-base text-gray-lightdark">
                  Aliquam eros justo, posuere loborti vive rra laoreet matti
                  ullamc oer posu ere viverra .Aliquam eros justo, posuere
                  lobortis non, vive rra laoreet augue mattis fermentum
                  ullamcorper viverra laoreet Aliquam eros justo, posuere
                  loborti viverra laoreet mat ullamcorper posue viverra
                </p>
              </div>
              <div className="lg:hidden md:w-1/2 flex items-center justify-center">
                <img
                  src={ASSETS.MIX.ABOUT_COMPANY.src}
                  alt=""
                  className="object-cover max-w-[100px] sm:max-w-[150px] md:max-h-[200px]  "
                />
              </div>
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl space-y-4 ">
              <div className="text-black-text font-extrabold">
                Agency <span className="text-primary">Mission</span>
              </div>
              <div className="flex items-center justify-between text-xs md:text-sm 2xl:text-base text-gray-lightdark h-full">
                <div className="space-y-4">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex items-center space-x-1 md:space-x-4"
                  >
                    <div className="text-primary">
                      <IoIosCheckmarkCircle className="text-xl md:text-3xl" />
                    </div>
                    <div>
                      Aliquam eros justo, posuere loborti vive rra laoreet
                    </div>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="flex items-center space-x-1 md:space-x-4"
                  >
                    <div className="text-primary">
                      <IoIosCheckmarkCircle className="text-xl md:text-3xl" />
                    </div>
                    <div>laoreet matti ullamc orper posu ere viverra</div>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    className="flex items-center space-x-1 md:space-x-4"
                  >
                    <div className="text-primary">
                      <IoIosCheckmarkCircle className="text-xl md:text-3xl" />
                    </div>
                    <div>
                      posuere loborti vive rra laoreet matti ullamc orper
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="bg-primary space-y-2 md:space-y-4 rounded-t-[30px] md:rounded-t-[50px] min-w-[100px] md:min-w-[180px] py-12 h-full text-center flex flex-col items-center"
                >
                  <img
                    src={ASSETS.ICON.AWARD.src}
                    alt=""
                    className="max-h-6 md:min-h-max"
                  />
                  <div className=" md:space-y-2">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white">
                      100 +
                    </div>
                    <div className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
                      National Award
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="hidden lg:w-1/2 lg:flex items-center justify-end"
        >
          <img
            src={ASSETS.MIX.ABOUT_COMPANY.src}
            alt=""
            className="object-cover  max-h-[400px]  lg:max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AboutCompany);
