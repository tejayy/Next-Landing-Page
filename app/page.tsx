import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/ui/navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection/>
      <h1 className="text-bold p-6">WELCOME</h1>
    </main>
  );
}
