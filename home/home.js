// let h1 = document.querySelector("h1");
// console.log(h1.innertext);

// h1.innerText = h1.innerText + " Message from mars";



let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `New Text in this BOX ${idx}`;
    idx++;
}