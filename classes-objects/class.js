class Car{
    constructor(brand){
        console.log("This is a Brand");
        this.brand = brand;
    }

    start(){
        console.log("Car Engine Started");
    }

    stop(){
        console.log("Engine Stopped");
    }
}

let dezire = new Car("dezire");
let bmw = new Car("bmw");