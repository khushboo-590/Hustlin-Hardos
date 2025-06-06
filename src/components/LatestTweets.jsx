import React from 'react';
import twitterIcon from '../assets/images/svg/twiiter.svg';
import sliderArrow from '../assets/images/svg/silde-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { latestTweets } from '../utils/helper.';
import 'swiper/css';
import Discripition from './common/Discripition';
import Heading from './common/Heading';
    

const LatestTweets = () => {
    return (
        <div className="pt-[89px] max-xl:pt-[60px] max-lg:pt-10">
            <div className="max-w-[1172px] px-4 mx-auto w-full flex items-center justify-between pb-[90px] max-xl:pb-[60px] max-lg:pb-10">
                <Heading title="Latest Tweets" myClass="uppercase " />
                <div className="flex items-center gap-14 max-md:gap-5 lg:pt-5 md:pt-2">
                    <button className="cursor-pointer  latest-prev">
                        <img src={sliderArrow} alt="SliderArrow" className="max-sm:w-[15px] max-sm:h-[25px]" /></button>
                    <button className="cursor-pointer latest-next rotate-180">
                        <img src={sliderArrow} alt="SliderArrow" className="max-sm:w-[15px] max-sm:h-[25px]" /></button>
                </div>
            </div>
            <div className="border-y-2 border-solid border-black  ">
               <div className="max-w-[1140px] max-xl:px-4 mx-auto border-l-2">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Navigation]}
                        loop={true}
                        navigation={{
                            nextEl: '.latest-next',
                            prevEl: '.latest-prev',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3 },
                        }}
                        className="mySwiper">
                        {latestTweets.map((obj, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide px-[25px] h-full border-r-2  border-solid border-black py-[20px] sm:py-[47px] min-h-[257px] max-w-[375px]"          >
                                <h4 className="font-semibold text-4xl leading-[111%] font-noto">{obj.title}</h4>
                                <div className="flex gap-[11px] py-3 items-center">
                                    <img src={twitterIcon} alt="twitter" />
                                    <p className="text-sm">{obj.date}</p></div>
                                <Discripition content={obj.desc} myClass="max-sm:text-sm pb-[15px] leading-[100%] font-noto" />
                                <a href="/" className="hover:underline text-sm font-noto">Read More...</a>
                            </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default LatestTweets;

