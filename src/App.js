import Home from './page/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import MessagePage from './page/MessagePage'
import IndividualChatPage from './page/IndividualChatPage'
import Header from './components/home-page/Header';
import ErrorPage from './page/ErrorPage'
import Footer from './components/home-page/Footer';

function App() {

  const location = useLocation();

  return (
    <div className='h-[100vh] flex justify-center overflow-x-hidden overflow-y-auto   screen1:bg-black '>
      <div div className='w-full min-w-[300px] max-w-[800px] p-[10px] bg-gray-900'>
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
    </div>
  );
}

export default App;