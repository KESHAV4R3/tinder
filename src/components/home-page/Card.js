import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FaHeart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const Card = ({ value }) => {

    return (
        <div className="relative rounded-2xl drop-shadow-xl bg-cover bg-center w-[280px] h-[280px] screen1:w-[400px] screen1:h-[400px] screen2:w-[450px] screen2:h-[450px] overflow-hidden" style={{ backgroundImage: `url(${value.url})` }}>
            <p className=' select-none absolute bottom-0 py-4  pl-5 text-[25px] text-white font-[600] w-full bg-gradient-to-t from-[#000000d0] to-transparent rounded-b-2xl'>{value.name}</p>
            <div className=' absolute gap-[5px] justify-end right-5 bottom-4 flex w-[50%]text-[15px] text-white'>
                <div>
                    <IconButton fontSize={1050}>
                        <FaStar className='text-[#0026ff] text-[16px] screen1:text-[320x] screen2:text-[24px]' />
                        <p className='text-white text-[19px] ml-[5px]'>{value.star}</p>
                    </IconButton>
                </div>

                <div>
                    <IconButton fontSize={1050}>
                        <FaHeart className='text-[#1aff00] text-[16px] screen1:text-[320x] screen2:text-[24px]' />
                        <p className='text-white text-[19px] ml-[5px]'>{value.heart}</p>
                    </IconButton>
                </div>

                <div>
                    <IconButton fontSize={1050}>
                        <AiFillThunderbolt className='text-[#6f00ff] text-[16px] screen1:text-[320x] screen2:text-[24px]' />
                        <p className='text-white text-[19px] ml-[5px]'>{value.storm}</p>
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Card