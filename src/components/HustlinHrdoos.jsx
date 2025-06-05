import React from 'react';
import heroImg from '../assets/images/png/hero-img.png'

const HustlinHrdoos = () => {
    return (
        <div className="flex items-center justify-center flex-col bg-[#F6F0E2]">
            <div className="max-w-[1140px] w-full">
                <h1 className="xl:text-large md:text-8xl sm:text-5xl text-4xl font-moderfb font-bold whitespace-nowrap text-center text-black pt-[25px] leading-[100%]">
                    THE HUSTLIN’ HARDOS.
                </h1>

            </div>
            <div className="border w-full"></div>
            <img
                className="w-full pointer-events-none max-h-[476px] object-cover"
                src={heroImg}
                alt="hero image" />
            <div className="border w-full lg:mb-[67px] md:mb-[30px] mb-[10px]"></div>
        </div>
    );
};

export default HustlinHrdoos;
