import { ASSETS } from "@/public/path";
import React from "react";
import { GreenButton } from "../buttons";
import Link from "next/link";
import { FaArrowRight, FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${ASSETS.FOOTER.FOOTER_PATTERN.src})`,
      }}
      className={`
            bg-no-repeat bg-cover
            mx-auto w-full h-full 
              px-5 sm:px-12 md:px-14 lg:px-20 py-10 bg-gradient-to-br to-bottom-right from-[#012C5F] to-[#044A9D]`}
    >
      <div className="flex justify-between w-full text-white">
        <img src={ASSETS.LOGO.LOGO_2.src} alt="" className="h-20" />
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-4">
          <div className="opacity-[80%]">ready to get started?</div>
          <Link href="/auth/signin">
            <GreenButton
              afterIcon={<FaArrowRight />}
              textColor="text-white"
              title="Get Started"
            />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <div className="text-white space-y-2 ">
          <div className="flex items-center space-x-3 opacity-[80%]">
            <FaRegEnvelope />
            <div>info@pureviewlabs.com</div>
          </div>
          <div className="flex items-center space-x-3 opacity-[80%]">
            <FiPhone />
            <div>+1 (248) 800-6626</div>
          </div>
          <div className="flex items-center space-x-3 opacity-[80%]">
            <FiPhone />
            <div>+1 (248) 800-6656</div>
          </div>
          <div className="font-semibold text-base">LABORATORY LOCATIONS</div>
          <div className="flex space-x-3 opacity-[80%]">
            <RiMapPinLine className="text-3xl" />
            <div>25003 Pitkin Rd, Ste F-300 Spring, TX 77386</div>
          </div>
        </div>
        <div className="text-white space-y-2">
          <div className="font-semibold text-base">Providers</div>
          <ul className="space-y-2 opacity-[80%]">
            <li>
              <Link href="/providers/oncology" className="text-white">
                Oncology
              </Link>
            </li>
            <li>
              <Link
                href="/providers/clinical-hematology"
                className="text-white"
              >
                Clinical Hematology
              </Link>
            </li>
            <li>
              <Link href="/providers/infectious-disease" className="text-white">
                Infectious Disease
              </Link>
            </li>
            <li>
              <Link
                href="/providers/respiratory-pathogens"
                className="text-white"
              >
                Respiratory Pathogens
              </Link>
            </li>
            <li>
              <Link href="toxicology" className="text-white">
                Toxicology
              </Link>
            </li>
            <li>
              <Link href="precision-toxicology" className="text-white">
                Precision Toxicology
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-white space-y-2">
          <div className="font-semibold text-base">Company</div>
          <ul className="space-y-2 opacity-[80%]">
            <li>
              <Link href="news" className="text-white">
                News
              </Link>
            </li>
            <li>
              <Link href="careers" className="text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="help" className="text-white">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="" className="text-white">
                Pharmacogenomics
              </Link>
            </li>
            <li>
              <Link href="" className="text-white">
                Test Menu
              </Link>
            </li>
            <li>
              <Link href="payment" className="text-white">
                Payment
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-white space-y-2">
          <div className="font-semibold text-base">Help</div>
          <ul className="space-y-2 opacity-[80%]">
            <li>
              <Link href="/" className="text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="help" className="text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-white mt-10" />
      <div className="flex flex-col md:flex-row text-white items-center justify-between pt-5 space-y-2 md:space-y-0">
        <div>© 2024 Pure View Labs. All rights reserved.</div>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms of Service</Link>
          <Link href="/privacy-policy">Contact Us</Link>
        </div>
      </div>
    </main>
  );
};
