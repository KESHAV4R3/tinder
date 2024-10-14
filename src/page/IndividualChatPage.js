import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { IoAttachSharp } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoCamera } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { toast } from 'react-toastify'

const IndividualChatPage = () => {
  const { user_name, user_photo } = useSelector(state => state.chatSlice);
  const [attachmentDysplay, setAttachmentDisplay] = useState(false);
  const [documentUpload, setDocumentUpload] = useState(null);
  const [imageUpload, setImageUplaod] = useState(null);

  const handleFileChange = (event) => {
    setDocumentUpload(event.target.files[0]);
  };

  // for recording 

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const handleRecordClick = () => {
    if (!recording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    setRecording(true);
    toast.success('Recording started!', { autoClose: 1000 });
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaStreamRef.current = stream;
        audioRef.current = new MediaRecorder(stream);
        audioRef.current.start();
        const audioChunks = [];
        audioRef.current.addEventListener('dataavailable', event => {
          audioChunks.push(event.data);
        });
        audioRef.current.addEventListener('stop', () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          setAudioBlob(audioBlob);
        });
      })
      .catch(error => console.error('Error recording audio:', error));
  };

  const stopRecording = () => {
    setRecording(false);
    toast.info('Recording stopped!', { autoClose: 1000 });
    audioRef.current.stop();
    mediaStreamRef.current.getTracks().forEach(track => track.stop());
  };

  return (
    <div className='w-[90%] h-[73%] m-auto'>
      <div className='w-full h-full relative'>

        <div className='w-full flex justify-start items-center rounded-t-[10px] gap-[50px] py-[10px] items-cent pl-[20px] screen1:pl-[50px] bg-gray-600'>
          <img src={user_photo} className='rounded-full w-[45px] h-[45px] screen1:w-[70px] screen1:h-[70px]' />
          <p className='select-none text-white text-[17px] screen1:text-[27px]'>{user_name}</p>
        </div>

        <div className='parent w-full relative rounded-b-[10px] border-t-0 overflow-x-hidden overflow-y-auto h-full bg-black text-white'>
          <div className=' child flex justify-start m-5'>
            <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[12px] screen1:text-[17px]'>hello</span>
          </div>
          <div className='flex justify-end m-5'>
            <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[12px] screen1:text-[17px]'>hii</span>
          </div>
          <div className='flex justify-end m-5'>
            <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[12px] screen1:text-[17px]'>what is up dude , how are you i hope you are fine</span>
          </div>
          <div className='w-full'>
            <input type='text' placeholder='enter the message...' className='text-[12px] w-[55%] screen1:text-[16px] screen1:w-[68%] screen2:w-[75%] screen2:text-[18px] focus-none absolute bottom-5 left-5  bg-[#313131] py-2 px-3 rounded-lg outline-none border-none' />
            <div className='text-[16px] screen1:text-[23px] screen2:text-[25px] absolute bottom-8 right-6 flex justify-between item-center gap-[12px]'>
              <IoCamera className='cursor-pointer' />
              <IoAttachSharp className='cursor-pointer' onClick={() => { setAttachmentDisplay(!attachmentDysplay) }} />
              <RiSendPlaneLine className='cursor-pointer' />
            </div>
          </div>
        </div>

        {/* file attachment */}{
          attachmentDysplay &&
          <div className='flex justify-evenly items-center text-[16px] screen1:text-[23px] screen2:text-[25px] text-white absolute w-[200px] h-[60px] bg-[#313131] rounded-lg bottom-1 right-10'>
            <label htmlFor="file-upload" className='cursor-pointer'>
              <IoIosDocument aria-label="Upload document" />
              <input id="file-upload" type='file' className='hidden' onChange={handleFileChange} />
            </label>

            <FaHeadphones className='cursor-pointer' onClick={handleRecordClick} aria-label="Start/Stop recording" />

            <label htmlFor="image-upload" className='cursor-pointer'>
              <MdInsertPhoto aria-label="Upload image" />
              <input id="image-upload" type='file' className='hidden' onChange={handleFileChange} />
            </label>

          </div>
        }
      </div>
    </div>

  )
}

export default IndividualChatPage
