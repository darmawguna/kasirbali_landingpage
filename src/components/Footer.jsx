const Footer = () => {
    return (
        <section className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between px-4">
                <div className="mb-6 md:mb-0 text-center">
                    <img src="/logo.jpg" alt="Kasir Bali Logo" className="w-24 h-24 mx-auto" />
                    <p className="mt-2 text-sm">Kasir Bali © 2023. Semua hak dilindungi.</p>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-4">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#product" className="hover:underline">Product</a>
                    <a href="#layanan" className="hover:underline">Layanan</a>
                    <a href="#tentang-kami" className="hover:underline">Tentang Kami</a>
                </div>
                <div className="flex gap-4 mt-6 md:mt-0 justify-center">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
