import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"; 
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer.jsx"


export default function Home() {
  return (
  <main className="flex min-h-screen flex-col mx-auto px-3 py-4">
   <Navbar/>
   <div className="container mx-auto xl:px-9 px-4 py-4 mt-3">
   <HeroSection/>
   <AboutSection/>
   <ProjectsSection/>
   <EmailSection/>
   <Footer/>

    </div>
  </main>
  );
}
