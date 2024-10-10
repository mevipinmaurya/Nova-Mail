import React, { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { LuStickyNote } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const SideBarMenu = [
    {
        icons: <RiInboxFill size={'20px'} />,
        text: 'Inbox'
    },
    {
        icons: <FaRegStar size={'20px'} />,
        text: 'Starred'
    },
    {
        icons: <FaRegClock size={'20px'} />,
        text: 'Snoozed'
    },
    {
        icons: <BiSend size={'20px'} />,
        text: 'Sent'
    },
    {
        icons: <LuStickyNote size={'20px'} />,
        text: 'Drafts'
    },
    {
        icons: <IoChevronDownOutline size={'20px'} />,
        text: 'More'
    },
]

const Sidebar = () => {

    const [isActive, setIsActive] = useState(0);
    // const [open, setOpen] = useState(false);    // Local state variable
    const dispatch = useDispatch();

    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-4 p-4 rounded-2xl hover:shadow-md font-medium bg-[#C2E7FF]'>
                    <LuPencil size={'24px'} />
                    Compose
                </button>
            </div>

            <div className='text-[#202124]'>
                {
                    SideBarMenu.map((items, index) => {
                        return (
                            <div
                                className={`${isActive === index ? `bg-[#D3E3FD] text-black font-semibold` : ""} flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 `} onClick={() => setIsActive(index)}>
                                {
                                    items.icons
                                }
                                <span>
                                    {items.text}
                                </span>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Sidebar