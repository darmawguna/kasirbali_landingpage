import FeatureList from "./FeatureList"

const FiturSection = () => {
    return (
        <>
            <div id="product" className="m-10 pt-56">
                <div className="flex flex-row row-span-2 gap-16 ">
                    <div className="basis-1/2">
                        <h1 className="text-4xl font-bold">Lakukan proses pemesanan  <br />
                            dengan mudah dengan KasirBali</h1>
                        <FeatureList />
                    </div>
                    <div className="basis-1/2">
                        <p className="text-sm text-gray-600 items-center mt-12">Temukan kekuatan Aplikasi POS canggih kami, KasirBali
                            Aplikasi POS yang membuat proses pemesanan dengan mudah dan efisien untuk
                            usaha Anda.
                        </p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default FiturSection
