import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { setOpen } from '../redux/appSlice';


const SendMail = () => {
    // const open = true;
    const open = useSelector(store => store.appSlice.open)
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className='flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxCross2 />
                </div>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
                <input onChange={changeHandler} value={FormData.to} name="to" type="text" placeholder='Recipients' className='outline-none py-1' />
                <input onChange={changeHandler} value={FormData.subject} name="subject" type="text" placeholder='Subject' className='outline-none py-1' />
                <textarea onChange={changeHandler} value={FormData.message} name="message" id="" cols="30" rows="10" className='outline-none py-1 resize-none'></textarea>
                <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'>Send</button>
            </form>
        </div>
    )
}

export default SendMail