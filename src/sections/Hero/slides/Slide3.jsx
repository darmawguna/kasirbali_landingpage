const Slide3 = () => {
    return (
        <div
            className="flex flex-col justify-center items-start h-screen w-full"
            style={{
                backgroundImage: `url('/bg/bg-kasirbali1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-row items-center justify-center">
                <div className="p-10 basis-2/3 flex flex-col">
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Kasir Bali <br /> Solusi Cerdas untuk Semua Jenis Bisnis
                        </h1>
                        <p className="text-sm text-white mb-8">
                            Dirancang untuk usaha kecil hingga besar, <span className="text-lg font-bold">Kasir Bali</span> hadir dengan antarmuka yang mudah digunakan dan fitur yang membantu Anda memantau penjualan, stok, dan laporan keuangan. Tingkatkan efisiensi bisnis Anda tanpa biaya tinggi. Pilih paket yang sesuai dengan kebutuhan Anda, dan nikmati pengelolaan kasir yang lebih praktis!
                        </p>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <button className="py-2 px-4 bg-blue-500 text-white rounded-md">Jadwalkan Demo</button>
                        <button className="py-2 px-4 bg-transparent border border-white text-white rounded-md">WhatsApp Kami Sekarang!</button>
                    </div>
                </div>
                <div className="basis-1/3"></div>
            </div>

        </div>
    );
}

export default Slide3;
