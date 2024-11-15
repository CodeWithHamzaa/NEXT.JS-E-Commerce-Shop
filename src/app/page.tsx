import Features from "./components/Features";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import WeeklySection from "./components/WeeklySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <NewArrival />
      <WeeklySection />
    </main>
  );
}
