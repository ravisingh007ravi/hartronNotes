import { useState } from 'react'
import axios from 'axios'
export default function SignUp() {
  const [values, setValues] = useState({})
  const SignDB = async (e) => {
    try {
      e.preventDefault()

      const res = await axios.post('http://localhost:7070/create-user', values)
      if (res.status == 201 || res.status == 200) {
        alert(res?.data?.msg || 'Created Data')
      }
    }
    catch (err) {
      alert(err?.response?.data?.msg || 'Server Stop')
    }
  }

  const pickValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div>

      <h1>SignUp</h1>
      <form action="" onSubmit={SignDB}>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={pickValue} type="text" name="name" placeholder='Enter Your Name...' />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input onChange={pickValue} type="email" name="email" placeholder='Enter Your Email...' />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input onChange={pickValue} type="password" name="password" placeholder='Enter Your Password...' />
        </div>

        <button>SignUp</button>

      </form>
    </div>
  )
}
