import { ASSETS } from "@/public/path";
import React, { memo } from "react";
import { ColoredButton } from "../buttons";
import Link from "next/link";

const Footer = () => {
  return (
    <main
      className={`
            bg-no-repeat bg-cover
            mx-auto w-full h-full bg-black-footer
              px-5 sm:px-12 md:px-14 lg:px-20 pt-10`}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-auto max-w-[1440px]">
        <div className="space-y-8">
          <img src={ASSETS.LOGO.LOGO.src} alt="" className="h-10 xl:h-14" />
          <p className="text-white text-sm xl:text-base">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>
        <div className="text-white space-y-6 flex flex-col items-center">
          <div className="font-semibold text-sm text-primary uppercase">
            company
          </div>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact 
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white space-y-6 flex flex-col  text-left items-center lg:items-start ">
          <div className="font-semibold text-sm text-primary uppercase">
            help
          </div>
          <ul className="space-y-4">
            {/* <li>
              <Link href="/" className="text-white">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Delivery Details
              </Link>
            </li> */}
            <li>
              <Link href="/" className="text-white">
                Terns & Conditions
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white space-y-6 flex flex-col  text-left ">
          <div className="font-semibold text-sm text-primary uppercase">
            newsletter
          </div>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-white px-4 py-2 rounded-md border-b border-white w-full text-black-text placeholder-gray-dark"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white px-4 py-2 rounded-md border-b border-white w-full text-black-text placeholder-gray-dark"
            />
            <ColoredButton
              title="Subscribe Now"
              type="submit"
              textColor={"text-white"}
              background={"bg-primary"}
              borderColor={"border-primary"}
              width={'w-full'}
            />
          </form>
        </div>
      </div>
      <hr className="text-white mt-10 max-w-[1440px] mx-auto" />
      <div className="flex items-center justify-center text-white py-6 text-xs md:text-sm">
        <div>© Copyright 2022. All rights reserved.</div>
      </div>
    </main>
  );
};

export default memo(Footer);