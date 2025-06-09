import React from 'react'
import { stateData } from '../utils/helper.'

const MintingState = () => {
    return (
        <div className="border-b-2 border-solid max-xl:px-4 border-black  w-full ">
            <div className="max-w-[832px]  justify-between gap-10 max-sm:gap-5 items-center flex flex-wrap mx-auto py-[21px]">
                {stateData.map((obj, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <p className="text-2xl leading-[110%] lg:text-xl md:text-lg sm:text-sm font-noto">
                            {obj.title}</p>
                        <p className="text-4xl lg:text-3xl md:text-2xl sm:text-sm font-semibold leading-[110%] font-noto">
                            {obj.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );  
}
export default MintingState


