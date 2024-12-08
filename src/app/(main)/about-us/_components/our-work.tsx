"use client";

import Image from "next/image";
import React, { useState } from "react";

const OurWorkComponent = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="h-[80%] w-full my-[2rem] md:m-0 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full flex-1 md:h-full flex items-center justify-center">
          <Image
            src={
              // "https://cdn.prod.website-files.com/6461e0860bbf2a9c10f5d2b6/6481dbee03bdb4aed92edb3f_Builders%20(1).webp"
              "/images/about-us-img1.jpg"
            }
            alt="Builder Image"
            width={0}
            height={0}
            unoptimized
            quality={100}
            className="w-[600px] h-auto"
          />
        </div>
        <div className="w-full flex-1 md:h-full py-4 flex flex-col items-start justify-center gap-12">
          <div className="flex flex-row items-center justify-center gap-6">
            <div
              className="relative capitalize text-base text-dark tracking-wider cursor-pointer"
              onClick={() => setCurrentTab(1)}
            >
              how we work
              {currentTab === 1 && (
                <span className="absolute -bottom-2 left-0 right-0 w-full h-[0.999px] bg-primary"></span>
              )}
            </div>
            <div
              className="relative capitalize text-base text-dark tracking-wider cursor-pointer"
              onClick={() => setCurrentTab(2)}
            >
              achievements
              {currentTab === 2 && (
                <span className="absolute -bottom-2 left-0 right-0 w-full h-[0.999px] bg-primary"></span>
              )}
            </div>
          </div>
          {currentTab === 1 && (
            <div className="h-fit w-full flex flex-col items-start justify-center gap-8">
              <div className="text-4xl lg:text-5xl text-wrap capitalize text-dark">
                Innovative and Sustainable Construction Solutions
              </div>
              <div className="text-base text-paragraph-grey text-wrap leading-7">
                We specialize in crafting buildings that seamlessly blend
                innovation and sustainability. By utilizing eco-friendly
                materials and advanced techniques, we minimize environmental
                impact while ensuring superior quality. Our commitment to green
                construction not only reduces carbon emissions but also creates
                spaces that stand the test of time, benefiting both our clients
                and the planet.
              </div>
              {/* <div className="group relative translate transition-all duration-300 text-primary hover:text-dark cursor-pointer">
                learn more
                <span className="absolute -bottom-2 left-0 right-0 w-full h-[0.5] bg-primary group-hover:bg-dark"></span>
              </div> */}
            </div>
          )}
          {currentTab === 2 && (
            <div className="h-fit w-full flex flex-col items-start justify-center gap-8">
              <div className="text-4xl md:text-5xl text-wrap capitalize text-dark">
                building excellence, one structure at a time
              </div>
              <div className="text-base text-paragraph-grey text-wrap leading-7">
                With a legacy of excellence and innovation, our company has been
                a trusted leader in the construction industry. From residential
                projects to large-scale commercial developments, we deliver
                high-quality, sustainable, and modern structures tailored to
                meet our clients&quot; unique needs. By combining advanced
                technology, skilled craftsmanship, and a commitment to customer
                satisfaction, we aim to build not just structures, but lasting
                relationships and a better future.
              </div>
              <div className="w-[90%] md:w-[75%] flex flex-row items-center justify-between">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-primary text-3xl lg:text-4xl">690+</p>
                  <p className="text-grey text-base capitalize">
                    projects completed
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-primary text-3xl lg:text-4xl">500+</p>
                  <p className="text-grey text-base capitalize">
                    happy clients
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-primary text-3xl lg:text-4xl">10+</p>
                  <p className="text-grey text-base capitalize">awards</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurWorkComponent;
