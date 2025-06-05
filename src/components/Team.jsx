import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import sliderArrow from '../assets/images/svg/silde-arrow.svg';
import "swiper/css";
import "swiper/css/navigation";
import { teamMembers } from '../utils/helper.'
import Heading from "./common/Heading";

const Team = () => {
    return (
        <section id="team" className="bg-[#F6F0E2]">
            <div className="max-w-[1140px] max-xl:px-4 py-[89.5px] max-lg:py-20 max-md:py-14 max-sm:py-10 mx-auto container">
                <div className="w-full flex items-center justify-between">
                    <Heading myClass="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[39px] leading-[104%] font-noto" title="Team" />
                    <div className="gap-[55px] items-center max-sm:gap-5 flex justify-center">
                        <button className="cursor-pointer team-prev ">
                            <img
                                className="max-sm:w-[17px] max-sm:h-[30px]"
                                src={sliderArrow}
                                alt="SliderArrow"
                            />
                        </button>
                        <button className="cursor-pointer team-next rotate-180">
                            <img
                                className="max-sm:w-[17px] max-sm:h-[30px]"
                                src={sliderArrow}
                                alt="SliderArrow"
                            />
                        </button>
                    </div>
                </div>
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
                                    <p className={`text-4xl  max-lg:text-3xl text-center text-[#70675F] font-black max-md:text-2xl`}>
                                        {obj.name}</p>
                                    <p className="max-w-[407px] mx-auto text-center">{obj.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Team;

