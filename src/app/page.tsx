import Image from "next/image";

import Navigation  from "./components/Navigation";
import HeroSection from "./components/Herosection";

export default function Home() {
  return (
    <main >
   <Navigation/>
   <HeroSection/>
    </main>
  );
}
