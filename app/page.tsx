import HomeSection from "@/components/home/home";
import PhoneAccessoriesSection from "@/components/phones"
import WebDevelopmentSection from "@/components/web-dev";
import AppDevelopmentSection from "@/components/app-dev";

export default function Home() {
  return (
    <div>
       <HomeSection />
       <PhoneAccessoriesSection/>
       <WebDevelopmentSection />
        <AppDevelopmentSection />
    </div>
  );
}
