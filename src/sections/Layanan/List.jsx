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
            title: 'Laporan Komprehensif',
            description: "Pantau performa bisnis Anda melalui laporan transaksi harian, mingguan, hingga bulanan yang disajikan secara rinci.",
        },
        {
            id: '03',
            image: '/icons/signal.svg',
            title: 'Fitur Offline',
            description: "Beroperasi tanpa internet dengan aplikasi mobile yang menyimpan data transaksi secara lokal.",
        },
        {
            id: '04',
            image: '/icons/market.svg',
            title: 'Layanan Online Multi-Perangkat',
            description: "Akses aplikasi melalui perangkat mobile maupun web, dengan sinkronisasi data yang mulus antar perangkat.",
        },
        {
            id: '05',
            image: '/icons/free.svg',
            title: 'Gratis Tanpa Batasan Transaksi',
            description: "Nikmati semua fitur aplikasi tanpa batasan jumlah transaksi, mendukung UMKM untuk berkembang tanpa tambahan biaya.",
        },
    ];

    return (
        <div className="space-y-8">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full">
                        <img className="w-6 h-6" src={feature.image} alt={feature.title} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhyList;
