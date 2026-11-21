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