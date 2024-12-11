import { useState } from 'react';
import { motion } from 'framer-motion';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

const Hero = () => {
    const slides = [<Slide3 key="slide3" />, <Slide1 key="slide1" />, <Slide2 key="slide2" />, ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-screen no-horizontal-scrollbar">
            <motion.div
                key={currentSlide}
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center flex flex-col justify-center items-center w-full  h-full">
                    {slides[currentSlide]}
                </div>
            </motion.div>
            <div className="absolute bottom-8  left-1/2 transform -translate-x-1/2 w-full px-8">
                <div className="flex flex-row gap-4 justify-between w-full px-28">
                    <button onClick={handlePrev} className="text-white text-3xl w-10 h-10 bg-blue-400 rounded-full flex  justify-center">
                        &larr;
                    </button>
                    <button onClick={handleNext} className="text-white text-3xl w-10 h-10 bg-blue-400 rounded-full flex r justify-center">
                        &rarr;
                    </button>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full ${ index === currentSlide ? 'bg-blue-400' : 'bg-gray-500' }`}></div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
