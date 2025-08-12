// This filter function print all even Numbers, if u want print all odd numbers just update in 6 line(check 6th line comment)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = num.filter((value) =>{
    return value % 2 != 0; // return value % 2 != 0
});

console.log(evenArr);