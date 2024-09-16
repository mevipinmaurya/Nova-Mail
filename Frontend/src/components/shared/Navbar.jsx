import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className="flex items-center gap-10">
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <GiHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8 mr-2' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="Gmail_logo" />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
                </div>
            </div>

            <div className='md:block hidden w-[60%] mr-30'>
                <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                    <IoIosSearch size={"24px"} className='text-gray-700' />
                    <input type="text" className='rounded-full width-full bg-transparent text-gray-900 outline-none px-1' placeholder='Search mail' />
                </div>
            </div>

            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiCircleQuestion size={"20px"} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoSettingsOutline size={"20px"} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <TbGridDots size={"20px"} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <Avatar src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid' round={true} size="38px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar