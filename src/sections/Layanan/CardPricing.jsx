import { useState } from 'react';

const PricingCard = ({ title, price, features, buttonText, isHovered, nonFeatures }) => {
    return (
        <div className={`p-6 rounded-lg shadow-lg ${ isHovered ? 'bg-blue-100' : 'bg-white' }`}>
            <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${ isHovered ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800' }`}>
                    {title}
                </span>
            </div>
            <div className="mb-4">
                <p className="text-4xl font-bold">
                    RP{price}
                    <span className="text-lg">/month</span>
                </p>
            </div>
            <ul className="mb-6 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className="mr-2 text-green-500">✔</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            {nonFeatures && (
                <ul className="mb-2 space-y-2">
                    {nonFeatures.map((nonFeature, index) => (
                        <li key={index} className="flex items-center">
                            <span className="mr-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                            <span>{nonFeature}</span>
                        </li>
                    ))}
                </ul>
            )}
            <button
                className={`w-full py-2 font-semibold rounded-lg ${ isHovered ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800' }`}
            >
                {buttonText}
            </button>
        </div>
    );
};

const PricingSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
            nonFeatures: ['Multi Devices', 'Sync Mode', 'Web Online Fitur'],
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
                'Web Online Fitur',
            ],
            buttonText: 'Get started',
            highlight: true,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="transform hover:scale-105 transition duration-300 ease-in-out"
                >
                    <PricingCard {...plan} isHovered={hoveredIndex === index} />
                </div>
            ))}
        </div>
    );
};

export default PricingSection;
