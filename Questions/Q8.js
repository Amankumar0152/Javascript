let marks = [97, 32, 99, 87, 90, 87, 94];

let toppers = marks.filter((value)=>{
    return value > 90;
});

console.log(toppers)