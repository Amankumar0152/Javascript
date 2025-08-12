let n = prompt("Enter a Number");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1]= i;
}

console.log(arr);

// sum 
let result = arr.reduce((res, curr)=>{
    return res + curr;
})
console.log("Sum = ",result);

// factorial
let fact = arr.reduce((res, curr)=>{
    return res * curr;
})
console.log("factorial", fact);