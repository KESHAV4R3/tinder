import React, { useEffect } from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { setHome, removeHome } from '../../redux/slices/applicationSlice';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { isHome } = useSelector(state => state.applicationSlice);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            dispatch(setHome());
        } else {
            dispatch(removeHome());
        }
    }, [location]);

    return (
        <div className='flex justify-between p-[10px] screen1:p-[20px] items-center'>

            <IconButton style={{ color: '#E0E0E0' }} fontSize={250}>
                {
                    isHome ?
                        <Person2Icon className='header-element text-white  text-[32px] screen1:text-md screen2:text-lg' fontSize='large' onClick={() => { navigate('/') }} />
                        :
                        <ArrowBackIosIcon className='header-element text-white  text-[32px] screen1:text-md screen2:text-lg' fontSize='large' onClick={() => { navigate(-1) }} />
                }
            </IconButton>
            <img onClick={() => { navigate('/') }} src='https://media.tenor.com/mTt2UyQmvuwAAAAj/logo.gif' className='-mt-[35px] w-[80px] screen1:w-[110px] screen1:-mt-[50px] screen2:w-[150px] screen2:-mt-[70px]' />
            <IconButton style={{ color: '#E0E0E0' }} fontSize={250} onClick={() => { navigate('/message') }}>
                <QuestionAnswerIcon fontSize='large' className='header-element text-white' />
            </IconButton>
        </div>
    )
}

export default Header
