// Создайте объект с вашим описанием(имя, возраст и т.д.).
// Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку
//  ‘Hello “переданный аргумент”’.
// Создайте массив объектов с описанием пользователей(такой мы делали в уроке).Объявите отдельную переменную, 
// в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив 
// пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу.После
//  окончания работы цикла выведите в консоль переменную с количеством простых пользователей.


// Name: Elena
// Age: 34
// Status: Admin

// Name: David
// Age: 28
// Status: Not Admin

// Name: Chidi
// Age: 41
// Status: Admin

// Name: Sofia
// Age: 22
// Status: Not Admin

// Name: Marcus
// Age: 50
// Status: Admin

const aboutMe = {
    name: 'Juliana',
    age: 19,
    profession: 'programmer'
}

console.log('Hello', aboutMe.name)

const users = {
    elena: {
        age: 34,
        isAdmin: true
    },

    david: {
        age: 28,
        isAdmin: false
    },

    chidi: {
        age: 41,
        isAdmin: true
    },

    sofia: {
        age: 22,
        isAdmin: false
    },

    marcus: {
        age: 50,
        isAdmin: true
    }
}

justUsers = 0;
for (let key in users) {
    if (users[key].isAdmin === false) {
        justUsers++;
    }
}
console.log(justUsers)


for (let i = 0; i < users.length; i++){
        if (users[i].isAdmin === false) {
        justUsers++;
    }
}
console.log(justUsers)
