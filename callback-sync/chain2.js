function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 4000);
    })
}


// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res) =>{
//         console.log(res);
//     })
// })


// promise Chain
getData(1)
    .then((res) =>{
        return getData(2);
    })
    .then((res) =>{
        return getData(3);
    })
    .then((res) =>{
        console.log("Success");
    })