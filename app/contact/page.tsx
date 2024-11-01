import ContactPage from "@/app/components/contact";
import Image from "next/image";
import Bg from "@/app/images/bgimg.jpg";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col justify-end">
      <Image 
        src={Bg}
        alt="Contact page background"
        fill
        className="object-cover object-bottom"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
      <div className="relative z-10">
        <ContactPage />
      </div>
    </div>
  );
}
