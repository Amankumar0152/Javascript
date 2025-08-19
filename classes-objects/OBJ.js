const employee = {
    calcTax(){
        console.log("Employee Tax");
    }
}

const karanArjun ={
    salary: 50000,
}
const karanArjun2 ={
    salary: 50000,
}

const karanArjun3 ={
    salary: 50000,
}

const karanArjun4 ={
    salary: 50000,
}


karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;