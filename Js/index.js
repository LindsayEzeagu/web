// Javascript 12 - import all modules 
import brushTeeth from "./Modules/brushTeeth.js";
import closeEyes from "./Modules/closeEyes.js";
import getIntoBed from "./Modules/getIntoBed.js";
import putOnClothes from "./Modules/PutOnClothes.js";
import skincare from "./Modules/skincare.js";
import sleep from "./Modules/sleep.js";
import sortOutHair from "./Modules/sortOutHair.js";
import turnOffLights from "./Modules/turnOffLights.js";

console.log('I am testing out the console');

var minVotingAge = 18;

var a = 85; // Declaring a variable 

firstName = "Lindsay"; // reassigning a variable

const a = 85; // This value remains the sam e
let b = 15; // is value only applies in this expression as the value of b has changed 
let c = a + b;

console.log(c); // if we inspect the index.html in the console should show 100

b = 25;
c = a + b;
console.log(c); // 110

// var $firstName // you cant use key words such as var as a varible name
// var first_name // check the rules for other languages 

// $firstName = "lindsi";

//Creating a function - declaring function 
function sayHey() {
  console.log("Hey");
}

sayHey(); // call the function 

function conversation () {
  sayHey();
  console.log("How are you?");
  console.log("Goodnight!");
}

conversation();

// function with parameter
function greeting(name) {
  console.log("Hello " + name + "!");
}
greeting("Lindsay");

function addition(num1,num2) {
  return num1 + num2;
}
addition (1000, -2); // 998
addition( 2300, 40000); // 42300

let additionOfTwoNumbers = addition(1000,-2); //998
console.log(additionOfTwoNumbers);

function newConvo(person,topic){
  console.log("Hey, " + person + "!");
  console.log("How are you");
  console.log("Do you like " +topic+ "?");
}
newConvo("Lindsay","food");

// Function expression 

const multiply = function (num) {
  return num * num;
};

console.log(multiply(2));


// The function Constructor 
// constructors are like regular functions , but we call them with the new keyword.

// The variable that only work in the function is called local scope 
// an error will arise as undefinied 
function testing() {
  const name = "Lindsay Amara"
  console.log(name);
}
testing();
// error - variable cannot be accessed outside a function
console.log(name);


// an immediately-invoked function expression 
(function (){
  // code to execute
  console.log("running now");
}());

// an arrow function 
const multiply2 = (num) =>{
  return num * num;
}
// one line
const multiply3 = (num) => num * num;

// Javascript 4 

const person = {
  firstName: "Lindsay",
  lastName: "Eze",
  likes: "reading",
};

//dot notation 
console.log(person.firstName);

//bracket notation
console.log(person["lastName"]);

// Task

const personA = {
  firstName: 'Monique', 
  likes: 'pizza'
};

const personB = personA;

console.log("Before");
console.log(personA.firstName);
console.log(personB.firstNamw);

personA.firstName = "Stacy";

console.log("After");
console.log(personA.firstName);
console.log(personB.firstName);

//Javascript 5 
// Values 

const pi = 3.14; // number can be integer or decimal values 
console.log("The value of pi" + pi);

// boolean values 
const codherIsAmazing = true;
const weatherIsGreat = false;

console.log("Is the weather great?" + codherIsAmazing);
console.log("Is the weather great?" + weatherIsGreat);

// Basic Maths 
const x = 6;
const y = 3;
const add = x + y;

console.log("Addition of x and y is: " + add);

const subtraction = x - y;
console.log("Subtraction of x and y is" + multiplication);

const division = x / y;
console.log("Division of x and y is:" + division);

const modulus = x % y;
console.log("Remainder of x and y is: " + modulus);

const exponentiation = x ** y;
console.log("Exponentiation of x and y is: " + expontiation);


let i = 7;
let j = 8;
let k = 9;
let l = 10;

// increment i first by 1 , then assign the incremented value of i preIncremented value of i pre Increment ..
const preIncrement = ++i; // 8

// assign the current value of j to the postIncrement variable , then increment ...
// which means , the next time you use i , i will be 8
const postIncrement = j++; // 8

const preDecrement = --k; //7

const postDecrement = l--; // 8 

console.log("Pre increment of i :" +preIncrement);
console.log("Post increment of i : " +postIncrement);
console.log("Pre decrement of j :" +preDecrement);
console.log("Post decrement of j :" +postDecrement);


// "===" strict equality operators 
// "2" === "2" same type = true 

const apples = "apples";
const oranges = "oranges";

const isEqual = apples === oranges;
console.log("Are apples and oranges the same ?" + isEqual);

// "==" normal equality operator (it will only work if the values are equal)
const equality = 2 == "2";
console.log(equality);

// check the type of value, and also check if they have the same values
const strictEquality = 2 === "2";
console.log(strictEquality);

const volunteers = 20; 
const student = 24; 
const pizzas = 25;

const moreStudents = student > volunteers; // true

const lessStudents = student < pizzas; //true

console.log("Are there more students than volunteers? " +moreStudents);
console.log("Are there fewer students than pizzas?" +lessStudents);

const enoughPizzas = volunteers + students < pizzas;

console.log("Are there enough pizzas for everyone ? " +enoughPizzas);

// JAVASCRIPT 6

const myAge = 23;
const minimumAge = 16;

const canDrive = myAge >= minimumAge;

console.log("Can I drive? " + canDrive);


const iAmAQueen = false;

if (iAmAQueen) {
  console.log("I am a Queen");
}

const personAge = 10;

if (personAge >= 18) {
  console.log("You are allowed on the platform");
} else {
  console.log("You are not allowed on this platform");
}

