

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center px-7 text-center">
            <div>
                <h1 className="text-7xl mt-24 font-bold">Kelola Bisnis Anda dengan KasirBali  <br />
                    Solusi Kasir Tanpa Ribet
                </h1>
                <p className="mt-8 text-lg text-gray-600">Aplikasi kasir yang dirancang khusus untuk membantu bisnis UMKM. <br /> Pilih layanan Free untuk kebutuhan lokal atau Pro untuk akses data di mana saja.
                </p>
            </div>
            <div className="flex gap-4 mt-8">
                <button className="py-2 px-4 bg-yellow-400 rounded-md font-semibold">Get Started</button>
                <button className="py-2 px-4 bg-yellow-400 rounded-md font-semibold">Watch Video</button>
            </div>

            
        </div>
    )
}

export default Hero
