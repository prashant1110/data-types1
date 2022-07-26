//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let stat="Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(stat.length);

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let stat2="You cannot end a sentence with because because because is a conjunction."
console.log(stat2.match("because"));

//3.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary=5000*12;
let bonus=10000;
let course=15000;
let annual=salary+bonus+course;
console.log("Annual income is :" + annual );
