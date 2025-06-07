import heroImg from '../assets/images/png/hero-img.png'
import React from "react";
const HustlinHrdoos = () => {
    return (
        <div className="max-w-[1920px] mx-auto overflow-hidden ">
            <div className="px-4">
                <h1 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }} className="text-center font-modernofb  font-normal leading-[100%] text-[40px] sm:text-6xl md:text-[80px] lg:text-[120px] !xl:text-[157px] pt-4 sm:pt-6 md:pt-8 ">
                    THE HUSTLIN’ HARDOS.</h1></div>
            <img
                src={heroImg}
                alt="hero image"
                className="w-full border-t-2 border-b-2 border-black object-cover pointer-events-none lg:my-4"
            />
        </div>
    );
};

export default HustlinHrdoos;
