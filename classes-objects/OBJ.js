const employee = {
    calcTax(){
        console.log("Employee Tax");
    }
}

const karanArjun ={
    salary: 50000,
}

karanArjun.__proto__ = employee;