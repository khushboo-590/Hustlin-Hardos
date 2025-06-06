
// import React from "react";
// import {roadmapData} from '../utils/helper.';
// import Heading from "./common/Heading";
// import roadMApDots from '../assets/images/svg/road-map-dots.svg'
// import roadmapArrow from '../assets/images/svg/roadmaparrow.svg'


// const Roadmap = () => {
//     return (
//         <div id="roadmap" className="relative border-b-2 border-black border-solid bg-[#F6F0E2]">
//             <div className="w-full border-b-2 border-black border-solid">
//                 <div className="max-w-[1140px] max-xl:px-4 mx-auto container">
//                     <div className="py-[89.5px] max-lg:py-20 max-md:py-14 max-sm:py-10">
//                 <Heading myClass="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[39px] leading-[104%] font-noto" title="RoadMap" />
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-[1140px] max-[1141px]:max-w-[1023px] max-lg:max-w-[800px] max-[801px]:!max-w-[600px] max-[601px]:!max-w-[375px] max-[1141px]:px-4 mx-auto">
//                 <div className="w-full border-x-2 border-black border-solid pr-1 pl-9 pt-[99px] max-md:pt-16 max-sm:pt-10 max-lg:pl-24 max-[601px]:!pl-14 max-lg:gap-5 max-lg:pr-4 max-lg:flex max-lg:flex-col relative ">
//                     <img
//                         src={roadmapArrow}
//                         alt="arrow-img"
//                         className="absolute top-[99px] max-md:top-16 max-sm:top-10 left-1/2 max-lg:left-10 h-[1380px] max-[768px]:!h-[1300px] max-[801px]:h-[1500px] max-[641px]:!h-[1300px] max-[601px]:!h-[1800px] max-[601px]:!left-[6.5%] max-[601px]:max-h-[unset] lg:-translate-x-1/2"/>
//                     {roadmapData.map((obj, index) => {
//                         const isRight = obj.align === "right";
//                         const dotPositionClasses = isRight
//                             ? "right-[-13.2%] max-[1141px]:right-[-8%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%]"
//                             : "left-[-20%] max-[1140px]:left-[-16%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%]";
//                         const marginClass = isRight ? "lg:mt-[-5px]" : "lg:ml-auto";

//                         return (
//                             <div
//                                 key={index}
//                                 className={`max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] w-full relative font-noto ${marginClass} ${index === 7 ? "pb-[99px] max-md:pb-16 max-sm:pb-10" : ""
//                                     }`}
//                             >
//                                 <div
//                                     className={`absolute top-0 ${dotPositionClasses} size-[59px] max-[601px]:size-9 bg-white border-2 border-black border-solid rounded-full flex justify-center items-center`}
//                                 >
//                                     <img
//                                         src={roadMApDots}
//                                         alt="dots"
//                                         className="max-[601px]:w-5 max-[601px]:h-6"
//                                     />
//                                 </div>
//                                 <p className="text-sm pb-2.5 font-noto">{obj.phase}</p>
//                                 <p className="pb-3 font-noto font-semibold lg:text-4xl leading-[110%] md:text-3xl text-2xl">
//                                     {obj.title}
//                                 </p>
//                                 <p
//                                     className={`leading-[121%] font-noto ${isRight ? "lg:max-w-[460px]" : "lg:max-w-[490px]"
//                                         } max-md:text-base`}
//                                 >
//                                     {obj.description}
//                                 </p>
//                             </div>
//                         );
//                     })}

//                 </div>
//            </div>
//             </div>
//     );
// };

// export default 

import React from "react";
import { roadMap } from "../utils/helper.";
import Discripition from "./common/Discripition";
import Heading from "./common/Heading";

const Roadmap = () => {
    return (
        <div id="roadmap" className="pt-22 max-xl:pt-[60px] max-lg:pt-10 ">
            <div className="max-w-[1172px] px-4 mx-auto w-full pb-[89px] max-xl:pb-[60px] max-lg:pb-10">
                <Heading title="RoadMap" />
            </div>
            <div className="border-y-2 border-black px-4">
                <div className="max-w-[1140px] mx-auto w-full border-x-2 border-black xl:pb-[400px]">
                    <div className="py-[99px] relative flex flex-col pl-9 pr-4 max-xl:pl-6 max-lg:gap-10 max-lg:pl-20 max-md:gap-6 max-md:pl-[60px] max-md:pr-4 max-lg:py-16 max-md:py-10">
                        <div className="h-[86%] xl:h-[115%] w-0.5 bg-black absolute left-1/2 -translate-x-1/2 max-xl:left-[48%] top-[52%] xl:top-[65%] -translate-y-1/2 max-lg:left-[5%] max-lg:h-[90%] max-md:left-[7%] max-md:h-[95%] max-md:top-[51%] roadmap-arrow"></div>
                        {roadMap.map((obj, index) => (
                            <div key={index} className={`relative ${index === 0 || index === 2 || index === 4 || index === 6 ? "max-w-[599px] max-xl:max-w-[468px] pl-5 ml-auto after:absolute after:content='' after:top-0 after:bg-[url('./assets/images/svg/road-map-dots.svg')] after:bg-cover after:bg-center after:bg-no-repeat after:w-[59px] after:h-[59px] after:left-[-13%] max-xl:after:left-[-13%] max-lg:after:left-[-14%] max-lg:mr-auto max-lg:ml-0 max-lg:after:w-11 max-lg:after:h-11 max-md:after:left-[-17%] max-[424px]:after:!left-[-21.5%] max-xl:pl-2 max-lg:pl-0"
                                : "max-w-[564px] max-xl:max-w-[428px] mr-auto roadmap-left-content -mt-4 after:absolute after:content='' after:top-0 after:bg-[url('./assets/images/svg/road-map-dots.svg')] after:bg-cover after:bg-center after:bg-no-repeat after:w-[59px] after:h-[59px] after:right-[-22.5%] max-xl:after:right-[-12%] max-lg:max-w-[468px] max-lg:mt-0 max-lg:after:left-[-14%] max-lg:after:w-11 max-lg:after:h-11 max-md:after:left-[-17%] max-[424px]:after:!left-[-21.5%]"
                                } ${index === 1 ? "-mt-20 max-lg:mt-0" : index === 3 ? "-mt-16 max-lg:mt-0" : ""}`} >
                                <p className="text-sm leading-[100%] pb-2.5 max-lg:pb-1.5 max-md:text-xs">
                                    {obj.phase}
                                </p>
                                <p className="font-semibold max-w-[460px] text-4xl max-md:text-xl leading-[111%] pb-3 max-lg:pb-2 max-md:pb-1.5">
                                    {obj.title}
                                </p>
                                <Discripition content={obj.description} myClass={`max-lg:text-sm ${index === 0 || index === 2 || index === 4 || index === 6 ? "max-w-[495px] max-lg:max-w-none !leading-[120%] !max-lg:leading-[100%]" : "max-w-[460px] max-lg:max-w-none !leading-[111%] !max-lg:leading-[100%]"}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;


