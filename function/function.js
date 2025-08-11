// Function in javascript

function myFunction(msg){ // parameter
    console.log(msg);
}
myFunction("What A busy day"); // message are called argument

//add numbers passing value
function add(a, b){
    console.log("A + B = ",a+b);
}
add(10, 10);

// return function
function sum(x, y){
    // x and y are local veriables
    s = x+y;
    return s;
}

let value = sum(102, 103); // sum get return some value which will be store in value and printed next line
console.log("X + Y = ", value);