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
            <div className="max-w-[1172px] px-4 mx-auto py-16 max-xl:py-12 max-lg:py-10">
                <Heading title="Faqs" />
            </div>

            <div className="border-y-2 border-black px-4">
                <div className="max-w-[1140px] mx-auto border-x-2 border-black">
                    {faqsList.map((obj, index) => (
                        <div
                            key={index}
                            className={`w-full px-8 pb-6 max-lg:px-6 max-md:px-4 max-lg:pb-5 max-md:pb-3 border-black ${index === faqsList.length - 1 ? "border-0" : "border-b-2"}`}>
                            <div onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center cursor-pointer pt-8 max-lg:pb-4 max-md:pt-5 max-md:pb-2">
                                <p className="font-semibold text-2xl max-lg:text-xl max-md:text-lg max-sm:max-w-[280px] leading-tight">
                                    {obj.title}
                                </p>
                                <span
                                    className={`transition-transform duration-300 ease-linear ${open === index ? "rotate-180" : "rotate-90"}`}>
                                    <img src={open === index ? minus : plus} alt={open === index ? "Collapse" : "Expand"} />
                                </span>
                            </div>
                            <div
                                className={`transition-all duration-400 ease-linear pt-4 max-xl:pt-0 overflow-hidden max-xl:overflow-y-auto ${open === index ? "max-h-[160px]" : "max-h-0"}`}>
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
