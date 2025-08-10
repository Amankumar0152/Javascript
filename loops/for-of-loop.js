// This file contains a for-of loop example in JavaScript.
// It iterates over a string and logs each character to the console.
// iterator -> characters
let str = "SpringBoot";

let size = 0;

for (let i of str){
    console.log("i = ", i);
    size++;
}

console.log("String size: ",size);