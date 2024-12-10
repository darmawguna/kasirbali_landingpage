// Hero2.js

import ParallaxImage from "../../components/ParallaxImage";

const Hero2 = () => {
    return (
        <div className="  flex flex-col items-center pt-28 justify-center px-7 h-full">
            {/* Image Tablet */}
            <div className="relative w-11/12 max-w-4xl my-10">
                <ParallaxImage />
            </div>
        </div>
    );
};

export default Hero2;
