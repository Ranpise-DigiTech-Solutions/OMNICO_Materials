import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const GetStartedComponent = ({}) => {
  return (
    <div className="flex-1 w-[90%] xl:w-[80%]  flex lg:flex-row flex-col items-end justify-between gap-8">
      <div className="w-full pt-4 lg:p-0 lg:w-[45%] h-full self-center flex flex-col items-start justify-center gap-10">
        <div className="w-full flex flex-col items-center lg:items-start justify-center gap-2">
          <div className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white capitalize">
            Build
            <span className="text-stroke-primary">ing</span>
          </div>
          <div className="text-5xl text-white capitalize text-center lg:text-start">
            beyond boundaries
          </div>
        </div>
        <div className="w-[95%] lg:w-[80%] text-white-50 text-lg text-center lg:text-start lg:text-xl text-wrap">
          With a commitment to excellence, we
          specialize in crafting innovative, high-quality, and sustainable
          construction projects.
        </div>
        <div className="w-full flex items-center lg:justify-start justify-center">
          <Button className="capitalize p-6 text-base lg:text-lg text-white transform translate-all duration-300 hover:bg-primary-hover">
            get started
          </Button>
        </div>
      </div>
      <div className="flex-1 h-full flex items-end justify-end">
        <Image
          src={
            // "https://cdn.prod.website-files.com/6461e0860bbf2a9c10f5d2b6/646f272776db6a22fd317fe1_Banner%20Img%20(1).webp"
            "/images/home-page-construction-people.jpg"
          }
          alt="get-started"
          width={0}
          height={0}
          className="hidden lg:block h-[650] w-auto object-cover"
          unoptimized
        />
      </div>
    </div>
  );
};

export default GetStartedComponent;
