//reduce method in JS = 1+2=3, 3+3=6, 4+6=10

let num = [1, 2, 3, 4 ];

const result = num.reduce((res, curr)=>{
    return res + curr;
});

console.log(result);

// find biggest number from array

let arr = [23, 34, 546, 456,867,345,453];

const output = arr.reduce((prev, curr)=>{
    return prev > curr? prev : curr;
})

console.log("Biggest Number is: ",output);