import NavbarComponent from "@/components/global/navbar";
import GetStartedComponent from "./_components/get-started";
import FooterComponent from "@/components/global/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="h-fit lg:min-h-screen w-full flex flex-col justify-center items-center bg-home-get-started">
        <NavbarComponent />
        <GetStartedComponent />
      </div>
      <FooterComponent />
    </div>
  );
}
