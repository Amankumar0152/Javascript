
//slice method example
let marvelHeroes = ["thor", "spiderman", "antman", "ironman"];
console.log(marvelHeroes.slice(1, 3));


//splice method example
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.splice(2, 2, 101, 102);
console.log(result); // [3, 4]