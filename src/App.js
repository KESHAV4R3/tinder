import Home from './page/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import MessagePage from './page/MessagePage'
import IndividualChatPage from './page/IndividualChatPage'
import Header from './components/home-page/Header';
import ErrorPage from './page/ErrorPage'
import Footer from './components/home-page/Footer';
import GoogleAuthentication from './page/GoogleAuthentication';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
function App() {

  const location = useLocation();
  const { userAuthentication } = useSelector(state => state.applicationSlice)

  useEffect(() => {
    if (userAuthentication.length > 0) {
      toast.success("sucessfully login", { autoClose: 1000 })
    }
  }, [userAuthentication])

  return (
    <div className='h-[100vh] flex justify-center overflow-x-hidden overflow-y-hidden bg-black'>
      {
        userAuthentication.length == 0 ? <GoogleAuthentication /> :
          <div div className='w-[90%] min-w-[300px] max-w-[800px] bg-gray-900 p-[10px]'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/message'>
                <Route path='' element={<MessagePage />} />
                <Route path=':name' element={<IndividualChatPage />} />
              </Route>
              <Route path='*' element={<ErrorPage />} />
            </Routes>
            {location.pathname === '/' && <Footer />}
          </div>
      }

    </div>
  );
}

export default App;