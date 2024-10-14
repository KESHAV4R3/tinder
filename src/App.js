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
    <div className='h-[100vh] flex justify-center overflow-x-hidden overflow-y-hidden bg-black'>
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
    </div>
  );
}

export default App;