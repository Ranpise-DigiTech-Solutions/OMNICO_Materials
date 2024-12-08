"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AboutComponent = () => {
  const imageRef = useRef(null); // Reference for the image
  const [isEnlarged, setIsEnlarged] = useState(false); // State to track enlargement

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.5) {
          setIsEnlarged(true); // More than 50% visible
        } else {
          setIsEnlarged(false); // Less than 50% visible
        }
      },
      {
        threshold: [0.5], // Trigger when 50% of the image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current); // Start observing the image
    }

    // Cleanup the observer when the component is unmounted
    const image = imageRef.current;

    return () => {
      if (image) {
        observer.unobserve(image); // Cleanup observer
      }
    };
  }, []);

  return (
    <div className="h-fit w-full py-[5rem] flex flex-col items-center justify-center gap-6 bg-transparent">
      <p className="uppercase text-xs lg:text-sm text-primary">
        let&apos;s talk
      </p>
      <p className="text-4xl lg:text-5xl capitalize text-white">contact us</p>
      <p className="text-white-50 text-base lg:text-lg text-center w-[80%] lg:w-[60%]">
        Have questions or need assistance? Get in touch with us through phone,
        email, or by filling out the contact form below. We&quot;re here to help and
        look forward to connecting with you!
      </p>
      <Image
        ref={imageRef}
        src={
          // "https://cdn.prod.website-files.com/6461e0860bbf2a9c10f5d2b6/6478555098d928dcf0a43707_Team%20banner%20Img%20(1).webp"
          "/images/contact-us-img1.jpg"
        }
        alt="company people"
        width={0}
        height={0}
        unoptimized
        quality={100}
        className={`transform transition-transform duration-200 ease-in ${
          isEnlarged ? "scale-110" : ""
        } w-[80%] lg:w-[75%] h-auto pt-12`}
      />
    </div>
  );
};

export default AboutComponent;