personAge >=18
? console.log("You are allowed on the platform")
: console.log("You are not allowed on this platform");

function getFee(isMember){
  return isMember ? "2.00" : "10.00";
}

console.log(getFee(true));
console.log(getFee(false));

let yourAge = 10;

if (yourAge < 13) {
  console.log("you are a child");
} else if (yourAge < 20) {
console.log("you are a teenager");
} else if (yourAge < 65) {
console.log("You are an adult");
} else {
console.log("You are a senior");
}

let shippingFee = calculateShuppingFee(75);
console.log("Your shipping fee is: " +shippingFee);


function calculateGrade(score) {
  if (mark < 90){
    return "A+";
} else if (mark > 80) {
  return "A";
} else if (mark > 78) {
  return "B";
}else if (mark > 60) {
  return "C";
} else if (mark > 50){
  return "D";
} else if (mark > 40){
  return "E";
}else if (score > 30){
  return "F";
}else {
  return "Invalid";
}
}

// const grade = calculateGrade(76);
// console.log("Your grade is: " + grade);

// Javascript 7

// Switch statements 
// const currentDay = new Date().getDay();
// console.log(new Date());

// const currentDay = "today";
// console.log(currentDay);

switch(currentDay) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;

  case 2:
    console.log("Today is Tuesday");
    break;

  case 3:
    console.log("Today is Wednesday");
    break;

  case 4:
    console.log("Today is Thursday");
    break;

  case 5:
    console.log("Today is Friday");
    break;

  case 6:
    console.log("Today is Saturday");
    break;
}

// While Loop 

let increment = 1;
let total = 0;

while (increment <= 10) {
  total = increment + 1;
  increment = increment +1;
}

console.log("Total no of shows:" + total);

// random number generator 
function randomNumber(){
  return Math.random() * 1;
}

// while loop - random 
// let counts = 1;
// while (counts < 10) {
//   console.log(randomNumber());
//   counts = counts + 1;
// }

// for loop 
let totalValue = 0;

for (let i = 1; i <= 10; i++) {
  totalValue = 1;
}

console.log("Total no of shoes: " + totalValue);


// for loop - random 

for (let count = 11; count > 10; count--){
  console.log(randomNumber());
} // at an instance it must appear false otherwise it will go on an endless loop



// let count = 1;
// for (let i = 11 , i < 10; i++){
//   count = 1
// }

// Array 

const namesArray = ["Lindsay", "Alex","Christina"];
const personArray = ["Ezeagu", "Fatoberu","Njoku"];

namesArray[0]; // Lindsay 
personArray[2]; //Njoku

console.log(namesArray(2));
console.log(namesArray.length); //3

// Javascript 8 

for (let i = 0; i < namesArray.length; i++) {
  console.log(namesArray[i]);
} 

// array.push(element) adds an element to the end of the array 
namesArray.push("Rachel");
console.log(namesArray);
// array.unshift(element) adds an element to the start of the array 
namesArray.unshift("Chi");
console.log(namesArray);

// array.pop(element) removes an element from the end
namesArray.pop();
console.log(namesArray);

// array.shift(element) removes an element from the beginning of the array

namesArray.shift();
console.log(namesArray);

// array.sort() ording the elements in an array 
namesArray.sort();
console.log(namesArray);

// sorting in decending order 
namesArray.sort().reverse();

console.log(namesArray);

const nums = [1, 5, 3, 19, 2, 10];
nums.sort(); //
console.log(nums);

function sortNumberAscending(num1, num2){
  return num1 - num2;
}

sortNumberAscending(2,3) //-1
sortNumberAscending(7,2) // 5

nums.sort(sortNumberAscending);
console.log(nums);

// [1,5,3,19,2,10];

// sortNumberAscending(1, 5); // -4 it means the left value is lesser than the right value 

// [1,5,3,19,2,10];

// sortNumberAscending(5,3); // 2 

nums.sort(sortNumberAscending).reverse();
console.log(nums);

const fruitAndVeg = [
  "apple",
  "orange",
  "Banana",
  "Kiwi",
  "avocado",
  "celery",
  "ayberginer"
]

let noAvocados =[];

let q = 0;

while (q < fruitAndVeg.length) {
  if (fruitAndVeg[q] !== "avocado") {
    noAvocados.push(fruitAndVeg[q]);
  
  }
  q++;
  console.log(q);
}
console.log(noAvocados);


// Javascript 9 

// const noAvocado = fruitAndVeg.filter(fruit => !fruit.includes("avocado"));
// console.log(noAvocado);

const evenNumbers = [2, 4, 6, 8, 10];

// using for loop and empty to achieve .map method


const eventNumbersDoubled = [];

for (let i = 0; i < eventNumbers.length; i++){
  let doubled = evenNumbers[i] * 2;
  eventNumbersDoubled.push(doubled);
}

console.log(evenNumbersDoubled);


//working with .map method
const numbersDoubled = evenNumbers.map(num => num * 2);
console.log(numbersDoubled);

// chaining methods (using .map and filter together)
const numbersDoubledAndGreaterThanTen = evenNumbers
.map((num) => num * 2)
.filter((num) => num > 10);

console.log(numbersDoubledAndGreaterThanTen); // [12 , 16 , 20]

//go live live server //

// Dom representation 

/// Javascript 12 - MODULES

function getReadyForBed() {
  brushTeeth();
  closeEyes();
  getIntoBed();
  putOnClothes();
  skincare();
  sleep();
  sortOutHair();
  turnOffLights();
  
}
getReadyForBed();


