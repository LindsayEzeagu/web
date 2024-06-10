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



















// console.log("I am testing out the console");

// var firstName = "Lindsay";

// firstName = "Chi";

// var a = 85;
// var b = 15;
// var c = a + b;

// console.log(c);

// b = 25;
// c = a + b;
// console.group(c);

// function sayHey() {
//   console.log("Hey");
// }

// function expression 
// const multiply = function (num){
//   return num * num;
/* working with multple lines of code instead of the return statment
  return (
    let total =num * num total;
  ); */
//};

// console.log(multiply(2));

// const person = {}; // empty object 

// const person = {
//   firstName: "Lindsay",
//   lastName: "Eze",
//   likes: "Poetry"
// };

// console.log(person.firstName);



// //Tracy Landu
// 18:12
// Nope
// Good evening all
// Varlene mcfarlane
// 18:14
// Good Evening All
// Tomi
// 18:17
// const myAge = 32;
// const minDrivingAge = 16;

// const candrive = myAge > minDrivingAge; // Yes

// console.log("Am I old enough to drive? " + candrive);
// Fauzeeyah Sobande
// 18:20
// // Variable for the age of the person
// let personAge = 18; 

// // Variable for the minimum driving age in the UK
// const minimumDrivingAgeUK = 17;

// // Check if the person is old enough to drive
// if (personAge >= minimumDrivingAgeUK) {
//   console.log("The person is old enough to drive.");

// }
// Varlene mcfarlane
// 18:21
// =.>
// Sakirat Kehinde Usman
// 18:21
// >=
// <=
// Business Placement
// 18:21
// Good evening Ladies, please fill the weekly review survey  via this link 
// https://airtable.com/appgaNJpzBWGwYjtn/shr0XkHqDB2SCPiPF

// Thanks.
// keep
// Pinned
// Chantal Richards
// 18:22
// // Variable for your age
// var myAge = 18;

// // Variable for the minimum driving age
// var minimumDrivingAge = 16;
// console.log("My age is: " + myAge);
// console.log("The minimum driving age is: " + minimumDrivingAge);
// Beryl A Ann
// 18:26
// const myAge = 43;
// const minimumDrivingAge = 18; 

// const  oldEnoughToDrive = minimumDrivingAge < myAge // true
// console.log("Is myAge old enough to drive? " + oldEnoughToDrive);
// You
// 18:32
// Shakirat could you send the link to your github repo with the code please ?
// Hover over a message to pin it
// keep
// Sakirat Kehinde Usman
// 18:34
// https://github.com/shakirah93/first_website.git
// Sakirat Kehinde Usman
// 18:45
// const personAge = 10;

// if (personAge >= 18) {
//   console.log("You are allowed on the platform");
// }
// Sakirat Kehinde Usman
// 18:59
// else {
//   console.log("You are not allowed on this platform");
// }
// Tracy Landu
// 19:19
// why do we have different ways of doing it?
// okay thank you very much
// Sakirat Kehinde Usman
// 19:30
// function getFee(isMember) {
//   return isMember ? "2.00" : "10.00";
// }

// console.log(getFee(true));
// console.log(getFee(false));
// Sakirat Kehinde Usman
// 19:53
// let yourAge = 10;

// if (yourAge < 13) {
//   console.log("You are a child");
// } else if (yourAge < 20) {
//   console.log("You are a teenager");
// } else if (yourAge < 65) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a senior");
// }
// Sakirat Kehinde Usman
// 20:02
// function calculateShippingFee(totalPurchase) {
//   if (totalPurchase < 50) {
//     return 10;
//   } else if (totalPurchase < 100) {
//     return 5;
//   } else {
//     return 0;
//   }
// }

// let shippingFee = calculateShippingFee(75);
// console.log("Your shipping fee is: " + shippingFee);
// Tracy Landu
// 20:04
// yes
// rukiya A duhul
// 20:09
// are we in break?
// Sakirat Kehinde Usman
// 20:09
// Yes
// Tomi
// 20:31
// function calculateGrade(totalMarks) {
//     if(totalMarks > 90) {
//       return A;
// }   else if (80 < totalMarks <= 90) {
//       return A;
// }   else if (70 < totalMarks <= 80) {
//     return B;
// }  else if (60 < totalMarks <= 70) {
//     return C;
// }  else if (50 < totalMarks <= 60) {
//     return D;
// }  else if (40 < totalMarks <= 50) {
//     return E;
// }  else if (30 < totalMarks <= 40) {
//     return F;
// }  else {
//       return Repeat Course;
// }
// }

