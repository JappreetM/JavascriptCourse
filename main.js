console.log('Hello World');
console.error('this is error written by user');
console.warn('this is user added warning');
// var, let, const
// don't use var just use let and const in javascript
const age =30;
console.log(age);
let age2=20;
age2=40;
console.log(age2);

// Primitive datatype: String, Numbers, Boolean, null, undefined, Symbol

const sname ='ABC';
const age3 = 33;
const rate= 20.78;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log("Datatype of sname:  " +typeof sname);
console.log("Datatype of age3=30:  " +typeof age3);
console.log("Datatype of arte=20.78:  " +typeof rate);
console.log("Datatype of iscool=true:  " +typeof iscool);
console.log("Datatype of x=null:  " +typeof x);
console.log("Datatype of y=undefined:  " +typeof y);
console.log("Datatype of let z:  " +typeof z);


// Strings and concatenation

console.log('My name is ' +sname + 'and age is ' +age);

// Template string use back ticks
console.log(`My name is ${sname} and age is ${age2}`);

const hello = `My name is ${sname} and age is ${age3}`;
console.log(hello);

// String properties and methods

const s='keywords, strings, properties, arrays';
console.log(s.length);
console.log(s.substring(0,8));
console.log(s.split(', '));

// Arrays - variables taht hold multiple values

const number = new Array(1,2,3,4,5);
console.log(number);

const fruits = ['apples', 'oranges', 'grapes'];
console.log(fruits);

console.log(fruits[1]);

fruits[3] = 'pears'; // add pear to end of array

console.log(fruits);

fruits.push('mangoes'); //push value to end
console.log(fruits);
fruits.unshift('strawberries'); // add value at beginning
console.log(fruits);
fruits.pop();

console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

// objects

const person = { fname:'John', lname:'doe', age: 30, hobbies:['music','movies'], address: {street:'50 main street', city: 'Boston', stat: 'MA'}};
console.log(person.hobbies[1]);
console.log(person.address.city);

// add properties

person.email = 'john@gmail.com';
console.log(person);

//Arrays of objects

const todos =[
    {id:1, text:'apple', available:true}, {id:2, text:'orange', available:false}, {id:3, text:'grapes', available:true} 
];
console.log(todos);

console.log(todos[1].available);


// convert this array object to json

const todojson = JSON.stringify(todos);
console.log(todojson);












