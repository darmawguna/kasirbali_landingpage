import Navigation from "./components/Navigation";

// Import Swiper styles
import 'swiper/css';
import HeroSection from "./sections/Hero/HeroSection";
import FiturSection from "./sections/Produk/FiturSection";
import Layanan from "./sections/Layanan/Layanan";
import TentangKami from "./sections/Tentang_Kami/TentangKami";
import Footer from "./components/Footer";


function App() {
  // const swiper = new Swiper(...)
  return (
    <div className="min-h-screen ">

      <Navigation />

      <HeroSection />

      <FiturSection />

      <Layanan />

      <TentangKami />

      <Footer />
    </div>
  );
}

export default App;
