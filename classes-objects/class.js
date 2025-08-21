class Car{
    start(){
        console.log("start car");
    }

    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let dezire = new Car();
dezire.setBrand("Dezire");
let bmw = new Car();
bmw.setBrand("BMW");