import React, { useState } from "react";
import { faqs } from "../utils/helper."
import Heading from "./common/Heading";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full bg-[#F6F0E2]">
            <div className="w-full">
                <div className="max-w-[1140px] mx-auto container">
                    <div className="max-w-[1140px] max-xl:px-4 py-[89.5px] max-lg:py-20 max-md:py-14 max-sm:py-10 mx-auto container">
                        <Heading myClass="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[39px] leading-[104%] font-noto" title="Faqs" />
                    </div>
                </div>
            </div>

            <div className="border-y-2 max-xl:px-4 border-solid border-black">
                <div className="max-w-[1140px] mx-auto container border-x-2 border-solid border-black">
                    <div className="w-full">
                        {faqs.map((item, index) => (
                            <div
                                key={index}
                                className="border-b-2 border-black p-[15px] sm:px-[30px] sm:pt-6 sm:pb-[20px] md:pt-8 md:pb-[27px] md:pr-[44px]"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between cursor-pointer font-semibold items-center text-start leading-[100%] text-black text-2xl max-md:text-xl max-sm:text-lg accordin-button"
                                >
                                    <span>{item.question}</span>
                                    <span
                                        className={`min-w-2 min-h-0.5 bg-black relative after:absolute after:w-full after:h-full after:bg-black after:transition-all after:duration-300 ${openIndex === index ? "after:rotate-0" : "after:rotate-90"
                                            }`}
                                    ></span>
                                </button>
                                <p
                                    className={`text-base leading-[150%] overflow-hidden transition-all duration-300 accordin-data max-w-[992px] pt-4 ${openIndex === index ? "max-h-[1000px]" : "max-h-0"
                                        }`}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
