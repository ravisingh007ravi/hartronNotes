import React from 'react'
import Navbar from './components/Navbar.jsx'
import API from './components/Api.jsx'
import YoutubeAPi from './components/YoutubeAPI.jsx'
export default function App() {
  return (
    <div className='bg-black text-white min-h-screen'>
      <YoutubeAPi/>
      {/* <API/> */}
    </div>
  )
}
