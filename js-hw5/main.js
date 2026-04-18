// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//     "first_name": "Juliana",
//     "second_name": "Bovt",
//     age: 19,
//     profession: "programmer"
// }

// console.log(person.first_name, person.age);



// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// function isEmpty(obj) {
//     for (let key in obj) return true;
//     return false;
// }

// const trueTest = {name: ""};
// const falseTest = {};

// console.log(isEmpty(trueTest));
// console.log(isEmpty(falseTest));



// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//     title: "hi",
//     description: "world",
//     isCompleted: "no"
// }

// function cloneAndModify(object, modifications) {
//     const newObject = { ...object, ...modifications };
//     return newObject;
// }

// const newTask = cloneAndModify(task, { title: "hello", isCompleted: "yes" });

// for (let key in newTask) {
//     console.log(key + ": " + newTask[key]);
// }



// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.


const callAllMethods = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {  
            obj[key]();  
        }
    }
}

// Пример использования:
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};
callAllMethods(myObject);