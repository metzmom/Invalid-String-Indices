let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);


let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length -17]);//J
console.log(phrase[2]);//v
console.log(phrase[phrase.length-1]);//!
console.log(phrase.length);//17

console.log("Strings are sequences of characters."[5]);

console.log("Do spaces count?".length);

myStr = 'Index'
myStr[2] === 'n';
myStr[4] === 'x';
myStr[6] === ' ';
myStr[0] === 'I';
console.log(myStr[2] === 'n');
console.log(myStr[4] === 'x');
console.log(myStr[6] === ' ');
console.log(myStr[0] === 'I');

console.log(typeof console);

let pet = 'cat'
console.log(pet + 's');
pet += 's';


//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
word.slice(4).toUpperCase()

//Experiment with other combinations (chains) of string methods.

