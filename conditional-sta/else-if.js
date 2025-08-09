// Dark mode color based on country
// This code uses else-if statements to determine the color based on the country

let country = "australia."; // Choose a country here
let color;

if (country === "australia"){
    color = "Yellow-White";
}else if (country === "russia"){
    color = "pink";
}else if (country === "india"){
    color = "black";
}else if(country === "south africa"){
    color = "darkBlack";
}else{
    color = "Mixed color";
}
console.log(`You choose ${country} country and you will get ${color} color in dark mode.`);