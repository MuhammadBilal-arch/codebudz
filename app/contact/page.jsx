"use client";
import React, { memo } from "react";
import Hero from "../components/hero";
import { Nav } from "@/components/nav";
import Map from "../components/map";
import Footer from "@/components/footer";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { ASSETS } from "@/public/path";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1480px]  w-full mx-auto overflow-hidden">
      <Nav />
      <Hero />
      <div className="poppins-family p-5 sm:p-10 md:p-16 lg:p-20 xl:p-24 space-y-6 md:space-y-0 md:grid grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 space-y-4 w-11/12">
          {/* HEADING */}
          <div className="space-y-2">
            <div className="text-xl md:text-2xl lg:text-4xl jost-family font-semibold leading-12 text-black-text">
              Let’s level up your brand, together
            </div>
            <div className="text-gray-extradark text-lg md:text-xl lg:text-2xl jost-family">
              You can reach us anytime via{" "}
              <span className="text-secondary">hi@untitledui.com</span>
            </div>
          </div>
          {/* FORM */}
          <form className="space-y-5 text-xs md:text-sm lg:text-base">
            <div className="space-y-1 text-gray-extradark">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 sm:px-4 md:px-5 xl:px-6 py-1.5 w-full border border-gray-light rounded-md"
              />
            </div>
            <div className="space-y-1 text-gray-extradark">
              <label>Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 sm:px-4 md:px-5 xl:px-6 py-1.5 w-full border border-gray-light rounded-md"
              />
            </div>
            <div className="space-y-1 text-gray-extradark">
              <label>Phone Number</label>
              <div className="px-3 sm:px-4 md:px-5 xl:px-6 py-1.5 w-full border border-gray-light rounded-md flex space-x-3">
                <select className="w-14 outline-none">
                  <option selected>UAE</option>
                </select>
                <input
                  type="phone"
                  placeholder="+97 (555) 000-0000"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="space-y-1 text-gray-extradark">
              <label>How can we help?</label>
              <textarea
                type="text"
                rows={4}
                placeholder="Tell us little about the project..."
                className="resize-none px-3 sm:px-4 md:px-5 xl:px-6 py-1.5 w-full border border-gray-light rounded-md"
              />
            </div>
            <div className="space-y-3 text-gray-extradark">
              <label>Services</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    id="apps-development"
                    className="form-checkbox h-4 w-4 text-primary caret-primary"
                  />
                  <label htmlFor="apps-development" className="text-gray-700">
                    Apps Development
                  </label>
                </div>
                <div className="space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    id="ui-ux-design"
                    className="form-checkbox h-4 w-4 text-primary caret-primary"
                  />
                  <label htmlFor="ui-ux-design" className="text-gray-700">
                    UI/UX Design
                  </label>
                </div>
                <div className="space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    id="website-development"
                    className="form-checkbox h-4 w-4 text-primary caret-primary"
                  />
                  <label
                    htmlFor="website-development"
                    className="text-gray-700"
                  >
                    Website Development
                  </label>
                </div>
                <div className="space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    id="it-consultancy"
                    className="form-checkbox h-4 w-4 text-primary caret-primary"
                  />
                  <label htmlFor="it-consultancy" className="text-gray-700">
                    IT Consultancy
                  </label>
                </div>
                <div className="space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    id="user-research"
                    className="form-checkbox h-4 w-4 text-primary caret-primary"
                  />
                  <label htmlFor="user-research" className="text-gray-700">
                    User Research
                  </label>
                </div>
                <div className="space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    id="other"
                    className="form-checkbox h-4 w-4 text-primary caret-primary"
                  />
                  <label htmlFor="other" className="text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="py-1.5 lg:py-2 rounded-md bg-primary text-center text-white w-full"
            >
              Get Started
            </button>
          </form>
        </div>
        <div className="col-span-1 bg-secondary text-white overflow-hidden">
          <div className="p-5 lg:p-7 space-y-6 ">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
              Contact Info
            </div>
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="bg-gray-extradark2 text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl text-white h-12 w-12 md:h-14 md:w-14  rounded-full flex items-center justify-center">
                  <PiPhoneCallFill />
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Call Us
                  </div>
                  <div className="text-xs md:text-sm lg:text-base">
                    012 345 678 9101
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-gray-extradark2 text-sm sm:text-base  text-white h-12 w-12 md:h-14 md:w-14  rounded-full flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Email
                  </div>
                  <div className="text-xs md:text-sm lg:text-base">
                    info@example.com
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-gray-extradark2 text-sm sm:text-base  text-white h-12 w-12 md:h-14 md:w-14  rounded-full flex items-center justify-center">
                  <FaLocationDot />
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Call Us
                  </div>
                  <div className="text-xs md:text-sm lg:text-base">
                    012 345 678 9101
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
                Follow Us
              </div>
              <div className="space-x-4 flex items-center">
                <div className="bg-gray-extradark2 text-sm md:text-base  text-white h-12 w-12 rounded-full flex items-center justify-center">
                  <FaFacebookF />
                </div>
                <div className="bg-gray-extradark2 text-sm md:text-base  text-white h-12 w-12 rounded-full flex items-center justify-center">
                  <FaTwitter />
                </div>
                <div className="bg-gray-extradark2 text-sm md:text-base  text-white h-12 w-12 rounded-full flex items-center justify-center">
                  <FaInstagram />
                </div>
                <div className="bg-gray-extradark2 text-sm md:text-base  text-white h-12 w-12 rounded-full flex items-center justify-center">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-52 max-h-72 ">
            <img
              src={ASSETS.CONTACTS.CONTACTS.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default memo(Contact);
