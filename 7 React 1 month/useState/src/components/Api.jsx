import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Api() {
    const [data, setData] = useState([])
    useEffect(() => {
        const showData = async () => {

            try {
                const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches'

                const response = await axios.get(url)
                setData(response.data.data.data)
            }
            catch (e) {
                console.error(e.message)
            }
        }

        showData()
    }, [])
    return (
        <div >
            {
                data.map(({ title, description, price, rating, discountPercentage, brand, category, images }, index) => (
                    <div>
                        <h1> {title}</h1>
                        <h1> {description}</h1>
                        <h1> {price}</h1>
                        <h1> {rating}</h1>
                        <h1> {category}</h1>
                        <h1> {discountPercentage}</h1>
                        <h1> {brand}</h1>
                        <br />
                        {
                            images.map((v,i)=>(
                                <img src={v} alt="img" />
                            ))
                        }ll
                    </div>
                ))
            }
        </div>
    )
}