//   let grade = calculateGrade(62);
//   console.log("Your grade is: " +
// Tracy Landu
// 20:31
// still writing the code but here is what I have so far: 

// function calculateMarks (totalMarks) {
// if (totalMarks > 90) {
//   return A+ 
// } else if (totalMarks > 80) {
//   return A;
// } else if (totalMarks > 70) 
// }
// console.log("Your mark is" : + totalMarks);

// please correct
// Tomi
// 20:31
// function calculateGrade(totalMarks) {
//     if(totalMarks > 90) {
//       return A;
// }   else if (80 < totalMarks <= 90) {
//       return A;
// }   else if (70 < totalMarks <= 80) {
//     return B;
// }  else if (60 < totalMarks <= 70) {
//     return C;
// }  else if (50 < totalMarks <= 60) {
//     return D;
// }  else if (40 < totalMarks <= 50) {
//     return E;
// }  else if (30 < totalMarks <= 40) {
//     return F;
// }  else {
//       return Repeat Course;
// }
// }

//   let grade = calculateGrade(62);
//   console.log("Your grade is: " +
// rukiya A duhul
// 20:31
// function assignGrade(totalMark) {
//     if (totalMark > 90);
     
//       {return A+}
//        else if (totalMark > 80) 
//         { return A; } 
//        else if (totalMark <70){

    
//       return B;
//     }
  
//   let totalMark = assignGrade(90);
//   console.log("Your grade is: " + totalMark);
// Beauty OB
// 20:32
// function calculatemarks(grades) {
//     if (grade > 90){return A+;

//     } else if (grade > 80 <= 90) {return A;}else if (grade > 70  and <= 80)
    
//   }
// Tracy Landu
// 20:33
// okay thank you
// Chantal Richards
// 20:35
// // Variable for marks
// var marks = 85;  // You can change this value to test different scenarios

// // Determine the grade based on marks
// var grade;
// if (marks > 90) {
//     grade = "A+";
// } else if (marks > 80 && marks <= 90) {
//     grade = "A";
// } else if (marks > 70 && marks <= 80) {
//     grade = "B";
// } else if (marks > 60 && marks <= 70) {
//     grade = "C";
// } else if (marks > 50 && marks <= 60) {
//     grade = "D";
// } else if (marks > 40 && marks <= 50) {
//     grade = "E";
// } else if (marks > 30 && marks <=
// grade = "F";
// } else {
//     grade = "Fail"; // Assuming marks 30 or below is a fail
// }

// // Log the grade to the console
// console.log("The grade is: " + grade);
// Sakirat Kehinde Usman
// 20:44
// function calculateGrade(score) {
//   if (score > 90) {
//     return "A+";
//   } else if (score > 80) {
//     return "A";
//   } else if (score > 70) {
//     return "B";
//   } else if (score > 60) {
//     return "C";
//   } else if (score > 50) {
//     return "D";
//   } else if (score > 40) {
//     return "E";
//   } else if (score > 30) {
//     return "F";
//   } else {
//     return "Invalid Score";
//   }
// }//

// const grade = calculateGrade(70);
// console.log("Your grade is: " + grade);

// const currentDay = new Date().getDay();
// console.log(currentDay);

// switch (currentDay) {
//   case 0:
//     console.log("Today is Sunday");
//     break;

//   case 1:
//     console.log("Today is Monday");
//     break;

//   case 2:
//     console.log("Today is Tuesday");
//     break;

//   case 3:
//     console.log("Today is Wednesday");
//     break;

//   case 4:
//     console.log("Today is Thursday");
//     break;

//   case 5:
//     console.log("Today is Friday");
//     break;

//   case 6:
//     console.log("Today is Saturday");
//     break;
// default:
//     console.log("Invalid value");
// }