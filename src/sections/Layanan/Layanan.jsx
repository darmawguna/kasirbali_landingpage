import PricingSection from "./CardPricing";
import WhyList from "./List";

const Layanan = () => {
    return (
        <>
            <section id="layanan" className="my-72 px-5 lg:px-16">
                {/* Header Section */}
                <div className="flex flex-col justify-center items-center text-center gap-6">
                    <h1 className="text-3xl lg:text-4xl font-bold">Layanan Kami</h1>
                    <p className="text-md lg:text-lg text-gray-600">
                        Temukan kekuatan Aplikasi POS canggih kami, KasirBali. Aplikasi POS yang membuat proses pemesanan mudah dan efisien untuk usaha Anda.
                    </p>
                </div>

                {/* Pricing Section */}
                <div className="mt-16">
                    <PricingSection />
                </div>

                {/* Why Choose Us Section */}
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-16 mt-32">
                    <div className="w-full lg:basis-1/2 flex justify-center rounded-md">
                        <img
                            src="/mockup/solusi.png"
                            alt="Kenapa Memilih KasirBali"
                            className="w-full max-w-md lg:max-w-lg rounded-3xl"
                        />
                    </div>

                    <div className="w-full lg:basis-1/2 text-center lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                            Kenapa Memilih Kasir Bali?
                        </h1>
                        <WhyList />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Layanan;
