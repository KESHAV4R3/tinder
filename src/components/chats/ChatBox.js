import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const ChatBox = ({ name, message, timeStamp, profile }) => {
    const navigate = useNavigate();

    function openChat() {
        navigate(`/message/${name}`, { state: { name: name, profile: profile } })
    }

    return (
        <div className='cursor-pointer select-none w-full flex justify-between items-center bg-[#ffffffc1] h-[65px] screen1:h-[75px] rounded-lg px-[10px] object-cover' onClick={openChat}>
            <div className='flex gap-[16px]'>
                <img src={profile} className='rounded-full w-[55px] h-[55px] screen1:w-[60px] screen1:h-[60px]' />
                <div className='flex flex-col'>
                    <p className='text-[15px] font-[600] screen1:text-[17px]'>{`${name}`}</p>
                    <p className='text-[15px] screen1:text-[17px] text-gray-600'>{message.substring(0, 10)}...</p>
                </div>
            </div>

            <p className='text-[1px] screen1:text-[15px] text-gray-600'>{timeStamp}</p>
        </div>
    )
}

export default ChatBox
