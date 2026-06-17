import React from 'react'
import { IoIosHome, IoMdMale, IoMdFemale, IoMdPeople, } from "react-icons/io";
import { FaBoxOpen, FaBlog, FaPhoneAlt, } from "react-icons/fa";


export default function Navbar() {

  const MENUData = [
    {
      name: "Home",
      icon: <IoIosHome />,
      slug: "/",
    },
    {
      name: "Men",
      icon: <IoMdMale />,
      slug: "/men",
    },
    {
      name: "Women",
      icon: <IoMdFemale />,
      slug: "/women",
    },
    {
      name: "Kids",
      icon: <IoMdPeople />,
      slug: "/kids",
    },
    {
      name: "Products",
      icon: <FaBoxOpen />,
      slug: "/products",
    },
    {
      name: "Blogs",
      icon: <FaBlog />,
      slug: "/blogs",
    },
    {
      name: "Contact Us",
      icon: <FaPhoneAlt />,
      slug: "/contact-us",
    },
  ];


  return (
    <div>

      <nav className='flex justify-between py-5 px-20 items-center bg-gray-950 text-white'>

        <h1>Logo</h1>

        <ul className='flex gap-5 items-center'>

          {
            MENUData.map((v, i) => (
              <li key={i} className='flex items-center gap-3'>
                {v.icon}
                <h1>{v.name}</h1>
              </li>
            ))
          }

        </ul>

        <div>
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </nav>

    </div>
  )
}
