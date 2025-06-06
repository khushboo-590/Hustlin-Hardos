import React from 'react';
import { marqueData } from '../utils/helper.';

const Marque = () => {
    return (
        <div className="bg-black overflow-hidden py-[14px]">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex text-white whitespace-nowrap animate-marquee">
                    {marqueData.map((obj, index) => (
                        <div
                            key={index}
                            className="flex items-center mx-8 lg:mx-6 md:mx-4">
                            <span className="mr-2 text-sm lg:text-base font-normal leading-none">{obj.title}</span>
                            <span className={`text-sm max-lg:text-xs border px-2 py-1 rounded-md ${obj.color}`}>{obj.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marque;
