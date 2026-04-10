// 1
const firstName = "Юлиана";
const lastName = "Бовт";
const isStudent = true;

console.log (firstName, lastName, isStudent);

// 2
let age = 19;
let currentYear = 2026;
let birthYear = currentYear - age - 1;
console.log(birthYear); // работает не точно, нужны условия, сделала под себя 


// 3
console.log(`Меня зовут ${firstName + " " + lastName}, мне ${age} лет. Я ученица курса: ${isStudent}`)


// 4
let a = '123'; //строка
let b = +'456'; //строка
let c = Number('789'); //число
let d = Boolean(0); //логический тип
let e = Boolean(' '); //строка
let result = a + b + c + d + e;
console.log(result, typeof(result))