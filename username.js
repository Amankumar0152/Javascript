// username.js
// This script prompts the user for their full name and generates a username

let fullname = prompt ("Enter Your full name: ");

let username = "@" + fullname + fullname.length;

console.log(username);