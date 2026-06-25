let aadharcard = true
let age = 19 // age >=18
let city = 'kaithal' // kaithal karnal panipat


if (aadharcard) {
    if (age >= 18) {
        if (city == 'kaithal') console.log('Kaithal vote done');
        
        else if (city == 'karnal') console.log('karnal vote done');

        else if (city == 'panipat') console.log('panipat vote done');

        else console.log('Invalid city');
    }
    else console.log('Invalid age');
    
}
else console.log('go home');
