import Navigation from "./components/Navigation";

// Import Swiper styles
import 'swiper/css';
import HeroSection from "./sections/Hero/HeroSection";
import FiturSection from "./sections/Produk/FiturSection";
import Layanan from "./sections/Layanan/Layanan";


function App() {
  // const swiper = new Swiper(...)
  return (
    <div className="min-h-screen ">
      <Navigation />
      <HeroSection />
      <FiturSection />
      <Layanan />
    </div>
  );
}

export default App;
