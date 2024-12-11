import { useState, useEffect } from 'react';
import { useScreenSize } from '../context/ScreenContext';


const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 70) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex items-center justify-between md:px-6 md:py-4 top-0 z-10 bg-white fixed w-full">
        <div className="flex-none">
          <img src="/logo.jpg" className="w-16 h-16" alt="" />
        </div>

        {screenSize > 768 ? (
          <div className="flex gap-28 grow justify-center items-center">
            <a href="#home" className={`${ activeSection === 'home' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Home</a>
            <a href="#product" className={`${ activeSection === 'product' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Product</a>
            <a href="#layanan" className={`${ activeSection === 'layanan' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Layanan</a>
            <a href="#tentang-kami" className={`${ activeSection === 'tentang-kami' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Tentang Kami</a>
          </div>
        ) : (
          <div className="flex-none relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-20 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Menu</h2>
                  <button onClick={() => setIsMenuOpen(false)} className="text-blue-800 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  <a href="#home" className={`block ${ activeSection === 'home' ? 'text-blue-800 font-bold' : 'text-gray-600' }`} onClick={() => setIsMenuOpen(false)}>Home</a>
                  <a href="#product" className={`block ${ activeSection === 'product' ? 'text-blue-800 font-bold' : 'text-gray-600' }`} onClick={() => setIsMenuOpen(false)}>Product</a>
                  <a href="#layanan" className={`block ${ activeSection === 'layanan' ? 'text-blue-800 font-bold' : 'text-gray-600' }`} onClick={() => setIsMenuOpen(false)}>Layanan</a>
                  <a href="#tentang-kami" className={`block ${ activeSection === 'tentang-kami' ? 'text-blue-800 font-bold' : 'text-gray-600' }`} onClick={() => setIsMenuOpen(false)}>Tentang Kami</a>
                </nav>
              </div>
            )}
          </div>
        )}

        <div className="flex-none text-white bg-blue-800 py-2 px-6 rounded-md hidden md:block">Coba Gratis</div>
      </header>
    </>
  );
}

export default Navigation;
