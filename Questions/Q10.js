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

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "Data updated";
    }
}

let student1 = new User("Aman", "Amanghostvilla@gmail.com");
let student2 = new User("Shruti", "Shruticutevaranasi@gmail.com");

let teacher1 = new User("teacher", "teacher@gmail.com");

let admin = new Admin("admin", "admin-access@gmail.com");