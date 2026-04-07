import FloatingDock from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import GitHubActivity from "@/components/GitHubActivity";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";

export default function Home() {
  return (
    <>
      <FloatingDock />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <GitHubActivity />
        <Blogs />
      </main>
      <Footer />
      <ContactWidget />
    </>
  );
}