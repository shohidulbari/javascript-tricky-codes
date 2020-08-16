"use strict"

function bike(){
    console.log(this);
    console.log(this.name);
}

let user = {name : "ritoo"};
user.bike = bike;

user.bike();