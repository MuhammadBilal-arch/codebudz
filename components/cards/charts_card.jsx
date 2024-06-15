import React from "react";
import { HiOutlineDotsVertical, IoArrowUpOutline } from "@/utils/icons";
export const ChartCard = ({ title,subtitle , chart , }) => {
  return (
    <div className=" p-5 flex shadow-equal flex-col justify-between  rounded-lg min-h-[120px] space-y-2">
      <div className="text-gray font-medium primary-family text-base flex items-start justify-between">
        <div className="space-y-1 flex flex-col">
            <div className="primary-family font-semibold 2xl:text-lg">{title}</div>
            {title !== "Clinical Response Time" &&  <div className="primary-family text-xs 2xl:text-sm min-h-5">{subtitle}</div> }         

        </div>
        <div className="text-gray-100 text-xl">
          <HiOutlineDotsVertical  className="cursor-pointer"/>
        </div>
      </div> 
      {chart}
    </div>
  );
};
