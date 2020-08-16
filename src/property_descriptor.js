let user = {
    name : "Shohidul Bari",
    role: "Admin"
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);