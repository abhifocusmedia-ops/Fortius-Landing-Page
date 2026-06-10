import Navbar from "./components/Navbar/navbar.jsx";
import Hero from "./components/Hero/hero.jsx";
import Stats from "./components/Stats/stats.jsx"
import Programs from "./components/Programs/program.jsx";
import WhyChoose from "./components/Whychoose/whychoose.jsx";
import Gallery from "./components/Gallery/gallery.jsx";
import Testimonials from "./components/Testimonials/testimonials.jsx";
import CTA from "./components/CTA/cta.jsx";
import Footer from "./components/Footer/footer.jsx";
import { useState } from "react";
import RegisterModal from "./components/RegisterModel/registermodal.jsx";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <Hero setShowModal={setShowModal}/>
      <Stats />
      <Programs/>
      <WhyChoose/>
      <Gallery/>
      <Testimonials />
      <CTA setShowModal={setShowModal} />
      <Footer />
      <RegisterModal isOpen={showModal} onClose={() => setShowModal(false)}
/>
    </>
  );
}

export default App;