import React from 'react'
import im from "../image/nav3.png"
import im1 from "../image/6483010.jpeg"
import im2 from "../image/nav1.png"
import im3 from "../image/nav2.png"
import { BsFillArrowDownCircleFill } from "react-icons/bs"

import { IoMdContact } from "react-icons/io"
import "../App.css"
import Heading from '../components/Heading'
import Para from '../components/Para'
export default function Section2() {
    return (
        <div>

            <div class="bg-gray-100 ">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div class="mx-auto max-w-2xl py-16 sm:py-24  lg:max-w-none lg:py-32">

                        <div class="mt-6 gap-y-7  lg:grid lg:grid-cols-3 lg:gap-x-6  ">
                            <div class="group  relative flex justify-center ">
                                <div class="relative  rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Heimdall, guard and keeper of the Ragnarök</h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative  flex justify-center">
                                <div class="relative hover:shadow-2xl rounded-lg overflow-hidden bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im2})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>The main god of the<br /> Germanic mythology</h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative flex justify-center">
                                <div class="relative rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im3})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{ class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>A peek into <br /> Scandinavia's origin</h1> }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative border  flex justify-center ">
                                <div class="relative  hover:shadow-2xl rounded-lg overflow-hidden bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im2})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[211px] hover:mt-[165px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{ class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Astronomers announce<br /> discovering ten tiny<br /> Jovian satellites</h1> }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative flex justify-center">
                                <div class="relative  hover:shadow-2xl rounded-lg overflow-hidden bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im3})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[211px] hover:mt-[165px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{ class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Fossil genome shows hybrid <br />of two extinct species of <br />human</h1> }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative  flex justify-center ">
                                <div class="relative hover:shadow-2xl rounded-lg overflow-hidden bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Manchester City beats<br /> Chelsea 2-0</h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative border  flex justify-center">
                                <div class="relative  rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im3})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY <span>10 SEP</span></h1> }} />
                                        <Heading Header={{ class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>A quick look to Iceland<br /> landscapes</h1> }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative  flex justify-center">
                                <div class="relative  rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>HISTORY<span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Everything you need to know <br />about Valkyries
                                            </h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative  flex justify-center">
                                <div class="relative rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im2})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[267px] hover:mt-[220px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>GETTING STARTED <span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>
                                                Welcome to Ghost</h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative flex justify-center">
                                <div class="relative rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[267px] hover:mt-[220px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>GETTING STARTED<span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Using the Ghost editor</h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative flex justify-center">
                                <div class="relative rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im3})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[241px] hover:mt-[195px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>GETTING STARTED <span>10 SEP</span></h1> }} />
                                        <Heading Header={{ class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Organising your content<br /> with tags</h1> }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>
                            <div class="group relative flex justify-center">
                                <div class="relative  rounded-lg hover:shadow-2xl bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 sm:w-80 lg:aspect-w-1 lg:aspect-h-1" style={{ backgroundImage: `url(${im2})`, backgroundSize: "100% 100%" }}>
                                    <div className='pt-[30px]  text-white hover:text-red-500   flex justify-around '>
                                        <img src={im1} alt="" className='h[30px] w-[30px] rounded-3xl inline-block  ' />by Diego Balmaceda <IoMdContact className="text-2xl text-red-500 " />

                                    </div>
                                    <div className='text-white mt-[267px] hover:mt-[222px] duration-500 p-2  '>

                                        <Heading Header={{ class: "sec1", h: <h1>GETTING STARTED <span>10 SEP</span></h1> }} />
                                        <Heading Header={{
                                            class: "sec1 text-xl font-bold hover:text-red-500 ", h: <h1>Managing Ghost users</h1>
                                        }} />
                                        <Para prg={{ class: "sec1", p1: <p>On Tuesday, astronomers of the Carnegie <br />Institution for Science in Washington, DC, United</p> }} />



                                    </div>
                                </div>

                            </div>


                        </div>
                        <h1 className=' mt-[60px]  flex justify-center  '><BsFillArrowDownCircleFill className='text-red-500 text-4xl hover:text-white hover:bg-red-500 rounded-3xl cursor-pointer' /></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
