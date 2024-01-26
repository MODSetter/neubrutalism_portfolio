import Aboutme from "@/components/Aboutme";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resconnect from "@/components/Resconnect";
import WorkExp from "@/components/WorkExp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Resconnect />
      <Aboutme />
      <WorkExp />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}
