import React from 'react'
import Navbar from './components/Navbar.jsx'
import API from './components/Api.jsx'
import YoutubeAPi from './components/YoutubeAPI.jsx'
import User from './components/User.jsx'
import SelfAPi from './components/SelfApi.jsx'
export default function App() {
  return (
    <div className='bg-black text-white min-h-screen'>
      {/* <YoutubeAPi/> */}
      {/* <API/> */}
      {/* <User/> */}
        <SelfAPi/>      
    </div>
  )
}
