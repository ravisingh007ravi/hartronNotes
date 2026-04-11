import { useState, useEffect } from 'react'
import axios from 'axios'
export default function UserDataApi() {

    const [data, setData] = useState([])
    const [next, setNext] = useState(1)
    const [limit,setLimit] = useState(10)

    const FetchAPiData = async() => {
        let url = `https://api.freeapi.app/api/v1/public/randomusers?page=${next}&limit=${limit}`
        const response = await axios.get(url)
        setData(response?.data.data)
    }

    useEffect(()=>{
        FetchAPiData()
    },[limit,next])

    console.log(next)

    return (
        <div className="bg-linear-to-br from-gray-900 to-black min-h-screen text-white p-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold tracking-wide">
            Total Products ={'>'} {data?.totalItems}
        </h1>

        {/* Select */}
        <select
            onChange={(e) => setLimit(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {[10, 20, 30, 50].map((v, i) => (
                <option key={i} value={v}>
                    Show {v}
                </option>
            ))}
        </select>
    </div>

    {/* Product Section */}
    <div className='flex flex-wrap gap-2'>
            {
                data?.data?.map((v,i)=>(
                    <div key={i}>
                        <img src={v?.picture?.large} alt="" />
                        </div>
                ))
            }
    </div>

    {/* Pagination */}
    <div className="flex justify-center items-center gap-6 mt-8">

        {/* Previous Button */}
        <button
            disabled={next === 1}
            onClick={() => setNext(next - 1)}
            className={`px-5 py-2 rounded-lg font-medium transition 
                ${next === 1 
                    ? "bg-gray-700 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700"}`}
        >
            ← Previous
        </button>

        {/* Page Info */}
        <span className="text-lg font-medium">
            Page {next}
        </span>

        {/* Next Button */}
        <button
            onClick={() => setNext(next + 1)}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
        >
            Next →
        </button>

    </div>

</div>
    )
}
