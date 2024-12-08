import NavbarComponent from "@/components/global/navbar";
import React from "react";
import FooterComponent from "@/components/global/footer";
import AboutComponent from "./_components/about";

type Props = {
  children: React.ReactNode;
};

const OurServicesLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
     <div className="bg-white h-fit w-full flex flex-col items-center justify-center">
        <NavbarComponent theme="dark" />
      </div>
      <div className="w-full bg-midnight-blue flex items-center justify-center">
        <AboutComponent />
      </div>
        {children}
      <FooterComponent />
    </div>
  );
};

export default OurServicesLayout;
