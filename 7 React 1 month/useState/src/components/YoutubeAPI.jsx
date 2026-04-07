import { useState, useEffect } from 'react'
import axios from 'axios'

export default function YoutubeAPI() {
    const [value,setValue] =useState([])
    useEffect(() => {
        const url = 'https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%2520one%253A%2520mostLiked%2520%257C%2520mostViewed%2520%257C%2520latest%2520%257C%2520oldest';
        const FetchData = async() => {
           const response = await axios.get(url)
          setValue(response?.data?.data?.data)
        }
        FetchData()
    }, [])
    console.log(value[0]?. items?.snippet
)
    return (
        <div className='flex flex-wrap gap-5 px-2'>

            {
                value.map((v,i)=>(
                    <div key={i}>
                        <img className='h-70 w-100' src={v?. items?.snippet?.thumbnails?.maxres?.url} alt="" />
                        <h1>{v?. items?.snippet?.channelTitle}</h1>
                        <h1>{v?. items?.snippet?.title}</h1>
                        {/* <a href={v?.items?.snippet?.description}>Click</a> */}

                         {
                    v?. items?.snippet?.tags.map((v,i)=>(
                        <div key={i}>
                            <h1>{v}</h1>
                        </div>
                    ))
                }
                    </div>
                ))

               
            }

        </div>
    )
}
