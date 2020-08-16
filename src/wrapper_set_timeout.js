let user = {
    firstname: "Rithu",
    sayHi(){
        console.log(`Hello, ${this.firstname}`);
    }
};

let func = user.sayHi.bind(user);

setTimeout(func, 1000);

user = {

};