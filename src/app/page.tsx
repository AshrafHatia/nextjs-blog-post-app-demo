import Image from "next/image";
import HeroSection from "@/components/hero";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
      <main>
      <HeroSection/>
      <Carousel/>
      </main>
  );
}