import React from 'react'
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"


export default function Section4() {
    return (

        <>

            <div className="container-fluid border border-black-200 flex justify-center items-center h-[40vh] ">

                <div className="container flex justify-evenly">

                    <div className="text">
                        <h1 className='text-4xl text-black text-Bold mb-2'>Subscribe to our newletter</h1>
                        <p>Receive the latests new.curated posts and highlights from us.We"ll never<br /> spam we promise</p>
                    </div>

                    <div className="input flex justify-center ">
                        <input className='h-[8vh] w-[500px] rounded' type="text" placeholder='Your email' />
                    </div>

                </div>

            </div>

            <div className=' h-[10vh] w-[100%] flex justify-evenly gap-4 bg-gray-300 items-center'>

                <div className='  '>
                    <p className='text-3xl '>Heimdall</p>



                </div>

                <div className="icon flex w-[90%] justify-end gap-3 ">
                    <BsFacebook className='text-white text-3xl' />
                    <BsTwitter className='text-white text-3xl' />
                    <BsInstagram className='text-white text-3xl' />

                </div>


            </div>
        </>
    )
}
