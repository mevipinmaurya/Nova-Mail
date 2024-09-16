import React from 'react'
import { LuPencil } from 'react-icons/lu'
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { LuStickyNote } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='flex items-center gap-4 p-4 rounded-2xl hover:shadow-md font-medium bg-[#C2E7FF]'>
                    <LuPencil size={'24px'} />
                    Compose
                </button>
            </div>

            <div className='text-[#202124]'>
                <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 bg-[#D3E3FD] text-black font-semibold '>
                    <RiInboxFill size={'20px'} />
                    Inbox
                </div>
                
                <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                    <FaRegStar size={'20px'} />
                    Starred
                </div>

                <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                    <FaRegClock size={'20px'} />
                    Snoozed
                </div>

                <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                    <BiSend size={'20px'} />
                    Sent
                </div>

                <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                    <LuStickyNote size={'20px'} />
                    Drafts
                </div>

                <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                    <IoChevronDownOutline size={'20px'} />
                    More
                </div>

            </div>
        </div>
    )
}

export default Sidebar