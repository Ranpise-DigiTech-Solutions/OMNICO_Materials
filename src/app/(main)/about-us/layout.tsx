import NavbarComponent from "@/components/global/navbar";
import React from "react";
import AboutComponent from "./_components/about";
import FooterComponent from "@/components/global/footer";

type Props = {
  children: React.ReactNode;
};

const AboutUsLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <div className="bg-aboutus-about w-full h-fit flex flex-col items-center justify-center">
        <NavbarComponent />
        <AboutComponent />
      </div>
      {children}
      <FooterComponent />
    </div>
  );
};

export default AboutUsLayout;
