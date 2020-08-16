let user = {
    name : "Shohidul Bari",
    age : 25,
    sayHI(){
        return user.name;
    }
}

console.log(user.sayHI()); //OK

let admin = user;

console.log(admin.sayHI()); //OK

user = null;

console.log(admin.sayHI()); //Whoops