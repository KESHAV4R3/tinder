import React, { useState } from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import database from '../../Firebase/fireBase';
import { useSelector } from 'react-redux';

const Footer = () => {

    const [isHeartClick, setHeartClick] = useState(false);
    const [isStarClick, setStarClick] = useState(false);
    const [isStormClick, setStormClick] = useState(false);

    function clickHandler(data) {
        if (data == "heart") {
            setHeartClick(!isHeartClick);
            updateResponse("heart");
        }
        else if (data == "star") {
            setStarClick(!isStarClick);
            updateResponse("star");
        }
        else if (data == "storm") {
            setStormClick(!isStormClick);
            updateResponse("storm");
        }
    }

    const { currentPersonData } = useSelector(state => state.applicationSlice);

    async function updateResponse(key) {
        if (currentPersonData != null) {
            const docRef = doc(database, "user-data", currentPersonData);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const currentValue = docSnap.data()[key] || 0;
                if (key == "star") {
                    if (!isStarClick) {
                        // increase the count
                        await updateDoc(docRef, {
                            [key]: currentValue + 1
                        });
                    }
                    else {
                        // decrease the heart count
                        await updateDoc(docRef, {
                            [key]: currentValue - 1
                        });
                    }
                }
                else if (key == "heart") {
                    if (!isHeartClick) {
                        // increase the count
                        await updateDoc(docRef, {
                            [key]: currentValue + 1
                        });
                    }
                    else {
                        // decrease the heart count
                        await updateDoc(docRef, {
                            [key]: currentValue - 1
                        });
                    }
                }
                else if (key == "storm") {
                    if (!isStormClick) {
                        // increase the count
                        await updateDoc(docRef, {
                            [key]: currentValue + 1
                        });
                    }
                    else {
                        // decrease the heart count
                        await updateDoc(docRef, {
                            [key]: currentValue - 1
                        });
                    }
                }

            } else {
                console.log("Document does not exist");
            }
        }
        else {
            alert("no data")
        }
    }

    function reload() {
        window.location.reload();
    }

    return (
        <div>
            {
                currentPersonData == null ?
                    <div className='w-full flex items-center justify-center text-white px-1 screen1:px-10 mt-[50px]' ><IconButton style={{ color: '#ff6200' }} fontSize={1050} onClick={reload}>
                        <VscDebugRestart className='text-[#ff6200] text-[26px] screen1:text-[30px] screen2:text-[34px]' />
                    </IconButton> </div>
                    :
                    <div className='w-full flex items-center justify-between text-white px-1 screen1:px-10 mt-[50px]' >
                        <IconButton style={{ color: '#ff6200' }} fontSize={1050} onClick={reload}>
                            <VscDebugRestart className='text-[#ff6200] text-[26px] screen1:text-[30px] screen2:text-[34px]' />
                        </IconButton>

                        <IconButton className={currentPersonData === null ? 'hidden' : 'flex'} style={{ color: '#0026ff' }} fontSize={1050}
                            onClick={(event) => {
                                clickHandler("star")
                            }}>
                            <FaStar className={`${!isStarClick ? 'text-white' : 'text-[#0026ff]'}  text-[26px] screen1:text-[320x] screen2:text-[34px]`} />
                        </IconButton>

                        <IconButton className={currentPersonData === null ? 'hidden' : 'flex'} style={{ color: '#1aff00' }} fontSize={1050}
                            onClick={(event) => {
                                clickHandler("heart")
                            }}>
                            <FaHeart className={`${!isHeartClick ? 'text-white' : 'text-[#1aff00]'} text-[26px] screen1:text-[30px] screen2:text-[34px]`} />
                        </IconButton>

                        <IconButton className={currentPersonData === null ? 'hidden' : 'flex'} style={{ color: '#6f00ff' }} fontSize={1050}
                            onClick={(event) => {
                                clickHandler("storm")
                            }}>
                            <AiFillThunderbolt className={`${!isStormClick ? 'text-white' : 'text-[#6f00ff]'} text-[26px] screen1:text-[30px] screen2:text-[34px]`} />
                        </IconButton>

                    </div>
            }

        </div>
    )
}

export default Footer
