const email = 'dfd...sfds2+657675675@gmail.com';

const normalizedEmail = email.replace(/\./g, '').replace(/\+.*(?=@)/, '');

console.log(normalizedEmail);