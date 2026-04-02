import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Api() {
    const [data, setData] = useState([])
    useEffect(() => {
        const showData = async () => {

            try {
                const url = 'https://api.dhulluinity.com/get_news/latestNews'

                const response = await axios.get(url)
                setData(response.data.data)
            }
            catch (e) {
                console.error(e.message)
            }
        }

        showData()
    }, [])
    return (
        <div className='text-white'>
            dfsdsfd

            <br />
            {data[0]?.title} <br />
            {data[1]?.title} <br />
            {data[2]?.title} <br />
        </div>
    )
}
