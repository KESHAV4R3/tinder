import React from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import { ButtonBase } from '@mui/material';

const Footer = () => {
    return (
        <div className='w-full flex items-center justify-between text-white px-1 screen1:px-10 mt-[50px]'>
            <IconButton style={{ color: '#ff6200' }} fontSize={1050}>
                <VscDebugRestart className='text-[#ff6200] text-[26px] screen1:text-[30px] screen2:text-[34px]' />
            </IconButton>
            <IconButton style={{ color: '#ff0303' }} fontSize={1050}>
                <RxCross2 className='text-[#ff0303] text-[26px] screen1:text-[30px] screen2:text-[34px]' />
            </IconButton>
            <IconButton style={{ color: '#0026ff' }} fontSize={1050}>
                <FaStar className='text-[#0026ff] text-[26px] screen1:text-[320x] screen2:text-[34px]' />
            </IconButton>
            <IconButton style={{ color: '#1aff00' }} fontSize={1050}>
                <FaHeart className='text-[#1aff00] text-[26px] screen1:text-[30px] screen2:text-[34px]' />
            </IconButton>
            <IconButton style={{ color: '#6f00ff' }} fontSize={1050}>
                <AiFillThunderbolt className='text-[#6f00ff] text-[26px] screen1:text-[30px] screen2:text-[34px]' />
            </IconButton>
        </div>
    )
}

export default Footer
