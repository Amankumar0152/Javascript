// Loop through an array using a for loop
// This code iterates over an array of superheroes and logs each hero to the console.

let heroes = ["thor", "ironman", "hulk", "spiderman", "captain"];

// for(let idx =0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }

//for of loop
// for of loop is a simpler way to iterate over iterable objects like arrays
// It automatically handles the index and provides each element directly.

for(let hero of heroes){
    console.log(hero);
}

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
for(let city of cities){
    console.log(city);
}