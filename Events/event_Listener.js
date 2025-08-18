let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>{
    console.log("tbn1 was clicked by handler 1");
})

btn1.addEventListener("click", () =>{
    console.log("btn1 click by handler 2")
})