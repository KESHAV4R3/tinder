import React from 'react'
import ChatBox from '../components/chats/ChatBox'

const MessagePage = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='h-[70vh] w-[90%] bg-[#15151861] rounded-lg flex flex-col items-center gap-[20px] p-[20px]'>
        <ChatBox
          name="Virat Kohli"
          message="what is up dude , how are you i hope you are fine"
          timeStamp="50 sec ago"
          profile='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg/260px-Virat_Kohli_in_New_Delhi_in_December_2018.jpg'
        />

        <ChatBox
          name="Mahendra S. Dhoni"
          message="what is up dude , how are you i hope you are fine"
          timeStamp="2 hrs ago"
          profile='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
        />

        <ChatBox
          name="Sunil Chhetri"
          message="what is up dude , how are you i hope you are fine"
          timeStamp="9 hrs ago"
          profile='https://c.files.bbci.co.uk/D99D/production/_130290755_gettyimages-1082237082-594x594.jpg'
        />

        <ChatBox
          name="Dr. S. Jaishankar"
          message="what is up dude , how are you i hope you are fine"
          timeStamp="5 sec ago"
          profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjXeY45IHM9tTwWTHFGy2faPcXRM6vHs1LQ&s'
        />
      </div>
    </div>
  )
}

export default MessagePage
