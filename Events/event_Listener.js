let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) =>{
    console.log("tbn1 was clicked by handler 1");
})

btn1.addEventListener("click", () =>{
    console.log("btn1 click by handler 2")
})

btn1.addEventListener("click", () =>{
    console.log("handler 3");
})

btn1.addEventListener("click", () =>{
    console.log("Handler 4");
})

btn1.removeEventListener("click", () =>{
    console.log("Event 3 handler removed");
})