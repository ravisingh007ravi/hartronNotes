import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer.jsx'
import Product from './components/product/Product.jsx'
import Signup from './components/Auth/Signup.jsx'
import Login from './components/Auth/Log.jsx'
import OTP from './components/OtpVerification.jsx'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:product-name' element={<Product />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp-verification/:id' element={<OTP />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
