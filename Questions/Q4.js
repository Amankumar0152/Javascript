let items = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of items){
//     console.log(`val of at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i]-offer;
//     console.log(`offer applied on = ${items[i]}`);
//     i++;
// }


for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items [i] -= offer;
}

console.log(items)