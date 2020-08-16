function hello(){
    console.log("Hello... ", this.name);
}

let user = {
    name: "karim"
}

let admin = {
    name : "Rahim"
}

user.f = hello;
admin.f = hello;

user.f();