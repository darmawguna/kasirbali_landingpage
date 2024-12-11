const Slide2 = () => {
    return (
        <div
            className="flex flex-col justify-center items-start h-screen w-full px-4 md:px-16"
            style={{
                backgroundImage: `url('/bg/bg-kasirbali2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-white">
                <h1 className="text-xl md:text-3xl lg:text-5xl mt-24 font-bold">
                    Tingkatkan efisiensi dan kelola bisnis <br /> Anda dengan lebih mudah bersama <br /> Kasir Bali!
                </h1>
                <p className="mt-4 md:mt-8 text-sm md:text-lg">
                    Kasir Bali, Anda mendapatkan kemudahan maksimal dalam mengelola transaksi, inventaris, hingga laporan penjualan. <br /> Tersedia versi gratis.
                </p>
            </div>
        </div>
    );
};

export default Slide2;
