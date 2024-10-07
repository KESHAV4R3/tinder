import './App.css';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';
import MessagePage from './page/MessagePage'
import IndividualChatPage from './page/IndividualChatPage'
import Header from './components/home-page/Header';
import ErrorPage from './page/ErrorPage'
import Footer from './components/home-page/Footer';

function App() {
  return (
    <div className='h-[100vh] flex justify-center overflow-x-hidden overflow-y-hidden bg-black'>
      <div className=' w-[90%] min-w-[300px] max-w-[800px] bg-gray-900 p-[10px]'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/message' element={<MessagePage />} />
          <Route path='/chats' element={<IndividualChatPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;