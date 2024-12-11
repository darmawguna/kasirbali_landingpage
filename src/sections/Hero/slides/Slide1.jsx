const Slide1 = () => {
    return (
        <div
            className="flex flex-col justify-center items-center h-screen w-full text-center px-4 md:px-20"
            style={{
                backgroundImage: `url('/bg/bg-kasirbali3.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 className="text-2xl md:text-4xl lg:text-6xl mt-24 font-bold text-white">
                Kelola Bisnis Anda dengan KasirBali <br /> Solusi Kasir Tanpa Ribet
            </h1>
            <p className="mt-4 md:mt-8 text-sm md:text-lg text-gray-100">
                Tingkatkan efisiensi dan kelola bisnis Anda dengan <br /> lebih mudah bersama Kasir Bali!
            </p>
            <div className="flex gap-4 mt-6">
                <button className="py-2 px-4 text-sm md:text-base text-white bg-blue-600 rounded-md font-semibold">
                    Get Started
                </button>
                <button className="py-2 px-4 text-sm md:text-base text-white bg-blue-600 rounded-md font-semibold">
                    Watch Video
                </button>
            </div>
        </div>
    );
};

export default Slide1;
