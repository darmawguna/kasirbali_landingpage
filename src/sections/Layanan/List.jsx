


const WhyList = () => {
    const features = [
        {
            id: '01',
            image: '/icons/cog.svg',
            title: 'Manajemen Produk, Diskon, dan Transaksi',
            description: 'Kelola produk, penerapan diskon, dan pencatatan transaksi dengan sistem yang terstruktur dan intuitif.',
        },
        {
            id: '02',
            image: '/icons/cloud.svg',
            title: 'Laporan Komprehensif', description: "Pantau performa bisnis Anda melalui laporan transaksi harian, mingguan, hingga bulanan yang disajikan secara rinci."
        },
        {
            id: '03',
            image: '/icons/signal.svg',
            title: 'Fitur Offline', description: "Beroperasi tanpa internet dengan aplikasi mobile yang menyimpan data transaksi secara lokal."
        },
        {
            id: '04',
            image: '/icons/market.svg',
            title: 'Layanan Online Multi-Perangkat', description: "Akses aplikasi melalui perangkat mobile maupun web, dengan sinkronisasi data yang mulus antar perangkat."
        },
        {
            id: '05',
            image: '/icons/free.svg',
            title: 'Gratis Tanpa Batasan Transaksi', description: "Nikmati semua fitur aplikasi tanpa batasan jumlah transaksi, mendukung UMKM untuk berkembang tanpa tambahan biaya."
        },
    ];

    return (
        <div className="max-w-full mx-auto mt-10 space-y-4 items-center ">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`flex items-center p-4 rounded-lg  `}
                >
                    <div className="flex items-center justify-center text-white w-12 h-12 bg-blue-800 rounded-full">
                        <img className="w-8 h-8" src={feature.image} alt="" />
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
    );
};

export default WhyList;
