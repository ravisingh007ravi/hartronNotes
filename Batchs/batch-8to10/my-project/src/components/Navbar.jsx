import React from 'react'

export default function Navbar() {

  const data = [
    {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      price: 999,
      title: "Wireless Headphones",
    },
    {
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      price: 24999,
      title: "Smartphone",
    },
    {
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      price: 54999,
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      price: 3999,
      title: "Smart Watch",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      price: 4999,
      title: "Running Shoes",
    },
    {
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      price: 799,
      title: "T-Shirt",
    },
    {
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      price: 1999,
      title: "Jeans",
    },
    {
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      price: 2999,
      title: "Women's Dress",
    },
    {
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      price: 35999,
      title: "DSLR Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1503602642458-232111445657",
      price: 899,
      title: "Backpack",
    },
    {
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      price: 2499,
      title: "Bluetooth Speaker",
    },
    {
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      price: 1299,
      title: "Coffee Mug",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      price: 599,
      title: "Water Bottle",
    },
    {
      img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
      price: 2999,
      title: "Gaming Mouse",
    },
    {
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      price: 1999,
      title: "Keyboard",
    },
    {
      img: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      price: 499,
      title: "Notebook",
    },
    {
      img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      price: 1599,
      title: "Jacket",
    },
    {
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      price: 8999,
      title: "Premium Sunglasses",
    },
  ]

  return (
    <div className='select-none'>
      <h1 className='text-center text-white bg-black p-3 text-5xl'>Product</h1>
      <div className='bg-black grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5 p-5 min-h-screen'>
        {
          data.map((a, b) => (
            <div className='flex flex-col bg-white h-full rounded-2xl'>
              <img className='rounded-t-2xl h-80 w-full bg-cover object-cover' src={a.img} alt="" />
              <h1 className='text-center text-2xl font-semibold'>{a.title}</h1>
              <div className='flex items-center justify-between px-3 py-5'>
                <h1>Price {a.price}</h1>
                <h1 className='bg-orange-500 select-none cursor-pointer px-3 py-2 text-white font-semibold rounded-md'>Add to cart</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
