

const PricingCard = ({ title, price, features, buttonText, highlight }) => {
    return (
        <div className={`p-6 rounded-lg shadow-lg ${ highlight ? 'bg-blue-100' : 'bg-white' }`}>
            <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${ highlight ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800' }`}>
                    {title}
                </span>
            </div>
            <div className="mb-4">
                <p className="text-4xl font-bold">RP{price}<span className="text-lg">/month</span></p>
            </div>
            <ul className="mb-6 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className="mr-2 text-green-500">✔</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full py-2 font-semibold rounded-lg ${ highlight ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800' }`}>
                {buttonText}
            </button>
        </div>
    );
};

const PricingSection = () => {
    const plans = [
        {
            title: 'Free Member',
            price: '0',
            features: [
                'Manajemen Produk',
                'Manajemen Diskon',
                'Kasir',
                'Laporan Transaksi',
                'Bluetooth Printout Bukti Transaksi',
            ],
            buttonText: 'Get started',
        },
        {
            title: 'Subscription Member',
            price: '25.000',
            features: [
                'Manajemen Produk',
                'Manajemen Diskon',
                'Kasir',
                'Laporan Transaksi',
                'Bluetooth Printout Bukti Transaksi',
                'Multi Devices',
                'Sync Mode',
                'Web Online Fitur'
            ],
            buttonText: 'Get started',
            highlight: true,
        },

    ];

    return (
        <div className="flex justify-center space-x-6">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
        </div>
    );
};

export default PricingSection;
