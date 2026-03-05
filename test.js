const nameRegex  = /^[A-Za-z]{0,50}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const name = 'hell'
const email = 'hell@gmail.com'
const password = 'hRaviRavil123@'

console.log(nameRegex.test(name))
console.log(emailRegex.test(email))
console.log(passwordRegex.test(password))

