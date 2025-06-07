
import React from "react";
import { roadMap } from "../utils/helper.";
import Description from "./common/Description";
import Heading from "./common/Heading";

const Roadmap = () => {
    return (
        <div id="roadmap">
            <div className="pt-22 max-xl:pt-[60px] max-lg:pt-10 ">
                <div className="max-w-[1140px] mx-auto w-full pb-[89px] max-xl:pb-[60px] max-lg:pb-10">
                    <Heading title="RoadMap" />
                </div>
            </div>
            <div className="border-y-2 border-black px-4">
                <div className="max-w-[1140px] mx-auto w-full border-x-2 border-black xl:pb-[400px]">
                    <div className="py-[99px] relative flex flex-col pl-9 pr-4 max-xl:pl-6 max-lg:gap-10 max-lg:pl-20 max-md:gap-6 max-md:pl-[60px] max-md:pr-4 max-lg:py-16 max-md:py-10">
                        <div className="h-[86%] xl:h-[115%] w-0.5 bg-black absolute left-1/2 -translate-x-1/2 max-xl:left-[48%] top-[51%] xl:top-[65%]
                        -translate-y-1/2 max-lg:left-[5%] max-lg:h-[90%] max-md:left-[7%] max-md:h-[95%] max-md:top-[51%] roadmap-arrow"></div>
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
                                <Description content={obj.description}
                                    myClass={`max-lg:text-sm ${index === 0 || index === 2 || index === 4 || index === 6
                                        ? "xl:!max-w-[495px] !leading-[120%] max-lg:!leading-[100%]"
                                        : "xl:!max-w-[460px] !leading-[111%] max-lg:!leading-[100%]"}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Roadmap;
