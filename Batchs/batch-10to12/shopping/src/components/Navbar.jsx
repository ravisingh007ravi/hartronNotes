import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUsers, FaUser, FaBook, FaDog } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Navbar() {

  const [open, setOpen] = useState(true)

  const MENUDATA = [
    { icon: <FaUsers />, name: "All User", slug: "/all-user" },
    { icon: <FaUser />, name: "Random User", slug: "/random-user" },
    { icon: <FaBook />, name: "All Book", slug: "/all-book" },
    { icon: <FaBook />, name: "Random Book", slug: "/random-book" },
    { icon: <FaDog />, name: "All Dogs", slug: "/all-dogs" },
    { icon: <FaDog />, name: "Random Dog", slug: "/random-dog" },
  ];
  return (
    <div>

      <nav className='flex justify-between items-center p-5 bg-black text-white sue-ellen-francisco-regular'>
        <h1>RS</h1>

        <ul className='lg:flex hidden gap-5'>
          {
            MENUDATA.map((items, index) => (
              <a href={items.slug}>
                <div className='flex gap-3 items-center hover:bg-linear-to-r from-cyan-500 via-[#0492f0] to-blue-500 px-3 py-2 rounded-md'>
                  {items.icon}
                  <li>{items.name}</li>
                </div>
              </a>
            ))
          }
        </ul>

        <div className='lg:flex hidden gap-5'>
          <a href="https://github.com/ravisingh007ravi" target='blank'><FaGithub /></a>
          <a href=""><FaLinkedinIn /></a>
          <a href=""><FaInstagram /></a>
        </div>

        <div onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer'>
          {
            open ? <FaBarsStaggered /> : <IoClose />
          }
        </div>
      </nav>

    </div>
  )
}
