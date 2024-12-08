import NavbarComponent from "@/components/global/navbar";
import React from "react";
import FooterComponent from "@/components/global/footer";
import AboutComponent from "./_components/about";

type Props = {
  children: React.ReactNode;
};

const ContactUsLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <div className="bg-midnight-blue w-full h-fit flex flex-col items-center justify-center">
          <NavbarComponent />
        <AboutComponent />
      </div>
        {children}
      <FooterComponent />
    </div>
  );
};

export default ContactUsLayout;
