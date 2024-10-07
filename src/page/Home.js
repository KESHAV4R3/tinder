import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import Card from '../components/home-page/Card'
import database from '../Firebase/fireBase'
import { Atom } from 'react-loading-indicators'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = database.collection('user-data').onSnapshot(snapshot => {
      setData(snapshot.docs.map(doc => doc.data()));
      setLoading(false);
    });
    return unsubscribe;
  }, [])
  
  return (
    <div className='relative w-full h-[72%] flex items-center justify-center'>
      {
        isLoading == true ? <Atom color="#002D62" size="medium" text="" textColor="#2c69e8" /> :
          data.map(value =>
            <TinderCard className={`absolute z-[${value.id}]`} key={value.id} preventSwipe={['up', 'down']}>
              <Card value={value} />
            </TinderCard>)
      }


    </div>
  )
}

export default Home
