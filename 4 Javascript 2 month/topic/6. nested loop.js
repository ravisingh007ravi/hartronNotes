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

// let salaryType = true
// let income = 30000
// let adharCard = false
// let panCard = false 


// if(salaryType){
//     if(adharCard){
//         if(panCard){
//             if(income>=20000){
//                 console.log('Get Credit card')
//             }
//             else{
//                 console.log('Fail')
//             }
//         }
//         else{
//             console.log('Pan Card is Required..')
//         }
//     }
//     else{
//         console.log('AdharCard is Require...')
//     }
// }
// else{
//     console.log('Not Apply')
// }


let course = 'AI'
let exStd = false
let interns = false
let pass = false
let placmentG = true
let paymentType = 'cash'
let emiTime = 3

course == 'AI' || course == "CS" || course == 'DM' || course == 'DA' ?
    exStd ?
        paymentType == 'cash' ? console.log('20% course Discount and 10% cash Discount', course) :
            emiTime == 3 ? console.log('English course Free') :
                emiTime == 6 ? console.log("2% discount", course) :
                    console.log('No Discount', course)
        :
        interns ? pass ?
            paymentType == 'cash' ? console.log('10% course Discount and 10% cash Discount', course) :
                emiTime == 3 ? console.log('English course Free') :
                    emiTime == 6 ? console.log("2% discount", course) :
                        console.log('No Discount', course)
            :
            paymentType == 'cash' ? console.log('10%', course) :
                emiTime == 3 ? console.log('English course Free') :
                    emiTime == 6 ? console.log("2% discount", course) :
                        console.log('No Discount', course)
            :
            paymentType == 'cash' ? console.log('10%', course) :
                emiTime == 3 ? console.log('English course Free') :
                    emiTime == 6 ? console.log("2% discount", course) :
                        console.log('No Discount', course)
    : console.log("not found")

