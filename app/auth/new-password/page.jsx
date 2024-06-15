import React from "react";
import { ASSETS } from "@/public/path";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const NewPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen 2xl:h-auto max-w-[1440px] mx-auto">
      {/* Left side with image and text overlay */}

      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src={ASSETS.AUTH.NEW_PASSWORD.src}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="before:content-[''] absolute top-0 left-[50%] font-bold text-[26px] bg-black bg-opacity-40 h-[100%] w-[100%]  transform -translate-x-1/2 text-white p-2">
          <img
            src={ASSETS.LOGO.LOGO.src}
            alt="Logo"
            className="absolute  bottom-56 lg:bottom-96   xl:bottom-72 lg:left-10 xl:left-10 md:left-8 left-6 w-[91.97px] h-[69.12px] lg:w-[10%] lg:h-[auto]"
          />
          <div className="absolute bottom-40 md:bottom-36 lg:bottom-52 xl:bottom-44 px-5 lg:px-6 text-[26px] lg:text-[36px] font-bold text-white leading-tight">
            Here you go to rejoin the best Ai tools for your Project.
          </div>
          <p className="absolute lg:bottom-16 md:bottom-16  bottom-12  px-5 text-[16px] mb-4 lg:mb-10">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est,
          </p>
          <img
            src={ASSETS.AUTH.SIGN_LINE.src}
            alt="Bottom Image"
            className="absolute bottom-2  lg:bottom-10  md:bottom-6   ml-6 mb-10 w-[100px] lg:w-[150px] "
          />
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 p-5 lg:p-28 bg-white flex flex-col justify-center md:items-center lg:items-center xl:items-start">
        <h2 className="text-xl lg:text-[28px] font-bold text-center lg:text-left xl:text-left mb-1">
          Here you Go!
        </h2>

        <p className="text-sm lg:text-[14px] mb-12 text-center lg:text-left">
          Please enter your new password to get start.
        </p>
        <div className="flex flex-col justify-center items-center lg:items-start w-full max-w-md">
          <form className="w-full">
            <div className="mb-4">
              <label className="text-black font-semibold" htmlFor="email">
                Password
              </label>
              <input
                type="email"
                id="email"
                className=" text-black border border-gray rounded-full w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline  focus:border-green"
                placeholder="Write Here"
              />
            </div>
            <div className="mb-4">
              <label className="text-black font-semibold" htmlFor="email">
                Confirm Password
              </label>
              <input
                type="email"
                id="email"
                className=" text-black border border-gray rounded-full w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline  focus:border-green"
                placeholder="Write Here"
              />
            </div>

            <div className="mt-12 mb-10">
              <Link href="/">
                <button className="bg-[#32CC2E] text-white w-full rounded-full py-3 px-6">
                  Save
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
