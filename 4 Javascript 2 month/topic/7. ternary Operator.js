let a = 10
let b = 20
let c = 30

// a > b && a > c ? console.log('A') : b > a && b > c ? console.log("B") : console.log('C')


let salaryType = true;
let income = 3000;
let adharCard = true;
let panCard = true;

salaryType ?
    adharCard ?
        panCard ?
            income > 20000 ? console.log('Apply')
                : console.log("Not Approve")
            : console.log("Pan Card is Required..")
        : console.log('Adhar Card is Require')
    : console.log('Not Apply')
