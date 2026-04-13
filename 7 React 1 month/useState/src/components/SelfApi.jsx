import {useState,useEffect} from 'react'
import axios from 'axios'
export default function SelfApi() {
    const [data,setData] = useState([])



    const showData = async()=>{
        try{

            const res = await axios.get('http://localhost:8080/test')
            setData(res)
        }
        catch(err){
            console.error('err.message')
        }
    }

    useEffect(()=>{
        showData()
    },[])

    console.log(data)
  return (
    <div>SelfApi</div>
  )
}
