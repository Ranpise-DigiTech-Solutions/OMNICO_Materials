import { ourServices } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const ServicesComponent = () => {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="h-full w-full py-[3rem] flex flex-col items-center justify-center gap-6">
        <p className="uppercase text-sm text-primary">our services</p>
        <p className="w-[60%] text-5xl text-dark text-wrap text-center capitalize leading-[3rem]">
          Explore Our Range of Expert Services
        </p>
        <div className="flex flex-row items-center justify-center flex-wrap gap-12 pt-[1rem]">
          {ourServices.map((item, index) => (
            <div
              className="w-[350px] h-[500px] flex flex-col items-center justify-center overflow-hidden gap-4"
              key={index}
            >
              <div className="relative h-[70%] w-full">
                <Image
                  src={item.imageUrl}
                  alt="s1"
                  fill
                  unoptimized
                  quality={100}
                  className="transform transition-transform duration-1000 hover:scale-x-125 object-cover cursor-pointer"
                />
              </div>
              <div className="flex-1 w-full flex flex-col items-start justify-center gap-4">
                <p className="capitalize text-2xl text-dark">{item.title}</p>
                <p className="text-wrap text-base text-paragraph-grey leading-7">
                  {item.description}
                </p>
                <p className="w-full h-[0.5] bg-grey"></p>
                <p className="lowercase text-primary underline underline-offset-2 cursor-pointer transform transition-all duration-300 hover:text-primary-hover">
                  read more
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
