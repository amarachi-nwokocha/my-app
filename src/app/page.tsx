import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./About";
import AppointmentSection from "./component/Appointment";
import GallerySection from "./component/Gallery";
import VisionarySection from "./component/Visionary";
import StaffSection from "./component/Staff";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <AppointmentSection />
        <GallerySection />
        <StaffSection />
        <VisionarySection />
        <Footer />
      </main>
    </>
  );
}
