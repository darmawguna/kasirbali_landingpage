import PricingSection from "./CardPricing"
import WhyList from "./List"


const Layanan = () => {
    return (
        <>
            <div className="my-52">
                <div className="flex flex-col justify-center items-center px-7 gap-10">
                    <h1 className="text-4xl font-bold">Layanan Kami</h1>
                    <p className="text-lg text-gray-600">Temukan kekuatan Aplikasi POS canggih kami, KasirBali
                        Aplikasi POS yang membuat proses pemesanan dengan mudah dan efisien untuk
                        usaha Anda.
                    </p>
                </div>
                <div className="mt-20">
                    <PricingSection />
                </div>

                <div className="flex flex-row justify-center items-center px-7 gap-10 mt-32">
                    <div className=" basis-1/2">

                    </div>

                    <div className="basis-1/2">
                        <h1 className="text-4xl font-bold ">Kenapa Memilih Kasir Bali?</h1>

                        <div className="flex flex-col justify-center items-center gap-16">
                            <WhyList />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Layanan
