import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="min-h-[750px] lg:h-[550px] w-[90%] flex flex-col lg:flex-row items-center justify-center lg:gap-8 gap-6 bg-transparent">
      <div className="h-fit px-4 lg:px-[2rem] lg:flex-1 flex flex-col items-center lg:items-start justify-center gap-6">
        <p className="uppercase text-xs lg:text-sm text-primary">products</p>
        <p className="text-4xl lg:text-5xl capitalize text-white text-center lg:text-start">
          Explore Our Premium Building Products
        </p>
        <p className="text-white-50 text-base lg:text-lg lg:text-start w-full leading-7 text-center">
          At Omnico Building Materials Trading L.L.C, we offer a comprehensive
          range of high-quality building materials, crafted to meet the diverse
          needs of construction professionals. Our products combine durability,
          sustainability, and innovation, ensuring your projects stand the test
          of time.
        </p>
      </div>
      <div className="relative w-full h-[300px] lg:h-full lg:flex-1 flex items-center justify-center">
        <Image
          src={"/images/our-products-about.jpg"}
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
