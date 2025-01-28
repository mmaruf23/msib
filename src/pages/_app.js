import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";
import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={PlusJakartaSans.variable}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
