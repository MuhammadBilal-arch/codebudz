import { ASSETS } from "@/public/path";
import React, { memo } from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { LiaCalendarPlusSolid } from "react-icons/lia";
import { RiArrowRightUpLine } from "react-icons/ri";
const Blogs = () => {
  const blogsList = [
    {
      type: "Application",
      title: "Consulting Industry Adapts to the Changing Business.",
      image: ASSETS.BLOGS.BLOG_1.src,
      background: "bg-secondary bg-opacity-50",
    },
    {
      type: "Marketing",
      title: "Celebrates Major Milestone in Digital Services.",
      image: ASSETS.BLOGS.BLOG_2.src,
      background: "bg-yellow bg-opacity-50",
    },
    {
      type: "Application",
      title: "Milestone Leads The Way in Digital Transformation Way.",
      image: ASSETS.BLOGS.BLOG_3.src,
      background: "bg-primary bg-opacity-25",
    },
  ];
  return (
    <div className="w-full bg-white px-5 md:px-10 lg:px-24 py-10 poppins-family space-y-16 max-w-[1440px] mx-auto">
      <div className="text-center space-y-1 md:space-y-5">
        <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold jost-family text-black-text">
          Our Latest Blogs.
        </div>
        <div className="text-gray-lightdark w-full md:w-[40%] lg:w-[35%] xl:w-[33%] 2xl:w-[33%] mx-auto text-xs md:text-sm xl:text-base 2xl:text-lg">
          The specific goals of a marketing agency can vary depending on the
          client's needs, industry.
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsList.map((blog, index) => (
          <div className={`rounded-lg p-4 ${blog.background} space-y-4`}>
            <div className="space-y-5 p-3">
              <div className="flex items-center space-x-8 text-xs lg:text-sm">
                <div className="space-x-1 flex items-center text-gray-extradark">
                  <IoPricetagOutline className="text-base" />
                  <span>{blog.type}</span>
                </div>
                <div className="space-x-1 flex items-center text-gray-extradark">
                  <LiaCalendarPlusSolid className="text-base" />
                  <span>03 April, 2023</span>
                </div>
              </div>
              <div className="font-semibold text-black-text text-base sm:text-lg md:text-xl xl:text-2xl pr-5 2xl:pr-10">
                {blog.title}
              </div>

              <div className="flex items-center space-x-5">
                <div className="border w-full h-0.5 border-secondary"></div>
                <div className="whitespace-nowrap font-medium text-black-text text-xs md:text-sm lg:text-base">
                  Read More
                </div>
                <div>
                  <RiArrowRightUpLine className="text-2xl" />
                </div>
              </div>
            </div>
            <div>
              <img
                src={blog.image}
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Blogs);
