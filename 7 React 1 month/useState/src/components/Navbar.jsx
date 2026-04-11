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
        <div>

            <button onClick={test}> Click</button> <br />

            {value}

        </div>
    )
}
