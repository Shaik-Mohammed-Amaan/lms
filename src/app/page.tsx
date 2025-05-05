import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Testimonials from "@/components/Testimonials";
import TopCourses from "@/components/TopCourses";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Herosection />
      <TopCourses/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </main>
    
  );
}
