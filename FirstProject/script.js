console.log("Hello, World!");
let name = "John Doe";
console.log("My name is " + name);

const student = {
    name: "Jane Smith",
    age: 20,
    CGPA: "8.2",
    isPass: true
};

console.log(student.age);

student.age = student.age + 2
console.log(student.age);

student.name = "Kshitij Mohan";
console.log(student.name);

// This is a product of an e-commerce website
const Product = {
    title: "Parker Jotter Standard CT Ball Pen (Black)",
    Star: 4.5,
    ratings: 7002,
    Deal: "Deal of the day",
    MRP: 285,
    DealPrice: 270,
    offer: "(5% off)",
};

console.log(Product);

// This is a profile of a user on social media platform
const profile = {
    userName: "@shradhakhapra",
    isFollow: true,
    posts: 195,
    followers: "569K",
    following: 4,
    fullName: "Shradha Khapra",
    Description: "Apna College | Ex-Microsoft,DRDO | To educate someone is the highest privilege"
}

console.log(profile);

// Operators and Conditions Statements

// Arithmetic Operators
let a = 20;
let b = 10;

console.log("Arithmetic Operators");
console.log("a = " + a + ", b = " + b); // Displaying the values of a and b
console.log("a + b = " + (a + b)); // Addition
console.log("a - b = " + (a - b)); // Subtraction
console.log("a * b = " + (a * b)); // Multiplication
console.log("a / b = " + (a / b)); // Division
console.log("a % b = " + (a % b)); // Modulus
console.log("a ** b = " + (a ** b)); // Exponentiation
console.log("a++ = " + (a++)); // Increment
console.log("a-- = " + (a--)); // Decrement
console.log("b++ = " + (b++)); // Increment
console.log("b-- = " + (b--)); // Decrement
console.log("++a = " + (++a)); // Pre-increment
console.log("--a = " + (--a)); // Pre-decrement
console.log("++b = " + (++b)); // Pre-increment
console.log("--b = " + (--b)); // Pre-decrement

// Assignment Operators
let x = 5;
let y = 10;

console.log("Assignment Operators");
console.log("x = " + x + ", y = " + y); // Displaying the values of x and y
console.log("x = ", x); // Assignment
console.log("x += y = " + (x += y)); // Addition Assignment
console.log("x -= y = " + (x -= y)); // Subtraction Assignment
console.log("x *= y = " + (x *= y)); // Multiplication Assignment
console.log("x /= y = " + (x /= y)); // Division Assignment
console.log("x %= y = " + (x %= y)); // Modulus Assignment
console.log("x **= y = " + (x **= y)); // Exponentiation Assignment

// Arithmetic Assignment Operators
console.log("Arithmetic Assignment Operators");
x += 4;
console.log("x += 4 = " + x); // Addition Assignment
x -= 2;
console.log("x -= 2 = " + x); // Subtraction Assignment
x *= 3;
console.log("x *= 3 = " + x); // Multiplication Assignment
x /= 2;
console.log("x /= 2 = " + x); // Division Assignment
x %= 5;
console.log("x %= 5 = " + x); // Modulus Assignment
x **= 2;
console.log("x **= 2 = " + x); // Exponentiation Assignment 

// Comparison Operators
let m = 15;
let n = 20;

console.log("Comparison Operators");
console.log("m = " + m + ", n = " + n);
console.log("m == n = " + (m == n)); // Equal to
console.log("m != n = " + (m != n)); // Not equal to
console.log("m < n = " + (m < n)); // Less than
console.log("m > n = " + (m > n)); // Greater than
console.log("m <= n = " + (m <= n)); // Less than or equal to
console.log("m >= n = " + (m >= n)); // Greater than or equal to
n = "15"; // Changing the value of n to a string
console.log("m === n = " + (m === n)); // Strict equal to
console.log("m !== n = " + (m !== n)); // Strict not equal to

// Logical Operators
let p = true;
let q = false;

