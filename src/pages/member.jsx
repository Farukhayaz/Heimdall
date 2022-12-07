import React from 'react'
import { IoMdContact } from "react-icons/io"
import Button from '../components/button'
import Heading from '../components/Heading'
import Para from '../components/Para'
import im from "../image/6483010.jpeg"
import { AiOutlineArrowRight } from "react-icons/ai"
import bo from "../image/boat.avif"
export default function Member() {
    return (
        <div>
            <div className="container-fluid flex justify-center  bg-gray-100 " >
                <div className="container">
                    <div class="bg-gray-100 h-[auto] lg:h-[90vh]">
                        <div class="mx-auto   max-w-7xl  sm:px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                                    <div class="group relative  h-[55vh]">
                                        <div class="relative h-[80vh] w-full  rounded-lg sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                            <IoMdContact className='text-3xl inline-block ml-[20px] mr-[30px]' />MEMBER'S SELECTION
                                            <Heading Header={{ class: "hq text-3xl font-bold font-serif", h: <h1 className='lg:text-4xl xl:text-[44px]  mb-[20px] sm:text-xl text-xs md:text-xl'>A peek into <br /> Scandinavia's origin</h1> }} />
                                            <Para prg={{ class: "mwmp", p1: "Scandinavia and Scandinavian entered usage in the late 18th century, being introduced by the early linguistic and cultural Scandinavist movement." }} />
                                            <div className='mt-[30px]  hover:text-red-500 w-[50%] '>
                                                <img src={im} alt="" className='h[40px] w-[40px] rounded-3xl inline-block mr-[20px]  ' />by Diego Balmaceda

                                            </div>
                                        </div>
                                        <div className="text mt-[20px] hover:scale-x-90 text-red-500 hover:text-black  duration-700" data-swiper-parallax="-100">
                                            <Button btn={{ class: "sli border-b-4 hover:border-black  border-red-600 duration-700  ", p: "Read More" }} /><AiOutlineArrowRight className="inline-block ml-[10px] " />
                                        </div>
                                    </div>

                                    <div class="group relative">
                                        <img src={bo} alt="" className="h-[60vh] w-full object-cover object-center" />

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
