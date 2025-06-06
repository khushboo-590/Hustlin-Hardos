import React from 'react';
import manImg from '../assets/images/png/man-img.png';
import Discripition from './common/Discripition';

const BreakingNews = () => {
    return (
        <section className="bg-[#F6F0E2] ">
            <div className="max-w-[1140px] px-4 mx-auto mb-6 sm:mb-16">
                <h2 className="font-normal leading-[140%] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                    “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"</h2></div>
            <div className="border-b border-black w-full"></div>
            <div className="max-w-[1140px] mx-auto px-4 lg:border-l-2 border-black">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full lg:w-1/2 px-3 py-5 lg:py-[86px]">
                        <Discripition content="March 1, 2022 by Editor Hardo" myClass="pb-4 lg:pb-2" />
                        <Discripition content="Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/finance world, hustler culture and web3 aesthetics. Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories - all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Hustlin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities."
                            myClass="lg:max-w-[389px] leading-[150%] pb-4 lg:pb-2 text-lg lg:text-base md:text-sm"/>
                        <a href="/"
                            className="text-base text-black hover:underline transition-all duration-300">Read More...</a></div>
                    <div className="w-full lg:w-1/2 px-3">
                        <img
                            src={manImg}
                            alt="Man "
                            className="w-full pointer-events-none  pb-5 lg:pb-0"/></div>
                </div>
            </div>
            <div className="border-t border-black w-full"></div>
        </section>
    );
};

export default BreakingNews;
