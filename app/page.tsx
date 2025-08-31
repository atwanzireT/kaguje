import HomeSection from "@/components/home/home";
import PhoneAccessoriesSection from "@/components/phones"
import WebDevelopmentSection from "@/components/web-dev";
import AppDevelopmentSection from "@/components/app-dev";
import RepairServicesSection from "@/components/repair";

export default function Home() {
  return (
    <div>
       <HomeSection />
       <PhoneAccessoriesSection/>
       <RepairServicesSection />
       <WebDevelopmentSection />
       <AppDevelopmentSection />
    </div>
  );
}