console.log("Logical Operators");
console.log("p = " + p + ", q = " + q); // Displaying the values of p and q
console.log("p && q = " + (p && q)); // Logical (&&) AND
console.log("p || q = " + (p || q)); // Logical (||) OR
console.log("!p = " + (!p)); // Logical (!) NOT

let cond1 = a > b; // true
let cond2 = a < b; // false
console.log("cond1 = " + cond1 + ", cond2 = " + cond2); // Displaying the values of cond1 and cond2
console.log("cond1 && cond2 = " + (cond1 && cond2)); // Logical (&&) AND
console.log("cond1 || cond2 = " + (cond1 || cond2)); // Logical (||) OR
console.log("!cond1 = " + (!cond1)); // Logical (!) NOT 

// Conditional Statements

// IF Statement 

let age = 14; // You can change the value of age to test different scenarios
if (age >= 18) {
    console.log("You are eligible to vote."); // This line will be executed if the condition is true
} else { // This line will be executed if the condition is false
    console.log("You are not eligible to vote."); // This line will be executed if the condition is false
}

let mode = "dark"; // You can change the value of mode to test different scenarios
let color;
if (mode === "dark") {
    color = "black"; // This line will be executed if the condition is true
}

if (mode === "light") {
    color = "white"; // This line will be executed if the condition is true
}

console.log("The color is " + color); // This line will be executed regardless of the condition

// IF-ELSE Statement

let mode2 = "light"; // You can change the value of mode2 to test different scenarios
let color2;
if (mode2 === "dark") {
    color2 = "black"; // This line will be executed if the condition is true
} else { // This line will be executed if the condition is false
    color2 = "white"; // This line will be executed if the condition is false
}
console.log("The color is " + color2); // This line will be executed regardless of the condition

let age2 = 20; // You can change the value of age2 to test different scenarios
if (age2 < 13) {
    console.log("You are a child."); // This line will be executed if the condition is true
} else {
    console.log("You are not a child."); // This line will be executed if the condition is false
}

// Odd-Even Number Check

let number1 = 7;
if (number1 % 2 === 0) {
    console.log(number1 + " The number is even."); // This line will be executed if the condition is true
} else {
    console.log(number1 + " The number is odd."); // This line will be executed if the condition is false
}

// ELSE-IF Statement

let marks = 85;
if (marks >= 90) {
    console.log(marks + " Grade: A"); // This line will be executed if the condition is true
} else if (marks >= 80) {
    console.log(marks + " Grade: B"); // This line will be executed if the condition is true
} else {
    console.log(marks + " Grade: C"); // This line will be executed if the condition is false
}

let mode3 = "dark"; // You can change the value of mode3 to test different scenarios
let color3;
if (mode3 === "dark") {
    color3 = "black"; // This line will be executed if the condition is true
} else if (mode3 === "light") {
    color3 = "white"; // This line will be executed if the condition is false
} else {
    color3 = "gray"; // This line will be executed if the condition is false
}

console.log("The color is " + color3); // This line will be executed regardless of the condition

// Ternary Operator
//condition ? expressionIfTrue : expressionIfFalse

let age3 = 18;
let result = (age3 >= 18) ? "You are adult." : "You are not adult.";
console.log(result); // This line will be executed regardless of the condition

let number2 = 10;
let result2 = (number2 % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result2); // This line will be executed regardless of the condition

// Switch Statement

let day = 4; // You can change the value of day to test different scenarios 
switch (day) {
    case 1:
        console.log("Monday"); // This line will be executed if day is 1
        break;
    case 2:
        console.log("Tuesday"); // This line will be executed if day is 2
        break;
    case 3:
        console.log("Wednesday"); // This line will be executed if day is 3
        break;
    default:
        console.log("Invalid day"); // This line will be executed if day doesn't match any case
}

// MDN Web Docs is a great resource for learning JavaScript and web development in general. You can find tutorials, references, and guides on various topics related to web development. Here are some useful links:
// JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
// JavaScript Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// HTML Guide: https://developer.mozilla.org/en-US/docs/Web/HTML
// CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
// Web Development Tutorials: https://developer.mozilla.org/en-US/docs/Learn

