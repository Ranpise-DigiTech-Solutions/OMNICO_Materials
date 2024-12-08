import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="min-h-[750px] lg:h-[550px] w-[90%] flex flex-col lg:flex-row items-center justify-center lg:gap-8 gap-4 bg-transparent">
      <div className="flex-1 px-[2rem] flex flex-col items-center lg:items-start justify-center gap-6">
        <p className="uppercase text-xs lg:text-sm text-primary">services</p>
        <p className="text-4xl lg:text-5xl capitalize text-white text-center lg:text-start">
          Experience Service Beyond Expectations
        </p>
        <p className="text-white-50 text-base lg:text-lg w-full text-center lg:text-start">
          At Omnico Building Materials Trading L.L.C, we take immense pride in
          our commitment to providing unparalleled service excellence to our
          valued customers.
        </p>
      </div>
      <div className="relative w-full h-[400px] lg:h-full lg:flex-1 flex items-center justify-center">
        <Image
          src={
            "/images/our-services-about.jpg"
          }
          alt="about"
          fill
          unoptimized
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
