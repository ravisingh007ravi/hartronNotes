// let country = 'india'
// let age = 17



// if (country == 'india') {
//     if (age >= 18) {
//         console.log('Welcome..')
//     }
//     else {
//         console.log('No welcome')
//     }
// }
// else {
//     console.log('Exit')
// }


// Credit card Apply Process 

let salaryType = true
let income = 30000
let adharCard = false
let panCard = false 


if(salaryType){
    if(adharCard){
        if(panCard){
            if(income>=20000){
                console.log('Get Credit card')
            }
            else{
                console.log('Fail')
            }
        }
        else{
            console.log('Pan Card is Required..')
        }
    }
    else{
        console.log('AdharCard is Require...')
    }
}
else{
    console.log('Not Apply')
}


