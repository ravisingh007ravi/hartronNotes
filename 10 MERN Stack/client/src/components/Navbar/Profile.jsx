import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { useAuth } from '../../context/DataContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate() // Fixed: Changed 'Nagivate' to 'navigate'
  const { setlogin } = useAuth()

  const handleLogout = () => {
    setlogin(false)
    navigate('/login')
  }

  const menuItems = [
    { 
      icon: <CgProfile className="text-lg" />, 
      label: 'Profile', 
      link: '/profile',
      action: null 
    },
    { 
      icon: <IoMdSettings className="text-lg" />, 
      label: 'Settings', 
      link: '/settings',
      action: null 
    },
    { 
      icon: <SlLogout className="text-lg" />, 
      label: 'Log out', 
      link: null,
      action: handleLogout 
    },
  ]

  return (
    <Menu as="div" className="relative ml-3 select-none">
      <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-transform hover:scale-105">
        <img
          alt="Profile avatar"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-8 rounded-full bg-gray-800 ring-2 ring-white/10 ring-offset-2 ring-offset-gray-900"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-lg bg-gray-800/95 backdrop-blur-sm py-1 shadow-lg ring-1 ring-white/10 transition-all duration-200 data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              item.link ? (
                <Link
                  to={item.link}
                  className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                    active 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className={`block w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                    active 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </button>
              )
            )}
          </MenuItem>
        ))}
        
        {/* Optional: Add divider before logout */}
        <div className="my-1 h-px bg-white/10" />
      </MenuItems>
    </Menu>
  )
}