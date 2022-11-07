import react from 'react'
import { Header } from '../layouts/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/body.scss'
  
const PagesIndex = () => {
     
    return(
        <div className='view'>
                <BrowserRouter>
                    <div className='flex-wrap'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className='wrap'>
                        <Header />
                        <Routes>
                          <Route path="/" element={<></>} />
                          <Route path="/" element={<></>} />
                          <Route path="/" element={<></>} />
                          <Route path='/' element={<></>} />
                          <Route path='/' element={<></>} />
                        </Routes>
                    </div>
                    </div>
                </BrowserRouter>
        </div>
    )
}

export default PagesIndex;