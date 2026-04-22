import React from 'react'
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";

export default function Navbar() {

    const MENUDATA = [
        { name: "Home", icons: <FaHome />, dir: "/" },
        { name: "Product", icons: <AiOutlineProduct />, dir: "/" },
        { name: "About", icons: <FcAbout />, dir: "/" },
        { name: "Contact", icons: <FaHome />, dir: "/" },
        { name: "Blog", icons: <FaHome />, dir: "/" },
    ]
    return (
        <div>
            <nav className='flex items-center justify-between bg-gray-400 shadow-lg py-2 px-10'>

                {/* logo  */}
                <h1>Logo</h1>

                {/* Menu Bar  */}  
                <ul className='flex items-center gap-5'>

                    {
                        MENUDATA.map((v,i) => (
                            <li className='flex items-center gap-2'>
                               {v.icons}
                                <h1>{v.name}</h1>
                            </li>
                        ))
                    }

                </ul>

                {/* Auth  */}
                <div className='flex items-center gap-5'>
                    <button className='bg-blue-700 text-white px-2 rounded-md py-1 hover:bg-blue-900 hover:scale-115 duration-300 hover:text-red-400'>Sign Up</button>
                    <button className='bg-orange-700 text-white px-2 rounded-md py-1 hover:bg-orange-900 hover:scale-115 duration-300 hover:text-red-400'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}
