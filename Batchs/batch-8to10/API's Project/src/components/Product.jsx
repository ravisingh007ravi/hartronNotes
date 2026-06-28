import { useState, useEffect } from 'react'
import axios from 'axios'
import { ImUserCheck } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function Product() {

  const [data, setData] = useState([])

  const FetchData = async () => {

    const url = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=20&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech'
    const data = await axios.get(url)
    setData(data.data.data.data)
  }


  useEffect(() => {
    FetchData()
  }, [])


  return (
    <div className=' bg-black h-screen'>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 '>
        {
          data.map((items, index) => (
            <div key={index} className='bg-white '>

              <img className='h-90 w-full bg-cover object-cover' src={items?.volumeInfo?.imageLinks?.thumbnail} alt="" />

              <h1>{items?.volumeInfo?.title}</h1>
              <h1>{items?.volumeInfo?.subtitle}</h1>
              <div className='flex flex-col gap-1 mt-3'>
                <div className='flex items-center gap-3'>
                  <ImUserCheck />
                  <h1>{
                    items?.volumeInfo?.authors ?
                      items?.volumeInfo?.authors.map((name, index) => (<h1>{name}</h1>))
                      : "Not Found Author"
                  }
                  </h1>
                </div>

                <div className='flex items-center gap-3'>
                  <FaRegStar/>
                  <h1>
                    {items.volumeInfo.averageRating?items.volumeInfo.averageRating:'Not Found'}
                  </h1>
                </div>

                <div className='flex items-center gap-3'>
                  <BsCalendar2DateFill/>
                  <h1>
                    {items.volumeInfo.publishedDate?items.volumeInfo.publishedDate:'Not Found'}
                  </h1>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
