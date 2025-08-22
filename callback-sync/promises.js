const getPromise = () =>{
    return new Promise ((resolve, reject) =>{
    console.log("This is Promose");
    resolve("success");
    reject("errors");
})
}

let promise = getPromise();
promise.then(() =>{
    console.log("Promise fullfiled", res);
})

promise.catch(()=>{
    console.log("Rejected", err);
})

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success"); 
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }