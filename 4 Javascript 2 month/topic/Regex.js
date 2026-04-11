// const nameRegex  = /^[A-Za-z]{0,50}$/
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
// const pinCodeRegex = ''
// const mobileRegex = ''
// const panCardRegex = ''
// const AdharCardRegex = ''
// const DOBRegex = '' // DD-MM-YYYY
// const AddressRegex = ''
// const CityRegex = ''
// const SateRegex = ''



const data = {
    name: 'Ravi Singh3432',
    email: 'sM8tG@example.com',
    password: 'Ravi@1234',
}

const { name, email, password } = data

const nameRegex  = /^[A-Za-z]{0,50}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


if(!name)  console.log('Name Required')
if(!email)  console.log('Email Required')
if(!password)  console.log('Password Required')

if(!nameRegex.test(name)) console.log('Name InValid')
if(!emailRegex.test(email)) console.log('Email InValid')
if(!passwordRegex.test(password)) console.log('Password InValid')

    