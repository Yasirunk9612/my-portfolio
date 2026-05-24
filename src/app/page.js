import BackgroundWrapper from "@/components/BackgroundWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import FeaturedWork from "@/components/FeaturedWork";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <BackgroundWrapper>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Skills />
        <FeaturedWork />
        <Projects />
        <Experience />
        <Education />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </BackgroundWrapper>
  );
}
