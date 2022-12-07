import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Slid } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../App.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Button from "../components/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsTag } from "react-icons/bs";

export default function Slider2() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[0]})`, backgroundSize: "100% 100%" }}>
                    <div className="border ">
                        <div className="title w-[13%] " data-swiper-parallax="-300">
                            <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                        </div>
                        <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                            <h1 className="leading-tight">Heimdall,guard and <br /> keeper of the <br /> Ragnarok</h1>
                        </div>
                        <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                            <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[0]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight">Heimdall,guard and <br /> keeper of the <br /> Ragnarok</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[0]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight">Heimdall,guard and <br /> keeper of the <br /> Ragnarok</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>

            </Swiper>
            <Swiper
                // onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <h1>1</h1>
                    <h1>Hemical,guard and keeper of the</h1>
                    <p>In Norse mythology, Hemical(from Old Norse)</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Page2</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Page3</h1>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
