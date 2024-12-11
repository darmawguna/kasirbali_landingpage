import Navigation from "./components/Navigation";
import 'swiper/css';
import HeroSection from "./sections/Hero/HeroSection";
import FiturSection from "./sections/Produk/FiturSection";
import Layanan from "./sections/Layanan/Layanan";
import TentangKami from "./sections/Tentang_Kami/TentangKami";
import Footer from "./components/Footer";
import { ScreenSizeProvider } from "./context/ScreenContext";


function App() {
  return (
    <ScreenSizeProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <FiturSection />
        <Layanan />
        <TentangKami />
        <Footer />
      </div>
    </ScreenSizeProvider>
  );
}

export default App;
