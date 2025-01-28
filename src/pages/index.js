import Benefits from "@/components/organism/Benefits";
import Cards from "@/components/organism/Cards";
import Conditions from "@/components/organism/Conditions";
import Hero from "@/components/organism/Hero";
import Questions from "@/components/organism/Questions";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>HOME | Merdeka Belajar - Kampus Merdeka</title>
      </Head>
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
