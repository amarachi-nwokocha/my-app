import Navbar from "@/app/components/Landing/Navbar";
import Hero from "@/app/components/Landing/Hero";
import About from "@/app/components/Landing/About";
import AppointmentSection from "@/app/components/Landing/Appointment";
import GallerySection from "@/app/components/Landing/Gallery";
import VisionarySection from "@/app/components/Landing/Visionary";
import StaffSection from "@/app/components/Landing/Staff";
import Footer from "@/app/components/Landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-5">
        <Hero />
        <About />
        <AppointmentSection />
        <GallerySection />
        <StaffSection />
        <VisionarySection />
      </main>
      <Footer />
    </>
  );
}
