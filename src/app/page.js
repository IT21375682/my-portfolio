import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"; 
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-black mx-auto px-12 py-4">
   <Navbar/>
   <div className="container mx-auto px-9 py-4 mt-24">
   <HeroSection/>
   <AboutSection/>
   <ProjectsSection/>
    </div>
  </main>
  );
}
