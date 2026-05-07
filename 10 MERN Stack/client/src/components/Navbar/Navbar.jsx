import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaSearch, 
    FaShoppingCart, 
    FaUser, 
    FaBars, 
    FaTimes, 
    FaSun, 
    FaMoon,
    FaThLarge,
    FaMugHot,
    FaHome,
    FaGamepad,
    FaAppleAlt,
    FaMicrochip,
    FaMobileAlt,
    FaGem,
    FaTshirt
} from "react-icons/fa";
import logo from '../../assets/logo.png'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const MENUDATA = [
        {icon: <FaThLarge />, name: 'All', slug: 'all'},
        {icon: <FaMugHot />, name: 'Cafe', slug: 'cafe'},
        {icon: <FaHome />, name: 'Home', slug: 'home'},
        {icon: <FaGamepad />, name: 'Toys', slug: 'toys'},
        {icon: <FaAppleAlt />, name: 'Fresh', slug: 'fresh'},
        {icon: <FaMicrochip />, name: 'Electronics', slug: 'electronics'},
        {icon: <FaMobileAlt />, name: 'Mobile', slug: 'mobile'},
        {icon: <FaGem />, name: 'Beauty', slug: 'beauty'},
        {icon: <FaTshirt />, name: 'Fashion', slug: 'fashion'},
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
            <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                {/* Main Top Section */}
                <div className="flex items-center justify-between py-3 gap-2 sm:gap-4 md:gap-6">
                    {/* Logo Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group shrink-0"
                    >
                        <img 
                            src={logo} 
                            alt="PureBuy Logo" 
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain" 
                        />
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                            PureBuy
                        </h1>
                    </motion.div>

                    {/* Search Bar - Tablet and up */}
                    <div className="hidden md:flex flex-1 max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-2 lg:mx-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 lg:px-4 py-1.5 lg:py-2 pl-8 lg:pl-10 pr-3 lg:pr-4 rounded-lg border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-sm lg:text-base"
                            />
                            <FaSearch className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xs lg:text-sm" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                            <FaSun className="text-yellow-500 dark:hidden text-sm sm:text-base lg:text-lg" />
                            <FaMoon className="hidden dark:block text-gray-300 text-sm sm:text-base lg:text-lg" />
                        </motion.button>

                        {/* Login Button - Tablet and up */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-medium bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm lg:text-base"
                        >
                            <FaUser className="text-xs lg:text-sm" />
                            <span>Login</span>
                        </motion.button>

                        {/* Cart Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        >
                            <FaShoppingCart className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300" />
                            <span className="hidden sm:inline text-gray-700 dark:text-gray-300 text-sm lg:text-base">Cart</span>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-4.5 h-4.5 sm:min-w-5 sm:h-5 flex items-center justify-center px-1">
                                3
                            </span>
                        </motion.button>

                        {/* Mobile Menu Button - Mobile only */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        >
                            {isMobileMenuOpen ? 
                                <FaTimes className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" /> : 
                                <FaBars className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
                            }
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Search Bar - Mobile only */}
                <div className="md:hidden pb-3">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-3 py-1.5 pl-8 pr-3 rounded-lg border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-sm"
                        />
                        <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xs" />
                    </div>
                </div>

                {/* Categories Section - Desktop Horizontal Scroll */}
                <div className="hidden md:flex items-center gap-1 lg:gap-2 py-3 overflow-x-auto scrollbar-hide border-t border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    {MENUDATA.map((item,index) => (
                      <a key={index} href={item.slug}>
                          <motion.button
                            key={item.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(item.slug)}
                            className={`flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 text-sm lg:text-base ${
                                activeCategory === item.slug
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 dark:hover:text-green-400'
                            }`}
                        >
                            <span className={`text-sm lg:text-base ${activeCategory === item.slug ? 'text-white' : 'text-green-600 dark:text-green-400'}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </motion.button>
                      </a>
                    ))}
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            />
                            
                            {/* Mobile Menu Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden overflow-y-auto"
                            >
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <img src={logo} alt="PureBuy" className="w-8 h-8 object-contain" />
                                        <h2 className="text-xl font-bold bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                            Menu
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <FaTimes className="text-gray-700 dark:text-gray-300 text-xl" />
                                    </button>
                                </div>

                                {/* User Info */}
                                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-green-600 text-white font-medium"
                                    >
                                        <FaUser />
                                        <span>Login / Sign Up</span>
                                    </motion.button>
                                </div>

                                {/* Categories List */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Categories</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {MENUDATA.map((item,i) => (
                                           <a key={i} href={item.slug}>
                                             <motion.button
                                                key={item.name}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    setActiveCategory(item.slug);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                                                    activeCategory === item.slug
                                                        ? 'bg-green-600 text-white'
                                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                            >
                                                <span className={`text-base ${activeCategory === item.slug ? 'text-white' : 'text-green-600 dark:text-green-400'}`}>
                                                    {item.icon}
                                                </span>
                                                {item.name}
                                            </motion.button>
                                           </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Cart Summary */}
                                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-800"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FaShoppingCart className="text-green-600 dark:text-green-400" />
                                            <span className="font-medium text-gray-800 dark:text-white">My Cart</span>
                                        </div>
                                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm">3 items</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}