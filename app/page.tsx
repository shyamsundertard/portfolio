import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Grid from "../components/Grid";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden select-none">
      <ThemeToggle />
      <div className="w-full">
        <FloatingNav
          navItems={[
            { name: 'Home', link: '/', icon: <FaHome /> },
            { name: 'About', link: '#about', icon: <FaUser /> },
            { name: 'Skills', link: '#skills', icon: <FaCode /> },
            { name: 'Projects', link: '#projects', icon: <FaProjectDiagram /> },
            { name: 'Experience', link: '#experience', icon: <FaBriefcase /> },
            { name: 'Contact', link: '#contact', icon: <FaEnvelope /> },
          ]}
        />
        <Hero />
      </div>
      <div className="max-w-7xl w-full mx-auto sm:px-10 px-5 relative z-20">
        <Grid />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
