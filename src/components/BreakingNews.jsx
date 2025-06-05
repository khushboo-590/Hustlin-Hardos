import React from 'react'
import Heading from './common/Heading'
import manImg from '../assets/images/png/man-img.png'
import Discripition from './common/Discripition'

const BreakingNews = () => {
    return (
        <div className=" bg-[#F6F0E2] lg:pb-[89px] pb-5">
            <div className=" max-w-[1140px] sm:mb-[64px] mb-10 px-4 mx-auto">
                <Heading
                    title='“BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"'
                    myClass="  xl:text-7xl md:text-6xl sm:text-4xl text-2xl leading-[140%]  font-noto font-semibold justify-center items-center " /></div>
            <div className="border w-full"></div>
            <div className=" lg:border-l-[2px] max-w-[1140px] px-3 mx-auto ">
                <div className="flex flex-wrap flex-row -mx-3 items-center">
                    <div className="px-4 lg:w-2/4 mx-auto lg:my-0 my-5 flex justify-center lg:py-[86px] py-5">
                        <div> <h4 className="text-base leading-[100%] text-black mb-4 font-noto">March 1, 2022 by Editor Hardo</h4>
                            <Discripition myClass="text-lg leading-[150%]  lg:max-w-[475px] mb-4 font-noto"
                                content="Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/finance world, hustler culture and web3 aesthetics. Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories — all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities." />
                            <a href="/" className="leading-[100%] text-base text-black hover:underline">Read More...</a></div></div>
                    <div className="lg:w-2/4 w-full mx-auto px-4 ">
                        <div className="flex">
                            <div className="lg:border"></div>
                            <img className="w-full pointer-events-none pb-5 lg:pb-0"
                                src={manImg} alt="man-img" />
                            <div className="lg:border"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border w-full "></div>
        </div>


    )
}

export default BreakingNews

