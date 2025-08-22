// let promise = new Promise ((resolve, reject) =>{
//     console.log("im a Promise");
//     reject("some error occured")
// })

function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success"); 
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })
}