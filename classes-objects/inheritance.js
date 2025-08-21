class person{
    constructor(){
        console.log("Enter parent Constructor");
        this.species = "Home Sapiens";
    }
    eat(){
        console.log("eating");
    }
}

class Engineer extends person{
    constructor(branch){
        console.log("Enter child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work(){
        console.log("I need coffee After 5PM");
    }
}

let engobj = new Engineer("Software Eng");