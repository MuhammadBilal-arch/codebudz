import React from "react";
import { HiOutlineDotsVertical, IoArrowUpOutline } from "@/utils/icons";
export const AnalyticsCard = ({ icon, title, total, total_float }) => {
  return (
    <div className=" p-5 flex shadow-equal flex-col justify-between  rounded-lg min-h-[120px] space-y-2">
      <div className="text-gray font-medium primary-family text-base flex items-start justify-between">
        <div className="flex items-center space-x-3 xl:space-x-4">
          <div className="h-10 w-10 2xl:h-14 2xl:w-14 rounded-full bg-purple-25 flex items-center justify-center text-xl">
            {icon}
          </div>      
            <div className="primary-family font-semibold 2xl:text-lg">{title}</div>         
        </div>
        <div className="text-gray-100 text-xl">
          <HiOutlineDotsVertical className="cursor-pointer"/>
        </div>
      </div>
      <div className="text-gray font-medium primary-family text-base flex items-center justify-between">
        <div className="flex items-center space-x-3 xl:space-x-4">
          <div className="h-10 w-10 2xl:h-14 2xl:w-14 rounded-full  flex items-center justify-center text-xl">
          </div>      
            <div className="secondary-family text-3xl 2xl:text-4xl font-semibold">{total}</div>         
        </div>
        <div className="bg-green-25 flex items-center space-x-2 px-3 py-1 rounded-2xl">
          <IoArrowUpOutline className="text-green-100"/>
          <span className="text-green-200 font-semibold primary-family">{total_float}</span>
        </div>
      </div>

    </div>
  );
};
