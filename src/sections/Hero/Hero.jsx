import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

const Hero = () => {
    const slides = [<Slide3 key="slide3" />, <Slide1 key="slide1" />, <Slide2 key="slide2" />];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-screen no-horizontal-scrollbar">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    {slides[currentSlide]}
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-6 md:px-8">
                <div className="flex justify-between w-full max-w-md mx-auto">
                    <button
                        onClick={handlePrev}
                        className="text-white text-sm md:text-xl w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex justify-center items-center shadow-lg"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-white text-sm md:text-xl w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex justify-center items-center shadow-lg"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${ index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
