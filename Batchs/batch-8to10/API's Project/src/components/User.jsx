import { useState, useEffect } from 'react'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import axios from 'axios'
export default function User() {

    const [data, setData] = useState([])
    const [limit, setlimit] = useState(5)
    const [page, setPage] = useState(1)
    const [totalitem, settotalIte] = useState(0)

    const fetchData = async () => {
        try {
            const url = `https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=${limit}`

            const DB = await axios.get(url)
            settotalIte(DB.data.data.totalItems)
            setData(DB.data.data.data)

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [limit])



    return (
        <div className='min-h-screen text-white flex flex-col  pb-10'>
            {/* top  */}
            <div className='flex justify-between items-center py-5 px-2 sm:px-5 md:px-8 lg:px-10 xl:px-15 2xl:px-20'>
                <h1>Total Product - {totalitem}</h1>
                <h1 className='text-5xl a'>All Users</h1>
                <select name="" id="" onClick={(e) => setlimit(e.target.value)}>
                    {
                        [5, 10, 20, 50, 100].map((range, index) => (
                            <option className='text-black' key={index}>{range}</option>
                        ))
                    }

                </select>
            </div>
            {/* Product Section */}
            <div className='gap-5 px-2 sm:px-5 md:px-8 lg:px-10 xl:px-15 2xl:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7'>

                {
                    data.map((item, index) => (
                        <div className=' rounded-2xl text-black bg-gray-300'>
                            <img className='w-full rounded-t-2xl bg-cover object-cover' src={item.picture.large} alt="" />
                            <div className='flex items-center gap-0.5 justify-center font-semibold text-xl b text-orange-600'>
                                <h1>{item.name.title}</h1>
                                <h1>{item.name.firts}</h1>
                                <h1>{item.name.last}</h1>

                            </div>
                            <h1 className='text-center text-lg font-semibold'>Email - {item.email}</h1>
                            <div className='p-4'>
                                <button className='bg-blue-500 w-full rounded-lg'>Click</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Paggination */}
            <div className='flex justify-center items-center gap-5'>
                <div className='flex items-center gap-2'>
                    <GrLinkPrevious />
                    <h1>Previous</h1>
                </div>
                <h1>Page - {page}</h1>
                <div className='flex items-center gap-2'>
                    <h1>Next</h1>
                    <GrLinkNext />
                </div>
            </div>
        </div>
    )
}
