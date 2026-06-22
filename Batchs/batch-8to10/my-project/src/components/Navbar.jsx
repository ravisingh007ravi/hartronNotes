import { useState } from 'react'
import { IoIosHome, IoMdMale, IoMdFemale, IoMdPeople, } from "react-icons/io";
import { FaBoxOpen, FaBlog, FaPhoneAlt, } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";


export default function Navbar() {

  const [toggle, setToggle] = useState(true)

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

  const AuthData = [
    { name: 'SignUp', slug: "/signup", icons: <IoIosHome /> },
    { name: 'SignIn', slug: "/signin", icons: <IoIosHome /> },
  ]


  return (
    <div>

      <nav className='flex justify-between py-5 px-20 items-center bg-gray-950 text-white'>

        <h1>Logo</h1>

        <ul className='md:flex hidden gap-5 items-center'>

          {
            MENUData.map((v, i) => (
              <li key={i} className='flex items-center gap-3'>
                {v.icon}
                <h1>{v.name}</h1>
              </li>
            ))
          }

        </ul>

        <div className='md:flex hidden gap-5'>
          {
            AuthData.map((v, i) => (

              <a className='flex  items-center gap-3' href={v.slug}>
                {v.icons}
                <h1>{v.name}</h1>
              </a>

            ))
          }
        </div>

        <div onClick={() => setToggle(!toggle)} className='md:hidden '>
          {
            toggle ? <IoCloseSharp /> : <FaBarsStaggered />
          }
        </div>

        {
          toggle &&
          <ul className='flex flex-col w-full mt-108 py-5  transition duration-700 md:hidden gap-5 items-center absolute left-0 bg-gray-400'>

            {
              MENUData.map((v, i) => (
                <li key={i} className='flex items-center gap-3'>
                  {v.icon}
                  <h1>{v.name}</h1>
                </li>
              ))
            }

            <div className='flex gap-5'>
              {
                AuthData.map((v, i) => (

                  <a className='flex  items-center gap-3' href={v.slug}>
                    {v.icons}
                    <h1>{v.name}</h1>
                  </a>

                ))
              }
            </div>

          </ul>
        }

      </nav>

    </div>
  )
}