// Practice Questions 
/*
let num = prompt("Enter a number: "); // Prompting the user to enter a number
if (num % 5 === 0){
    console.log(num + " is a multiple of 5");
} else {
    console.log(num + " is not a multiple of 5");
}
} */
/*
let num2 = prompt("Enter a grade: "); // Prompting the user to enter a grade
if (num2 >= 80 && num2 <= 100) {
    console.log("Grade A");
} else if (num2 >= 70 && num2 <= 80) {
    console.log("Grade B");
} else if (num2 >= 60 && num2 <= 69) {
    console.log("Grade C");
} else if (num2 >= 50 && num2 <= 59) {
    console.log("Grade D");
} else {num2 <= 50 && num2 >= 0
    console.log("Grade F");
}
*/

// Loops and Strings

// for loop

console.log("Loops and Strings");
console.log("For Loop");
for (let i = 1; i <= 10; i++) {
    console.log("TIT Bhopal"); // This line will be executed 10 times
}

console.log("Loop ended"); // This line will be executed after the loop ends

// Calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum of 1 to 5 is: " + sum); // This line will be executed after the loop ends
console.log("loop ended"); // This line will be executed after the loop ends

for (let i = 1; i <= 5; i++) {
    console.log("i = " + i); // This line will be executed 5 times
}

console.log("Loop ended");

// while loop

console.log("While Loop");
/*
while ( condition ) {
    // code block to be executed
} 
*/

let j = 1;
while (j <= 5) {
    console.log("j = " + j); // This line will be executed 5 times
    j++;
}
console.log("While loop ended");

// do-while loop

console.log("Do-While Loop");
let k = 15;
do {
    console.log("Mohan");
    k++;
} while (k <= 5);
console.log("Do-While loop ended");

// for...of loop

console.log("For...of Loop");
/* 
for(let val of strVar) {
    // do some work
} 
*/

let str = "Hello";
for (let char of str) {
    console.log(char);
}

let str2 = "Technocrats";
let size = 0;
for (let i of str2) {
    console.log("i=" + i);
    size++;
}
console.log("Size of str2 is: " + size);

// for...in loop

console.log("For...in Loop");

let student1 = {
    name: "Alice",
    age: 20,
    grade: "A",
    isPass: true,
};

for (let key in student1) {
    console.log("Key: " + key + ", Value: " + student1[key]);
}

// Print all even numbers from 0 to 100.

console.log("Print all even numbers from 0 to 100.");
for (let i = 0; i<=100; i += 2){
    console.log("i = " + i);
}

console.log("Print all odd numbers from 0 to 100.");
for (let num4 = 0; num4 <= 100; num4++){
    if (num4 % 2 !== 0){
        console.log("num4 = " + num4);
    }
}

// Strings 

// string is a sequence of characters used to represent text 

let str3 = "king";
let str4 = 'yadav';

console.log("str3.length " +  str3.length)

console.log(str3[2])

// Template Literals

console.log("Template Literals")
let specialString = `this is a template literal ${1 + 2 + 3}` ;
console.log(specialString)
console.log(typeof specialString);

let obj = {
    item : "pen",
    price : 10,
};

console.log("the cost of", obj.item, "is", obj.price, "rupees");

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log("let output = `the cost of ${obj.item} is ${obj.price} rupees`;");
console.log(output);

//String Interpolation : 
// To create strings by doing substitutin of placeholders
console.log("String Interpolation");
console.log("To create strings by doing substitutin of placeholders");
console.log("`string text ${expression}string text`");

console.log("Kshitij \nMohan \tYadav");

//String Methods
let str5 = "apna";
let str6 = "college";

let res = str5.concat(str6);
console.log(res);
let res2 = str6.concat(str5);
console.log(res2);

console.log(res2.replace("a" , "A"));

// Practice Ques 
/*
let fullName2 = prompt("Enter your full Name");
let userName2 = ("@" + fullName2 + fullName2.length);

console.log(userName2);
*/

//Arrays
console.log("Arrays");
console.log("Collections of items");

let heroes = ["ironman", "hulk" , "thor"];
console.log(heroes);
console.log(heroes.length);
