//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let split1="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(split1.split(','));

//12.change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let change="30 Days Of JavaScript";
console.log(change.replace(Javascript,Python));

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

let char="30 Days Of JavaScript";
console.log(char.charAt(15));

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let char1="30 Days Of JavaScript";
console.log(char1.charCodeAt(11));

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let position="30 Days Of JavaScript";
console.log(position.indexOf("30"));

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let position2="30 Days Of JavaScript.";
console.log(position2.lastIndexOf("JavaScript"));

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let position3="You cannot end a sentence with because because because is a conjunction.";
console.log(position3.indexOf("because"));

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let position4="You cannot end a sentence with because because because is a conjunction.";
console.log(position4.lastIndexOf("because"));

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let find="You cannot end a sentence with because because because is a conjunction."
console.log(find.search("because"));

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let space="    30 Days Of JavaScript  "
console.log(space);
console.log(space.trim(' '));

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let start="30 Days Of JavaScript."
console.log(start.startsWith("30"));

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let end="30 Days Of JavaScript."
console.log(end.endsWith("JavaScript."));

//23.Use match() method to find all the a’s in 30 Days Of JavaScript

let match="30 Days Of JavaScript";
console.log(match.match("a"));

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let merge="30 Days Of "
console.log(merge.concat("JavaScript"));

//25.Use repeat() method to print 30 Days Of JavaScript 2 times

let repeat="30 Days Of JavaScript."
console.log(repeat.repeat(2));