
import Navbar from "@/Components/LandingPage/Navbar";
import styles from "./page.module.css";
import Carousel from "@/Components/LandingPage/Carousel";
import Personalcare from "@/Components/LandingPage/Personalcare";
import Booking from "@/Components/LandingPage/Booking";
import Feedback from "@/Components/LandingPage/Feedback";
import Award from "@/Components/LandingPage/Award";
import Testimonial from "@/Components/LandingPage/Testimonial";
import Footer from "@/Components/LandingPage/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Personalcare/>
    <Booking/>
    <Feedback/>
    <Award/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
