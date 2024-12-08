import React from "react";

const AboutComponent = () => {
  return (
    <div className="flex-1 w-[90%] xl:w-[80%] py-[5rem] flex flex-col items-center justify-center gap-6 bg-transparent">
      <p className="uppercase text-sm text-primary">about us</p>
      <p className="text-4xl lg:text-5xl capitalize text-white">
        about company
      </p>
      <p className="text-white-50 text-base lg:text-lg text-center w-[90%] lg:w-[60%]">
        With a commitment to excellence, we specialize in crafting innovative,
        high-quality, and sustainable construction projects.
      </p>
    </div>
  );
};

export default AboutComponent;
