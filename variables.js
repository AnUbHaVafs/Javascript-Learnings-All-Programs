// var first_name = "Anubhav";  //snake_case writing
// var firstName = "Anubhav";  //camel_case writing

// var firstName = "Anubhav";
// var firstName = "Ankit";
// console.log(firstName);


// let firstName = "Anubhav";
// let firstName = "Ankit";  //error
// console.log(firstName);


// let firstName = "Anubhav";
// firstName = "Ankit";
// console.log(firstName);

// let firstName = "Anubhav";
// console.log(firstName[3]);    ---> b

// let firstName = "Anubhav";
// console.log(firstName.length); ---> yahan length space count bhi include krti hai



///
// trim()
// toUpperCase()
// toLowerCase()
// slice()



// using trim method to remove the spaces from the string

// let firstName = "    Anubhav    ";

// console.log(firstName.length);
// firstName = firstName.trim(); // this doesnot modifies the dtring instead it returns a new string with no extra spaces
// console.log(firstName);
// console.log(firstName.length);

// let firstName = "Anubhav";
// // firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);


// let firstName = "Anubhav";
// // let newString = firstName.slice(0, 4); //Anub
// let newString = firstName.slice(1);  //nubhav
// console.log(newString);

// let age = 20;
// let firstName = "Anubhav";
// console.log(typeof age); // number
// console.log(typeof "Anubhav"); //string
// console.log(typeof firstName); //string

// ---------> string into number
//// add + sign perfix to string
// let myString = +"Hello";

// console.log(typeof myString); //number



// ---------> number to string :
//// add blank string to a number

// let myno = 10;
// myno = 10 + "";
// console.log(typeof myno);  // string

////or we can use methods : String(age),Number(myString)


// --------->concatenation

// let string1 = "22";
// let string2 = "10";
// let fullName = +string1 + +string2;
// console.log(fullName);  //32


// -------------->template string

// let Name = "Anubhav";
// let age = 20;
// // let aboutMe = "my name is " + Name + " and my age is " + age;
// let aboutMe = `my name is ${Name} and my age is ${age}`;
// console.log(aboutMe);

//undefined,null,big int,big error---->console.log(typeof null) --->object instead of null

//prompt se app koi message dikha bhi skte hain and input bhi le skte hain and prompt hamesha
// joh input leta hai hai voh as a string leta hai.

// let input = prompt("Enter your marks");
// console.log(input, typeof input); // 75 string

// let input = +prompt("Enter your marks");
// console.log(input, typeof input);  75 number

// let fruits = ["apple", "mango", "grapes"];
// let obj = {};

// console.log(typeof fruits);
// console.log(typeof obj);   // object object

// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));  // true false

// Array.isArray() ----> is used to find whether the param is an array or not


// fruits.push("cucumber");
// fruits.pop(); ----> yeh remove bhi krega element and saath mein return bhi krega woh element joh app fir use bhi kr skte ho
// fruits.unshift(); ---->yeh starting mein add krega----> yeh remove bhi krega element and saath mein return bhi krega woh element joh app fir use bhi kr skte ho
// fruits.shift(); ----> yeh starting se remove krega ----> yeh remove bhi krega element and saath mein return bhi krega woh element joh app fir use bhi kr skte ho

// push and pop are faster than unshift and shift


// One major difference between and primitive and reference data types

// let num1 = 8;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log(num1);
// console.log(num2);


// let arr1 = ["item1", "item2"];
// let arr2 = arr1;
// console.log("arr1", arr1);
// console.log("arr2", arr2);
// arr1.push("item3");
// console.log("arr1", arr1);
// console.log("arr2", arr2);

// output
// arr1 (3) ['item1', 'item2', 'item3']
// arr2 (3) ['item1', 'item2', 'item3']------------> why?

// because arr1 and arr2 doh pointers honge joh same array ko point kr rhe honge


/// how to clone an array ? --------> make a separate array in which changes do not reflect with the chages in the prev array

// let arr1 = ["item1", "item2"];
// let arr2 = arr1.slice(0);
// console.log(arr2);
// arr1.push("item3");
// console.log(arr2);
// console.log(arr1);


// --->2nd way to clone the array

// let arr1 = ["item1", "item2"];
// let arr2 = [].concat(arr1);
// console.log(arr2);

// -----> 3rd way --- spread operator

// let arr1 = ["item1", "item2"];
// let arr2 = [...arr1];
// console.log(arr2);
// jb bhi koi reference type use kro toh const use kro


// ------------> for of loop in array

// let fruits = ["fruit1", "fruit2", "fruit3"];
// let fruits2 = [];
// for (let fruit of fruits) {
//     // console.log(fruit);
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);


// -------------> for in loop in array for indexes

// let fruits = ["fruit1", "fruit2", "fruit3"];
// for (let fruit in fruits) {
//     console.log(fruit);
// }

// array destructuring

// const arr1 = ["value1", "value2", "value3", "value4"];
// // let [myvar1, myvar2] = arr1;   ---value1,value2
// // let [myvar1, , myvar2] = arr1;    // value1 ,value3
// let [myvar1, myvar2, ...mynewArray] = arr1;

// console.log(myvar1);
// console.log(myvar2);
// console.log(mynewArray);   // value3 , value4

// --------> objects reference type

