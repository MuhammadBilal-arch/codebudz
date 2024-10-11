"use client";
import React, { memo } from "react";
import Hero from "../components/hero";
import { Nav } from "@/components/nav";
import Map from "../components/map";
import Footer from "@/components/footer";
import { ASSETS } from "@/public/path";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  const MISSION = [
    {
      url: ASSETS.ABOUT.MISSION_1.src,
      title: "Creative Minds",
    },
    {
      url: ASSETS.ABOUT.MISSION_2.src,
      title: "High Standards",
    },
    {
      url: ASSETS.ABOUT.MISSION_3.src,
      title: "Startup Businesses",
    },
    {
      url: ASSETS.ABOUT.MISSION_4.src,
      title: "Expert Designers",
    },
  ];

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Nav />
      <Hero />
      <div className="w-full mx-auto poppins-family space-y-10">
        {/* ABOUT COMPANY */}
        <div className="max-w-[1440px] mx-auto flex poppins-family px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 md:py-14">
          <div className="space-y-4 text-gray-extradark poppins-family text-xs text-left sm:text-sm xl:text-base">
            <img
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="float-right sm:mb-2 pl-2 md:pl-4 pb-4 w-32 h-32 sm:w-24 sm:h-24 md:w-80 md:h-full lg:w-1/2 
                        duration-1000 object-cover"
              src={ASSETS.ABOUT.ABOUT_MAIN.src}
              alt=""
            />
            <div className="space-y-4">
              <div className="text-sm md:text-base lg:text-lg font-bold text-primary uppercase">
                About Company
              </div>
              <div className="text-xl md:text-2xl lg:text-4xl xl:text-5xl leading-12 font-semibold text-black-text">
                We Are Leads In digital Solution
              </div>
              <p
                className="text-xs md:text-sm 2xl:text-base text-gray-lightdark"
                style={{ lineHeight: "1.5" }}
              >
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc oer posu ere viverra .Aliquam eros justo, posuere
                lobortis non, vive rra laoreet augue mattis fermentum
                ullamcorper viverra laoreet Aliquam eros justo, posuere loborti
              </p>
              <div className="text-xl bg-yellow-gradient bg-clip-text md:text-2xl lg:text-4xl xl:text-5xl leading-12 font-semibold text-transparent">
                Cody Fisher
              </div>
              <p
                className="text-xs md:text-sm 2xl:text-base text-gray-lightdark leading-12"
                style={{ lineHeight: "1.5" }}
              >
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc oer posu ere viverra .Aliquam eros justo, posuere
                lobortis non, vive rra laoreet augue mattis fermentum
                ullamcorper viverra laoreet Aliquam eros justo, posuere loborti
              </p>

              <button className="py-1 lg:py-2 px-4 bg-primary text-white rounded-md text-xs md:text-sm lg:text-base">Discover More</button>
            </div>
          </div>
        </div>
        {/* OUR MISSION */}
        <div className="flex bg-blue-extraLight flex-col items-center justify-center space-y-8 xl:space-y-10 w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 md:py-14">
          <div className="max-w-[1440px] space-y-4 md:w-10/12 lg:w-8/12 max-auto text-center">
            <div className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text ">
              <span className="text-secondary">Our</span> Mission
            </div>
            <div className="text-gray-dark">
              AccurateSAP's objective is to empower organizations by providing
              innovative digital solutions that promote growth, efficiency, and
              success.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 w-10/12">
            {MISSION.map((item, index) => (
              <div
                key={index}
                data-aos="fade-down"
                className="flex flex-col items-center justify-center space-y-4 text-black-text"
              >
                <img
                  className="w-10 h-10 sm:w-24 sm:h-24 duration-1000 object-cover"
                  src={item.url}
                  alt=""
                />
                <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-8/12 lg:w-8/12 flex items-center justify-center space-x-4 text-black-text text-xs md:text-sm lg:text-base">
            <div className="text-secondary">Quality Work</div>
            <div>Professional Staffs</div>
            <div>Client Satisfaction</div>
          </div>

          <button className="bg-secondary flex items-center space-x-2 text-white text-xs md:text-sm xl:text-base px-4 py-1            lg:py-2 rounded-md">
            <span>View Projects</span> <FaArrowRight />
          </button>
        </div>
        {/* OUR VISION */}
        <div className="max-w-[1440px] mx-auto flex px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className=" space-y-2 text-gray-extradark poppins-family text-xs text-left sm:text-sm xl:text-base">
            <img
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="float-right sm:mb-2 pl-2 md:pl-4 pb-4 w-32 h-32 sm:w-24 sm:h-24 md:w-80 md:h-full lg:w-1/2 
                        duration-1000 object-cover"
              src={ASSETS.ABOUT.VISION.src}
              alt=""
            />
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text pb-10"
            >
              Our Vision
              <span className="text-secondary"> Every</span> Project.
            </div>
            <span
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-gray-dark"
            >
              Codebudz's aim is to be a dominant force in the digital
              marketplace, known for our superior quality, creativity, and
              customer happiness.
              <br />
              <br /> We want to be the go-to partner for organizations looking
              for disruptive digital solutions to push their success in an
              ever-changing marketplace.
              <br />
              <br /> Through continual innovation, collaboration, and a
              relentless pursuit of perfection, we hope to define the future of
              digital experiences and generate good change in the industry.
              <br />
              <br />
            </span>
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="text-secondary font-semibold poppins-family"
            >
              WE ARE PROUD TO OFFER GREAT PRODUCTS
            </div>
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default memo(About);
