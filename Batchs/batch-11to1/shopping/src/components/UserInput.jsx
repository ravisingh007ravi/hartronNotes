import { useState } from 'react'

export default function UserInput() {

    const [value, setValue] = useState()
    const [result, setResult] = useState('Result')


    return (
        <div className='bg-black h-screen flex justify-center items-center'>

            <div className='bg-white p-5 space-y-5 rounded-2xl'>
                <h1 className='text-center text-3xl font-semibold'>User Input</h1>
                <input onChange={(e) => setValue(e.target.value)} className='bg-gray-600 px-2 py-1 rounded-md' type="text" 
                placeholder='Enter a Number...' />

                <div className='flex flex-col gap-3'>
                    <button onClick={() => setResult(value % 2 == 0 ? "Even" : "Odd")}>Even & Odd</button>
                    <button onClick={() => setResult(value > 0 ? "Pos" : "Neg")}>Pos & Neg</button>
                </div>

                <p >{result}</p>

            </div>
        </div>
    )
}
