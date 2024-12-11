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
            <div className="p-10">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Kembangkan bisnis <br /> anda bersama kami
                </h1>
                <p className="text-lg text-white mb-8">
                    Kami membantu bisnis Anda mencapai potensi maksimalnya dari kanal online hingga offline.
                </p>
                <div className="flex gap-4">
                    <button className="py-2 px-4 bg-blue-500 text-white rounded-md">Jadwalkan Demo</button>
                    <button className="py-2 px-4 bg-transparent border border-white text-white rounded-md">WhatsApp Kami Sekarang!</button>
                </div>
            </div>
        </div>
    );
}

export default Slide3;
