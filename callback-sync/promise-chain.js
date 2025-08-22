function asyncFunc(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Some data");
            resolve("success");
        }, 4000);
    })
}

function asyncFunc2(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Some data2");
            resolve("success");
        }, 4000);
    })
}


console.log("Fetching data1......")
let p1 = asyncFunc();
p1.then((res) =>{
    console.log(res);
    console.log("Fetching data2......");
    let p2 = asyncFunc();
    p2.then((res) =>{
        console.log(res);
    })
})
