import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import sliderArrow from '../assets/images/svg/silde-arrow.svg';
import { teamMembers } from '../utils/helper.'
import Description from "./common/Description";
import Heading from "./common/Heading";

const Team = () => {
    return (
        <div id="team">
            <div className="max-w-[1140px]  mx-auto w-full flex items-center justify-between pt-22 pb-[89px] max-xl:py-[60px] max-lg:py-10">
                <Heading title="Team" />
                <div className="flex items-center gap-14 max-md:gap-5 lg:pt-5 md:pt-2">
                    <button className="cursor-pointer team-prev ">
                        <img
                            className="max-sm:w-[17px] max-sm:h-[30px]"
                            src={sliderArrow}
                            alt="SliderArrow" /></button>
                    <button className="cursor-pointer team-next rotate-180">
                        <img
                            className="max-sm:w-[17px] max-sm:h-[30px]"
                            src={sliderArrow}
                            alt="SliderArrow" /></button></div>
            </div>
            <div className="border-y-2 border-solid border-black">
                <div className="max-w-[1140px] max-xl:px-4 mx-auto border-l-2">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ nextEl: ".team-next", prevEl: ".team-prev" }}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                        className="team-mySwiper">
                        {teamMembers.map((obj, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide border-r-2 border-solid min-h-[326px] border-black bg-[url('./assets/images/png/bg-team-img.png')] pt-[56px]">
                                <div className="!flex gap-4 flex-col justify-center items-center">
                                    <img src={obj.image} alt="profile" />
                                    <p className={`text-4xl  max-lg:text-3xl text-center team-shadow text-[#70675F] font-black max-md:text-2xl `}>{obj.name}</p>
                                    < Description content={obj.description} myClass="max-w-[407px] mx-auto text-center max-md:text-sm text-black" /></div>
                            </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Team;


