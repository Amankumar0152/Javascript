// This file is part of a JavaScript learning project.
// It demonstrates the use of a for-in loop to iterate over an object's properties.

let student = {
    name : "Shruti",
    age : 23,
    cgpa : 8.2,
    isPass : true,
    subjects : ["Maths", "Physics", "Chemistry"],
};

for(let key in student){
    console.log("key=", key, "value", student[key]);
}