class person{
    eat(){
        console.log("Peoples eating");
    }
    sleep(){
        console.log("Sleeping");
    }
    work(){
        console.log("Eat 5 Star Do nothing");
    }
}

class Engineer extends person{
    work(){
        console.log("I need coffee After 5PM");
    }
}

class Doctor extends person{
    work(){
        console.log("Patients");
    }
}

let objEng = new Engineer();