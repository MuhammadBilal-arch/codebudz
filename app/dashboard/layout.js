"use client";
import { ASSETS } from "@/public/path";
import { onLogoutUser } from "@/redux/slices/user";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  RiCheckboxMultipleLine,
  FiUsers,
  FaRegEnvelopeOpen,
  TbBuildingHospital,
  CiSearch,
  MdOutlineLogout,
  FaRegUser,
  GoQuestion,
  PiBellSimple,
  AiOutlineLineChart,
} from "@/utils/icons";

import { DUMMY_AVATAR } from "@/utils/contant";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@/utils/hooks/useMediaQuery";
const AdminLayout = ({ children }) => {
  const navigate = useRouter();
  const pathname = usePathname();
  const { user, isLogged } = useSelector((state) => state.User);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  const dispatch = useDispatch();

  const isActive = (path) => {
    return pathname === path ? "bg-white text-purple font-semibold" : "";
  };

  const providerRoutes = [
    {
      route: `/dashboard/lab/analytics`,
      icon: <FaRegEnvelopeOpen className="text-xl" />,
      name: "Admin Home",
      role: ["administrator", "nurse", "doctor", "surgeon"],
    },
    {
      route: `/dashboard/lab/manage-users`,
      name: "Manage Users",
      icon: <FiUsers className="text-xl" />,
      role: ["administrator", "nurse", "doctor", "surgeon"],
    },
    {
      route: `/dashboard/lab/manage-hospitals`,
      name: "Manage Hospital",
      icon: <TbBuildingHospital className="text-2xl" />,
      role: ["administrator", "nurse", "doctor", "surgeon"],
    },
    {
      route: `/dashboard/lab/manage-roles`,
      name: "Manage Roles",
      icon: <RiCheckboxMultipleLine className="text-2xl" />,
      role: ["administrator", "nurse", "doctor", "surgeon"],
    },
  ];

  const onLogoutUserFn = () => {
    dispatch(onLogoutUser()).then(() => {
      // Navigate back to the previous page after successful dispatch
      navigate.push("/");
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);


  return (
    <div className="flex min-h-screen">
      <aside
        className={`w-64 max-h-screen min-h-screen fixed bg-purple ${
          isSidebarOpen ? "flex" : "hidden"
        } flex-col justify-between text-white`}
      >
        <div>
          <div className="p-4">
            <img
              src={ASSETS.LOGO.LOGO.src}
              alt=""
              className="h-14 object-cover w-full"
            />
          </div>
          <nav className="mt-5 px-5">
            <div className="bg-purple-100 px-2 py-2 text-white rounded-md flex items-center space-x-2 mb-4 ml-4">
              <CiSearch className="text-2xl text-white " />
              <input
                className="bg-transparent px-2 w-[90%] outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
            <ul className="space-y-1">
              {providerRoutes?.map((item, index) => (
                // item?.role?.includes(user?.role?.toLowerCase()) &&
                <li
                  key={index}
                  className={`text-purple-50 hover:text-purple rounded-md font-medium hover:font-semibold hover:bg-white duration-[2000ms] ${isActive(
                    item?.route
                  )}`}
                >
                  <Link href={item?.route} legacyBehavior>
                    <a className="flex  items-center space-x-4 px-4 py-2 text-sm lg:text-base primary-family">
                      <span className=" h-[24px] w-[24px] flex items-center justify-end">
                        {item?.icon}
                      </span>{" "}
                      <span>{item?.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex mb-4 pt-2 border-t border-purple-100 cursor-pointer  text-purple-50 self items-center space-x-2 justify-between px-4 py-2 text-sm lg:text-base primary-family">
          <div className="flex items-center space-x-3">
            <img
              src={DUMMY_AVATAR}
              alt="avatar"
              className="h-8 w-8 object-contain rounded-full"
            />
            <div className="">
              <div className="text-sm xl:text-base">Olivia Rhye</div>
              <div className="text-xs">olivia@untitledui.com</div>
            </div>
          </div>
          <MdOutlineLogout className="text-xl" />
        </div>
      </aside>

      <main className={`flex-1 bg-white ${isSidebarOpen ? "md:ml-64" : "ml-0"}`}>
        <div className="sticky w-full flex items-center justify-between py-6 text-purple-200 px-6 2xl:px-12 mb-2">
          <div className="w-[80%] space-y-1">
            <div className="primary-family font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
              Virtualis Administrator Screen
            </div>
            <p className="text-xs md:text-sm  lg:text-base w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing tristique ante
              sed enim sed imperdiet. Nisl pretium eu tellus non vitae
              hendrerit.
            </p>
          </div>
          <button
            className="block md:hidden text-white bg-purple p-2 rounded-full"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
          <div className="hidden md:flex space-x-3 text-xl items-center self-start">
            <AiOutlineLineChart className="text-2xl cursor-pointer" />
            <PiBellSimple className="text-2xl cursor-pointer" />
            <GoQuestion className="text-2xl cursor-pointer" />
            <FaRegUser className="cursor-pointer" />
          </div>
        </div>
        <section className="px-6 2xl:px-12 py-6">{children}</section>
      </main>
    </div>
  );
};

export default AdminLayout;
