class Car{
    constructor(brand, mileage){
        console.log("This is a Brand");
        this.brand = brand;
        this.mileage = mileage;
    }

    start(){
        console.log("Car Engine Started");
    }

    stop(){
        console.log("Engine Stopped");
    }
}

let dezire = new Car("dezire", 10); // constructor
console.log(dezire);
let bmw = new Car("bmw", 12); // constructor
console.log(bmw);