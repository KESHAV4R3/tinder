import React from 'react'
import ChatBox from '../components/chats/ChatBox'

const MessagePage = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='h-[70vh] w-[90%] bg-[#15151861] rounded-lg flex flex-col items-center gap-[20px] p-[20px]'>
        <ChatBox
          name="keshav kumar"
          message="what is up dude how are you i hope you are fime"
          timeStamp="50 sec ago"
          profile='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />

        <ChatBox
          name="keshav kumar"
          message="what is up dude how are you i hope you are fime"
          timeStamp="50 sec ago"
          profile='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />

        <ChatBox
          name="keshav kumar"
          message="what is up dude how are you i hope you are fime"
          timeStamp="50 sec ago"
          profile='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />

        <ChatBox
          name="keshav kumar"
          message="what is up dude how are you i hope you are fime"
          timeStamp="50 sec ago"
          profile='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />
      </div>
    </div>
  )
}

export default MessagePage
