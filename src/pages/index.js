import Benefits from "@/components/organism/Benefits";
import Cards from "@/components/organism/Cards";
import Conditions from "@/components/organism/Conditions";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Nav from "@/components/organism/Nav";
import Questions from "@/components/organism/Questions";
import Image from "next/image";


export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <Cards />
      <Benefits />
      <Conditions />
      <Questions />
      {/* <Footer /> */}
    </>
  );
}
