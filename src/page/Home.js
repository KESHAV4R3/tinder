import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TinderCard from 'react-tinder-card'
import Card from '../components/home-page/Card'
import database from '../Firebase/fireBase'
import { Atom } from 'react-loading-indicators'
import { updateCurrentPerson, updateCurrentPersonData } from '../redux/slices/applicationSlice'
import { toast } from 'react-toastify'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { currentPerson } = useSelector(state => state.applicationSlice);

  useEffect(() => {
    const unsubscribe = database.collection('user-data').onSnapshot(snapshot => {
      setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
    return unsubscribe;
  }, [])

  useEffect(() => {
    dispatch(updateCurrentPersonData(data.slice().map(item => item.id).reverse()[currentPerson]));
  }, [data, currentPerson, dispatch]);


  return (
    <div className='relative w-full h-[72%] flex items-center justify-center'>
      {
        isLoading == true ? <Atom color="#002D62" size="medium" text="" textColor="#2c69e8" /> :
          data.map((value, index) =>
            <TinderCard className={`absolute`} key={index} preventSwipe={['up', 'down']}
              onSwipe={(direction) => {
                if (direction === 'right') {
                  dispatch(updateCurrentPerson());
                }
                else if (direction === 'left') {
                  dispatch(updateCurrentPerson());
                }
              }} >
              <Card value={value} id={value.id} />
            </TinderCard>)
      }
    </div>
  )
}

export default Home
