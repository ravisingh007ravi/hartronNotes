import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserInput from './components/UserInput'
import Home from './components/Home/Home'
import APIProduct from './components/APIProduct'
import RandomUser from './components/RandomUser'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-black min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/all-user' element={<APIProduct />} />
          <Route path='/all-product' element={<Home />} />
          <Route path='/user-input' element={<UserInput />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}


