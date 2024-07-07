import { memo } from "react";
export const ColoredButton = memo(
  ({
    title,
    type,
    onHandleClick,
    textColor = "text-black",
    afterIcon,
    background,
    borderColor,
    hoverTextColor = "text-white",
    width = "",
  }) => {
    return (
      <button
        type={type || "button"}
        onClick={onHandleClick}
        className={`${background} min-w-32 text-center ${width}
        flex items-center justify-center  border-2 ${borderColor} 
        transition duration-300 delay-100 hover:text-black 
        hover:bg-white hover:${borderColor} hover:${hoverTextColor} whitespace-nowrap 
        items-center py-1 md:py-1.5 px-4 md:px-5 xl:px-8 ${textColor} 
        rounded-md text-sm lg:text-base  2xl:text-lg`}
      >
        {title}
        {afterIcon && <div className="px-2">{afterIcon}</div>}
      </button>
    );
  }
);

export const WhiteButton = memo(
  ({ title, type, onHandleClick, textColor = "text-black" }) => {
    return (
      <button
        type={type || "button"}
        onClick={onHandleClick}
        className={`bg-white min-w-32 text-center py-1 sm:py-2 px-4 md:px-5 ${textColor} transition duration-300 delay-300 hover:text-black hover:bg-white hover:border-white rounded-3xl text-xs md:text-sm lg:text-base`}
      >
        {title}
      </button>
    );
  }
);

export const TransparentButton = memo(
  ({
    title,
    type,
    onHandleClick,
    textColor = "text-white",
    borderColor = "border-white",
  }) => {
    return (
      <button
        type={type || "button"}
        onClick={onHandleClick}
        className={`bg-transparent min-w-32 text-center py-1 sm:py-2 px-4 md:px-5 xl:px-8 transition duration-300 delay-300 
      hover:text-black hover:bg-white hover:border-white ${textColor} border ${borderColor} rounded-3xl text-xs md:text-sm lg:text-base`}
      >
        {title}
      </button>
    );
  }
);
