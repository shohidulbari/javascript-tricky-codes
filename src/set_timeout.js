function sayHi(name){
    console.log("Hello, Welcome... " + name);
}

let timerid = setTimeout(sayHi, 2000, "Shohidul Bari");
console.log(timerid);