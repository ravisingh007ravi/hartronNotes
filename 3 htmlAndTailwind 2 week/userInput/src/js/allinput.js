const upperCase = ()=>{
    let str = document.getElementById('v').value
    return document.getElementById('r').innerHTML = str.toUpperCase()
}


const lowerCase = ()=>{
    let str = document.getElementById('v').value
    return document.getElementById('r').innerHTML = str.toLowerCase()
}

const clera = ()=>{
    let str = document.getElementById('v').value
    return document.getElementById('r').innerHTML = ''
}


const textLenght = ()=>{
    let str = document.getElementById('v').value
    return document.getElementById('r').innerHTML = str.length
}

const wordLenght = ()=>{
    let str = document.getElementById('v').value

    return document.getElementById('r').innerHTML = str.trim().split(' ').length
}

const removeSpace = ()=>{
    let str = document.getElementById('v').value

    return document.getElementById('r').innerHTML = str.trim().split('').join('')
}

