import Navbar from "../../components/Navbar/navbar";
import Hero from '../../components/Hero/Hero';
import About from "../../components/About/About";
import WhatsHot from "../../components/WhatsHot/WhatsHot";
import Expansion from "../../components/Expansion/Expansion";
import CassetteBox from "../../components/Cassette/CassetteBox";
import Package from "../../components/Package/Package";
import Testimonials from "../../components/Testimonials/Testimonials";
import Download from "../../components/Download/Download";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatsHot />
      <Expansion />
      <CassetteBox />
      <Package />
      <Testimonials />
      <Download />
      <Footer />
    </>
  )
}

export default Home;