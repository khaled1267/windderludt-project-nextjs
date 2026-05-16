import Banner from "@/components/Banner";
import CallToAction from "@/components/Callaction";
import WhyChooseUs from "@/components/Choocess";
import Featuredcard from "@/components/Featuredcard";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Tavelsay";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Banner />
      
      <Featuredcard />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer ></Footer>
    </div>
  );
}
