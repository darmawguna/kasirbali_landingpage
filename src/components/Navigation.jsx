import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
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
      <header className="flex items-center justify-between p-4 md:p-6 top-0 z-10 bg-white fixed w-full">
        <div className="flex-none">
          <img src="/logo.jpg" className="w-16 h-16" alt="" />
        </div>
        <div className="flex gap-28 grow justify-center items-center">
          <a href="#home" className={`${ activeSection === 'home' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Home</a>
          <a href="#product" className={`${ activeSection === 'product' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Product</a>
          <a href="#layanan" className={`${ activeSection === 'layanan' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Layanan</a>
          <a href="#tentangkami" className={`${ activeSection === 'tentangkami' ? 'text-blue-800 font-bold border-b-2 border-blue-800' : '' }`}>Tentang Kami</a>
        </div>
        <div className="flex-none text-white bg-blue-800 py-2 px-6 rounded-md">Try to free</div>
      </header>
    </>
  );
}

export default Navigation;
