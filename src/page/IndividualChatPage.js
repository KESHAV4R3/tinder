import React, { useState, useRef } from 'react'
import { IoAttachSharp } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoCamera } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { toast } from 'react-toastify'
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const IndividualChatPage = () => {

  const location = useLocation();
  const { state } = location;
  const { name, profile } = state;
  const [sendMessage, setSendMessage] = useState("");
  const [sendMesDis, setSendMesDis] = useState(false);

  function sendMes(event) {
    setSendMessage(event.target.value);
  }

  const [attachmentDysplay, setAttachmentDisplay] = useState(false);
  const [documentUpload, setDocumentUpload] = useState(null);
  const [imageUpload, setImageUplaod] = useState(null);

  const handleFileChange = (event) => {
    setDocumentUpload(event.target.files[0]);
    setAttachmentDisplay(false);
  };

  const handleImageFile = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;
    const isValidImageType = ['image/jpeg', 'image/png', 'image/gif'].includes(fileType);

    if (!isValidImageType) {
      alert('Only image files are allowed!');
      event.target.value = '';
      return;
    }
    setImageUplaod(file);
    setAttachmentDisplay(false);
  };

  // for live camera photo

  const [cameraOpen, setCameraOpen] = useState(false);
  const [imageCapture, setImageCapture] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [disCapImg, setDisCapImg] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCameraClick = () => {
    setCameraOpen(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setMediaStream(stream);
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(() => alert('unable to open the camera'));
  };

  const handleCaptureClick = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/png');
    setImageCapture(imageDataURL);
    video.srcObject.getTracks().forEach(track => track.stop());
    videoRef.current = null;
    toast.success("Photo clicked successfully!", { autoClose: 1000 });
  };

  // for recording 

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isAudioSent, setIsAudioSent] = useState(false);
  const [showRecordingUI, setShowRecordingUI] = useState(false);
  const [showAudioControls, setShowAudioControls] = useState(false);
  const audioRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [recordingIcon, setRecordingIcon] = useState(false);

  const handleRecordClick = () => {
    setShowAudioControls(true);
    setAttachmentDisplay(false);
  };

  const handleStartRecording = () => {
    setAudioUrl(null)
    setRecording(true);
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
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
        });
      })
      .catch(error => console.error('Error recording audio:', error));
  };

  const handleStopRecording = () => {
    if (audioRef.current) {
      audioRef.current.stop();
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsAudioSent(false)
  };

  const handleSendRecording = () => {
    if (!audioRef.current) {
      alert('No audio recorded. Please record audio before sending.');
      return;
    }
    handleStopRecording();
    setShowAudioControls(false);
    setShowRecordingUI(true);
    setIsAudioSent(true);
  };

  return (
    <div className='w-full h-[60%] m-auto -mt-[10px]'>
      <div className='w-full h-full relative'>

        <div className='relative w-full h-[12%] flex justify-start items-center rounded-t-[10px] gap-[50px] py-[10px] items-cent pl-[20px] screen1:pl-[50px] bg-gray-600'>
          <img src={profile} className='rounded-full w-[35px] h-[35px] screen1:w-[52px] screen1:h-[52px]' />
          <p className='select-none text-white text-[17px] screen1:text-[22px]'>{name}</p>
          {
            (recordingIcon || cameraOpen) &&
            <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHk2dHg5YjIxbXZkZXJrdDd6ZnNpbXg4eGlrOG03Z29jeWQ5NjNiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HhGPj1bAjIuNAVUFmj/giphy.webp' className='w-[50px] select-none absolute right-5' />
          }

        </div>

        <div className='w-full h-[70vh] relative border-t-0 overflow-x-hidden overflow-y-auto bg-black text-white'>
          <div className='overflow-hidden'>
            <div className=' child flex justify-start m-5'>
              <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[17px]'>hello</span>
            </div>
            <div className='flex justify-end m-5'>
              <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[17px]'>hii</span>
            </div>
            <div className='flex justify-end m-5'>
              <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[17px]'>what is up dude , how are you i hope you are fine</span>
            </div>

            {isAudioSent && audioUrl && (
              <div className='flex justify-end items-center gap-[10px] m-5'>
                <RxCross2 onClick={() => { setAudioUrl(null); setAttachmentDisplay(false) }} className='cursor-pointer' />
                <span className='rounded-lg'><audio className='h-[40px] w-[250px]' controls controlsList="nodownload" src={audioUrl} /></span>
              </div>
            )}

            {imageUpload && (
              <div className='flex justify-end items-center gap-[10px] m-5'>
                <RxCross2 onClick={() => { setAudioUrl(null); setImageUplaod(false) }} className='cursor-pointer' />
                <span className='rounded-lg'><img className='w-[150px] screen1:w-[200px] rounded-lg' src={URL.createObjectURL(imageUpload)} alt="Uploaded Image" />
                </span>
              </div>
            )}

            {documentUpload && (
              <div className='flex justify-end items-center gap-[10px] m-5'>
                <RxCross2 onClick={() => { setDocumentUpload(null); setAttachmentDisplay(false) }} className='cursor-pointer' />
                <a href={URL.createObjectURL(documentUpload)} target="_blank" className='flex items-center gap-[10px] bg-[#313131] rounded-lg p-2'>
                  <IoIosDocument />
                  <span className='text-blue-300'>{documentUpload.name}</span>
                </a>
              </div>
            )}

            {imageCapture && disCapImg && (
              <div className='flex justify-end items-center gap-[10px] m-5'>
                <RxCross2 onClick={() => setImageCapture(null)} className='cursor-pointer' />
                <span className='rounded-lg'><img className='w-[150px] screen1:w-[200px] rounded-lg' src={imageCapture} alt="Captured Image" /></span>
              </div>
            )}

            {
              sendMesDis && <div className=' child flex justify-end m-5'>
                <span className='bg-[#313131] px-[20px] py-[5px] rounded-lg text-[17px]'>{sendMessage}</span>
              </div>
            }

          </div>
        </div>

        <div className='w-full text-white flex items-center justify-between px-[10px] pb-[20px] pt-[15px] bg-black rounded-b-[10px]'>
          <input type='text' value={`${sendMesDis ? '' : `${sendMessage}`}`} placeholder='enter the message...' className='text-[18px] w-[68%] screen1:w-[76%] screen2:w-[82%] focus-none bg-[#313131] py-2 px-3 rounded-lg outline-none border-none' onChange={sendMes} />
          <div className='text-[23px] screen2:text-[25px] flex justify-between item-center gap-[12px]'>
            <IoCamera className='cursor-pointer' onClick={() => { handleCameraClick(); setShowAudioControls(false); setAttachmentDisplay(false) }} />
            <IoAttachSharp
              className={`cursor-pointer ${cameraOpen ? 'cursor-pointer pointer-events-none' : ''}`}
              onClick={() => {
                if (!cameraOpen) {
                  setAttachmentDisplay(!attachmentDysplay);
                }
              }}
            />
            <RiSendPlaneLine
              className={`cursor-pointer ${cameraOpen ? 'cursor-pointer pointer-events-none' : ''}`}
              onClick={() => { setSendMesDis(true) }}
            />
          </div>
        </div>

        {/* file attachment */}

        {
          attachmentDysplay &&
          <div className='flex justify-evenly items-center text-[25px] text-white absolute w-[150px] h-[50px] screen1:w-[200px] bg-[#313131] rounded-lg -bottom-[90px] right-5  screen1:right-5'>
            <label htmlFor="file-upload" className='cursor-pointer'>
              <IoIosDocument aria-label="Upload document" />
              <input id="file-upload" type='file' className='hidden' onChange={handleFileChange} />
            </label>
            <FaHeadphones className='cursor-pointer' onClick={() => { handleRecordClick() }} aria-label="Start/Stop recording" />
            <label htmlFor="image-upload" className='cursor-pointer'>
              <MdInsertPhoto aria-label="Upload image" />
              <input id="image-upload" type='file' className='hidden' onChange={handleImageFile} />
            </label>
          </div>
        }

        {/* camera UI */}

        {cameraOpen && (
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
            <div className='flex flex-col justify-center items-center relative'>

              <button className='absolute z-[100] top-3 right-12 screen1:right-20 cursor-pointer' onClick={(e) => {
                e.preventDefault();
                console.log('Cross button clicked');
                if (mediaStream) {
                  mediaStream.getTracks().forEach(track => track.stop());
                  setMediaStream(null);
                }
                setImageCapture(null);
                setCameraOpen(false);
              }}>
                <RxCross2 className='text-[20px] text-black' />
              </button>

              {imageCapture ? (
                <img src={imageCapture} className='w-[80%] h-[80%] rounded-lg' />
              ) : (
                <video ref={videoRef} className='w-[80%] h-[80%] rounded-lg' />
              )}
              <div className='flex justify-evenly w-full'>
                {imageCapture ? (
                  <>
                    <button className='text-white mt-5 bg-[#313131] p-2 rounded-lg text-[12px] screen1:text-[18px]' onClick={() => {
                      setDisCapImg(true);
                      setCameraOpen(false);
                    }}>Send</button>
                    <button className='text-white mt-5 bg-[#313131] p-2 rounded-lg text-[12px] screen1:text-[18px]' onClick={() => {
                      setImageCapture(null);
                      setCameraOpen(true);
                      navigator.mediaDevices.getUserMedia({ video: true })
                        .then(stream => {
                          videoRef.current.srcObject = stream;
                          videoRef.current.play();
                        })
                        .catch(error => console.error('Error opening camera:', error));
                    }}>Retake</button>
                  </>
                ) : (
                  <button className='text-white mt-5 bg-[#313131] p-2 px-10 rounded-lg text-[15px] screen1:text-[18px]' onClick={handleCaptureClick}>Click</button>
                )}
              </div>
              <canvas ref={canvasRef} className='hidden' />
            </div>
          </div>
        )}

        {/* audio recording - UI */}

        {showAudioControls && (
          <div className={`flex flex-col justify-center items-center gap-2 text-white absolute w-[180px] h-[180px] screen1:w-[200px] bg-[#313131] rounded-lg -bottom-[120px] right-5`}>
            <RxCross2 className='absolute screen1:top-2 top-1 right-1 screen1:right-2 cursor-pointer' onClick={() => { setAudioUrl(null); setShowAudioControls(false) }} />
            <button className='bg-black text-[14px] text-white font-bold py-2 px-4 rounded' onClick={() => { handleStartRecording(); setRecordingIcon(true) }}>Start Recording</button>
            <button className='bg-black text-[14px] text-white font-bold py-2 px-4 rounded' onClick={() => {
              handleStopRecording();
              setRecordingIcon(false)
            }}>Stop Recording</button>
            <button className='bg-black text-[14px] text-white font-bold py-2 px-4 rounded' onClick={() => {
              handleStopRecording();
              handleSendRecording();
              setIsAudioSent(true);
            }}>Send Recording</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default IndividualChatPage
