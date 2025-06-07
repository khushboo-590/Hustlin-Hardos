import React, { useState } from "react";
import { faqsList } from "../utils/helper.";
import plus from '../assets/images/svg/plus.svg';
import minus from '../assets/images/svg/minus.svg';
import Heading from "./common/Heading";

const Faqs = () => {
    const [open, setOpen] = useState(null);
    const toggleFaq = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div id="faq">
            <div className="max-w-[1140px]  mx-auto py-16 max-xl:py-12 max-lg:py-10">
                <Heading title="Faqs" /></div>
            <div className="border-t-2 border-black px-4 border-b-1">
                <div className=" max-w-[1140px] mx-auto border-x-2 border-black ">
                    {faqsList.map((obj, index) => (
                        <div
                            key={index}
                            className={`w-full px-8  lg:px-6 md:px-4  border-black  border-b-2 py-9 max-lg:py-5    `}>
                            <div onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center cursor-pointer ">
                                <p className="font-semibold text-2xl max-lg:text-xl max-md:text-lg max-sm:max-w-[280px] leading-tight">
                                    {obj}</p>
                                <span
                                    className={`transition-transform duration-300  ease-linear ${open === index ? "rotate-180" : "rotate-90"}`}>
                                    <img src={open === index ? minus : plus} alt={open === index ? "Collapse " : "Expand"} />
                                </span>
                            </div>
                            <div
                                className={`transition-all duration-400 ease-linear overflow-hidden max-xl:overflow-y-auto ${open === index ? "max-h-[160px] pt-4" : "max-h-0"}`}>
                                <p className="leading-relaxed max-md:text-sm">
                                    NFT stands for “Non-fungible token,” which means that it’s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFTs’ fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a “members-only” card. Hustlin' Hardos works like this.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;






