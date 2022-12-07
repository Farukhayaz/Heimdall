// import React from 'react'
// import img1 from "../image/femal.jpg"
// import { AiOutlineSearch } from 'react-icons/ai'
// import { BsFillMoonFill } from 'react-icons/bs'

// export default function Navbar() {
//     const detectChange = () => {
//         let myDiv = document.getElementsByClassName("mynavbar").getBoundingClientRect().top;
//         console.log(myDiv, "testu")
//     }
//     return (
//         <div>
//             <header class="mynavbar text-gray-600 body-font bg-transparent" style={{ backgroundImage: `url(${img1})` }} onClick={detectChange} onScroll={detectChange}>
//                 <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                         {/* <span class="ml-3 text-xl">Heimdall</span> */}
//                         <h1 class="ml-3  text-2xl">Heimdall</h1>
//                     </a>
//                     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//                         <a class="mr-5 hover:text-gray-900">Content Sample</a>
//                         <a class="mr-5 hover:text-gray-900">Author List</a>
//                         <a class="mr-5 hover:text-gray-900">Tag List</a>
//                         <a class="mr-5 hover:text-gray-900">Login</a>
//                         <button class=" mr-3 bg-black text-white inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Subscribe
//                         </button>
//                         <a className='text-2xl mr-3'> <BsFillMoonFill /></a>
//                         <a className='text-2xl'>  <AiOutlineSearch /></a>
//                     </nav>

//                 </div>
//             </header>
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react'
import { navbarData } from "../data"
import { BsFillCartPlusFill, BsFillMoonFill } from 'react-icons/bs'
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <div className={colorChange ? 'navbar colorChange  flex flex-row justify-between p-[15px]   z-50 top-0 sticky delay-300' : 'navbar h-16  w-[100%] flex flex-row justify-between z-50 top-0 absolute delay-300 mt-[20px]'}>
                <div className='  text-2xl ml-[60px] hover:text-red-500 cursor-pointer  flex items-center'>
                    <h1>Heimdall</h1>
                </div>

                <div className=' flex mr-[60px]  '>
                    <div className=' flex items-center  justify-between'>
                        <ul className='flex justify-between mr-5'>
                            {
                                navbarData.liL.map(ele => <li className='text-lg flex justify-between  ml-[50px] cursor-pointer hover:text-red-500 hover:duration-700'>{ele}</li>)
                            }
                        </ul>
                        <button class=" mr-4 bg-black text-xl  text-white inline-flex  items-center bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0">Subscribe
                        </button>
                        <BsFillMoonFill className=' cursor-pointer text-lg mr-3 hover:text-red-500 hover:duration-700' />
                        <AiOutlineSearch className=' cursor-pointer text-lg hover:text-red-500 hover:duration-700' />
                    </div>
                    {/* 
                    <div className='flex items-center justify-between w-[25vh]   text-2xl'>
                        <button class=" mr-3 bg-black text-white inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Subscribe
                        </button>
                        <BsFillMoonFill className=' cursor-pointer  hover:text-slate-400 hover:duration-700' />
                        <AiOutlineSearch className=' cursor-pointer  hover:text-slate-400 hover:duration-700' />
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default Navbar