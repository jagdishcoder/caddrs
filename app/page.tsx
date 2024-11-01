
import HeroSection from "./components/herosection";
import KeyBenefits from "./components/keybenefits";
import HowItWorks from "./components/howitworks";
import Servicesoverview from "@/app/components/servicesovr"
// import Testimonials from "./components/testimonial";
import ResourcesBlog from "./components/blog";
import CallToAction from "./components/calltoaction";


export default function Home() {
  return (
    <div >
    <HeroSection />
    <KeyBenefits />
    <HowItWorks />
    <Servicesoverview />
    {/* <Testimonials />  */}
    <ResourcesBlog />
    <CallToAction />
     </div>
  );
}
