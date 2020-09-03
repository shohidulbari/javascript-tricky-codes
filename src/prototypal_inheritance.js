//references can't go in circles
//the value of __proto__ can be either an object or null. 
//there can be only one [[prototype]]

let animal = {
    eats : true,
    walk() {
        console.log("Animal Walks");
    }
};

let rabbit = {
    jumps : true,
    __proto__: animal
};

let longEar = {
    earLenght : 10,
    __proto__ : rabbit
}

rabbit.walk();
longEar.walk();
console.log(longEar.jumps);