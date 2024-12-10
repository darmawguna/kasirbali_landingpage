import { useState } from "react";
import { motion } from "framer-motion";

const FiturSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            id: '01',
            title: 'Manajemen Produk, Diskon, dan Transaksi',
            description: 'Kelola produk, penerapan diskon, dan pencatatan transaksi dengan sistem yang terstruktur dan intuitif.',
            image: "/public/ManajemenProduk.png"
        },
        {
            id: '02', title: 'Laporan Komprehensif', description: "Pantau performa bisnis Anda melalui laporan transaksi harian, mingguan, hingga bulanan yang disajikan secara rinci.",
            image: "/public/Laporan.png"
        },
        {
            id: '03', title: 'Fitur Offline', description: "Beroperasi tanpa internet dengan aplikasi mobile yang menyimpan data transaksi secara lokal.",
            image: "/public/Offline.png"
        },
        {
            id: '04', title: 'Layanan Online Multi-Perangkat', description: "Akses aplikasi melalui perangkat mobile maupun web, dengan sinkronisasi data yang mulus antar perangkat.",
            image: "/public/LayananOnline.png"
        },
        {
            id: '05', title: 'Gratis Tanpa Batasan Transaksi', description: "Nikmati semua fitur aplikasi tanpa batasan jumlah transaksi, mendukung UMKM untuk berkembang tanpa tambahan biaya.",
            image: "/public/tablethome.png"
        },
    ];

    return (
        <>
            <div id="product" className="m-10 pt-56">
                <div className="flex flex-row row-span-2 gap-16">
                    <div className="basis-1/2">
                        <h1 className="text-4xl font-bold">Lakukan proses pemesanan <br />
                            dengan mudah dengan KasirBali
                        </h1>
                        <div className="max-w-full mx-auto mt-10 space-y-4 items-center">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex items-center p-4 rounded-lg cursor-pointer ${ activeIndex === index ? 'bg-blue-100' : 'bg-white' }`}
                                >
                                    <div className="flex items-center justify-center text-white w-12 h-12 bg-blue-800 rounded-full">
                                        <span className="text-lg font-bold">{feature.id}</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                                        {feature.description && (
                                            <p className="text-xs text-gray-600">{feature.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-sm text-gray-600 items-center mt-12">Temukan kekuatan Aplikasi POS canggih kami, KasirBali
                            Aplikasi POS yang membuat proses pemesanan dengan mudah dan efisien untuk
                            usaha Anda.
                        </p>
                        <div className="flex justify-center mt-8">
                            <motion.img
                                key={features[activeIndex].id}
                                src={features[activeIndex].image}
                                alt={features[activeIndex].title}
                                className="w-full h-auto max-w-xs"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FiturSection;
