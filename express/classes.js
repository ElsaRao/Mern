class User{

    constructor (name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class Admin extends User{
    constructor(name, age, address){
        super(name, age, address)
    }
    userDetail(){
        console.log(`The user is ${this.name}`)
    }
    deleteUser(){
        let userIndex = Math.floor(Math.random()*10);
        console.log(userIndex);
        while (userIndex >= User.length) {
            userIndex = Math.floor(Math.random()*10);
        }
        // delete random user
        delete User[userIndex];
        // delete last user
        delete User[User.length-1];
        console.log(userIndex);
        console.log( "Admins can delete user");

    }
}

let user1 = new Admin("User1", 27, "Karachi")
let user2 = new Admin("User2", 25, "Lahore")
let user3 = new Admin("User3", 25, "Lahore")
let user4 = new Admin("User4", 28, "Islamabad")

// user1.deleteUser()
// user2.deleteUser()
user1.deleteUser()