class person{
    constructor(name){
        this.species = "Home Sapiens";
        this.name = name;
    }
    eat(){
        console.log("eating");
    }
}

class Engineer extends person{
    constructor(name){
        super(name); // to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("I need coffee After 5PM");
    }
}

let objeng = new Engineer("Aman");