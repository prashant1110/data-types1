//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge="\' 30 Days Of JavaScript \'."
console.log(challenge);

//2.Print the string on the browser console using console.log()

let string="Prashant";
console.log(string);

//3.Print the length of the string on the browser console using console.log()

let firstName="Prashant";
console.log(firstName.length);

//4.Change all the string characters to capital letters using toUpperCase() method

let upper="hello i am a coder";
console.log(upper.toUpperCase());

//5.Change all the string characters to lowercase letters using toLowerCase() method

let lower="MY NAME IS PRASHANT";
console.log(lower.toLowerCase());

//6.Cut (slice) out the first word of the string using substr() or substring() method

let slice="slicing is very easy.";
console.log(slice.substr(0,6));

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

let slice1="30 Days of Javascript.";
console.log(slice1.substring(3,25));

//8.Check if the string contains a word Script using includes() method

let contain="javascript";
console.log(contain.includes('script'));

//9.Split the string into an array using split() method

let split_="hello how are u?";
console.log(split_.split());

//10.Split the string 30 Days Of JavaScript at the space using split() method

let split2="30 days of javascript";
console.log(split2.split(' '));