import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FaHeart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const Card = ({ value }) => {

    return (
        <div className='flex flex-col'>

            <div className="relative rounded-2xl drop-shadow-xl bg-cover bg-center w-[300px] h-[300px] screen1:w-[400px] screen1:h-[400px] screen2:w-[450px] screen2:h-[450px] overflow-hidden" style={{ backgroundImage: `url(${value.url})` }}>
                <p className=' select-none absolute bottom-0 py-4  pl-5 text-[25px] text-white font-[600] w-full bg-gradient-to-t from-[#000000d0] to-transparent rounded-b-2xl'>{value.name}</p>
            </div>
        </div>
    )
}

export default Card