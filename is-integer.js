function isInteger(number){
    let floor = Math.floor(number);
    let ceil = Math.ceil(number);

    console.log("floor... ", floor);
    console.log("ceil...", ceil);

    if(floor === ceil){
        return true;
    }else{
        return false;
    }
}

console.log(isInteger(15));
console.log(isInteger(15.23));