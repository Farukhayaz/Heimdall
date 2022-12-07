import { Slid } from "../data";
import React, { useRef, useState } from "react";
import { BsTag } from "react-icons/bs"
import "../App.css"
import Button from "../components/button";
import { AiOutlineArrowRight } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay, Pagination, Navigation, Thumbs } from "swiper";
// import { Autoplay, Pagination } from "swiper";
export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[0]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight">Heimdall,guard and <br /> keeper of the <br /> Ragnarok</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[1]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight"> Astronomers <br /> announce discovering <br /> ten tiny jovian <br /> satellites</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700 ", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[2]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight"> Astronomers <br /> announce discovering <br /> ten tiny jovian <br /> satellites</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={7}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <h1>Hello</h1>
                </SwiperSlide>
                <SwiperSlide
                //  style={{ backgroundImage: `url(${Slid.Navb[1]})`, backgroundSize: "100% 100%" }}
                >
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[2]})`, backgroundSize: "100% 100%" }} >
                </SwiperSlide>

            </Swiper> */}
            {/* ----------------------------------------- */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
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
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[1]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight"> Astronomers <br /> announce discovering <br /> ten tiny jovian <br /> satellites</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700 ", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${Slid.Navb[2]})`, backgroundSize: "100% 100%" }}>
                    <div className="title w-[13%] " data-swiper-parallax="-300">
                        <BsTag className="text-red-500 inline-block ml-[10px] mr-[20px]" />History
                    </div>
                    <div className="subtitle mt-[20px] text-[50px] font-serif font-bold" data-swiper-parallax="-200">
                        <h1 className="leading-tight"> Astronomers <br /> announce discovering <br /> ten tiny jovian <br /> satellites</h1>
                    </div>
                    <div className="text mt-[20px] hover:scale-125  hover:text-red-500 duration-700" data-swiper-parallax="-100">
                        <Button btn={{ class: "sli border-b-4 hover:border-red-600 duration-700", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                    </div>
                </SwiperSlide>
            </Swiper>


        </>

    )
}

