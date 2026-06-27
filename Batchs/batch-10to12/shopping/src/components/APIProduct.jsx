import { useState,useEffect } from 'react'
import axios from 'axios'

export default function APIProduct() {

    const [data, setData] = useState([])

    const fetchDataFromApi = async () => {
        try {
            const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=500'

            const db = await axios.get(url)

            setData(db?.data?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(()=>{
        fetchDataFromApi()
    },[])

    return (
        <div className='bg-black text-white'>
            
            <div className='grid p-5 gap-1 sm:gap-2 md:gap-3 ls:gap-4 xl:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                {
                    data.map((items, index) => (
                        <div key={index} className='flex flex-col bg-white text-black rounded-2xl'>
                            <img className='rounded-t-2xl' src={items.picture.large} alt="" />

                            <div className='flex gap-3 oi-regular text-sm px-3 justify-center py-2'>
                                <h1>{items.name.title}</h1>
                                <h1>{items.name.first}</h1>
                                <h1>{items.name.last}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
