
import React from 'react';
import downArrow from '../assets/images/svg/roadmaparrow.svg';
import roadmapIcon from '../assets/images/svg/road-map-dots.svg';
import { roadMap } from '../utils/helper.';
import Heading from './common/Heading';
import Discripition from './common/Discripition';

const Roadmap = () => {
    return (
        <div id="roadmap">
            <div className="max-w-[1172px] px-4 mx-auto w-full pb-[89px] max-xl:pb-[60px] max-lg:pb-10 pt-22 max-xl:pt-[60px] max-lg:pt-10">
                <Heading title="RoadMap" />
            </div>
            <div className="border-b-2 border-black w-full"></div>
            <div className="relative flex flex-col items-center container max-w-[1172px] mx-auto  pl-4 border-x-2  lg:pt-[99px] pt-10 xl:pb-[300px] lg:pb-[120px] md:pb-[40px] pb-8">
                <div className="absolute top-0   xl:h-[1850px] lg:h-[1900px] md:h-[1390px] sm:h-[1300px]  md:left-[20px]  left-[2%] lg:left-1/2 lg:-translate-x-1/2 z-[-1]">
                    <img
                        src={downArrow}
                        alt="down-arrow"
                        className="w-4 h-full lg:mt-[150px] mt-10 xl:mr-3" />
                </div>
                {roadMap.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-full items-start mb-2 md:mb-5 ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>                        <div
                            className={`relative lg:w-1/2 w-full flex flex-col  pl-8 sm:pl-3 md:pl-20
                            ${index % 2 === 0
                                    ? 'justify-end lg:pl-[75px] md:pl-3 max-lg:pb-8 max-md:pb-3'
                                    : 'justify-start lg:pr-[75px] md:pr-5 lg:pl-9 md:pl-20 max-lg:pb-8 max-md:pb-7 pl-8 sm:pl-3'
                                }`}>
                            <p className="md:text-sm text-xs font-normal mb-2">{item.phase}</p>
                            <h2 className="lg:text-4xl md:text-3xl text-lg leading-[110%] font-semibold sm:mb-2 mb-1">
                                {item.title}
                            </h2>
                            <Discripition myClass="text-black font-normal lg:text-base text-sm md:pr-2"
                                content={item.description}
                            />
                        </div>
                        <div
                            className=" w-11 h-[39px] md:w-14 md:h-14  bg-white border-2 border-black rounded-full flex items-center justify-center  text-lg font-bold absolute 
                           lg:left-1/2 lg:-translate-x-1/2  md:left-[10px]  left-[2%]">
                            <img
                                src={roadmapIcon}
                                alt="roadmap-icon"
                                className="w-5 h-5 md:w-8 md:h-7" /></div>
                    </div>
                ))}
            </div>
            <div className="border border-black w-full"></div>
        </div>
    );
};

export default Roadmap;
