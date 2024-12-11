import { useState } from "react";
import { motion } from "framer-motion";

const FiturSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            id: '01',
            title: 'Manajemen Produk, Diskon, dan Transaksi',
            description: 'Kelola produk, penerapan diskon, dan pencatatan transaksi dengan sistem yang terstruktur dan intuitif.',
            image: "/mockup/management.png"
        },
        {
            id: '02',
            title: 'Laporan Komprehensif',
            description: "Pantau performa bisnis Anda melalui laporan transaksi harian, mingguan, hingga bulanan yang disajikan secara rinci.",
            image: "/mockup/laporan.png"
        },
        {
            id: '03',
            title: 'Fitur Offline',
            description: "Beroperasi tanpa internet dengan aplikasi mobile yang menyimpan data transaksi secara lokal.",
            image: "/mockup/offline.png"
        },
        {
            id: '04',
            title: 'Layanan Online Multi-Perangkat',
            description: "Akses aplikasi melalui perangkat mobile maupun web, dengan sinkronisasi data yang mulus antar perangkat.",
            image: "/mockup/layalanonline.png"
        },
        {
            id: '05',
            title: 'Gratis Tanpa Batasan Transaksi',
            description: "Nikmati semua fitur aplikasi tanpa batasan jumlah transaksi, mendukung UMKM untuk berkembang tanpa tambahan biaya.",
            image: "/mockup/gratis.png"
        },
    ];

    return (
        <section id="product" className="mx-4 sm:mx-8 lg:mx-10 pt-24 sm:pt-40 my-32">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Bagian Kiri: Fitur List */}
                <div className="md:basis-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
                        Lakukan proses pemesanan <br />
                        dengan mudah dengan KasirBali
                    </h1>
                    <div className="mt-10 space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center p-4 rounded-lg cursor-pointer ${ activeIndex === index ? 'bg-blue-100' : 'bg-white'
                                    }`}
                            >
                                <div className="flex items-center justify-center aspect-square text-white w-10 h-10 sm:w-12 sm:h-12 bg-blue-800 rounded-full">
                                    <span className="text-sm sm:text-base font-bold">{feature.id}</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm sm:text-lg font-semibold">{feature.title}</h3>
                                    {feature.description && (
                                        <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bagian Kanan: Gambar */}
                <div className="md:basis-1/2 flex flex-col items-center">
                    <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left mt-4 md:mt-12">
                        Temukan kekuatan Aplikasi POS canggih kami, KasirBali. Aplikasi POS yang membuat proses pemesanan lebih mudah dan efisien untuk usaha Anda.
                    </p>
                    <motion.img
                        key={features[activeIndex].id}
                        src={features[activeIndex].image}
                        alt={features[activeIndex].title}
                        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default FiturSection;
