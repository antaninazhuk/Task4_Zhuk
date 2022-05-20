// Task 1

// let student = {
//     name: 'Antanina',
//     surname: 'Zhuk',
//     age: 25,
//     courseOfEducation: 'Frontend development',
//     englishLevel: 'elementary',

// }

// delete student.englishLevel;

// Task 2

// let book = {
//     numberOfPages: 545,
//     cover: true,
//     isTheAuthorAlive: false,
//     isBestseller: true,
//     booksEditions: 20000000,
// }

// for (let key in book) {
//     if (typeof book[key] === "boolean") {
//         console.log(key);
//     }
// }

// Task 3

// the first method

// let car = {
//     brand: 'Audi Q7',
//     color: 'black',
//     numberOfDoors: 5,
//     horsePower: 249,
//     engineСapacity: 3,
//     gearboxType: 'automatic transmission',
// }

// let anotherCar = {};


// for (let key in car) {
//     anotherCar[key] = car[key];

// }

// the second method

// let car = {
//     brand: 'Audi Q7',
//     color: 'black',
//     numberOfDoors: 5,
//     horsePower: 249,
//     engineСapacity: 3,
//     gearboxType: 'automatic transmission',
// }

// let anotherCar = {};

// Object.assign(anotherCar, car);


// Task 4

// let animalObj = {
//     name: "cat",
//     legs: 4,
//     color: "black",
// }

// function animal(obj) {

//     console.log(`This ${obj.color} ${obj.name} has ${obj.legs} legs`);

// }

// animal(animalObj);

// Task 5

// let train = {
//     locomotiveLength: 25,
//     totalCoachCars: 4,
//     coachLength: 15,
// }

// function calkTrainLength(obj) {
//     let trainLength = obj.locomotiveLength + obj.coachLength * obj.totalCoachCars;
//     return trainLength;

// }

// Task 6

// let student = {
//     name: 'Antanina',
//     surname: 'Zhuk',
//     groupNumber: 5,
//     showMessage() {
//         console.log(`Это студент ${this.name} ${this.surname} из группы ${this.groupNumber}`);
//     }

// }

// // Task 7

// function Animal(animal, legs, isPredator, name) {
//     this.animal = animal;
//     this.numberOfLegs = legs;
//     this.isPredator = isPredator;
//     this.name = name;
// }