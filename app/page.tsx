import Testimonials from "@/components/Testimonials";
import { Hero, Services, About, Work, Contact } from "./_components";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <BackToTop />
    </>
  );
}
