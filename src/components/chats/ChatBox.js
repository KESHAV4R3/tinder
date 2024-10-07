import React from 'react'
import { useNavigate } from 'react-router-dom'


const ChatBox = ({ name, message, timeStamp, profile }) => {
    const navigate = useNavigate();
    return (
        <div className='w-full flex justify-between items-center bg-[#ffffffc1] h-[60px] rounded-lg px-[10px]' onClick={() => { navigate('/chats')}}>
            <div className='flex gap-[16px]'>
                <img src={profile} className='rounded-full w-[39px] h-[39px] screen1:w-[50px] screen1:h-[50px]' />
                <div className='flex flex-col'>
                    <p className='text-[13px] screen1:text-[17px]'>{`${name}`}</p>
                    <p className='text-[13px] screen1:text-[17px] text-gray-600'>{message.substring(0, 10)}...</p>
                </div>
            </div>

            <p className='text-[10px] screen1:text-[15px] text-gray-600'>{timeStamp}</p>
        </div>
    )
}

export default ChatBox