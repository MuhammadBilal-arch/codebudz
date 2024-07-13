import { ASSETS } from "@/public/path";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  const pathname = usePathname();

  const onReturnName = () => {
    const name = pathname.replace("/", "");
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  };

  const onChangeTextColor = () => {
    const name = pathname.replace("/", "");
    switch(name){
      case 'contact':
        return <span>Conta<span className="text-yellow">ct</span></span>
      case 'about':
        return <span>Ab<span className="text-secondary">o</span>ut</span>
      case 'blog':
        return <span>Bl<span className="text-blue">o</span>g</span>
      case 'services':
        return <span>S<span className="text-yellow">e</span>rvices</span>
      case 'portfolio':
        return <span>Portf<span className="text-secondary">olio</span></span>
    }
  };

  return (
    <main
      style={{
        backgroundImage: `url(${ASSETS.BACKGROUND.BG_HERO.src})`,
      }}
      className={`
        relative
        w-full   
        mx-auto poppins-family bg-cover bg-center  flex flex-col items-center justify-center min-h-96  max-md:py-[5rem]  md:py-[5rem] xl:py-[9rem] 2xl:py-[10rem] overflow-hidden  px-5 sm:px-12 md:px-14 lg:px-20`}
    >
      <div className="space-y-2 lg:space-y-4 text-center">
        <div className=" text-stroke-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] font-semibold">
          {onReturnName()}
        </div>
        <div className="text-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl flex items-center justify-center font-semibold space-x-1">
          <span>
            Cod<span className="text-blue">eb</span>udz
          </span>{" "}
          <MdArrowForwardIos /> <span>{onChangeTextColor()}</span>
        </div>
      </div>
    </main>
  );
};

export default memo(Hero);
