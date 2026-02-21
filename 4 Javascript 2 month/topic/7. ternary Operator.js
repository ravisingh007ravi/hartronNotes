// let a = 10
// let b = 20
// let c = 30

// // a > b && a > c ? console.log('A') : b > a && b > c ? console.log("B") : console.log('C')


// let salaryType = true;
// let income = 3000;
// let adharCard = true;
// let panCard = true;

// salaryType ?
//     adharCard ?
//         panCard ?
//             income > 20000 ? console.log('Apply')
//                 : console.log("Not Approve")
//             : console.log("Pan Card is Required..")
//         : console.log('Adhar Card is Require')
//     : console.log('Not Apply')



let course = 'CS'
let exStd = false
let interns = false
let pass = false
let placmentG = true
let paymentType = 'emi'
let emiTime = 12

course == 'AI' || course == 'CS' || course == 'DM' || course == 'DA'
?

    exStd
    ?
        paymentType == 'cash'
        ? console.log('20% course Discount and 10% cash Discount', course)
        : emiTime == 3
            ? console.log('English course Free')
            : emiTime == 6
                ? console.log('2% discount', course)
                : console.log('No Discount', course)

    : interns && pass
        ?
            paymentType == 'cash'
            ? console.log('10% course Discount and 10% cash Discount', course)
            : emiTime == 3
                ? console.log('English course Free')
                : emiTime == 6
                    ? console.log('2% discount', course)
                    : console.log('No Discount', course)

        :
            paymentType == 'cash'
            ? console.log('10% course Discount and 10% cash Discount', course)
            : emiTime == 3
                ? console.log('English course Free')
                : emiTime == 6
                    ? console.log('2% discount', course)
                    : console.log('No Discount', course)

: console.log('Not Found')