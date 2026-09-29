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
    <>
      <Hero />
      <Marquee />
      <Approach />
      <HowWeWork />
      <Included />
      <Team />
      <Package />
      <Cta />
    </>
  );
}
