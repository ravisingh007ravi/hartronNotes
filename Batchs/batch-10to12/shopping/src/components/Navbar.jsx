import { useState } from 'react'
import { FcBusinessman, FcFilingCabinet, FcBriefcase } from "react-icons/fc";
import { GrLogin } from "react-icons/gr";
import { IoIosCreate } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";


export default function Navbar() {

  const [open, setOpen] = useState(true)

  const MenuData = [
    { name: 'All USers', icons: <FcBusinessman className='text-3xl' />, link: '/all-user' },
    { name: 'All Product', icons: <FcFilingCabinet className='text-3xl' />, link: '/all-product' },
    { name: 'User Input', icons: <FcBriefcase className='text-3xl' />, link: '/user-input' },
  ]

  const Auth = [
    { name: 'Log-In', link: '/log-in', icons: <GrLogin className='text-3xl' /> },
    { name: 'Sign-Up', link: '/sign-up', icons: <IoIosCreate className='text-3xl' /> },
  ]

  return (
    <header className='p-5 z-0'>
      <nav className='flex justify-between bg-white py-4 px-2 md:px-4 lg:px-8 xl:px-15 2xl:px-20 items-center rounded-full'>

        <h1>RS</h1>

        <ul className='lg:flex hidden items-center gap-5'>
          {
            MenuData.map(({ name, icons, link }, i) => (
              <a href={link}>
                <li className='flex gap-3 items-center hover:scale-125 duration-300' key={i}>{icons} <h1>{name}</h1>  </li>
              </a>
            ))
          }
        </ul>

        <div className='lg:flex hidden gap-5 items-center'>

          {
            Auth.map(({ name, icons, link }, i) => (
              <a key={i} href={link}><button className='flex items-center gap-3'>{icons} <h1>{name}</h1></button></a>

            ))
          }
        </div>

        <div onClick={() => setOpen(!open)} className='lg:hidden'>
          {
            open ? < RiCloseLargeFill /> : <FaBarsStaggered />
          }
        </div>

        {/* Mobile Section Data  */}
        {open && <div className='lg:hidden absolute w-full inset-s-0 top-18 px-10 '>
          <ul className='bg-white flex flex-col pb-5 items-center gap-5 rounded-b-lg'>
            {
              MenuData.map(({ name, icons, link }, i) => (
                <a href={link}>
                  <li className='flex gap-3 items-center hover:scale-125 duration-300' key={i}>{icons} <h1>{name}</h1>  </li>
                </a>
              ))
            }
            <div className='lg:hidden flex gap-5 items-center '>

              {
                Auth.map(({ name, icons, link }, i) => (
                  <a key={i} href={link}><button className='flex items-center gap-3'>{icons} <h1>{name}</h1></button></a>

                ))
              }
            </div>
          </ul>
        </div>}
      </nav>
    </header>
  )
}
