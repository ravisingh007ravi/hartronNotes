import React from 'react'
import { Data } from './Data'

export default function Home() {

  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5     p-4">

      {
        Data.map(({title,Offer,price,img}, index) => (
          <div key={index} className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

            {/* Offer Badge */}
            <div className="relative">
              <img
                className="h-60 w-full object-cover"
                src={img}
                alt="Headphone"
              />

              <span className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                {Offer}% OFF
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                {title}
              </h2>



              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-bold text-green-600">
                  ₹{price}
                </span>

                <span className="text-gray-400 line-through">
                  ₹399
                </span>
              </div>

              <button className="w-full mt-5 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
