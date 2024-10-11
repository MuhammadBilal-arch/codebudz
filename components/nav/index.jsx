"use client";
import { ASSETS } from "@/public/path";
import { ColoredButton, GreenButton } from "../buttons";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { usePathname } from 'next/navigation';
export const Nav = () => {
  const [drawerState, setDrawerState] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef(null);
  const onToggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerState(false);
      }
    };

    if (drawerState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerState]);

  return (
    <div className="w-full flex flex-col md:items-center">
      <nav className="z-50 max-w-[1440px] mx-auto  px-5 sm:px-12 md:px-14 lg:px-20 absolute poppins-family w-full flex items-center justify-between  p-4 text-white ">
        <Link href="/" className="cursor-pointer">
          <img src={ASSETS.LOGO.LOGO.src} className="h-10 md:h-14" alt="logo" />
        </Link>
        <div className="hidden md:block ">
          <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8 font-medium text-sm md:text-sm lg:text-base 2xl:text-base">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "nav-active" : "text-white "}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "nav-active" : "text-white "}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "nav-active" : "text-white "}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={pathname === "/portfolio" ? "nav-active" : "text-white "}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className={pathname === "services" ? "nav-active" : "text-white "}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? "nav-active" : "text-white "}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={onToggleDrawer}
          />
        </div>
        <div className="hidden md:block">
          <Link href="/">
            <ColoredButton
              title="Schedule Call"
              textColor={"text-white"}
              background={"bg-primary"}
              borderColor={"border-primary"}
              type={"button"}
              hoverTextColor={'text-primary'}
            />
          </Link>
        </div>
      </nav>
      {drawerState && (
        <div
          ref={drawerRef}
          className="min-h-screen duration-300 fixed w-[250px] z-[1000] bg-white p-5"
        >
          <div className="flex flex-col items-center  h-full text-black">
            <div className="flex items-center justify-end w-full">
              <RiCloseFill
                onClick={onToggleDrawer}
                className="text-red text-3xl cursor-pointer"
              />
            </div>
            <ul className="space-y-">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/payment">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
