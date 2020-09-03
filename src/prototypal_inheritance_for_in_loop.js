let animal = {
    eats : true
};

let rabbit = {
    jumps : true,
    __proto__ : animal
}

console.log(Object.keys(rabbit)); //Only returns own keys.

//Returns both own and inherited keys
for(let key in rabbit){
    console.log(key)
}

//To check a property either own or inherited
for(let key in rabbit){
    let check = rabbit.hasOwnProperty(key);

    if(check){
        console.log("Own Property: ", key);
    }else{
        console.log("Inherited Property: ", key);
    }
}
