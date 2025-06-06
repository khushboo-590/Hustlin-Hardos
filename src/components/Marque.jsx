import React from 'react'
import { MARQUE_DATA_LIST } from '../utils/helper.'

const Marque = () => {
    return (
        <div className="flex items-center pt-[13px] pb-[14px] bg-black overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex text-white whitespace-nowrap topbar-animation">
                    {MARQUE_DATA_LIST.map((obj, index) => (
                        <div key={index} className="flex items-center mx-[31px] max-lg:mx-6 max-md:mx-4">
                            <span className={`mr-2 !leading-[100%] font-normal lg:text-base text-sm ${index === 5 ? "!mr-2 lg:!mr-3" : ""}`} >
                                {obj.title}
                            </span>
                            <div className={`flex items-center text-white rounded-[73px] whitespace-nowrap`} >
                                <span className={`text-sm max-lg:text-xs border py-[2px] px-1 rounded-[5px] ${obj.color}`}>
                                    {obj.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Marque


