"use client";
import React, { memo } from "react";
import Hero from "../components/hero";
import { Nav } from "@/components/nav";
import Map from "../components/map";
import Footer from "@/components/footer";
import { ASSETS } from "@/public/path";

const Blog = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Nav />
      <Hero />
      <div className="max-w-[1440px] w-full mx-auto p-5 sm:p-10 md:p-16 lg:p-20 xl:p-24 poppins-family space-y-4">
        <div className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text">
          Recent <span className="text-primary">Blog</span> Posts
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-8">
            <div className="space-y-4">
              <img
                src={ASSETS.BLOGS.BLOG_1.src}
                alt=""
                className="max-h-[20rem] object-cover w-full"
              />
              <div className="space-y-2">
                <div className="text-xs md:text-sm xl:text-base text-primary">
                  Olivia Rhye • 20 Jan 2022
                </div>
                <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold jost-family text-black-text"></div>
                UX review presentations
              </div>
              <div className="text-xs md:text-sm xl:text-base text-gray-lightdark">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </div>
              <div className="text-xs  md:text-sm space-x-2 flex">
                <div className="text-primary bg-primary bg-opacity-10 px-3 py-[2px] rounded-full">
                  Design
                </div>
                <div className="text-blue-indigo bg-blue-indigo bg-opacity-10 px-3 py-[2px] rounded-full">
                  Research
                </div>
                <div className="text-pink-medium bg-pink-medium bg-opacity-10 px-3 py-[2px] rounded-full">
                  Presentation
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src={ASSETS.BLOGS.BLOG_1.src}
                alt=""
                className="max-h-[20rem] object-cover w-full"
              />
              <div className="space-y-2">
                <div className="text-xs md:text-sm xl:text-base text-primary">
                  Olivia Rhye • 20 Jan 2022
                </div>
                <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold jost-family text-black-text"></div>
                UX review presentations
              </div>
              <div className="text-xs md:text-sm xl:text-base text-gray-lightdark">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </div>
              <div className="text-xs  md:text-sm space-x-2 flex">
                <div className="text-primary bg-primary bg-opacity-10 px-3 py-[2px] rounded-full">
                  Design
                </div>
                <div className="text-blue-indigo bg-blue-indigo bg-opacity-10 px-3 py-[2px] rounded-full">
                  Research
                </div>
                <div className="text-pink-medium bg-pink-medium bg-opacity-10 px-3 py-[2px] rounded-full">
                  Presentation
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-4">
                <img
                  src={
                    index == 0
                      ? ASSETS.BLOGS.BLOG_1.src
                      : index == 1
                      ? ASSETS.BLOGS.BLOG_2.src
                      : index == 2
                      ? ASSETS.BLOGS.BLOG_3.src
                      : ASSETS.BLOGS.BLOG_1.src
                  }
                  alt=""
                  className="max-h-96 h-full object-cover w-full"
                />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs md:text-sm xl:text-base text-primary">
                      Olivia Rhye • 20 Jan 2022
                    </div>
                    <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold jost-family text-black-text"></div>
                    UX review presentations
                  </div>
                  <div className="text-xs md:text-sm xl:text-base text-gray-lightdark">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </div>
                  <div className="text-xs  md:text-sm space-x-2 flex">
                    <div className="text-primary bg-primary bg-opacity-10 px-3 py-[2px] rounded-full">
                      Design
                    </div>
                    <div className="text-blue-indigo bg-blue-indigo bg-opacity-10 px-3 py-[2px] rounded-full">
                      Research
                    </div>
                    <div className="text-pink-medium bg-pink-medium bg-opacity-10 px-3 py-[2px] rounded-full">
                      Presentation
                    </div>
                  </div>
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

export default memo(Blog);
