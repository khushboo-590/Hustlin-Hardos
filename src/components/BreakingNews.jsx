import React from 'react';
import manImg from '../assets/images/png/man-img.png';
import Description from './common/Description';

const BreakingNews = () => {
    return (
        <div id='about' className="">
            <div className="max-w-[1140px] px-4 mx-auto mb-4 sm:mb-16 lg:pt-[67px] md:pt-[40px] pt-[10px]">
                <h2 className="font-normal leading-[140%]  text-shadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"</h2></div>
            <div className="border-b-2 border-black w-full"></div>
            <div className="max-w-[1140px] mx-auto px-4 lg:border-l-2 border-black">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full lg:w-1/2 px-3 py-5 lg:py-[86px]">
                        <Description content="March 1, 2022 by Editor Hardo" myClass="pb-4 lg:pb-2" />
                        <Description content="Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/finance world, hustler culture and web3 aesthetics. Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories - all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Hustlin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities."
                            myClass="lg:max-w-[475px] leading-[150%] pb-4 lg:pb-2 text-lg  md:text-sm" />
                        <a href="/"
                            className="text-base text-black hover:underline transition-all duration-300">Read More...</a></div>
                    <div className="w-full lg:w-1/2 px-3">
                        <img
                            src={manImg}
                            alt="Man "
                            className="w-full pointer-events-none  pb-5 lg:pb-0 lg:border-x-2 border-black" /></div></div>
            </div>
            <div className="border-t-2 border-black w-full"></div>
        </div>
    );
};

export default BreakingNews;


