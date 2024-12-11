const Slide3 = () => {
    return (
        <div
            className="flex flex-col md:flex-row justify-center items-center h-screen w-full px-4 md:px-16"
            style={{
                backgroundImage: `url('/bg/bg-kasirbali1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col justify-center items-start text-white md:basis-2/3">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                    Kasir Bali <br /> Solusi Cerdas untuk Semua Jenis Bisnis
                </h1>
                <p className="text-sm md:text-lg mb-8">
                    Dirancang untuk usaha kecil hingga besar, <span className="font-bold">Kasir Bali</span> hadir
                    <span className="md:block">dengan antarmuka mudah digunakan dan fitur yang membantu</span>
                    <span className="md:block">Anda memantau penjualan, stok, dan laporan keuangan.</span>
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <button className="w-full md:w-auto py-2 px-4 bg-blue-500 text-white rounded-md">
                        Jadwalkan Demo
                    </button>
                    <button className="w-full md:w-auto py-2 px-4 bg-transparent border border-white text-white rounded-md">
                        WhatsApp Kami Sekarang!
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Slide3;
