// ParallaxImage.js

import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -200]);

    return (
        <motion.img
            src="/tablet.png" // Pastikan path sesuai dengan struktur proyek Anda
            alt="POS Image"
            className="absolute top-0 left-0 w-full h-auto rounded-3xl shadow-lg object-cover"
            style={{ y }}
        />
    );
};

export default ParallaxImage;
