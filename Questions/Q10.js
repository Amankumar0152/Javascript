let data = "secret Data";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data: ", data);
    }
}

let student1 = new User("Aman", "Amanghostvilla@gmail.com");
let student2 = new User("Shruti", "Shruticutevaranasi@gmail.com");

let teacher1 = new User("Dr. Neeraj Dhankhar", "Dhankhar@gmail.com");