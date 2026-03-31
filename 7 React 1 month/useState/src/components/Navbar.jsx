import { useState } from 'react'

export default function Navbar() {
    let [value, setValue] = useState('Result')
    const test = () => {
        let bag = ''

        for (let i = 0; i <= 10; i++) {
            bag += i + ' '
        }
        setValue(bag)
        return bag
    }

    return (
        <div className='bg-black text-white min-h-screen text-9xl'>

            <button onClick={test}> Click</button> <br />

            {value}

        </div>
    )
}
