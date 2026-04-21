export const validName  = (name)=>{
    const nameRegex = /^[a-z A-Z]{0,50}$/
    return nameRegex.test(name)
}

export const validEmail  = (email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
}

export const validPassword  = (password)=>{
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    return passwordRegex.test(password)
}