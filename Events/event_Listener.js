let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) =>{
    console.log("tbn1 was clicked by handler 1");
})

btn1.addEventListener("click", () =>{
    console.log("btn1 click by handler 2")
})

const handler3 = () =>{
    console.log("handler 3 remove function");
}

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () =>{
    console.log("Handler 4");
})

btn1.removeEventListener("click", handler3);