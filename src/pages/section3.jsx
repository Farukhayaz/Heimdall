import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsTag } from 'react-icons/bs'
import Button from '../components/button'
import im from "../image/bg.jpg"

export default function Section3() {
    return (
        <div>
            <section class="text-gray-600 body-font flex justify-center pb-[50px] pt-[50px]">
                <div class="flex flex-wrap md:-m-2 -m-1 w-11/12 ">
                    <div class="flex flex-wrap w-3/5">
                        <div class="md:p-1 p-1 w-1/2">
                            <div class="p-2  flex">
                                <div class="w-[120px] h-[120px]  inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0">
                                    <img className='w-[120px] h-[120px]' src={im} />
                                </div>
                                <div class="flex-grow border pl-6 p-[30px]">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Getting...</h2>
                                    <p class="leading-relaxed text-base">7 posts</p>
                                    <p>Learn to use Ghost</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:p-1 p-1 w-1/2">
                            <div class="p-2  flex">
                                <div class="w-[120px] h-[120px]  inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0">
                                    <img className='w-[120px] h-[120px]' src={im} />
                                </div>
                                <div class="flex-grow border pl-6 border p-[30px]">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">History...</h2>
                                    <p class="leading-relaxed text-base">7 posts</p>
                                    <p>Posts full of historic value and useful..</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:p-1 p-1 w-1/2">
                            <div class="p-2  flex">
                                <div class="w-[120px] h-[120px]  inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0">
                                    <img className='w-[120px] h-[120px]' src={im} />
                                </div>
                                <div class="flex-grow border pl-6 border p-[30px]">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Science...</h2>
                                    <p class="leading-relaxed text-base">7 posts</p>
                                    <p>Posts for the most curious ones.</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:p-1 p-1 w-1/2">
                            <div class="p-2  flex">
                                <div class="w-[120px] h-[120px]  inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0">
                                    <img className='w-[120px] h-[120px]' src={im} />
                                </div>
                                <div class="flex-grow border pl-6 border p-[30px]">
                                    <h2 class="text-gray-900 text-lg title-font font-medium  mb-2">Travel...</h2>
                                    <p class="leading-relaxed text-base">7 posts</p>
                                    <p>Everything you need to know for your ne...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-2/6 p-6 text-black">
                        <div class="md:p-2 p-1 w-full ">
                            <div className="title mt-[30px] mb-[20px] " data-swiper-parallax="-300">
                                <BsTag className="text-white p-1.5 rounded-2xl text-4xl bg-red-500 inline-block mt-[10px] mr-[20px]" />
                            </div>
                            <div className="subtitle mt-[20px] text-[25px] mb-[20px]  font-serif font-bold" data-swiper-parallax="-200">
                                <h1 className="leading-tight">Popular<br /> Categories</h1>
                            </div>
                            <p >We have collected our most popular categories for you. Check out these popular topics!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
