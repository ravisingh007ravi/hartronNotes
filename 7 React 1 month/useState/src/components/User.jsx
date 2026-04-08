import { useState, useEffect } from 'react'
import axios from 'axios'

export default function User() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [value, setvalue] = useState([])

    const FetchData = async () => {
        let url = `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`

        const response = await axios.get(url)

        setvalue(response?.data?.data?.data)
    }
    useEffect(() => {
        FetchData()
    }, [limit, page])



    console.log(value[0])


    return (
        <div >

            <div className='flex justify-between px-20 py-10'>
                {/* left side div  */}
                <h1>Show All User Data</h1>
                {/* right side div  */}

                <div>
                    <select onClick={(e) => setLimit(e.target.value)} name="" id="">
                        {
                            [10, 20, 30, 50, 100].map((v, i) => (
                                <option key={i} className='text-black' value={v}>{v}</option>
                            ))
                        }

                    </select>
                </div>
            </div>

            {/* show User Data  */}

            <div className="flex flex-wrap justify-between gap-6 p-4 px-10">
                {value.map((v, i) => (
                    <div key={i} className="bg-gray-400 rounded-2xl p-4 flex flex-col items-center text-center">
                       
                        <img  src={v?.picture?.large} alt="user"
                            className="w-60 h-60 rounded-md object-cover border-4 border-blue-100 mb-3"
                        />

                        {/* Name */}
                        <h2 className="text-lg font-semibold text-gray-800">
                            {v?.name?.title} {v?.name?.first} {v?.name?.last}
                        </h2>

                        {/* Email */}
                        <p className="text-sm text-black mt-1 break-all">{v?.email}</p>
                        
                    </div>
                ))}
            </div>

            {/* page No  */}

            <div>

                <div className='flex justify-center gap-20'>
                    <h1 onClick={() => setPage(page - 1)}>Preview</h1>
                    <h1 onClick={() => setPage(page + 1)}>Next</h1>
                </div>

            </div>


        </div>
    )
}
