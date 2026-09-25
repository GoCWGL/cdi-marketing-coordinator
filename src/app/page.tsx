import TopStrip from "@/components/layout/TopStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Approach from "@/components/sections/Approach";
import HowWeWork from "@/components/sections/HowWeWork";
import Included from "@/components/sections/Included";
import Team from "@/components/sections/Team";
import Package from "@/components/sections/Package";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <div className="page" id="top">
      <TopStrip />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Approach />
        <HowWeWork />
        <Included />
        <Team />
        <Package />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
