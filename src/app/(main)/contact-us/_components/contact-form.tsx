import { Button } from "@/components/ui/button";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="h-full my-8 w-full flex flex-col md:flex-row items-stretch justify-center">
        {/* First Div */}
        <div className="w-full flex-1 md:min-h-full p-[2rem] flex flex-col items-center md:items-start justify-center gap-4 bg-midnight-blue">
          <p className="uppercase text-primary text-xs lg:text-sm text-nowrap">
            get in touch
          </p>
          <p className="text-no-wrap capitalize text-3xl lg:text-4xl text-white">
            we&apos;re ready to assist you
          </p>
          <p className="text-wrap leading-7 text-white-50 text-base lg:text-lg">
            We’re here to help you every step of the way. Whether you need
            guidance, support, or have any questions, our team is dedicated to
            providing you with the best possible assistance. Reach out today,
            and we’ll take care of the rest!
          </p>
          <p className="w-full h-[0.5] bg-separator-grey my-4"></p>
          <p className="text-white capitalize text-center md:text-start text-base lg:text-lg">
            701 Saeed Tower II, Sheikh Zayad Road, Dubai
          </p>
          {/* <p className="text-white capitalize text-base lg:text-lg">
            +1000-111-1212
          </p> */}
          <p className="w-full text-center md:text-start text-white text-base lg:text-lg">
            sales@omnicotrading.com | accounts@omnicotrading.com
          </p>
        </div>

        {/* Second Div */}
        <div className="w-full flex-1 md:min-h-full p-[2rem] flex flex-col items-center justify-center gap-10 bg-primary-light">
          <p className="text-3xl lg:text-4xl text-dark capitalize pb-2">
            send us a message
          </p>
          <input
            type="text"
            name="name"
            className="w-full outline-none border-b-[1px] border-dark bg-transparent placeholder:lg:text-lg text-base lg:text-lg text-dark focus-within:border-primary"
            placeholder="Name"
            title="name"
          />
          <input
            type="email"
            name="email"
            className="w-full outline-none border-b-[1px] border-dark bg-transparent placeholder:lg:text-lg text-base lg:text-lg text-dark focus-within:border-primary"
            placeholder="Email"
            title="email"
          />
          <textarea
            name="message"
            className="w-full min-h-[150px] lg:min-h-[200px] outline-none border-b-[1px] border-dark bg-transparent placeholder:lg:text-lg text-base lg:text-lg text-dark focus-within:border-primary"
            placeholder="Your message..."
            title="message"
          />
          <Button className="w-full md:w-fit transform transition-all duration-300 self-start text-white text-base lg:text-lg p-4 lg:p-6 rounded-full hover:bg-primary-hover">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
