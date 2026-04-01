import React from 'react'
import Navbar from './components/Navbar.jsx'
import API from './components/Api.jsx'
export default function App() {
  return (
    <div className='bg-black min-h-screen text-white text-5xl' >
      <Navbar/>
      <API/>
    </div>
  )
}
