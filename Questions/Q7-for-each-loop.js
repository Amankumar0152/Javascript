//squire for each

let nums = [2, 3, 4, 5, 6];

nums.forEach((num) =>{
    console.log(num*num);
});

// one more way to write

let squire = (num) =>{
    console.log(num*num);
}
nums.forEach(squire);