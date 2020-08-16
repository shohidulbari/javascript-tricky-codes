let arrowFunc = () => {
    console.log(this);
}

let normalFunc = function(){
    console.log(this);
}

arrowFunc();
normalFunc();