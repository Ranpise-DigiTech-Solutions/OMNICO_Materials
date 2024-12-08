import Image from "next/image";
import React from "react";

import { Send } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="h-fit w-full pt-[5rem] pb-8 bg-midnight-blue flex flex-col items-center justify-center gap-8">
      <div className="h-fit w-[90%] xl:w-[80%] flex flex-row flex-wrap items-start justify-between gap-6">
        <div className="flex-1 min-w-[150px] flex flex-col items-start justify-center gap-6">
          <div className="flex flex-row items-center justify-center gap-1 lg:gap-2">
            <Image
              height={0}
              width={0}
              alt="logo"
              src={"/images/logo.png"}
              className="h-[40px] lg:h-[50px] w-auto"
              draggable={false}
              unoptimized
              quality={100}
            />
            <span className="font-serif text-base md:text-lg lg:text-xl capitalize font-bold text-white">
              OMNICO MATERIALS
            </span>
          </div>
          <p className="text-base text-white-50 text-wrap leading-7">
            <span className="font-bold italic">
              Omnico Building Materials Trading L.L.C
            </span>
            &nbsp;is a trusted name in the construction industry, offering
            high-quality materials and innovative solutions to meet the diverse
            needs of our clients.
          </p>
        </div>
        <div className="flex-1 min-w-[150px] flex items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="capitalize text-lg font-bold text-white">Pages</p>
            <Link
              href={"/"}
              className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href={"/our-services"}
              className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer"
            >
              Our Services
            </Link>
            <Link
              href={"/our-products"}
              className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer"
            >
              Our Products
            </Link>
            <Link
              href={"/contact-us"}
              className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer"
            >
              Contact Us
            </Link>
            {/* <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              Demos
            </p> */}
          </div>
        </div>
        {/* <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="capitalize text-lg font-bold text-white">domain</p>
            <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              web domain
            </p>
            <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              cloud domain
            </p>
            <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              CMS domain
            </p>
            <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              WordPress domain
            </p>
            <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              Email domain
            </p>
            <p className="capitalize text-white-50 text-basetransform transition-all duration-300 hover:text-primary cursor-pointer">
              VPS domain
            </p>
          </div>
        </div> */}
        <div className="flex-1 flex min-w-[200px] flex-col items-start justify-center gap-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-lg text-white capitalize">newsletter</p>
            <p className="text-white-50 leading-7">
              Subscribe to our newsletter for the latest updates, exclusive
              deals, and expert insights delivered straight to your inbox.
            </p>
          </div>
          <div className="relative w-full flex flex-row items-center justify-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Email"
                className="peer w-full border-none outline-none bg-transparent text-white placeholder:text-white focus:ring-0"
              />
            </div>
            <div className="w-[10%]">
              <Send className="h-auto w-[60%] text-white cursor-pointer" />
            </div>
            <div className="absolute left-0 right-0 -bottom-2 h-[0.5] w-full bg-white peer-focus:bg-primary"></div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 pt-4">
            <FacebookIcon className="text-white transform transition-all duration-300 hover:text-grey cursor-pointer" />
            <XIcon className="text-white transform transition-all duration-300 hover:text-grey cursor-pointer" />
            <InstagramIcon className="text-white transform transition-all duration-300 hover:text-grey cursor-pointer" />
            <LinkedInIcon className="text-white transform transition-all duration-300 hover:text-grey cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-[90%] xl:w-[80%] h-[0.5] bg-separator-grey"></div>
      <div className="w-[90%] xl:w-[80%] flex flex-row flex-wrap items-center justify-between gap-4 z-50">
        <p className="text-white-50">
          &copy; 2024 Omnico. All rights reserved. | Terms of Service | Privacy
          Policy
        </p>
        <p className="capitalize text-white-50">
          Designed by{" "}
          <span className="transform transition-all duration-300 hover:text-blue-500 underline-offset-2">
            <a
              href="https://nexainnov.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              &apos;nexaInnov solutions&apos;
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
