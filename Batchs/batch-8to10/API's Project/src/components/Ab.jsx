import { useState } from 'react'
import { FaTimes, FaInfoCircle, FaMousePointer } from 'react-icons/fa'
import { ImSortNumbericDesc } from "react-icons/im";
import { IoIosCloseCircle } from 'react-icons/io'
import { MdCancel, MdInfo } from 'react-icons/md'

export default function Ab() {
  const [Click, setClick] = useState(false)
  const [data, setData] = useState({})

  const clickFun = async (v) => {
    setData(v)
    setClick(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative">
        {/* Modal Overlay */}
        {Click && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-90">
            <div className="bg-red-600 rounded-xl shadow-2xl w-96 p-6 transform transition-all duration-300 scale-100">
              {/* Header with close button */}
              <div className="flex justify-between items-center mb-4 border-b border-white border-opacity-20 pb-3">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <MdInfo className="text-3xl" />
                  Item Details
                </h2>
                <button
                  onClick={() => setClick(false)}
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <IoIosCloseCircle className="text-4xl hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* Content */}
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-white bg-opacity-20 rounded-full p-6 mb-4">
                  <ImSortNumbericDesc className="text-6xl text-white" />
                </div>
                <h1 className="text-7xl font-bold text-white mb-2">
                  {data}
                </h1>
                <p className="text-white text-opacity-80 text-sm">
                  Clicked item value
                </p>
              </div>

              {/* Footer */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setClick(false)}
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
                >
                  <FaTimes />
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-amber-400 min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <FaMousePointer className="text-amber-700" />
                Interactive Grid
                <FaInfoCircle className="text-amber-700" />
              </h1>
              <p className="text-gray-700 mt-2">Click on any card to view details</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7].map((v, i) => (
                <div
                  key={i}
                  onClick={() => clickFun(v)}
                  className="bg-orange-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-white bg-opacity-10 rounded-full p-3 group-hover:bg-opacity-20 transition-all">
                      <ImSortNumbericDesc className="text-3xl text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {v}
                    </div>
                    <div className="flex items-center gap-2 text-amber-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaMousePointer className="text-xs" />
                      Click me
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}