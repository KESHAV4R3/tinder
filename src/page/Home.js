import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TinderCard from 'react-tinder-card'
import Card from '../components/home-page/Card'

const Home = () => {

  const { userData = [] } = useSelector(state => state.dataSlice);
  const [displayData, setDisplayData] = useState(userData);
  const [swipeCount, setSwipeCount] = useState(0);

  if (swipeCount == userData.length) {
    window.location.reload()
  }

  return (
    <div className='relative w-full h-[72%] flex items-center justify-center'>
      {
        displayData?.map((value, index) =>
          <TinderCard className={`absolute`} key={index} preventSwipe={['up', 'down']}
            onSwipe={() => { setSwipeCount(swipeCount + 1) }}>
            <Card value={value} />
          </TinderCard>)
      }
    </div>
  )

}

export default Home
