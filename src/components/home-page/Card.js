import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FaHeart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";


const Card = ({ value }) => {

    return (
        <div className='flex flex-col'>

            <div className="relative rounded-2xl drop-shadow-xl bg-cover bg-center w-[300px] h-[300px] screen1:w-[400px] screen1:h-[400px] screen2:w-[450px] screen2:h-[450px] overflow-hidden" style={{ backgroundImage: `url(${value.url})` }}>
                <div className='absolute bottom-0 select-none py-4  pl-2 text-[25px] text-white font-[600] w-full bg-gradient-to-t from-[#000000] via-[#000000bd] to-transparent rounded-b-2xl'>
                    <p className='text-[22px] screen1:text-[25px] pl-3'>{value.name}</p>
                    <div className='gap-[5px] justify-start flex text-[15px] text-white'>
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
            </div>
        </div>
    )
}

export default Card