"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  theme?: string;
};

const NavbarComponent = ({ theme }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure component is mounted before dynamic updates
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when sidebar is closed
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [sidebarOpen]);

  if (!isMounted) {
    return null; // Render nothing until the client has mounted
  }

  return (
    <div className="h-[6rem] w-full relative flex items-center justify-center">
      <div
        className={twMerge(
          "h-full w-[90%] xl:w-[80%] relative py-4 bg-transparent text-white flex flex-row items-center justify-between gap-6",
          theme === "dark" && "!text-dark"
        )}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            height={0}
            width={0}
            alt="logo"
            src={"/images/logo.png"}
            className="h-[40px] md:h-[50px] lg:h-[60px] w-auto"
            draggable={false}
            unoptimized
            quality={100}
          />
          <span className="font-serif text-lg md:text-xl lg:text-2xl capitalize font-bold text-center">
            OMNICO MATERIALS
          </span>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center gap-8">
          <nav>
            <ul className="flex flex-row items-center justify-center gap-8 text-xl">
              <li className="group relative transform transition-all duration-300 hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="group relative transform transition-all duration-300 hover:text-primary">
                <Link href="/about-us">About</Link>
              </li>
              <li className="group relative transform transition-all duration-300 hover:text-primary">
                <Link href="/our-services">Services</Link>
              </li>
              <li className="group relative transform transition-all duration-300 hover:text-primary">
                <Link href="/our-products">Products</Link>
              </li>
              {/* <li className="group relative transform transition-all duration-300 hover:text-primary">
                <a href="#">Demos</a>
              </li> */}
            </ul>
          </nav>
          <Link href={"/contact-us"}>
            <Button className="capitalize text-lg p-5 rounded-full transition-all transform duration-300 hover:bg-primary-hover !text-white">
              contact us
            </Button>
          </Link>
        </div>
        <div className="flex lg:hidden text-white" onClick={toggleSidebar}>
          <Menu
            className={`h-[26px] w-[26px] cursor-pointer ${
              theme === "dark" ? "text-dark" : "text-white"
            }`}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`min-h-screen overscroll-y-auto fixed top-0 right-0 bottom-0 transform transition-transform duration-500 bg-primary-light z-20 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-[75%] flex flex-col items-center justify-start gap-16 py-8`}
      >
        <div className="w-[90%] flex flex-row items-center justify-between gap-6">
          <div className="flex flex-row items-center justify-center gap-1">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              height={0}
              width={0}
              unoptimized
              quality={100}
              className="h-[45px] w-auto md:h-[50px]"
              draggable={false}
            />
            <span className="text-base md:text-lg uppercase text-dark font-bold font-serif">
              OMNICO MATERIALS
            </span>
          </div>
          <div
            className="w-[25px] md:w-[30px] h-auto cursor-pointer"
            onClick={toggleSidebar}
          >
            <X className="text-dark w-full h-full" />
          </div>
        </div>
        <div className="w-[80%] flex flex-col items-start justify-center gap-8">
          <Link
            href={"/"}
            className="capitalize text-paragraph-grey text-xl pl-3"
          >
            home
          </Link>
          <Link
            href={"/about-us"}
            className="capitalize text-paragraph-grey text-xl pl-3"
          >
            About Us
          </Link>
          <Link
            href={"/our-services"}
            className="capitalize text-paragraph-grey text-xl pl-3"
          >
            our services
          </Link>
          <Link
            href={"/our-products"}
            className="capitalize text-paragraph-grey text-xl pl-3"
          >
            our products
          </Link>
          {/* <p className="capitalize text-paragraph-grey text-xl pl-3">demo</p> */}
        </div>
        <div className="w-[80%] flex justify-start">
          <Link href={"/contact-us"}>
            <button className="capitalize bg-primary text-white px-4 py-3">
              contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
