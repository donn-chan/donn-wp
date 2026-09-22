import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowICanHelp from "@/components/HowICanHelp";
import StackBar from "@/components/StackBar";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowICanHelp />
        <StackBar />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
