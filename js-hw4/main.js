// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять 
// скидку, затем прибавлять налог и возвращать итоговую цену.

// function calculateFinalPrice(baseCost, discountPercent, taxRate) {
//     const priceAfterDiscount = baseCost - (baseCost * (discountPercent / 100));
//     const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * taxRate);
//     return priceAfterTax;
// }


// // Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90





// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция
//  должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// function checkAccess(username, password) {
//     switch (true) {
//         case (username === "admin" && password === "123456"):
//         case (username === "user" && password === "123456"):
//             return "Доступ разрешен";
//         default:
//             return "Доступ запрещен";
//     }
// }

// const username = prompt("Введите имя пользователя", 0);
// const password = prompt("Введите пароль", 0);
// alert(checkAccess(username, password));






// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.


// function getTimeOfDay(currentTime) {
//     switch (true) {
//         case (currentTime >= 0 && currentTime <= 5):
//             return "Ночь";
//         case (currentTime >= 6 && currentTime <= 11):
//             return "Утро";
//         case (currentTime >= 12 && currentTime <= 17):
//             return "День";
//         case (currentTime >= 18 && currentTime <= 23):
//             return "Вечер";
//         default:
//             return "Введено некорректное время";
//     }
// }

// const currentTime = +prompt("Введите текущее время (в часах)", 0);
// alert(getTimeOfDay(currentTime));





// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) return i;
    }
    return "Четных чисел нет";
}

// Пример работы:
console.log(findFirstEven(1, 10)); // 2
console.log(findFirstEven(9, 9)); // "Чётных чисел нет"