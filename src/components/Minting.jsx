import React, { useState } from 'react';
import manImg from '../assets/images/png/man-img.png'
import Description from './common/Description';
import Heading from './common/Heading';

const Minting = () => {
    const [count, setCount] = useState(100);
    const handleIncrease = () => {
        setCount(prev => prev + 1);
    };
    const handleDecrease = () => {
        if (count > 0) setCount(prev => prev - 1);
    };
    return (
        <div id="minting" >
            <div className="pt-[89px] max-xl:pt-[60px] max-lg:pt-10">
                <div className="max-w-[1140px]  mx-auto w-full flex items-center justify-between pb-[90px] max-xl:pb-[60px] max-lg:pb-10">
                    <Heading title="minting" myClass="uppercase " /></div>
                <div className="border-y-2 border-solid max-xl:px-4 border-black">
                    <div className="max-w-[1140px] max-lg:border-none mx-auto border-x-2 border-solid border-black container">
                        <div className="w-full flex justify-center max-lg:flex-col max-lg:py-5 max-lg:gap-3 items-center">
                            <div className="max-w-[570px] max-lg:max-w-[unset] px-[25px] max-lg:px-0 w-full">
                                <div className="max-w-[438px] max-lg:max-w-[unset]">
                                    <Description myClass="leading-[150%] lg:max-w-[438px] pb-[15px] max-xl:pb-3 max-lg:pb-2 max-md:text-sm"
                                        content="Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3." />
                                    <div className="min-h-[49px] border-2 mt-[15px] border-solid flex border-black max-sm:max-w-[170px] max-w-[238px]  ">
                                        <button
                                            onClick={handleDecrease}
                                            className="text-4xl cursor-pointer max-md:text-3xl px-6 max-sm:px-3 max-sm:text-2xl font-semibold font-noto">-</button>
                                        <p className="min-w-[109px] max-sm:min-w-24 border-x-2 border-solid border-black flex justify-center items-center text-4xl max-md:text-3xl px-6 max-sm:px-4 max-sm:text-2xl font-semibold font-noto">{count}</p>
                                        <button
                                            onClick={handleIncrease}
                                            className="text-4xl cursor-pointer max-md:text-3xl px-6 max-sm:px-3 max-sm:text-2xl font-semibold font-noto">+</button></div>
                                </div>
                                <button className="py-[9.5px] px-4 max-sm:py-2 text-sm uppercase font-noto max-sm:px-3 box-border transition hover:text-white duration-300 hover my-[35.5px] cursor-pointer font-semibold border-2 bg-yellow-400 text-black  hover:bg-black">Mint NOW</button>
                                <p className="text-lg font-semibold leading-[100%] text-[#00A106] font-noto">Time Left</p>
                                <p className="text-[#FF0000] text-4xl leading-[100%] font-noto">40:15:12:10</p>
                            </div>
                            <img
                                src={manImg}
                                alt="man-img"
                                className="max-w-[570px] pointer-events-none max-lg:border-none max-lg:max-w-[unset] max-lg:w-full border-l-2 border-solid border-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Minting;