// const person = {
//     name: "Anubhav",
//     age: 20,
//     hobbies: ["dance", "reading", "exploring"]
// }
// console.log(person.name);
// console.log(person["name"]);   //both above and this are equal kunki objects keys by default string mein hoti hai although hm log double braces ka use nmhi krte hain but andhar se voh string hi hoti hai
// const key = "email";

// person["key"] = "anu@gmail.com";
// person[key] = "anu@gmail.com";
// console.log(person);


// for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
// }

// Object.keys()---->ek array return krega of keys in object

// for (let key of Object.keys(person)) {
//     console.log(person[key]);
// }

// agar kisi object mein yah array of combined objects miwn same keys hain toh joh baad mein mtln last same key implement hogi baaki nahi


// let array1 = [..."3476374"];
// console.log(array1);

// let obj = { ...["item1", "item2", "item3"] }
// let obj1 = { ..."192" }
// console.log(obj1);
// console.log(obj);


// const person = {
//     name: "Anubhav",
//     age: 20,
//     hobbies: ["dance", "reading", "exploring"]
// }


// // const { name, age } = person;
// // console.log(name, age);

// const { name: var1, age: var2 } = person;

// console.log(var1);
// console.log(var2);

// dry : DON'T REPEAT YOURSELF ----> CODE SHOULD NOT BE DRY
//  --------------->  function declarations vs function expressions


//////-----function declaration

// function add2numbers(num1, num2) {
//     return num1 + num2;
// }
/////////////--------------function expression

// let add2numbers = function (num1, num2) {
//     return num1 + num2;
// }
///////////--------------arrow function

// let add2numbers = (num1, num2) => {
//     return num1 + num2;
// }
// let ans = add2numbers(2, 2);
// console.log(ans);



// /-------------------->arrow functions
// if there is only 1 parameter then you remove its paranthesis

// const isEven = num1 => num1 % 2 === 0;
// console.log(isEven(2));

//////////---->hoisting

// agar app kisi function ko uske declaration se phle call krte hoon toh voh run krega ki nmhi yeh ispr
// depned krta hai ki agar voh function declaration hua toh run krega , else functions expression yah arrow function hua toh
// run nbi krega & error dedega !

//yehi kaam agar aap variable k saath kroge toh yehi hoga, aage iske baare mien baat krenege

// function func1(){}
// let func1 = function(){}
// let func1 = ()=>{

// }

// ----------------> lexical scope/lexical environment=parent scope/parent env.
// function myapp() {
//     const myvar = "value1";
//     function myfunc() {
//         const myvar = "value2";
//         console.log("inside myfunc", myvar);
//     }
//     console.log(myvar);
//     console.log(myfunc());
// }
// myapp();


// function myapp() {
//     const myvar = "value1";
//     function myfunc() {

//         console.log("inside myfunc", myvar);
//     }
//     console.log(myvar);
//     console.log(myfunc());
// }
// myapp();


// const myvar = "value1";
// function myapp() {

//     function myfunc() {

//         console.log("inside myfunc", myvar);
//     }
//     console.log(myvar);
//     console.log(myfunc());
// }
// myapp();

// bascially js sbse phle uss current scope mein voh variable ki value search kregi and then uske baad uske parent scope jahan voh function defined hai (lexical scope) fir uske andhar and uske baad so on...

// let and const are block scope  ----> matlab inka scope sirf ek block k andhar tk limited hai ,uss block k bahar usse let and const ki value app access nhi kr skte
// var is a function scope -------> var declared hota hai global block mein isliye aap iski value kahin bhi access kr skte hoo

// {
//     let firstName = "Anubhav";
// }
// console.log(firstName);  ---> error

// {
//     var firstName = "Anu";
// }
// console.log(firstName);


//default parameters ...
// rest parameters
// function myFunc(a, b, ...c) {   // spread operator is used for rest of the parameters
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(1, 2, 3, 4, 5, 6);


//----------> param destructuring

// let person = {
//     name: "Anubhav",
//     age: 20
// }
// // function printdetails(obj) {
// //     console.log(obj.name);
// //     console.log(obj.age);
// // }

// function printdetails({ name, age, city }) {
//     console.log(name);    // Anubhav
//     console.log(age);    // 20
//     console.log(city);  //undefined
// }

// printdetails(person);

// -------------------> callback function

// jb aap ek function ko as a input lete ho and then usko call krte ho toh use khte hian callback function --->baadd mein call hone vaala function is callback function

// function myFunc2(name) {
//     console.log(`My name is ${name}`);
// }

// function myFunc1(a) {
//     console.log("Hello I'm in myFunc1 !");
//     console.log(a);
//     a();
//     a("Anubhav");
// }

// myFunc1(myFunc2);



// function myFunc2(name) {
//     console.log(`My name is ${name}`);
// }

// function myFunc1(a) {
// SQL query
// let data = {}
// a();--------> pass that data object , this happens in real world applications
// }

// myFunc1(myFunc2);

// ---------------------> function returning function

// function myFunc1() {

//     return "hello";
// }
// const ans = myFunc1();
// console.log(ans);


// function myFunc1() {
//     function myFunc2() {
//         console.log("example");
//     }

//     return myFunc2;
// }
// const ans = myFunc1();
// console.log(ans);
// ans();


// ---------------------> Important array methods
 // forEach
 // map
 // filter
 // reduce

















































