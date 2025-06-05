// import React from 'react'
// import Heading from './common/Heading'

// const Roadmap = () => {
//   return (
//       <div id="minting" className='bg-[#F6F0E2]'>
//           <div className="max-w-[1140px] max-xl:px-4 py-[89.5px] max-lg:py-20 max-md:py-14 max-sm:py-10 mx-auto container">
//               <Heading myClass="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[39px] leading-[104%] font-noto" title="RoadMap" /></div>
//           <div className="border-y-2 border-solid max-xl:px-4 border-black">
//             </div>
//     </div>
//   )
// }

// export default Roadmap























import React from "react";
import {roadmapData} from '../utils/helper.';
import Heading from "./common/Heading";
import roadMApDots from '../assets/images/svg/road-map-dots.svg'
import roadmapArrow from '../assets/images/svg/roadmaparrow.svg'


const Roadmap = () => {
    return (
        <div id="roadmap" className="relative border-b-2 border-black border-solid bg-[#F6F0E2]">
            <div className="w-full border-b-2 border-black border-solid">
                <div className="max-w-[1140px] max-xl:px-4 mx-auto container">
                    <div className="py-[89.5px] max-lg:py-20 max-md:py-14 max-sm:py-10">
                <Heading myClass="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[39px] leading-[104%] font-noto" title="RoadMap" />
                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] max-[1141px]:max-w-[1023px] max-lg:max-w-[800px] max-[801px]:!max-w-[600px] max-[601px]:!max-w-[375px] max-[1141px]:px-4 mx-auto">
                <div className="w-full border-x-2 border-black border-solid pr-1 pl-9 pt-[99px] max-md:pt-16 max-sm:pt-10 max-lg:pl-24 max-[601px]:!pl-14 max-lg:gap-5 max-lg:pr-4 max-lg:flex max-lg:flex-col relative ">
                    <img
                        src={roadmapArrow}
                        alt="arrow-img"
                        className="absolute top-[99px] max-md:top-16 max-sm:top-10 left-1/2 max-lg:left-10 h-[1380px] max-[768px]:!h-[1300px] max-[801px]:h-[1500px] max-[641px]:!h-[1300px] max-[601px]:!h-[1800px] max-[601px]:!left-[6.5%] max-[601px]:max-h-[unset] lg:-translate-x-1/2"/>
                    {roadmapData.map((obj, index) => {
                        const isRight = obj.align === "right";
                        const dotPositionClasses = isRight
                            ? "right-[-13.2%] max-[1141px]:right-[-8%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%]"
                            : "left-[-20%] max-[1140px]:left-[-16%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%]";
                        const marginClass = isRight ? "lg:mt-[-5px]" : "lg:ml-auto";

                        return (
                            <div
                                key={index}
                                className={`max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] w-full relative font-noto ${marginClass} ${index === 7 ? "pb-[99px] max-md:pb-16 max-sm:pb-10" : ""
                                    }`}
                            >
                                <div
                                    className={`absolute top-0 ${dotPositionClasses} size-[59px] max-[601px]:size-9 bg-white border-2 border-black border-solid rounded-full flex justify-center items-center`}
                                >
                                    <img
                                        src={roadMApDots}
                                        alt="dots"
                                        className="max-[601px]:w-5 max-[601px]:h-6"
                                    />
                                </div>
                                <p className="text-sm pb-2.5 font-noto">{obj.phase}</p>
                                <p className="pb-3 font-noto font-semibold lg:text-4xl leading-[110%] md:text-3xl text-2xl">
                                    {obj.title}
                                </p>
                                <p
                                    className={`leading-[121%] font-noto ${isRight ? "lg:max-w-[460px]" : "lg:max-w-[490px]"
                                        } max-md:text-base`}
                                >
                                    {obj.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
           </div>
            </div>
    );
};

export default Roadmap;

