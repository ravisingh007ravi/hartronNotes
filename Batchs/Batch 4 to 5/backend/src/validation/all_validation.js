const validName = (value)=>{
    const NameRegex = /^[a-zA-Z ]+$/
    return NameRegex.test(value)
}


console.log(validName('Rav i'));