export const GreenButton = ({
  title,
  type,
  onHandleClick,
  textColor = "text-black",
  afterIcon,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onHandleClick}
      className={`bg-green flex max-w-min whitespace-nowrap items-center py-2 font-semibold px-4 md:px-5 ${textColor} rounded-3xl text-xs md:text-xs lg:text-base`}
    >
      {title}
      {afterIcon && <div className="px-2">{afterIcon}</div>}
    </button>
  );
};

export const WhiteButton = ({ title, type, onHandleClick , textColor = "text-black"}) => {
  return (
    <button
      type={type || "button"}
      onClick={onHandleClick}
      className={`bg-white py-2 font-semibold px-4 md:px-5 ${textColor} rounded-3xl text-xs md:text-sm lg:text-base`}
    >
      {title}
    </button>
  );
};

export const TransparentButton = ({ title, type, onHandleClick }) => {
  return (
    <button
      type={type || "button"}
      onClick={onHandleClick}
      className="bg-transparent py-2 font-semibold px-4 md:px-5 text-white border border-white rounded-3xl text-xs md:text-sm lg:text-base"
    >
      {title}
    </button>
  );
};
