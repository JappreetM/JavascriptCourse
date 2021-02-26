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

